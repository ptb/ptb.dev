/*
  eslint-disable
    react/prop-types
 */

import { canUseDom, get, isStr } from "@ptb/style"

import { Demo } from "../../../components/demo/demo.jsx"
import "../index.css.js"

/**
  @typedef {typeof import ("react")} React

  @typedef {{
    hasBaseUrl: boolean,
    hash: string,
    hashString: string | null,
    isPageContextRequest: boolean,
    origin: string | null,
    pathname: string,
    pathnameWithBaseUrl: string,
    search: Record<string, string>,
    searchString: string | null
  }} UrlParsed
 */

/**
  `DemoPage` component.

  @param {object} props
  - Component inputs.

  @param {UrlParsed} props.urlParsed
  - URL information.

  @returns {React.ReactElement}
    React component.
 */

export default function DemoPage ({ urlParsed }) {
  let children = get(
    urlParsed,
    "search.x",
    [
      `export default function () {`,
      `  return (`,
      `    <span`,
      `      className={css({`,
      `        `,
      `      })}`,
      `    >`,
      `      Buy Now!`,
      `    </span>`,
      `  )`,
      `}`
    ].join("\n")
  )

  if (canUseDom() && window.location.search) {
    const params = new URLSearchParams(window.location.search)
    const x = params.get("x")

    if (params.has("x") && isStr(x)) {
      try {
        children = x
      } catch (e) {
        console.error(e)
      }
    }
  }

  return <Demo>{children}</Demo>
}
