/*
  eslint-disable
    react/prop-types
 */

import { Iframe } from "../iframe.jsx"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `ComplexSelectors` React component.

  @returns {React.ReactElement}
    React component.
 */

export function ComplexSelectors () {
  return (
    <>
      <h2>Complex Selectors</h2>
      <p>
        All selectors are supported. Just be cautioned. This could be
        considered a bad practice. Just because you can doesn’t mean
        you should. You’ll notice that when global selectors are used,
        class names for those styles are not emitted to the element
        just added to the stylesheet.
      </p>
      <Iframe
        src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%22%5Baria-selected%3Dtrue%5D%22%3A+%7B%0A++++++++++fontWeight%3A+700%0A++++++++%7D%2C%0A++++++++%22%3Ahover%2C+ul+%3E+%3Alast-child+li%3Anth-child%28odd%29%3Anot%28%3Alast-child%29%22%3A+%7B%0A++++++++++textDecoration%3A+%22underline%22%0A++++++++%7D%2C%0A++++++++%22%3Aroot%22%3A+%7B%0A++++++++++%22--primary-color%22%3A+%22%23363%22%2C%0A++++++++++%22--sat%22%3A+%225%25%22%0A++++++++%7D%2C%0A++++++++%22%5Brole%3Dtablist%5D%22%3A+%7B%0A++++++++++%22--hue%22%3A+%22120%22%2C%0A++++++++++%22--sat%22%3A+%2230%25%22%0A++++++++%7D%2C%0A++++++++bg%3A+%22var%28--primary-color%29%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=3"
        style={{ "height": "85vh" }}
      />
    </>
  )
}
