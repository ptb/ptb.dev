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
  `PlaceholderClasses` React component.

  @returns {React.ReactElement}
    React component.
 */

export function PlaceholderClasses () {
  return (
    <>
      <h2>
        Placeholder Classes (
        <code className={classNames.code}>%</code>)
      </h2>
      <Iframe src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cdiv%3E%0A++++++%3Cinput%0A++++++++className%3D%7Bcss%28%7B%0A++++++++++%22%25check%22%3A+true%0A++++++++%7D%29%7D%0A++++++++type%3D%22checkbox%22%0A++++++%2F%3E%0A++++++%3Cspan%0A++++++++className%3D%7Bcss%28%7B%0A++++++++++%22%25check%3Anot%28%3Achecked%29+%2B+%26%22%3A+%7B%0A++++++++++++bg%3A+%22%23363%22%0A++++++++++%7D%0A++++++++%7D%29%7D%0A++++++%3E%0A++++++++Buy+Now%21%0A++++++%3C%2Fspan%3E%0A++++%3C%2Fdiv%3E%0A++%29%0A%7D&amp;e=8%2C17&amp;s=1#t=3" />
    </>
  )
}
