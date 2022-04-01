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

  const documentHtml = escapeInject `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml"><head><meta charset="utf-8"/><title> </title><meta content="initial-scale=1,width=device-width" name="viewport"/></head><body><div id="root">${dangerouslySkipEscape(
    children
  )}</div></body></html>`

  return { documentHtml, "pageContext": {} }
}
