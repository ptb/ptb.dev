"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var style = require("@ptb/style");
var react = require("react");
var editor = require("./editor.e60e46c9.js");
var postcss = require("postcss");
var jsxRuntime = require("react/jsx-runtime");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var postcss__default = /* @__PURE__ */ _interopDefaultLegacy(postcss);
var classNames = {
  "cssBlock": "ekevxn elho4u enho4u eoho4u orw3bk",
  "cssLabel": "h9ot7r or589g",
  "grid": "h3fp4h h3zkan h4xkx0 or94w7",
  "head": "or1a3x or6du8",
  "icon": "orxm56",
  "jsBlock": "h90ev9 h9rw8l ornomo",
  "jsLabel": "h908ec h93ery orr60d",
  "vscode": "orlhtg orsngp orva8j orwrkq"
};
function cssToJs(input) {
  if (style.isArr(input)) {
    return input.reduce(function(output, node) {
      switch (node.type) {
        case "decl": {
          const prop = style.camelCase(node.prop);
          return style.merge(output, {
            [prop]: node.value
          });
        }
        case "rule": {
          const selector = node.selector.replace(/[\n\r\s]+/gu, " ");
          return style.merge(output, {
            [selector]: cssToJs(node.nodes)
          });
        }
        case "atrule": {
          if (["media", "supports"].includes(node.name)) {
            const atrule = ["@", node.name, " ", node.params].join("");
            return style.merge(output, {
              [atrule]: cssToJs(node.nodes)
            });
          }
          return output;
        }
        default:
          return output;
      }
    }, {});
  }
  if (style.isObj(input) && input.type === "root") {
    return cssToJs(input.nodes);
  }
  if (style.isStr(input)) {
    return cssToJs(postcss__default["default"]().process(input, {
      "from": void 0
    }).sync().root.toJSON());
  }
  return {};
}
function Convert({
  children = " "
}) {
  const setSearch = editor.useParam("x", true)[1];
  const [input, setInput] = react.useState(children);
  const [output, setOutput] = react.useState("{}");
  function handleSource(value) {
    try {
      return JSON.stringify(style.sortJSON(cssToJs(value)), null, 2);
    } catch (e) {
      return "{}";
    }
  }
  const handleUpdate = style.debounce(function handleUpdate2() {
    setOutput(handleSource(input));
    setSearch(input);
  }, 350);
  react.useEffect(function() {
    if (children !== input) {
      setInput(children);
      handleUpdate();
    }
  }, [children]);
  react.useEffect(function() {
    handleUpdate();
  }, [handleUpdate]);
  const onInput = react.useCallback(function onInput2(e) {
    setInput(e.target.value || "");
  }, [setInput]);
  editor.useVisualViewport();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: classNames.grid,
    children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
      className: style.cx(classNames.head, classNames.cssLabel),
      children: /* @__PURE__ */ jsxRuntime.jsx("span", {
        children: "CSS Input"
      })
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: style.cx(classNames.head, classNames.jsLabel, classNames.vscode),
      children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
        children: "JS Output"
      }), /* @__PURE__ */ jsxRuntime.jsx("a", {
        href: "https://marketplace.visualstudio.com/items?itemName=ptb.ptb-css-to-js",
        rel: "noreferrer",
        target: "_blank",
        children: "Extension for Visual Studio Code"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: classNames.cssBlock,
      children: /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
        autoFocus: true,
        onInput,
        wrap: false,
        children: input
      })
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: classNames.jsBlock,
      children: /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
        copyOnClick: true,
        readOnly: true,
        wrap: false,
        children: output
      })
    })]
  });
}
function ConvertPage({
  urlParsed
}) {
  let children = style.get(urlParsed, "search.x", " ");
  if (style.canUseDom() && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const x = params.get("x");
    if (params.has("x") && style.isStr(x)) {
      try {
        children = x;
      } catch (e) {
        console.error(e);
      }
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsx(Convert, {
    children
  });
}
exports["default"] = ConvertPage;
