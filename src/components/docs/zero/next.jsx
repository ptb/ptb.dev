/*
  eslint-disable
    react/prop-types
 */

import { Editor } from "../../editor/editor.jsx"
import classNames from "../docs.css.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `WithNextJs` React component.

  @returns {React.ReactElement}
    React component.
 */

export function WithNextJs () {
  return (
    <>
      <h2>With Next.js</h2>
      <Editor lang="bash">
        {[
          "yarn create next-app my-next-app",
          "cd my-next-app",
          "yarn add @ptb/style",
          "yarn add babel-plugin-macros",
          "echo '' > styles/styles.css"
        ].join("\n")}
      </Editor>
      <h3>
        Create (or add to){" "}
        <code className={classNames.code}>.babelrc</code>
      </h3>
      <Editor>
        {[
          "{",
          '  "presets": ["next/babel"],',
          '  "plugins": ["babel-plugin-macros"]',
          "}"
        ].join("\n")}
      </Editor>
      <h3>
        Add to <code className={classNames.code}>package.json</code>
      </h3>
      <Editor
        lang="js"
        rows={3}
      >
        {[
          `  "babelMacros": {`,
          `    "@ptb/style": {`,
          `      "output": "styles/styles.css"`,
          `    }`,
          `  }`
        ].join("\n")}
      </Editor>
      ),
      <h3>
        Add to <code className={classNames.code}>pages/_app.js</code>
      </h3>
      <Editor
        lang="js"
        rows={1}
      >
        {`import '../styles/styles.css'`}
      </Editor>
      <h3>
        Create (or add to){" "}
        <code className={classNames.code}>pages/_document.js</code>
      </h3>
      <Editor
        lang="jsx"
        rows={1}
      >
        {[
          `import { getStyles } from "@ptb/style"`,
          `import Document from "next/document"`,
          `import { Fragment } from "react"`,
          ``,
          `export default class extends Document {`,
          `  static async getInitialProps(ctx) {`,
          `    const initialProps =`,
          `      await Document.getInitialProps(ctx)`,
          ``,
          `    return {`,
          `      ... initialProps,`,
          `      styles: (`,
          `        <Fragment>`,
          `          {initialProps.styles}`,
          `          <style`,
          `            dangerouslySetInnerHTML={{`,
          `              __html: getStyles ()`,
          `            }}`,
          `            data-creator="@ptb/style" />`,
          `        </Fragment>`,
          `      )`,
          `    }`,
          `  }`,
          `}`
        ].join("\n")}
      </Editor>
      <h3>
        In each component file, for example{" "}
        <code className={classNames.code}>pages/index.js</code>
      </h3>
      <Editor
        lang="js"
        rows={1}
      >
        {`import { css } from "@ptb/style/macro"`}
      </Editor>
      <h3>Start Next.js server</h3>
      <Editor
        lang="bash"
        rows={1}
      >
        {["yarn dev"].join("\n")}
      </Editor>
    </>
  )
}
