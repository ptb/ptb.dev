import reactPlugin from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import macroPlugin from "vite-plugin-babel-macros"
import ssrPlugin from "vite-plugin-ssr/plugin"

export default defineConfig({
  "build": {
    "outDir": "www"
  },
  "plugins": [
    macroPlugin(),
    reactPlugin(),
    ssrPlugin()
  ]
})
