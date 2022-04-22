/*
  eslint-disable
    max-lines-per-function,
    react/prop-types
 */

import {
  canUseDom,
  css,
  getStyles,
  isNull,
  sortJSON,
  store
} from "@ptb/style"
import cssbeautify from "cssbeautify"
import { useCallback, useEffect, useState } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { useRunner } from "react-runner"

import { useParam } from "../../hooks/use-param.js"
import { useVisualViewport } from "../../hooks/use-visual-viewport.js"
import { Editor } from "../editor/editor.jsx"
import {
  Tablist,
  Tabpanel,
  Tabpanels,
  useTabs
} from "../tabs/tabs.jsx"
import classNames from "./demo.css.js"
import { TabItem } from "./tab-item.jsx"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `@ptb/style` demonstration component.

  @param {object} props
  - Component inputs.

  @param {string} props.children
  - Initial content.

  @returns {React.ReactElement}
    React component.
 */

export function Demo ({ children }) {
  // @ts-ignore
  (canUseDom() ? window : global).css = css

  const tabs = {
    "Input": ["Editor"],
    "Output": ["Preview", "HTML", "Styles", "Minified", "Internal"]
  }

  const { labels, param, selected, setParam, setSelected } = useTabs({
    "group": "t",
    "initial": "1",
    tabs
  })

  /** @type {Record<string, string>} */
  const params = {}

  if (canUseDom() && window.location) {
    for (const [k, v] of new URLSearchParams(
      window.location.search
    )) {
      params[k] = v
    }
  }

  const setSearch = useParam("x", true)[1]

  const [code, setCode] = useState(children)
  const { element } = useRunner({ code })

  const [source, setSource] = useState("")
  const [styles, setStyles] = useState("")
  const [minify, setMinify] = useState("")
  const [inside, setInside] = useState("")

  const handleInput = useCallback(
    /**
      Respond to keyboard events.

      @param {React.ChangeEvent<HTMLTextAreaElement>} e
      - An Event object.

      @returns {void}
     */

    function onInput (e) {
      setCode(
        /** @type {HTMLTextAreaElement} */ (e.target).value || ""
      )
    },
    [setCode]
  )

  const handleSource = useCallback(
    /**
      Render the React component to static markup.

      @param {React.ReactElement | null} input
      - React component source.

      @returns {string}
        Rendered HTML string.
     */

    function handleSource (input) {
      try {
        return isNull(input) ? source : renderToStaticMarkup(input)
      } catch (e) {
        return source
      }
    },
    [source]
  )

  const handleUpdate = useCallback(
    /**
      Update "source", "minify", and "styles" components.

      @returns {void}
     */

    function handleUpdate () {
      store.clear()

      setSource(handleSource(element))

      const result = getStyles()

      setStyles(cssbeautify(result))

      setMinify(result)

      setInside(
        JSON.stringify(
          sortJSON(
            [... store.values()].reduce(function (results, v) {
              return results.concat([... v.values()])
            }, [])
          ),
          null,
          2
        )
      )

      setSearch(code)
    },
    [code, element, handleSource, setSearch]
  )

  useEffect(
    function () {
      if (children !== code) {
        setCode(children)
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
    [element, handleUpdate]
  )

  useVisualViewport()

  return (
    <div className={classNames.grid}>
      <Tablist
        classNames={classNames}
        group="t"
        initial={param}
        menuitem={TabItem}
        orientation="horizontal"
        selected={selected}
        setSelected={setSelected}
        tabs={tabs}
        total={labels.length}
        updParams={setParam}
      />
      <Tabpanels
        classNames={classNames}
        group="t"
        labels={labels}
        selected={selected}
      >
        <Tabpanel>
          <Editor
            data-line={params.e}
            id="editor"
            onInput={handleInput}
          >
            {code}
          </Editor>
        </Tabpanel>
        <Tabpanel>
          <div dangerouslySetInnerHTML={{ "__html": source }} />
        </Tabpanel>
        <Tabpanel>
          <Editor
            data-line={params.h}
            id="html"
            lang="html"
            readOnly
          >
            {source}
          </Editor>
        </Tabpanel>
        <Tabpanel>
          <Editor
            data-line={params.s}
            id="styles"
            lang="css"
            readOnly
          >
            {styles}
          </Editor>
        </Tabpanel>
        <Tabpanel>
          <Editor
            data-line={params.m}
            id="minify"
            lang="css"
            readOnly
          >
            {minify}
          </Editor>
        </Tabpanel>
        <Tabpanel>
          <Editor
            data-line={params.i}
            id="internal"
            lang="js"
            readOnly
          >
            {inside}
          </Editor>
        </Tabpanel>
      </Tabpanels>
    </div>
  )
}
