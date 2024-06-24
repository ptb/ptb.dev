/* eslint-disable import/no-extraneous-dependencies */
import { existsSync } from "node:fs"
import { dirname, join } from "node:path"

import { test as _test } from "@playwright/experimental-ct-react"
import { CoverageReport } from "monocart-coverage-reports"

const type = process.env["TYPE"] ?? ""

/** @type {import("monocart-coverage-reports").CoverageReportOptions} */
export const options = {
  ...(["spec", "unit"].includes(type) && {
    entryFilter: {
      "**/*.{spec,test,unit}.?(c|m)[jt]s?(x)": false,
      "**/node_modules/**": false,
      "**/src/**": true
    }
  }),
  inputDir: ["spec", "test", "unit"]
    .map((dir) => join(".results", dir, "raw"))
    .filter(existsSync),
  name: "",
  outputDir: join(".results", type),
  reports: ["console-details", "lcovonly", "raw"],
  sourceFilter: {
    "**/*.{spec,test,unit}.?(c|m)[jt]s?(x)": false,
    "**/node_modules/**": false,
    "**/src/**": true
  },
  ...(["spec", "test"].includes(type) && {
    sourcePath: (filePath, { distFile }) =>
      !filePath.includes("/") && distFile
        ? join(
            dirname(distFile).replace(
              /localhost-\d+\/(@id\/[^/]+)?/,
              ""
            ),
            filePath
          )
        : filePath
  })
}

export const test = _test.extend({
  autoTestFixture: [
    async ({ browserName, page }, use) => {
      const isChromium = browserName === "chromium"

      if (isChromium) {
        await Promise.all([
          page.coverage.startJSCoverage({
            resetOnNavigation: false
          }),
          page.coverage.startCSSCoverage({
            resetOnNavigation: false
          })
        ])
      }

      await use("autoTestFixture")

      if (isChromium) {
        await Promise.all([
          page.coverage.stopJSCoverage(),
          page.coverage.stopCSSCoverage()
        ]).then(
          async ([jsCoverage, cssCoverage]) =>
            await new CoverageReport(options).add([
              ...jsCoverage,
              ...cssCoverage
            ])
        )
      }
    },
    {
      auto: true,
      scope: "test"
    }
  ]
})

export const { expect } = test

/* eslint-disable-next-line import/no-default-export */
export default async () => {
  await new CoverageReport(options).generate()
}
