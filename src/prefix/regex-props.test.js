/* eslint-disable */

import ava from "ava"

import { regexProps } from "./regex-props.js"

ava ("given a propertyName string matching an 'm' property", (t) => {
  const actual = regexProps ("boxSizing")
  const expect = actual.slice (1).indexOf ("boxSizing")

  t.is (expect, 0)
})

ava ("given a propertyName string matching an 'mo' property", (t) => {
  const actual = regexProps ("tabSize")
  const expect = actual.slice (1).indexOf ("tabSize")

  t.is (expect, 1)
})

ava ("given a propertyName string matching an 'ms' property", (t) => {
  const actual = regexProps ("textSpacing")
  const expect = actual.slice (1).indexOf ("textSpacing")

  t.is (expect, 2)
})

ava ("given a propertyName string matching an 'o' property", (t) => {
  const actual = regexProps ("objectPosition")
  const expect = actual.slice (1).indexOf ("objectPosition")

  t.is (expect, 3)
})

ava ("given a propertyName string matching a 'w' property (1)", (t) => {
  const actual = regexProps ("flexDirection")
  const expect = actual.slice (1).indexOf ("flexDirection")

  t.is (expect, 4)
})

ava ("given a propertyName string matching a 'w' property (2)", (t) => {
  const actual = regexProps ("transitionTimingFunction")
  const expect = actual.slice (1).indexOf ("transitionTimingFunction")

  t.is (expect, 4)
})

ava ("given a propertyName string matching a 'wm' property", (t) => {
  const actual = regexProps ("textDecorationStyle")
  const expect = actual.slice (1).indexOf ("textDecorationStyle")

  t.is (expect, 5)
})

ava ("given a propertyName string matching a 'wmms' property", (t) => {
  const actual = regexProps ("textSizeAdjust")
  const expect = actual.slice (1).indexOf ("textSizeAdjust")

  t.is (expect, 6)
})

ava ("given a propertyName string matching a 'wms' property", (t) => {
  const actual = regexProps ("scrollSnapPointsY")
  const expect = actual.slice (1).indexOf ("scrollSnapPointsY")

  t.is (expect, 7)
})

ava ("given a propertyName string matching a 'wo' property", (t) => {
  const actual = regexProps ("borderImage")
  const expect = actual.slice (1).indexOf ("borderImage")

  t.is (expect, 8)
})

ava ("given an `undefined` argument", (t) => {
  const actual = regexProps ()

  t.is (actual, null)
})
