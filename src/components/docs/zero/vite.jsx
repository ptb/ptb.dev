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
  `WithVite` React component.

  @returns {React.ReactElement}
    React component.
 */

export function WithVite () {
  return (
    <>
      <h2>With Vite</h2>
      <Editor lang="bash">
        {[
          `npm create vite@latest my-vite-app`,
          `cd my-vite-app`,
          `npm install @ptb/style`,
          `npm install vite-plugin-babel-macros`,
          `echo '' > src/styles.css`,
          `npm run dev`
        ].join("\n")}
      </Editor>
      <h3>
        Add to{" "}
        <code className={classNames.code}>vite.config.js</code>
      </h3>
      <Editor lang="jsx">
        {[
          `import reactPlugin from "@vitejs/plugin-react"`,
          `import { defineConfig } from "vite"`,
          `import macroPlugin from "vite-plugin-babel-macros"`,
          ``,
          `export default defineConfig({`,
          `  plugins: [`,
          `    macroPlugin(),`,
          `    reactPlugin(),`,
          `  ]`,
          `})`
        ].join("\n")}
      </Editor>
      <h3>
        Add to <code className={classNames.code}>src/main.jsx</code>
      </h3>
      <Editor
        lang="jsx"
        rows={1}
      >
        {[
          `import "./styles.css"`
        ].join("\n")}
      </Editor>
      <h3>
        Add to <code className={classNames.code}>src/App.jsx</code>
      </h3>
      <Editor lang="jsx">
        {[
          `import { css } from "@ptb/style/macro"`,
          ``,
          `export default function App () {`,
          `  return (`,
          `    <div`,
          `      className={css({`,
          `        alignItems: "center",`,
          `        display: "flex",`,
          `        fontSize: "64px",`,
          `        height: "100vh",`,
          `        justifyContent: "center"`,
          `       })}`,
          `    >`,
          `      Hello!`,
          `    </div>`,
          `  )`,
          `}`
        ].join("\n")}
      </Editor>
    </>
  )
}
