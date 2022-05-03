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
  `WithTailwindCSS` React component.

  @returns {React.ReactElement}
    React component.
 */

export function WithTailwindCSS () {
  return (
    <>
      <h2>
        With{" "}
        <a
          className={classNames.link}
          href="https://tailwindcss.com/docs/utility-first"
        >
          Tailwind CSS
        </a>
      </h2>
      <p>
        Using Tailwind with{" "}
        <code className={classNames.code}>@ptb/style</code> is
        possibly simpler than Tailwind on its own! The Babel macro{" "}
        <a
          className={classNames.link}
          href="https://github.com/ben-rogerson/twin.macro#readme"
        >
          <code className={classNames.code}>twin.macro</code>
        </a>{" "}
        generates a JavaScript object that is perfect as input for the{" "}
        <code className={classNames.code}>css</code> function.
      </p>
      <p>First, add the required packages:</p>
      <Editor
        lang="bash"
        rows={1}
      >
        yarn add babel-plugin-macros tailwindcss twin.macro
      </Editor>
      <p>
        Then, in each component file, import from{" "}
        <code className={classNames.code}>twin.macro</code> and call
        Tailwind CSS classes as a tagged template. At build time, the{" "}
        <code className={classNames.code}>tw``</code> expression will
        be replaced by a JavaScript object representing those styles.
      </p>
      <p>
        <strong>Note:</strong> The{" "}
        <code className={classNames.code}>twin.macro</code> import{" "}
        <em>must</em> be listed <em>before</em> the{" "}
        <code className={classNames.code}>@ptb/style/macro</code> import.
      </p>
      <Editor lang="jsx">
        {[
          `import tw from "twin.macro"`,
          `import { css } from "@ptb/style/macro"`,
          ``,
          `export default () => (`,
          `  <span`,
          `    className={css([`,
          "      tw`flex flex-col items-center justify-center h-screen`,",
          `      {`,
          `        fontFamily: "sans-serif",`,
          `        fontSize: "24px"`,
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
