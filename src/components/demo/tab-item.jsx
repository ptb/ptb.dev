/*
  eslint-disable
    react/prop-types
*/

import { get } from "@ptb/style"

import { getId } from "../tabs/get-id.js"
import classNames from "./tab-item.css.js"

/**
  @typedef {typeof import("react")} React
 */

/**
  Demo `<Tab>` React component content.

  @param {object} props
  - Component inputs.

  @param {string} props.children
  - Demo `<Tab>` React component content.

  @returns {React.ReactElement}
    React component.
 */

export function TabItem ({ children }) {
  return (
    <div
      className={[
        classNames.item,
        get(classNames, getId(children))
      ].join(" ")}
    >
      {children}
    </div>
  )
}
