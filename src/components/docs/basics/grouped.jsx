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
  `GroupedClasses` React component.

  @returns {React.ReactElement}
    React component.
 */

export function GroupedClasses () {
  return (
    <>
      <h2>Grouped Classes</h2>
      <p>
        But if you prefer to have fewer class names attached to
        elements, that is an option, too. Just wrap the styles in an
        object with as the key. Depending on your needs, you could
        choose to group styles together under a single class name or
        individual classes depending on what your needs are. If you’re
        planning on re-using a group of styles throughout your
        project, you’ll want to group them with{" "}
        <code className={classNames.code}>&amp;</code>. It results in
        a slightly larger stylesheet, but fewer class names in the
        HTML.
      </p>
      <Iframe
        src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%22%26%22%3A+%7B%0A++++++++++backgroundColor%3A+%22%239c9%22%2C%0A++++++++++color%3A+%22%23333%22%2C%0A++++++++++padding%3A+%224px+10px%22%2C%0A++++++++++display%3A+%22block%22%2C%0A++++++++++maxWidth%3A+%22200px%22%2C%0A++++++++++margin%3A+%22auto%22%2C%0A++++++++++textAlign%3A+%22center%22%2C%0A++++++++++borderRadius%3A+%2210px%22%2C%0A++++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++++fontWeight%3A+%22bold%22%2C%0A++++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++++fontSize%3A+%2224px%22%2C%0A++++++++%7D%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=2"
        style={{ "height": "80vh" }}
      />
    </>
  )
}
