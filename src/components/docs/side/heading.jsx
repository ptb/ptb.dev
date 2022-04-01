/*
  eslint-disable
    react/prop-types
 */

import classNames from "./heading.css.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `Heading` React component.

  @param {object} props
  - Component inputs.

  @param {string} [props.children]
  - Initial content.

  @returns {React.ReactElement}
    React component.
 */

export function Heading ({ children, ... props }) {
  return (
    <h3
      className={classNames.heading}
      {...props}
    >
      {children}
    </h3>
  )
}
