"use strict";
var __defProp = Object.defineProperty;
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var react = require("react");
var server = require("react-dom/server");
var vitePluginSsr = require("vite-plugin-ssr");
var jsxRuntime = require("react/jsx-runtime");
const Context = react.createContext(void 0);
function PageContextProvider({
  children,
  context
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(Context.Provider, {
    value: context,
    children
  });
}
const passToClient = ["pageProps", "urlParsed", "urlPathname"];
function render(context) {
  const {
    Page,
    pageProps,
    urlParsed
  } = context;
  const children = server.renderToString(/* @__PURE__ */ jsxRuntime.jsx(react.StrictMode, {
    children: /* @__PURE__ */ jsxRuntime.jsx(PageContextProvider, {
      context,
      children: /* @__PURE__ */ jsxRuntime.jsx(Page, __spreadValues({
        urlParsed
      }, pageProps))
    })
  }));
  const documentHtml = vitePluginSsr.escapeInject`<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml"><head><meta charset="utf-8"/><title>@ptb/style</title><meta content="CSS compiler with a powerful, intuitive API that makes authoring CSS faster and easier." name="description"/><meta content="initial-scale=1,width=device-width" name="viewport"/><meta content="hsl(240,5%,15%)" media="(prefers-color-scheme:dark)" name="theme-color"/><meta content="hsl(240,5%,85%)" media="(prefers-color-scheme:light)" name="theme-color"/><link as="font" crossorigin href="/fonts/pt-serif-400.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/pt-serif-700.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/source-code-pro-400.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/source-code-pro-700.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/source-sans-pro-400.woff2" rel="preload" type="font/woff2"/><link as="font" crossorigin href="/fonts/source-sans-pro-700.woff2" rel="preload" type="font/woff2"/></head><body><div id="root">${vitePluginSsr.dangerouslySkipEscape(children)}</div></body></html>`;
  return {
    documentHtml,
    "pageContext": {}
  };
}
exports.passToClient = passToClient;
exports.render = render;
