/*
  eslint-disable
    jsx-a11y/no-autofocus,
    max-lines-per-function,
    react/prop-types
 */

import { cx, debounce, sortJSON } from "@ptb/style"
import { useCallback, useEffect, useState } from "react"

import { useParam } from "../../hooks/use-param.js"
import { useVisualViewport } from "../../hooks/use-visual-viewport.js"
import { Editor } from "../editor/editor.jsx"
import classNames from "./convert.css.js"
import { cssToJs } from "./css-to-js"

/**
  @typedef {import ("@ptb/style").StylesObject} StylesObject

  @typedef {typeof import ("react")} React
 */

/**
  `@ptb/style` conversion component.

  @param {object} props
  - Component inputs.

  @param {string} [props.children]
  - Initial content.

  @returns {React.ReactElement}
    React component.
 */

export function Convert ({ children = " " }) {
  const setSearch = useParam("x", true)[1]

  const [input, setInput] = useState(children)

  const [output, setOutput] = useState("{}")

  /**
    Parse CSS stylesheet and convert to an equivalent JavaScript object.

    @param {string} value
    - String containing a CSS stylesheet or rulesets.

    @returns {string}
      JSON string representing CSS styles.
   */

  function handleSource (value) {
    try {
      return JSON.stringify(sortJSON(cssToJs(value)), null, 2)
    } catch (e) {
      return "{}"
    }
  }

  const handleUpdate = debounce(
    /**
      Update "output" components.

      @returns {void}
     */

    function handleUpdate () {
      setOutput(handleSource(input))

      setSearch(input)
    },
    350
  )

  useEffect(
    function () {
      if (children !== input) {
        setInput(children)
        handleUpdate()
      }
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [children]
  )

  useEffect(
    function () {
      handleUpdate()
    },
    [handleUpdate]
  )

  const onInput = useCallback(
    /**
      Respond to keyboard events.

      @param {React.ChangeEvent<HTMLTextAreaElement>} e
      - An Event object.

      @returns {void}
     */

    function onInput (e) {
      setInput(
        /** @type {HTMLTextAreaElement} */ (e.target).value || ""
      )
    },
    [setInput]
  )

  useVisualViewport()

  return (
    <div className={classNames.grid}>
      <div className={cx(classNames.head, classNames.cssLabel)}>
        <span>CSS Input</span>
      </div>
      <div
        className={cx(
          classNames.head,
          classNames.jsLabel,
          classNames.vscode
        )}
      >
        <span>JS Output</span>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=ptb.ptb-css-to-js"
          rel="noreferrer"
          target="_blank"
        >
          Extension for Visual Studio Code
        </a>
      </div>
      <div className={classNames.cssBlock}>
        <Editor
          autoFocus
          onInput={onInput}
          wrap={false}
        >
          {input}
        </Editor>
      </div>
      <div className={classNames.jsBlock}>
        <Editor
          copyOnClick
          readOnly
          wrap={false}
        >
          {output}
        </Editor>
      </div>
    </div>
  )
}
