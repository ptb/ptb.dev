/*
  eslint-disable
    react/prop-types
 */

import { Tablist } from "../../tabs/tablist.jsx"
import { Heading } from "./heading.jsx"
import classNames from "./side.css.js"
import { TocItem } from "./toc-item.jsx"

/**
  @typedef {typeof import ("react")} React
  */

/**
  `SideMenu` React component.

  @param {object} props
  - Component inputs.

  @param {string[]} props.labels
  - Array of strings representing the title of each `<Tab>`.

  @param {string} props.param
  - String representing the initial selected `<Tab>`.

  @param {string} props.selected
  - Current selected `<Tab>` index.

  @param {(index: string) => void} props.setParam
  - Get existing key/value pairs from `location.hash` and current
  selected `<Tab>` `index` then set in `location.hash`.

  @param {React.Dispatch<React.SetStateAction<string>>} props.setSelected
  - Set the `selected` `<Tab>` in response to keyboard or mouse input.

  @param {string[] | Record<string, string[]>} props.tabs
  - An array of strings or an object with arrays of strings as values
  identifying each element in the tab list that serves as a label for
  each of the tab panels and can be activated to display that panel.

  @returns {React.ReactElement}
    React component.
 */

export function SideMenu ({
  labels,
  param,
  selected,
  setParam,
  setSelected,
  tabs
}) {
  return (
    <>
      <aside className={classNames.side}>
        <Tablist
          classNames={classNames}
          group="toc"
          heading={Heading}
          initial={param}
          menuitem={TocItem}
          orientation="vertical"
          selected={selected}
          setSelected={setSelected}
          tabs={tabs}
          total={labels.length}
          updParams={setParam}
        />
      </aside>
      <label
        aria-label="Close menu"
        className={classNames.blur}
        htmlFor="menu"
      />
      <footer className={classNames.foot}>
        <div>
          Made With <abbr title="Love">❤️</abbr> in{" "}
          <abbr title="New Hampshire">NH</abbr>
        </div>
      </footer>
    </>
  )
}
