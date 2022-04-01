/*
  eslint-disable
    react/prop-types
 */

import classNames from "../docs.css.js"
import { Iframe } from "../iframe.jsx"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `StoredVariables` React component.

  @returns {React.ReactElement}
    React component.
 */

export function StoredVariables () {
  return (
    <>
      <h2>
        Stored Variables Using{" "}
        <code className={classNames.code}>$</code> Prefix
      </h2>
      <Iframe src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%24colors%3A+%7B%0A++++++++++borders%3A+%7B%0A++++++++++++heavy%3A+%22%23030%22%0A++++++++++%7D%2C%0A++++++++++buttons%3A+%22%23363%22%2C%0A++++++++++text%3A+%7B%0A++++++++++++primary%3A+%22%23cfc%22%0A++++++++++%7D%0A++++++++%7D%2C%0A+++++++%24mainFont%3A+%5B%0A+++++++++%22Georgia%22%2C%0A+++++++++%22Times+New+Roman%22%2C%0A+++++++++%22serif%22%0A++++++++%5D%2C%0A++++++++%24width%3A+%222px%22%2C%0A++++++++bg%3A+%22%24colors.buttons%22%2C%0A++++++++color%3A+%22%24colors.text.primary%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%22%24width+solid+%24colors.borders.heavy%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22%24mainFont%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=2&amp;e=5-21%2C28%2C30&amp;s=14%2C34%2C38%2C42&amp;i=2-28#t=3" />
    </>
  )
}
