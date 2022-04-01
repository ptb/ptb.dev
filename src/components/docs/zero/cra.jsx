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
  `WithCreateReactApp` React component.

  @returns {React.ReactElement}
    React component.
 */

export function WithCreateReactApp () {
  return (
    <>
      <h2>With Create React App</h2>
      <Editor
        lang="bash"
        rows={1}
      >
        {[
          "yarn create react-app my-react-app",
          "cd my-react-app",
          "yarn add @ptb/style",
          "echo '' > src/styles.css"
        ].join("\n")}
      </Editor>
      <h3>
        Add to <code className={classNames.code}>src/App.js</code>
      </h3>
      <Editor
        lang="jsx"
        rows={2}
      >
        {[
          `import { css } from "@ptb/style/macro"`,
          `import "./styles.css"`
        ].join("\n")}
      </Editor>
      <h3>
        Both <code className={classNames.code}>yarn start</code> or{" "}
        <code className={classNames.code}>yarn build</code> should
        work as expected, including hot reload.
      </h3>
      <Editor
        lang="bash"
        rows={1}
      >
        {["yarn start", "# or", "yarn build"].join("\n")}
      </Editor>
    </>
  )
}
