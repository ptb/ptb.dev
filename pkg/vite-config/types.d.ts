import type { UserConfig, UserConfigFnObject } from "vite"

declare const ViteConfig: UserConfig

export { defineConfig } from "vite"

export const config: UserConfig
export const getConfig: UserConfigFnObject

export default ViteConfig
