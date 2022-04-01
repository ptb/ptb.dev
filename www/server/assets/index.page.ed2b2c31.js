"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var style = require("@ptb/style");
var cssbeautify = require("cssbeautify");
var react = require("react");
var server = require("react-dom/server");
var reactRunner = require("react-runner");
var editor = require("./editor.e60e46c9.js");
var useTabs = require("./use-tabs.92d9d407.js");
var jsxRuntime = require("react/jsx-runtime");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var cssbeautify__default = /* @__PURE__ */ _interopDefaultLegacy(cssbeautify);
var classNames$1 = {
  ":root": "ae22hd aeyhgy af2lud af6z1x af7u8f afad0u affi1y afpkmk afyqpc c72klf c7c2s1 e5p9ey k0rwal kcv30j",
  "grid": "orthw2",
  "radio": "duh7by",
  "sublist": "or49rs",
  "tab": "or77o3 ord5mr orfyby orjuoq ormcn8 orztaz",
  "tablist": "orbdsq orctbj oriq7b orshze ortniz orud0z",
  "tabpanel": "orctww ori8ey ornd3m ornomo orp1wz"
};
var classNames = {
  "editor": "kd430i",
  "html": "kdel1p",
  "internal": "kdwcsj",
  "item": "or6eiw",
  "minified": "kdbcwx",
  "preview": "kdsaqd",
  "styles": "kdrt8e"
};
function TabItem({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: [classNames.item, style.get(classNames, useTabs.getId(children))].join(" "),
    children
  });
}
function Demo({
  children
}) {
  (style.canUseDom() ? window : global).css = style.css;
  const tabs = {
    "Input": ["Editor"],
    "Output": ["Preview", "HTML", "Styles", "Minified", "Internal"]
  };
  const {
    labels,
    param,
    selected,
    setParam,
    setSelected
  } = useTabs.useTabs({
    "group": "t",
    "initial": "1",
    tabs
  });
  const params = {};
  if (style.canUseDom() && window.location) {
    for (const [k, v] of new URLSearchParams(window.location.search)) {
      params[k] = v;
    }
  }
  const setSearch = editor.useParam("x", true)[1];
  const [code, setCode] = react.useState(children);
  const {
    element
  } = reactRunner.useRunner({
    code
  });
  const [source, setSource] = react.useState("");
  const [styles, setStyles] = react.useState("");
  const [minify, setMinify] = react.useState("");
  const [inside, setInside] = react.useState("");
  const handleInput = react.useCallback(function onInput(e) {
    setCode(e.target.value || "");
  }, [setCode]);
  const handleSource = react.useCallback(function handleSource2(input) {
    try {
      return style.isNull(input) ? source : server.renderToStaticMarkup(input);
    } catch (e) {
      return source;
    }
  }, [source]);
  const handleUpdate = react.useCallback(function handleUpdate2() {
    style.store.clear();
    setSource(handleSource(element));
    const result = style.getStyles();
    setStyles(cssbeautify__default["default"](result));
    setMinify(result);
    setInside(JSON.stringify(style.sortJSON([...style.store.values()].reduce(function(results, v) {
      return results.concat([...v.values()]);
    }, [])), null, 2));
    setSearch(code);
  }, [code, element, handleSource, setSearch]);
  react.useEffect(function() {
    if (children !== code) {
      setCode(children);
      handleUpdate();
    }
  }, [children]);
  react.useEffect(function() {
    handleUpdate();
  }, [element, handleUpdate]);
  editor.useVisualViewport();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: classNames$1.grid,
    children: [/* @__PURE__ */ jsxRuntime.jsx(useTabs.Tablist, {
      classNames: classNames$1,
      group: "t",
      initial: param,
      menuitem: TabItem,
      orientation: "horizontal",
      selected,
      setSelected,
      tabs,
      total: labels.length,
      updParams: setParam
    }), /* @__PURE__ */ jsxRuntime.jsxs(useTabs.Tabpanels, {
      classNames: classNames$1,
      group: "t",
      labels,
      selected,
      children: [/* @__PURE__ */ jsxRuntime.jsx(useTabs.Tabpanel, {
        children: /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
          "data-line": params.e,
          id: "editor",
          onInput: handleInput,
          children: code
        })
      }), /* @__PURE__ */ jsxRuntime.jsx(useTabs.Tabpanel, {
        children: /* @__PURE__ */ jsxRuntime.jsx("div", {
          dangerouslySetInnerHTML: {
            "__html": source
          }
        })
      }), /* @__PURE__ */ jsxRuntime.jsx(useTabs.Tabpanel, {
        children: /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
          "data-line": params.h,
          id: "html",
          lang: "html",
          readOnly: true,
          children: source
        })
      }), /* @__PURE__ */ jsxRuntime.jsx(useTabs.Tabpanel, {
        children: /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
          "data-line": params.s,
          id: "styles",
          lang: "css",
          readOnly: true,
          children: styles
        })
      }), /* @__PURE__ */ jsxRuntime.jsx(useTabs.Tabpanel, {
        children: /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
          "data-line": params.m,
          id: "minify",
          lang: "css",
          readOnly: true,
          children: minify
        })
      }), /* @__PURE__ */ jsxRuntime.jsx(useTabs.Tabpanel, {
        children: /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
          "data-line": params.i,
          id: "internal",
          lang: "js",
          readOnly: true,
          children: inside
        })
      })]
    })]
  });
}
function DemoPage({
  urlParsed
}) {
  let children = style.get(urlParsed, "search.x", [`export default function () {`, `  return (`, `    <span`, `      className={css({`, `        `, `      })}`, `    >`, `      Buy Now!`, `    </span>`, `  )`, `}`].join("\n"));
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
  return /* @__PURE__ */ jsxRuntime.jsx(Demo, {
    children
  });
}
exports["default"] = DemoPage;
