/*
  eslint-disable
    jsx-a11y/no-autofocus,
    max-lines-per-function,
    react/prop-types
 */

import { cx, isFn } from "@ptb/style"
import { useCallback, useEffect, useRef, useState } from "react"

import { Prism } from "../../lib/prism.js"
import classNames from "./editor.css.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  Editable syntax-highlighted `<textarea>` React component.

  @param {object} props
  - Component inputs.

  @param {boolean} [props.autoFocus]
  - Autofocus textarea.

  @param {string} [props.children]
  - Initial content.

  @param {boolean} [props.copyOnClick]
  - Indicates if contents of the component should be copied `onClick`.

  @param {string} [props.id]
  - String defining an identifier which must be unique in the whole document.

  @param {string} [props.lang]
  - Programming language.

  @param {React.FormEventHandler<HTMLTextAreaElement>} [props.onInput]
  - `onInput` function prop.

  @param {boolean} [props.readOnly]
  - Indicates the value of the `<textarea>` cannot be modified.

  @param {number} [props.rows]
  - The number of rows to display by default.

  @param {Record<string, string>} [props.style]
  - Inline styles.

  @param {boolean} [props.wrap]
  - Indicates if contents of the component should wrap.

  @returns {React.ReactElement}
    Editable syntax-highlighted `<textarea>` React component.
 */

export function Editor ({
  autoFocus = false,
  children = "",
  copyOnClick = false,
  id,
  lang = "js",
  onInput,
  readOnly = false,
  rows = 3,
  style,
  wrap = true,
  ... props
}) {
  /** @type {React.RefObject<HTMLElement>} */
  const codeRef = useRef(null)

  /** @type {React.RefObject<HTMLTextAreaElement>} */
  const textRef = useRef(null)

  /** @type {React.RefObject<HTMLPreElement>} */
  const wrapRef = useRef(null)

  const [value, setValue] = useState(children)

  /**
    Respond to mouse click events.

    @param {React.MouseEvent<HTMLTextAreaElement>} e
    - An Event object.

    @returns {void}
   */

  function handleClick (e) {
    const target = /** @type {HTMLTextAreaElement} */ (e.target)

    target.select()

    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(target.value)
      } catch (err) {
        console.error(err)
      }
    } else {
      document.execCommand("copy")
    }
  }

  const handleInput = useCallback(
    /**
      Update `<code>` element with `<textarea>` content on input events.

      @param {React.ChangeEvent<HTMLTextAreaElement>} e
      - An Event object.

      @returns {void}
     */

    function handleInput (e) {
      setValue(e.target.value || "")

      if (isFn(onInput)) {
        onInput(e)
      }
    },
    [onInput]
  )

  /**
    Update the `pre` element scroll position as `textarea` is scrolled.
    Necessary only if `"white-space": "pre"` is set.

    @returns {void}
    */

  function handleScroll () {
    if (wrapRef.current && textRef.current) {
      wrapRef.current.scrollTop = textRef.current.scrollTop
      wrapRef.current.scrollLeft = textRef.current.scrollLeft
    }
  }

  /**
    Update `<code>` syntax highlighting.

    @returns {void}
    */

  function handleUpdate () {
    Prism.highlightElement(codeRef.current)
  }

  useEffect(
    function () {
      if (children !== value) {
        setValue(children)
      }
    },
    [children, value]
  )

  useEffect(handleUpdate, [value])

  useEffect(
    function () {
      if (wrapRef && wrapRef.current) {
        new ResizeObserver(function (entries) {
          for (const entry of entries) {
            // @ts-ignore
            Prism.plugins.lineNumbers.resize(entry.target)

            // @ts-ignore
            Prism.plugins.lineHighlight.highlightLines(entry.target)()
          }
        }).observe(wrapRef.current)
      }
    },
    [wrapRef]
  )

  return (
    <div className={classNames.div}>
      <pre
        aria-hidden
        className={cx(
          wrap ? classNames.wrap : classNames.nowrap,
          `language-${lang}`,
          "line-numbers",
          classNames.pre
        )}
        id={id}
        ref={wrapRef}
        style={style}
        {...props}
      >
        <code
          className={cx(
            wrap ? classNames.wrap : classNames.nowrap,
            `language-${lang}`,
            classNames.code
          )}
          ref={codeRef}
        >
          {value + (value[value.length - 1] === "\n" ? " " : "")}
        </code>
      </pre>
      <textarea
        autoFocus={autoFocus}
        className={cx(
          wrap ? classNames.wrap : classNames.nowrap,
          classNames.textarea
        )}
        onClick={copyOnClick ? handleClick : undefined}
        onInput={handleInput}
        onScroll={handleScroll}
        readOnly={readOnly}
        ref={textRef}
        rows={rows}
        spellCheck={false}
        style={style}
        value={value}
      />
    </div>
  )
}
