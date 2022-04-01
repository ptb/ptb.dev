/*
  eslint-disable
    react/prop-types
 */

import { Editor } from "../../editor/editor.jsx"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `ZeroRuntimeOption` React component.

  @returns {React.ReactElement}
    React component.
 */

export function ZeroRuntimeOption () {
  return (
    <>
      <h2>
        Setup Not <em>Required</em>
      </h2>
      <p>
        Simply add the library to your project and import it in each
        file where it is used. No container, context, Babel
        configuration, or webpack plugins required.
      </p>
      <p>
        If you wish to utilize the zero-runtime option, there is{" "}
        <em>some</em> setup needed, mostly to pre-render components
        and save the resulting styles to a css file.
      </p>
      <Editor
        data-line="1,3"
        lang="bash"
        rows={2}
      >
        {`npm install @ptb/style\n# or\nyarn add @ptb/style`}
      </Editor>
      <h2>Zero-Runtime Option</h2>
      <p>Instead of importing from</p>
      <Editor rows={1}>{`import { css } from "@ptb/style"`}</Editor>
      <p>import the Babel macro instead:</p>
      <Editor rows={1}>
        {`import { css } from "@ptb/style/macro"`}
      </Editor>
    </>
  )
}
