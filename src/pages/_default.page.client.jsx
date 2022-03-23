import { StrictMode } from "react"
import { hydrate } from "react-dom"
import { getPage } from "vite-plugin-ssr/client"

import { PageContextProvider } from "../context.jsx"

import "../styles.css"

/**
  @typedef {
    import ("vite-plugin-ssr/client").PageContextBuiltInClient
  } PageContextBuiltInClient

  @typedef {{ pageProps: {} }} PageProps
 */

/**
  The .page.client.js file defines the page’s browser-side code.

  @see {@link https://vite-plugin-ssr.com/.page.client.js}

  @returns {Promise<void>}
 */

async function render () {
  const context =
    /** @type {PageContextBuiltInClient & PageProps} */ (
      await getPage()
    )

  const { Page, pageProps } = context

  hydrate(
    <StrictMode>
      <PageContextProvider context={context}>
        <Page {...pageProps} />
      </PageContextProvider>
    </StrictMode>,
    document.getElementById("root")
  )
}

render()
