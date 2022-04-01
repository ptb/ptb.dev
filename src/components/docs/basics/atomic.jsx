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
  `AtomicClasses` React component.

  @returns {React.ReactElement}
    React component.
 */

export function AtomicClasses () {
  return (
    <>
      <h2>Atomic Classes</h2>
      <p>
        Each property/value pair creates an atomic class name by
        default. You’ll notice that regardless of the order that the
        rules are listed, they always result in the same order in the
        stylesheet. That means that all of the{" "}
        <code className={classNames.code}>textAlign</code> properties
        will always be together, which makes it possible to audit the
        styles by just reading.{" "}
        <em>
          This is a live editor, try changing some of the values for{" "}
          <code className={classNames.code}>maxWidth</code> or{" "}
          <code className={classNames.code}>fontSize</code> here and
          see what the effect is immediately.
        </em>{" "}
        Switch to the HTML tab and notice that the class name for that
        property is recalculated based on the value, but the two
        letter prefix that is based on the property does not change.
      </p>
      <Iframe
        src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++backgroundColor%3A+%22%239c9%22%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++padding%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+%22200px%22%2C%0A++++++++margin%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+%2210px%22%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+%22bold%22%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+%2224px%22%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=2"
        style={{ "height": "80vh" }}
      />
    </>
  )
}
