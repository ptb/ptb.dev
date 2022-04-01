/*
  eslint-disable
    react/prop-types
 */

import { Editor } from "../../editor/editor.jsx"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `StylesAreJSObjects` React component.

  @returns {React.ReactElement}
    React component.
 */

export function StylesAreJSObjects () {
  return (
    <>
      <h2>Styles are JavaScript Objects</h2>

      <h3>Can be defined inline…</h3>
      <Editor
        data-line="5-8"
        lang="jsx"
        rows={1}
      >
        {[
          `import { css } from "@ptb/style"`,
          ``,
          `export default () => (`,
          `  <span`,
          `    className={css({`,
          `      fontFamily: "sans-serif",`,
          `      fontSize: "24px"`,
          `    })}`,
          `  >`,
          `    Buy Now!`,
          `  </span>`,
          `)`
        ].join("\n")}
      </Editor>

      <h3>in variables…</h3>
      <Editor
        data-line="4-7,10"
        lang="jsx"
      >
        {[
          `import { css } from "@ptb/style"`,
          ``,
          `export default () => {`,
          `  const styles = {`,
          `    fontFamily: "sans-serif",`,
          `    fontSize: "24px"`,
          `  }`,
          ``,
          `  return (`,
          `    <span className={css(styles)}>`,
          `      Buy Now!`,
          `    </span>`,
          `  )`,
          `}`
        ].join("\n")}
      </Editor>

      <h3>by importing from other files…</h3>
      <Editor
        data-line="4-7"
        lang="js"
      >
        {[
          `import { css } from "@ptb/style"`,
          ``,
          `export default {`,
          `  button: css({`,
          `    fontFamily: "sans-serif",`,
          `    fontSize: "24px"`,
          `  })`,
          `}`
        ].join("\n")}
      </Editor>
      <Editor
        data-line="1,4"
        lang="jsx"
      >
        {[
          `import classNames from "./styles.js"`,
          ``,
          `export default () => (`,
          `  <span className={classNames.button}>`,
          `    Buy Now!`,
          `  </span>`,
          `)`
        ].join("\n")}
      </Editor>

      <h3>…or passed as props.</h3>
      <Editor
        data-line="3,4"
        lang="jsx"
      >
        {[
          `import { css } from "@ptb/style"`,
          ``,
          `export default ({ styles }) => (`,
          `  <span className={css(styles)}>`,
          `    Buy Now!`,
          `  </span>`,
          `)`
        ].join("\n")}
      </Editor>

      <h3>…or an array of JavaScript Objects</h3>
      <Editor
        data-line="5-13"
        lang="jsx"
      >
        {[
          `import { css } from "@ptb/style"`,
          ``,
          `export default () => (`,
          `  <span`,
          `    className={css([`,
          `      {`,
          `        fontFamily: "sans-serif",`,
          `        fontSize: "24px"`,
          `      },`,
          `      {`,
          `        fontSize: "36px"`,
          `      }`,
          `    ])}`,
          `  >`,
          `    Buy Now!`,
          `  </span>`,
          `)`
        ].join("\n")}
      </Editor>
    </>
  )
}
