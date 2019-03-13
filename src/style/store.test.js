/* eslint-disable */

import ava from "ava"

import { store } from "./store.js"

ava ("when imported", (t) => {
  const actual = store instanceof Map

  t.true (actual)
})
