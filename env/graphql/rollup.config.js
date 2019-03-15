import commonjs from "rollup-plugin-commonjs"
import nodeResolve from "rollup-plugin-node-resolve"
import replace from "rollup-plugin-replace"
import { terser } from "rollup-plugin-terser"

const plugins = [
  replace ({
    "process.env.NODE_ENV": JSON.stringify ("production")
  }),
  nodeResolve ({
    "browser": true,
    "extensions": [".mjs"],
    "jsnext": true,
    "main": true,
    "module": true
  }),
  commonjs ({
    "include": "node_modules/**",
    "sourceMap": false
  }),
  terser ()
]

export default [
  {
    "input": "graphql-js/dist/graphql.mjs",
    "output": {
      "file": "graphql.js",
      "format": "esm"
    },
    plugins
  },
  {
    "input": "graphql-js/dist/index.mjs",
    "output": {
      "file": "index.js",
      "format": "esm"
    },
    plugins
  }
]
