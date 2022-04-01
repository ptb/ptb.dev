/*
  eslint-disable
    react/prop-types
 */

import classNames from "./logo.css.js"

/**
  @typedef {typeof import ("react")} React
  */

/**
  `Logo` React component.

  @returns {React.ReactElement}
    React component.
  */

export function Logo () {
  return <h1 className={classNames.logo}>ptb/style</h1>
}
