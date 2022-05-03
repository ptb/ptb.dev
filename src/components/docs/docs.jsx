/* eslint-disable max-lines-per-function */
import { useState } from "react"

import { useVisualViewport } from "../../hooks/use-visual-viewport.js"
import { Tabpanel, Tabpanels, useTabs } from "../tabs/tabs.jsx"
import {
  AtomicClasses,
  GroupedClasses,
  DeepMergeObjects,
  Introduction,
  StylesAreJSObjects
} from "./basics/index.js"
import classNames from "./docs.css.js"
import { ConvertLink } from "./head/convert-link.jsx"
import { DemoLink } from "./head/demo-link.jsx"
import { GitHubLink } from "./head/github-link.jsx"
import { Logo } from "./head/logo.jsx"
import { Menu } from "./head/menu.jsx"
import {
  ComplexSelectors,
  NestingSelector,
  PlaceholderClasses
} from "./selectors/index.js"
import {
  CSSProperties,
  FontFaceRules,
  KeyframesRules,
  MediaQueries,
  StoredVariables,
  VendorPrefixes
} from "./shorthand/index.js"
import { SideMenu } from "./side/side-menu.jsx"
import { FallbackArrayValues, SmartIntegers } from "./values/index.js"
import {
  WithCreateReactApp,
  WithGatsby,
  WithNextJs,
  WithTailwindCSS,
  WithVite,
  ZeroRuntimeOption
} from "./zero/index.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `@ptb/style` documentation component.

  @returns {React.ReactElement}
    React component.
 */

export function Docs () {
  const tabs = {
    "Basics": [
      "Introduction",
      "Styles Are JS Objects",
      "Deep Merge Objects",
      "Atomic Classes",
      "Grouped Classes"
    ],
    "Shorthand Keys": [
      "Stored Variables",
      "CSS Properties",
      "Media Queries",
      "Font Face Rules",
      "Keyframes Rules",
      "Vendor Prefixes"
    ],
    /* eslint-disable-next-line sort-keys */
    "Selectors": [
      "Complex Selectors",
      "Nesting Selector",
      "Placeholder Classes"
    ],
    "Values & Variables": ["Smart Integers", "Fallback Array Values"],
    /* eslint-disable-next-line sort-keys */
    "Zero–Runtime Option": [
      "Production Ready",
      "…with Create React App",
      "…with Gatsby",
      "…with Next.js",
      "…with Tailwind CSS",
      "…with Vite"
    ]
  }

  const { labels, param, selected, setParam, setSelected } = useTabs({
    "group": "toc",
    tabs
  })

  useVisualViewport()

  const [checked, setChecked] = useState(false)

  return (
    <div className={classNames.grid}>
      <input
        checked={checked}
        className={classNames.hide}
        id="menu"
        onChange={() => setChecked(!checked)}
        type="checkbox"
      />
      <header className={classNames.head}>
        <Menu />
        <Logo />
        <ConvertLink />
        <DemoLink />
        <GitHubLink />
      </header>
      <SideMenu
        labels={labels}
        param={param}
        selected={selected}
        setParam={setParam}
        setSelected={setSelected}
        tabs={tabs}
      />
      <main className={classNames.main}>
        <Tabpanels
          classNames={classNames}
          group="toc"
          labels={labels}
          selected={selected}
        >
          {[
            Introduction,
            StylesAreJSObjects,
            DeepMergeObjects,
            AtomicClasses,
            GroupedClasses,
            StoredVariables,
            CSSProperties,
            MediaQueries,
            FontFaceRules,
            KeyframesRules,
            VendorPrefixes,
            ComplexSelectors,
            NestingSelector,
            PlaceholderClasses,
            SmartIntegers,
            FallbackArrayValues,
            ZeroRuntimeOption,
            WithCreateReactApp,
            WithGatsby,
            WithNextJs,
            WithTailwindCSS,
            WithVite
          ].map(function (Component, i) {
            return (
              <Tabpanel key={i}>
                <Component />
              </Tabpanel>
            )
          })}
        </Tabpanels>
      </main>
    </div>
  )
}
