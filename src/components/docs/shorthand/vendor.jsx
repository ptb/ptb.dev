/*
  eslint-disable
    react/prop-types
 */

import { getPrefixes } from "@ptb/style"

import { Editor } from "../../editor/editor.jsx"
import classNames from "../docs.css.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `VendorPrefixes` React component.

  @returns {React.ReactElement}
    React component.
 */

export function VendorPrefixes () {
  return (
    <>
      {" "}
      <h2>
        Stored Variables Using{" "}
        <code className={classNames.code}>$</code> Prefix
      </h2>
      <h3>
        <code className={classNames.code}>$prefixes</code>
      </h3>
      <Editor
        lang="js"
        rows={2}
      >
        {JSON.stringify(getPrefixes(), null, 2)}
      </Editor>
    </>
  )
}
