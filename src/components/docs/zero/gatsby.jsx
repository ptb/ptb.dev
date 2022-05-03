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
  `WithGatsby` React component.

  @returns {React.ReactElement}
    React component.
 */

export function WithGatsby () {
  return (
    <>
      <h2>With Gatsby</h2>
      <p className={classNames.p}>
        <a className={classNames.link} href="https://www.gatsbyjs.com/">Gatsby</a> has built-in Babel macro support. No Babel setup is required.
      </p>
      <Editor
        lang="bash"
        rows={1}
      >
        {[
          "npx gatsby new my-gatsby-app",
          "cd my-gatsby-app",
          "npm install @ptb/style",
          "echo '' > src/styles.css",
          "echo 'import \"./src/styles.css\"' >> gatsby-browser.js",
          "npm run develop"
        ].join("\n")}
      </Editor>
      <p className={classNames.p}>
        To use, import the <code className={classNames.code}>css</code> function and use with the <code className={classNames.code}>className</code> prop.
      </p>
      <Editor
        lang="jsx"
        rows={2}
      >
        {[
          `import * as React from "react"`,
          `import { css } from "@ptb/style/macro"`,
          ``,
          `const IndexPage = () => (`,
          `  <div`,
          `    className={css({`,
          `      alignItems: "center",`,
          `      display: "flex",`,
          `      fontSize: "64px",`,
          `      height: "100vh",`,
          `      justifyContent: "center"`,
          `    })}`,
          `  >`,
          `    Hello!`,
          `  </div>`,
          `)`,
          ``,
          `export default IndexPage`
        ].join("\n")}
      </Editor>
      <p className={classNames.p}>
        Run the <code className={classNames.code}>gatsby build</code> command and styles will be extracted to <code className={classNames.code}>src/styles.css</code> and the <code className={classNames.code}>css</code> function call will be replaced with the associated class names.
      </p>
      <h3>Insert Styles Into <code className={classNames.code}>&lt;head&gt;</code></h3>
      <p className={classNames.p}>
        To prevent a flash of unstyled content (FOUC), you can use the included Gatsby plugin to inline the styles in the HTML <code className={classNames.code}>&lt;head&gt;</code>. Just add the plugin to the <code className={classNames.code}>gatsby-config.js</code> file.
      </p>
      <Editor lang="js">
        {[
          `module.exports = {`,
          `  plugins: [`,
          `    {`,
          `      resolve: "@ptb/style"`,
          `    }`,
          `  ]`,
          `}`
        ].join("\n")}
      </Editor>
    </>
  )
}
