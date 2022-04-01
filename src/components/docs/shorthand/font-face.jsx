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
  `FontFaceRules` React component.

  @returns {React.ReactElement}
    React component.
 */

export function FontFaceRules () {
  return (
    <>
      <h2>
        <code className={classNames.code}>@font-face</code> Rules
      </h2>
      <Iframe src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cdiv%3E%0A++++++%3Cdiv%0A++++++++className%3D%7Bcss%28%7B%0A++++++++++fontFamily%3A+%5B%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++++fontWeight%3A+400%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fsource-sans-pro-400.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++++fontStyle%3A+%22oblique%22%2C%0A++++++++++++++fontWeight%3A+400%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fsource-sans-pro-400i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++++fontWeight%3A+700%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fsource-sans-pro-700.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++++fontStyle%3A+%22oblique%22%2C%0A++++++++++++++fontWeight%3A+700%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fsource-sans-pro-700i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%0A++++++++++%5D%2C%0A++++++++++fontSize%3A+24%2C%0A++++++++++fontWeight%3A+700%0A++++++++%7D%29%7D%0A++++++%3E%0A++++++++Buy+Now%21%0A++++++%3C%2Fdiv%3E%0A++++++%3Cdiv%0A++++++++className%3D%7Bcss%28%7B%0A++++++++++fontFamily%3A+%5B%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++++fontWeight%3A+400%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fpt-serif-400.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++++fontStyle%3A+%22italic%22%2C%0A++++++++++++++fontWeight%3A+400%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fpt-serif-400i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++++fontWeight%3A+700%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fpt-serif-700.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++++fontStyle%3A+%22italic%22%2C%0A++++++++++++++fontWeight%3A+700%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fpt-serif-700i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%0A++++++++++%5D%2C%0A++++++++++fontSize%3A+24%2C%0A++++++++++fontWeight%3A+700%0A++++++++%7D%29%7D%0A++++++%3E%0A++++++++Buy+Again%21%0A++++++%3C%2Fdiv%3E%0A++++%3C%2Fdiv%3E%0A++%29%0A%7D#t=3#t=3" />
    </>
  )
}
