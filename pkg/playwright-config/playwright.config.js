import { createRequire } from "node:module"
import { join } from "node:path"

import {
  defineConfig,
  devices
} from "@playwright/experimental-ct-react"
import { config as ctViteConfig } from "@ptb/vite-config"

const globalTeardown = createRequire(import.meta.url).resolve(
  "@ptb/test"
)

const isCI = Boolean(process.env["CI"])
const type = process.env["TYPE"] ?? ""

/** @type {import("@playwright/experimental-ct-react").PlaywrightTestConfig} */
export const config = {
  forbidOnly: isCI,
  fullyParallel: true,
  globalTeardown,
  outputDir: join(".results", type),
  projects: [{ name: "chromium", use: devices["Desktop Chrome"] }],
  reporter: isCI ? "github" : "list",
  retries: isCI ? 2 : 0,
  testDir: "src",
  testMatch: new RegExp(["\\.", type, "\\.[jt]sx?$"].join("")),
  timeout: 10 * 1000,
  use: {
    ...(["test"].includes(type) && {
      ctCacheDir: ".results",
      ctTemplateDir: ".ct",
      ctViteConfig
    }),
    headless: isCI,
    launchOptions: { slowMo: isCI ? 0 : 100 },
    trace: "on-first-retry"
  },
  ...(["spec"].includes(type) && {
    webServer: {
      command: "pnpm start",
      port: 3000,
      reuseExistingServer: !isCI,
      timeout: 10 * 1000
    }
  }),
  workers: isCI ? 1 : 3
}

export default defineConfig(config)
