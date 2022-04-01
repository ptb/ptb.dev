import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr"

import { PageContextProvider } from "../contexts/context.jsx"

/**
  @see {@link https://vite-plugin-ssr.com/data-fetching}
 */

export const passToClient = ["pageProps", "urlParsed", "urlPathname"]

/**
  @typedef {
    import ("vite-plugin-ssr/client").PageContextBuiltInClient
  } PageContextBuiltInClient

    @typedef {{ pageProps: {} }} PageProps
 */

/**
  The render() hook defines how a page is rendered to HTML.

  @see {@link https://vite-plugin-ssr.com/render}

  @param {PageContextBuiltInClient & PageProps} context
  - @see {@link https://vite-plugin-ssr.com/pageContext}.

  @returns {object}
    Documentation is incomplete.
 */

export function render (context) {
  const { Page, pageProps, urlParsed } = context

  const children = renderToString(
    <StrictMode>
      <PageContextProvider context={context}>
        <Page
          urlParsed={urlParsed}
          {...pageProps}
        />
      </PageContextProvider>
    </StrictMode>
  )

  const documentHtml = escapeInject `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml"><head><meta charset="utf-8"/><title>@ptb/style</title><meta content="CSS compiler with a powerful, intuitive API that makes authoring CSS faster and easier." name="description"/><meta content="initial-scale=1,width=device-width" name="viewport"/><meta content="hsl(240,5%,15%)" media="(prefers-color-scheme:dark)" name="theme-color"/><meta content="hsl(240,5%,85%)" media="(prefers-color-scheme:light)" name="theme-color"/><link as="font" crossorigin href="/fonts/pt-serif-400.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/pt-serif-700.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/source-code-pro-400.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/source-code-pro-700.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/source-sans-pro-400.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/source-sans-pro-700.woff2" rel="preload" type="font/woff2"/></head><body><div id="root">${dangerouslySkipEscape(
    children
  )}</div></body></html>`

  return { documentHtml, "pageContext": {} }
}
