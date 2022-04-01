/*
  eslint-disable
    react/prop-types
 */

import { debounce } from "@ptb/style"
import { useEffect, useRef } from "react"

import { Prism } from "../../lib/prism.js"
import classNames from "./editor.css.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  Fetch external files and highlight them with Prism.

  @param {object} props
  - Component inputs.

  @param {string} [props.lang]
  - Programming language.

  @param {string} [props.src]
  - File URL to load for Prism `File Highlight` plugin.

  @param {Record<string, string>} [props.style]
  - Inline styles.

  @returns {React.ReactElement}
    React component.
 */

export function DisplayFile ({
  lang = "js",
  src,
  style = {},
  ... props
}) {
  const ref = useRef(null)

  const onScroll =
    /** @type {React.UIEventHandler<HTMLPreElement>} */ (
      debounce(function onScroll () {
        Prism.highlightElement(ref.current)

        // @ts-ignore
        Prism.plugins.lineNumbers.resize(ref.current)

        // @ts-ignore
        Prism.plugins.lineHighlight.highlightLines(ref.current)()
      })
    )

  // @ts-ignore
  useEffect(onScroll, [onScroll, props, ref])

  return (
    <pre
      className={[
        classNames.div,
        classNames.$editor,
        classNames.pre,
        `language-${lang}`
      ].join(" ")}
      data-src={src}
      style={{
        "display": "block",
        "userSelect": "auto",
        ... style
      }}
      onScroll={onScroll}
      {...props}
      ref={ref}
    />
  )
}
