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
  `SmartIntegers` React component.

  @returns {React.ReactElement}
    React component.
 */

export function SmartIntegers () {
  return (
    <>
      <h2>Smart Integers</h2>
      <p>
        Converts integers to{" "}
        <code className={classNames.code}>px</code> values, except for
        those where it wouldn’t be correct. As examples,{" "}
        <code className={classNames.code}>lineHeight</code>,{" "}
        <code className={classNames.code}>order</code>, and{" "}
        <code className={classNames.code}>fontWeight</code>.
      </p>
      <Iframe src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++bg%3A+%22%239c9%22%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&amp;e=8%2C11%2C13%2C15&amp;s=5-7%2C9-11%2C21-23%2C41-43&amp;i=53-69%2C104-120%2C138-154%2C172-188#t=3" />
    </>
  )
}
