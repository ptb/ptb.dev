"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var style = require("@ptb/style");
var react = require("react");
var jsxRuntime = require("react/jsx-runtime");
var editor = require("./editor.e60e46c9.js");
function getId(value) {
  return (style.isStr(value) ? value : "").trim().toLowerCase().replace(/[^0-9a-z]/gu, "-");
}
const Tab = react.forwardRef(function Tab2(_a, ref) {
  var _b = _a, {
    as: Component = "li",
    classNames = {},
    handleClick,
    index,
    label,
    menuitem: MenuItem,
    onKeyDown,
    selected
  } = _b, props = __objRest(_b, [
    "as",
    "classNames",
    "handleClick",
    "index",
    "label",
    "menuitem",
    "onKeyDown",
    "selected"
  ]);
  const id = getId(label);
  function onClick() {
    handleClick(index);
  }
  return /* @__PURE__ */ jsxRuntime.jsx(Component, {
    role: "none",
    children: /* @__PURE__ */ jsxRuntime.jsx("label", __spreadProps(__spreadValues({
      "aria-controls": `${id}-panel`,
      "aria-selected": String(index) === selected,
      className: classNames.tab,
      htmlFor: `${id}-input`,
      id: `${id}-tab`,
      onClick,
      onKeyDown,
      ref,
      role: "tab",
      tabIndex: String(index) === selected ? 0 : -1
    }, props), {
      children: style.isFn(MenuItem) ? /* @__PURE__ */ jsxRuntime.jsx(MenuItem, {
        index,
        children: label
      }) : label
    }))
  });
});
function Tablist(_c) {
  var _d = _c, {
    as: Component = "ul",
    classNames = {},
    group,
    heading: Heading,
    initial,
    menuitem,
    orientation = "horizontal",
    selected,
    setSelected,
    tabs,
    total,
    updParams
  } = _d, props = __objRest(_d, [
    "as",
    "classNames",
    "group",
    "heading",
    "initial",
    "menuitem",
    "orientation",
    "selected",
    "setSelected",
    "tabs",
    "total",
    "updParams"
  ]);
  const [focused, setFocused] = react.useState(Number(initial));
  const refs = react.useMemo(function() {
    return Array.from(Array(total).keys()).map(function() {
      return {
        "current": null
      };
    });
  }, [total]);
  const handleClick = react.useCallback(function handleClick2(index) {
    setFocused(index);
    setSelected(String(index));
    updParams(String(index));
  }, [setFocused, setSelected, updParams]);
  const onKeyDown = react.useCallback(function onKeyDown2(e) {
    let index = focused;
    switch (e.code) {
      case "ArrowDown":
        if (orientation === "vertical") {
          e.preventDefault();
          index = (focused + 1 + total) % total;
        }
        break;
      case "ArrowLeft":
        if (orientation === "horizontal") {
          e.preventDefault();
          index = (focused - 1 + total) % total;
        }
        break;
      case "ArrowRight":
        if (orientation === "horizontal") {
          e.preventDefault();
          index = (focused + 1 + total) % total;
        }
        break;
      case "ArrowUp":
        if (orientation === "vertical") {
          e.preventDefault();
          index = (focused - 1 + total) % total;
        }
        break;
      case "End":
        e.preventDefault();
        index = total - 1;
        break;
      case "Home":
        e.preventDefault();
        index = 0;
        break;
      case "Enter":
      case "Space":
        e.preventDefault();
        setSelected(String(index));
        updParams(String(index));
        break;
    }
    setFocused(index);
    const ref = refs[index];
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [focused, orientation, refs, setFocused, setSelected, total, updParams]);
  let n = 0;
  function TabFn(label) {
    const index = n++;
    return /* @__PURE__ */ jsxRuntime.jsx(Tab, {
      classNames,
      handleClick,
      index,
      label,
      menuitem,
      onKeyDown,
      ref: refs[index],
      selected
    }, getId(label));
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Component, __spreadProps(__spreadValues({
    "aria-label": group,
    "aria-orientation": orientation,
    className: classNames.tablist,
    role: "tablist"
  }, props), {
    children: [style.isObj(tabs) && style.toPairs(tabs).map(function([label, list]) {
      return /* @__PURE__ */ jsxRuntime.jsxs("li", {
        children: [style.isFn(Heading) && /* @__PURE__ */ jsxRuntime.jsx(Heading, {
          children: label
        }), /* @__PURE__ */ jsxRuntime.jsx(Component, {
          className: classNames.sublist,
          children: list.map(TabFn)
        })]
      }, label);
    }), style.isArr(tabs) && tabs.map(TabFn)]
  }));
}
function Tabpanel(_e) {
  var _f = _e, {
    as: Component = "section",
    children,
    classNames = {},
    group,
    index,
    label,
    selected
  } = _f, props = __objRest(_f, [
    "as",
    "children",
    "classNames",
    "group",
    "index",
    "label",
    "selected"
  ]);
  const id = getId(label);
  const groupName = getId(group);
  return /* @__PURE__ */ jsxRuntime.jsxs(react.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("input", {
      className: classNames.radio,
      defaultChecked: index === selected,
      id: `${id}-input`,
      name: groupName,
      type: "radio"
    }), /* @__PURE__ */ jsxRuntime.jsx(Component, __spreadProps(__spreadValues({
      "aria-hidden": index !== selected,
      "aria-labelledby": `${id}-tab`,
      className: classNames.tabpanel,
      id: `${id}-panel`,
      role: "tabpanel",
      tabIndex: index === selected ? 0 : -1
    }, props), {
      children
    }))]
  });
}
function Tabpanels({
  children,
  classNames,
  group,
  labels,
  selected
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(react.Fragment, {
    children: react.Children.map(children, function(child, index) {
      return react.cloneElement(child, {
        classNames,
        group,
        "index": String(index),
        "key": labels[index],
        "label": labels[index],
        selected
      });
    })
  });
}
function useTabs({
  group = "t",
  initial = "0",
  tabs = []
}) {
  const [param, setParam] = editor.useParam(group);
  const [selected, setSelected] = react.useState(param || initial);
  const labels = react.useMemo(function() {
    if (style.isArr(tabs)) {
      return tabs;
    }
    if (style.isObj(tabs)) {
      return Object.values(tabs).reduce(function(results, tab) {
        return results.concat(tab);
      }, []);
    }
    return [];
  }, [tabs]);
  return {
    labels,
    param,
    selected,
    setParam,
    setSelected
  };
}
exports.Tablist = Tablist;
exports.Tabpanel = Tabpanel;
exports.Tabpanels = Tabpanels;
exports.getId = getId;
exports.useTabs = useTabs;
