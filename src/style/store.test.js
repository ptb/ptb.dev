/* eslint-disable */

import ava from "ava"

import { store } from "./store.js"

ava ("when `store` module is imported", (t) => {
  const actual = store instanceof Map

  t.true (actual)
})
