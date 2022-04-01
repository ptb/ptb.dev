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
  `KeyframesRules` React component.

  @returns {React.ReactElement}
    React component.
 */

export function KeyframesRules () {
  return (
    <>
      <h2>
        <code className={classNames.code}>@keyframes</code> Rules
      </h2>
      <Iframe src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++animationName%3A+%7B%0A++++++++++%220%25%22%3A+%7B%0A++++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++++%7D%2C%0A++++++++++%2210%25%2C20%25%22%3A+%7B%0A++++++++++++transform%3A%0A++++++++++++++%22scale3d%28.9%2C.9%2C.9%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++++%7D%2C%0A++++++++++%2230%25%2C50%25%2C70%25%2C90%25%22%3A+%7B%0A++++++++++++transform%3A%0A++++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C3deg%29%22%0A++++++++++%7D%2C%0A++++++++++%2240%25%2C60%25%2C80%25%22%3A+%7B%0A++++++++++++transform%3A%0A++++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++++%7D%2C%0A++++++++++to%3A+%7B%0A++++++++++++%22transform%22%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++++%7D%0A++++++++%7D%2C%0A++++++++animationDuration%3A+%221s%22%2C%0A++++++++animationIterationCount%3A+%22infinite%22%2C%0A++++++++bg%3A+%22%239c9%22%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&amp;e=5-24&amp;s=45-47%2C57-77&amp;i=2-58#t=1" />
    </>
  )
}
