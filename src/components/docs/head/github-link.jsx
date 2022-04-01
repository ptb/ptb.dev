/*
  eslint-disable
    react/prop-types
 */

import { cx } from "@ptb/style"

import classNames from "./link.css.js"

/**
  @typedef {typeof import ("react")} React
  */

/**
  `GitHubLink` React component.

  @returns {React.ReactElement}
    React component.
  */

export function GitHubLink () {
  return (
    <a
      className={cx(classNames.link, classNames.github)}
      href="https://github.com/ptb/style"
    >
      GitHub
    </a>
  )
}
