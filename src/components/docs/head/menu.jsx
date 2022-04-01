/*
  eslint-disable
    react/prop-types
 */

import classNames from "./menu.css.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  Hamburger menu icon component.

  @param {object} props
  - Component inputs.

  @param {boolean} [props.checked]
  - Indicates if menu is active.

  @returns {React.ReactElement}
    React component.
 */

export function Menu ({ checked = false }) {
  return (
    <label
      aria-checked={checked}
      aria-label="Menu"
      className={classNames.menu}
      htmlFor="menu"
    >
      <svg
        aria-hidden="true"
        className={classNames.icon}
        focusable="false"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 120 120"
        width="32"
      >
        <defs>
          <path
            d="M30 60h60"
            id="a"
          />
        </defs>
        <g
          stroke="hsl(240,15%,80%)"
          strokeWidth="6"
        >
          <use
            className={classNames.path1}
            xlinkHref="#a"
          />
          <use
            className={classNames.path2}
            xlinkHref="#a"
          />
          <use
            className={classNames.path3}
            xlinkHref="#a"
          />
        </g>
      </svg>
    </label>
  )
}
