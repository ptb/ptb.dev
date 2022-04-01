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
  `DeepMergeObjects` React component.

  @returns {React.ReactElement}
    React component.
 */

export function DeepMergeObjects () {
  return (
    <>
      <h2>Deep Merge Objects</h2>
      <p>
        If you pass an array of objects as the first argument to the{" "}
        <code className={classNames.code}>css</code> function, the
        objects will be expanded (as in the case of{" "}
        <code className={classNames.code}>bg</code>) then deep merged.
        Only the “surviving” property/value pairs are used.
      </p>
      <Iframe
        src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%5B%0A++++++++%7B%0A++++++++++bg%3A+%22%239c9%22%2C%0A++++++++++color%3A+%22%23333%22%2C%0A++++++++++p%3A+%224px+10px%22%2C%0A++++++++++display%3A+%22block%22%2C%0A++++++++++maxWidth%3A+200%2C%0A++++++++++m%3A+%22auto%22%2C%0A++++++++++textAlign%3A+%22center%22%2C%0A++++++++++borderRadius%3A+10%2C%0A++++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++++fontWeight%3A+700%2C%0A++++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++++fontSize%3A+24%2C%0A++++++++%7D%2C%0A++++++++%7B%0A++++++++++backgroundColor%3A+%22%23cfc%22%2C%0A++++++++++maxWidth%3A+275%2C%0A++++++++++overflow%3A+%22hidden%22%2C%0A++++++++++whiteSpace%3A+%22nowrap%22%2C%0A++++++++++textOverflow%3A+%22ellipsis%22%2C%0A++++++++%7D%0A++++++%5D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&amp;e=6%2C9%2C19-20&amp;s=25-27%2C45-47&amp;i=17%2C68#t=3"
        style={{ "height": "80vh" }}
      />
    </>
  )
}
