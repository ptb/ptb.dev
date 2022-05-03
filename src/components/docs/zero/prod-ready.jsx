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
  `ProductionReady` React component.
    
  @returns {React.ReactElement}
    React component.
 */

export function ProductionReady () {
  return (
    <>
      <h2>Production Ready</h2>
      <p className={classNames.p}>
        <code className={classNames.code}>@ptb/style</code> is the most flexible tool kit available to style your web app. Add styles dynamically at runtime in the browser, server-side render and insert styles into the page <code className={classNames.code}>&lt;head&gt;</code>, or extract styles to a CSS file during server-side rendering or at build-time.
      </p>
      <h3>Single-Page or Client-Side</h3>
      <p className={classNames.p}>
          Without any setup, it can be used immediately to add styles and class names in any single-page application or client-side rendered app.
      </p>
      <Editor lang="bash" rows={1}>{`npm install @ptb/style`}</Editor>
      <p className={classNames.p}>or</p>
      <Editor lang="bash" rows={1}>{`yarn add @ptb/style`}</Editor>
      <p className={classNames.p}>
        Simply add to your project, then import it in each file where it is used. No container, context, Babel configuration, or webpack plugins required.
      </p>
      <h3>Server-Side Rendering</h3>
      <p className={classNames.p}></p>
      <h3>Build-Time Rendering</h3>
      <p className={classNames.p}></p>
    </>
  )
}
