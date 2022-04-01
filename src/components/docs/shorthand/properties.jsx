/*
  eslint-disable
    react/prop-types
 */

import { css, getShorthands } from "@ptb/style"

import { DisplayFile } from "../../editor/display-file.jsx"
import { Editor } from "../../editor/editor.jsx"
import classNames from "../docs.css.js"
import { Iframe } from "../iframe.jsx"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `CSSProperties` React component.

  @returns {React.ReactElement}
    React component.
 */

export function CSSProperties () {
  return (
    <>
      <h2>Shorthand Properties</h2>
      <p>
        Supports{" "}
        <a
          className={classNames.link}
          href="https://styled-system.com/api/"
        >
          Styled System
        </a>{" "}
        shorthand properties.
      </p>
      <Iframe
        src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++bg%3A+%22%239c9%22%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+%22200px%22%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+%2210px%22%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+%22bold%22%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+%2224px%22%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&amp;e=5-6%2C9&amp;s=25-27%2C29-31%2C33-35&amp;i=2-35%2C70-86#t=3"
        style={{ "height": "calc(var(--viewport-height) * .35)" }}
      />
      <div
        className={css({
          "display": "grid",
          "gap": 8,
          "gridTemplateColumns": "1fr 1fr",
          "p": 8
        })}
      >
        <div>
          <h3>CSS Properties</h3>
          <DisplayFile
            src="./get-property-id.json"
            style={{
              "height": "calc(var(--viewport-height) * .35)"
            }}
          />
        </div>
        <div>
          <h3>
            Shorthand{" "}
            <code className={classNames.code}>$properties</code>
          </h3>
          <Editor
            style={{
              "height": "calc(var(--viewport-height) * .35)"
            }}
          >
            {JSON.stringify(getShorthands(), null, 2)}
          </Editor>
        </div>
      </div>
    </>
  )
}
