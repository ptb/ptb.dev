/* eslint-disable */

import ava from "ava"

import { regexValues } from "./regex-values.js"

ava ("given a propertyValue string matching an 'm' value", (t) => {
  const actual = regexValues ("isolate-override")
  const expect = actual.slice (1).indexOf ("isolate-override")

  t.is (expect, 0)
})

ava ("given a propertyValue string matching a 'w' value", (t) => {
  const actual = regexValues ("zoom-in")
  const expect = actual.slice (1).indexOf ("zoom-in")

  t.is (expect, 1)
})

ava ("given a propertyValue string matching a 'wm' value", (t) => {
  const actual = regexValues ("fill-available")
  const expect = actual.slice (1).indexOf ("fill-available")

  t.is (expect, 2)
})

ava ("given a propertyValue string matching a 'wmo' value", (t) => {
  const actual = regexValues ("pixelated")
  const expect = actual.slice (1).indexOf ("pixelated")

  t.is (expect, 3)
})

ava ("given an `undefined` argument", (t) => {
  const actual = regexValues ()

  t.is (actual, null)
})
