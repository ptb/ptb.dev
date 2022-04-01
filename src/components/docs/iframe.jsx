/*
  eslint-disable
    react/prop-types
 */

import { useRef } from "react"

import classNames from "./docs.css.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `<iframe>` React component.

  @param {object} props
  - Component inputs.

  @param {string} props.src
  - `<iframe>` href.

  @param {object} [props.style]
  - Inline styles.

  @param {string} [props.title]
  - `<iframe>` elements must have a unique title property to indicate
  its content to the user.

  @returns {React.ReactElement}
    React component.
 */

export function Iframe ({ title, ... props }) {
  const ref = useRef(null)

  // function onLoad () {
  //   if (ref && ref.current) {
  //     ref.current.style.maxHeight =
  //       (ref.current.contentWindow.document.body.scrollHeight + 20) + "px"
  //   }
  // }

  return (
    <iframe
      className={classNames.iframe}
      loading="lazy"
      ref={ref}
      title={title}
      {...props}
    />
  )
}
