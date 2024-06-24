import { test as _test } from "@playwright/experimental-ct-react"
import type { Expect } from "@playwright/test"
import type { CoverageReportOptions } from "monocart-coverage-reports"

declare const GlobalTeardownFn: () => Promise<void>

export const options: CoverageReportOptions
export const expect: Expect
export const test: typeof _test

export default GlobalTeardownFn
