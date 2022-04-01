/*
  eslint-disable
    react/prop-types
 */

import { getConditionals } from "@ptb/style"

import { Editor } from "../../editor/editor.jsx"
import classNames from "../docs.css.js"
import { Iframe } from "../iframe.jsx"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `MediaQueries` React component.

  @returns {React.ReactElement}
    React component.
 */

export function MediaQueries () {
  return (
    <>
      <h2>Media Queries</h2>
      <p>
        Media queries can be nested or inverted. This is seriously
        powerful feature. If you’re creating a design to switch
        between light mode and dark mode, you can keep the values for
        each at the “bottom” of the style object under the CSS
        property it affects. This provides the flexibility to create a
        media query at any point without enforcing a specific
        structure.
      </p>
      <Iframe
        src="./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%22%40media+%28min-width%3A+768px%29%22%3A+%7B%0A++++++++++%22%40media+%28-webkit-min-device-pixel-ratio%3A+2%29%22%3A+%7B%0A++++++++++++backgroundImage%3A+%22url%28%5C%22data%3Aimage%2Fsvg%2Bxml%2C%253csvg+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27+width%3D%27120%27+height%3D%27120%27%253e%253cpath+d%3D%27M16+111h88c0-32-32-15-32-31C112+8+8+8+48+80c0+16-32-1-32+31Z%27+fill%3D%27none%27+stroke%3D%27black%27+stroke-width%3D%272%27%2F%253e%253c%2Fsvg%253e%5C%22%29%22%2C%0A++++++++++++backgroundPosition%3A+%7B%0A++++++++++++++%22%40media+%28orientation%3Alandscape%29%22%3A+%2210px+0%22%0A++++++++++++%7D%2C%0A++++++++++++backgroundRepeat%3A+%22no-repeat%22%2C%0A++++++++++++backgroundSize%3A+30%0A++++++++++%7D%0A++++++++%7D%2C%0A++++++++%22%40media+%28prefersColorScheme%3Adark%29%22%3A+%7B%0A++++++++++bg%3A+%7B%0A++++++++++++%22%40media+%28maxWidth%3A767.98px%29%22%3A+%22%23363%22%2C%0A++++++++++++%22%40media+%28minWidth%3A768px%29%22%3A+%22%23633%22%0A++++++++++%7D%2C%0A++++++++++borderColor%3A+%22%23030%22%2C%0A++++++++++color%3A+%22%23eee%22%0A++++++++%7D%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=3&amp;e=5%2C6%2C9%2C15%2C17-18&amp;s=41%2C47%2C61%2C67%2C73&amp;i=179-182%2C201-204%2C223-226%2C245-248%2C268-271%2C290-293%2C312-314%2C333-335#t=3"
        style={{ "height": "calc(var(--viewport-height) * .25)" }}
      />
      <div
        style={{
          "display": "grid",
          "gap": 8,
          "gridTemplateColumns": "1fr 1fr",
          "padding": 8
        }}
      >
        <div>
          <h3>
            <code className={classNames.code}>$media</code>
          </h3>
          <Editor
            lang="js"
            rows={2}
          >
            {JSON.stringify(getConditionals(), null, 2)}
          </Editor>
        </div>
        <div>
          <h3>
            <code className={classNames.code}>$supports</code>
          </h3>
          <Editor
            lang="js"
            rows={2}
          >
            {JSON.stringify(getConditionals("supports"), null, 2)}
          </Editor>
        </div>
      </div>
    </>
  )
}
