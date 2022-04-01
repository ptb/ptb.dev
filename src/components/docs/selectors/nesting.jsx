/*
  eslint-disable
    react/prop-types
 */

import { Iframe } from "../iframe.jsx"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `NestingSelector` React component.

  @returns {React.ReactElement}
    React component.
 */

export function NestingSelector () {
  return (
    <>
      <h2>Nesting Selector</h2>
      <Iframe src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%22main%2C%23root%22%3A+%7B%0A++++++++++%22%26%3Esection%2Cdiv+%26%22%3A+%7B%0A++++++++++++color%3A+%22%23eee%22%0A++++++++++%7D%0A++++++++%7D%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&amp;e=5%2C6&amp;s=1&amp;i=12-36#t=3" />
    </>
  )
}
