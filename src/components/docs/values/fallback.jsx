/*
  eslint-disable
    react/prop-types
 */

import { Iframe } from "../iframe.jsx"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `FallbackArrayValues` React component.

  @returns {React.ReactElement}
    React component.
 */

export function FallbackArrayValues () {
  return (
    <>
      <h2>Fallback Array Values</h2>
      <p>Fallbacks use arrays.</p>
      <Iframe src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++bg%3A+%5B%0A++++++++++%22%239c9%22%2C%0A++++++++++%22rgba%28153%2C204%2C153%2C.8%29%22%2C%0A++++++++++%22lch%2877.463%25+31.76+141.167+%2F+80%25%29%22%0A++++++++%5D%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&amp;e=5-9&amp;s=33-37&amp;i=2-28#t=3" />
    </>
  )
}
