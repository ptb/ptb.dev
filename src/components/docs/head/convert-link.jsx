/*
  eslint-disable
    react/prop-types
 */

import { cx } from "@ptb/style"

import classNames from "./link.css.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `ConvertLink` React component.

  @returns {React.ReactElement}
    React component.
  */

export function ConvertLink () {
  return (
    <a
      className={cx(classNames.link, classNames.convert)}
      href="./convert/"
    >
      Convert
    </a>
  )
}
