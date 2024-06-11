import { execSync } from "node:child_process"
import { join } from "node:path"

import { default as reactPlugin } from "@vitejs/plugin-react"
// import { default as vikePlugin } from "vike/plugin"
import { defineConfig } from "vite"
import { default as istanbulPlugin } from "vite-plugin-istanbul"

/** @type {import("vite").UserConfigFnObject} */
export const getConfig = ({ mode }) => ({
  build: {
    emptyOutDir: true,
    outDir: join(
      execSync("git rev-parse --show-toplevel").toString().trim(),
      "www"
    ),
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js"
      }
    },
    sourcemap: mode === "release" ? "hidden" : true
  },
  plugins: [
    istanbulPlugin({
      forceBuildInstrument: true,
      include: join(process.cwd(), "src")
    }),
    reactPlugin()
    // vikePlugin({ prerender: true })
  ],
  preview: {
    host: "0.0.0.0",
    port: 3000
  },
  resolve: {
    alias: {
      "@": join(process.cwd(), "src")
    }
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  }
})

export default defineConfig(({ command, mode }) =>
  getConfig({ command, mode })
)
