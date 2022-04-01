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
var react = require("react");
var style = require("@ptb/style");
var jsxRuntime = require("react/jsx-runtime");
function useVisualViewport({
  height,
  width
} = {
  "height": "--viewport-height",
  "width": "--viewport-width"
}) {
  const updateViewport = react.useCallback(function updateViewport2() {
    if (typeof window !== "undefined" && typeof document !== "undefined" && typeof document.documentElement !== "undefined") {
      const doc = document.documentElement.style;
      if (typeof window.visualViewport === "undefined") {
        doc.setProperty(height, `${window.innerHeight}px`);
        doc.setProperty(width, `${window.innerWidth}px`);
      } else {
        doc.setProperty(height, `${window.visualViewport.height}px`);
        doc.setProperty(width, `${window.visualViewport.width}px`);
      }
    }
  }, [height, width]);
  react.useEffect(function() {
    if (typeof window !== "undefined") {
      updateViewport();
      if (typeof window.visualViewport === "undefined") {
        window.addEventListener("resize", updateViewport);
        return function() {
          window.removeEventListener("resize", updateViewport);
        };
      }
      window.visualViewport.addEventListener("resize", updateViewport);
      return function() {
        window.visualViewport.removeEventListener("resize", updateViewport);
      };
    }
  }, [updateViewport]);
  return {
    height,
    width
  };
}
function useParam(key, isSearch) {
  const getParams = react.useCallback(function getParams2() {
    if (style.canUseDom() && window.location) {
      if (isSearch) {
        const params = {};
        for (const [k, v] of new URLSearchParams(window.location.search)) {
          params[k] = v;
        }
        return params;
      }
      return new URL(window.location.href).hash.slice(1).split("&").reduce(function(items, item) {
        if (item) {
          const [k, v] = item.split("=");
          if (style.isStr(k)) {
            items[k] = style.isStr(v) ? v : "";
          }
        }
        return items;
      }, {});
    }
    return {};
  }, [isSearch]);
  const getInitial = react.useCallback(function getInitial2() {
    return style.get(getParams(), key, "");
  }, [getParams, key]);
  const [param, setInitial] = react.useState(getInitial());
  const setParam = react.useCallback(function setParam2(input) {
    if (style.canUseDom()) {
      const hash = style.toPairs(__spreadProps(__spreadValues({}, getParams()), {
        [key]: input
      })).reduce(function(items, [k, v]) {
        return items.concat([k, v].join("="));
      }, []).join("&");
      if (isSearch) {
        const url = new URL(window.location.href);
        url.searchParams.set(key, input);
        try {
          window.history.replaceState(null, "", url);
        } catch (err) {
          console.error(err);
        }
        setInitial(input);
      } else {
        try {
          window.history.pushState(null, "", `#${hash}`);
        } catch (err) {
          console.error(err);
        }
      }
    }
  }, [getParams, isSearch, key]);
  const updInitial = react.useCallback(function updInitial2() {
    setInitial(getInitial());
  }, [getInitial]);
  react.useEffect(function() {
    if (!isSearch) {
      window.addEventListener("hashchange", updInitial);
      return function() {
        window.removeEventListener("hashchange", updInitial);
      };
    }
  }, [isSearch, updInitial]);
  return [param, setParam];
}
/*! PrismJS | @copyright Lea Verou | @license MIT | @link https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+css-extras+javadoclike+jsdoc+jsx+typescript&plugins=line-highlight+line-numbers+file-highlight | @version 1.27.0 */
const e = function(e2) {
  var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, a = {}, r = {
    manual: e2.Prism && e2.Prism.manual,
    disableWorkerMessageHandler: e2.Prism && e2.Prism.disableWorkerMessageHandler,
    util: {
      encode: function e3(t2) {
        return t2 instanceof i ? new i(t2.type, e3(t2.content), t2.alias) : Array.isArray(t2) ? t2.map(e3) : t2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function(e3) {
        return Object.prototype.toString.call(e3).slice(8, -1);
      },
      objId: function(e3) {
        return e3.__id || Object.defineProperty(e3, "__id", {
          value: ++n
        }), e3.__id;
      },
      clone: function e3(t2, n2) {
        var a2, i2;
        switch (n2 = n2 || {}, r.util.type(t2)) {
          case "Object":
            if (i2 = r.util.objId(t2), n2[i2])
              return n2[i2];
            for (var s2 in a2 = {}, n2[i2] = a2, t2)
              t2.hasOwnProperty(s2) && (a2[s2] = e3(t2[s2], n2));
            return a2;
          case "Array":
            return i2 = r.util.objId(t2), n2[i2] ? n2[i2] : (a2 = [], n2[i2] = a2, t2.forEach(function(t3, r2) {
              a2[r2] = e3(t3, n2);
            }), a2);
          default:
            return t2;
        }
      },
      getLanguage: function(e3) {
        for (; e3; ) {
          var n2 = t.exec(e3.className);
          if (n2)
            return n2[1].toLowerCase();
          e3 = e3.parentElement;
        }
        return "none";
      },
      setLanguage: function(e3, n2) {
        e3.className = e3.className.replace(RegExp(t, "gi"), ""), e3.classList.add("language-" + n2);
      },
      currentScript: function() {
        if (typeof document == "undefined")
          return null;
        if ("currentScript" in document)
          return document.currentScript;
        try {
          throw new Error();
        } catch (a2) {
          var e3 = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a2.stack) || [])[1];
          if (e3) {
            var t2 = document.getElementsByTagName("script");
            for (var n2 in t2)
              if (t2[n2].src == e3)
                return t2[n2];
          }
          return null;
        }
      },
      isActive: function(e3, t2, n2) {
        for (var a2 = "no-" + t2; e3; ) {
          var r2 = e3.classList;
          if (r2.contains(t2))
            return true;
          if (r2.contains(a2))
            return false;
          e3 = e3.parentElement;
        }
        return !!n2;
      }
    },
    languages: {
      plain: a,
      plaintext: a,
      text: a,
      txt: a,
      extend: function(e3, t2) {
        var n2 = r.util.clone(r.languages[e3]);
        for (var a2 in t2)
          n2[a2] = t2[a2];
        return n2;
      },
      insertBefore: function(e3, t2, n2, a2) {
        var i2 = (a2 = a2 || r.languages)[e3], s2 = {};
        for (var o2 in i2)
          if (i2.hasOwnProperty(o2)) {
            if (o2 == t2)
              for (var l2 in n2)
                n2.hasOwnProperty(l2) && (s2[l2] = n2[l2]);
            n2.hasOwnProperty(o2) || (s2[o2] = i2[o2]);
          }
        var u2 = a2[e3];
        return a2[e3] = s2, r.languages.DFS(r.languages, function(t3, n3) {
          n3 === u2 && t3 != e3 && (this[t3] = s2);
        }), s2;
      },
      DFS: function e3(t2, n2, a2, i2) {
        i2 = i2 || {};
        var s2 = r.util.objId;
        for (var o2 in t2)
          if (t2.hasOwnProperty(o2)) {
            n2.call(t2, o2, t2[o2], a2 || o2);
            var l2 = t2[o2], u2 = r.util.type(l2);
            u2 !== "Object" || i2[s2(l2)] ? u2 !== "Array" || i2[s2(l2)] || (i2[s2(l2)] = true, e3(l2, n2, o2, i2)) : (i2[s2(l2)] = true, e3(l2, n2, null, i2));
          }
      }
    },
    plugins: {},
    highlightAll: function(e3, t2) {
      r.highlightAllUnder(document, e3, t2);
    },
    highlightAllUnder: function(e3, t2, n2) {
      var a2 = {
        callback: n2,
        container: e3,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      r.hooks.run("before-highlightall", a2), a2.elements = Array.prototype.slice.apply(a2.container.querySelectorAll(a2.selector)), r.hooks.run("before-all-elements-highlight", a2);
      for (var i2, s2 = 0; i2 = a2.elements[s2++]; )
        r.highlightElement(i2, t2 === true, a2.callback);
    },
    highlightElement: function(t2, n2, a2) {
      var i2 = r.util.getLanguage(t2), s2 = r.languages[i2];
      r.util.setLanguage(t2, i2);
      var o2 = t2.parentElement;
      o2 && o2.nodeName.toLowerCase() === "pre" && r.util.setLanguage(o2, i2);
      var l2 = {
        element: t2,
        language: i2,
        grammar: s2,
        code: t2.textContent
      };
      function u2(e3) {
        l2.highlightedCode = e3, r.hooks.run("before-insert", l2), l2.element.innerHTML = l2.highlightedCode, r.hooks.run("after-highlight", l2), r.hooks.run("complete", l2), a2 && a2.call(l2.element);
      }
      if (r.hooks.run("before-sanity-check", l2), (o2 = l2.element.parentElement) && o2.nodeName.toLowerCase() === "pre" && !o2.hasAttribute("tabindex") && o2.setAttribute("tabindex", "0"), !l2.code)
        return r.hooks.run("complete", l2), void (a2 && a2.call(l2.element));
      if (r.hooks.run("before-highlight", l2), l2.grammar) {
        if (n2 && e2.Worker) {
          var c2 = new Worker(r.filename);
          c2.onmessage = function(e3) {
            u2(e3.data);
          }, c2.postMessage(JSON.stringify({
            language: l2.language,
            code: l2.code,
            immediateClose: true
          }));
        } else
          u2(r.highlight(l2.code, l2.grammar, l2.language));
      } else
        u2(r.util.encode(l2.code));
    },
    highlight: function(e3, t2, n2) {
      var a2 = {
        code: e3,
        grammar: t2,
        language: n2
      };
      if (r.hooks.run("before-tokenize", a2), !a2.grammar)
        throw new Error('The language "' + a2.language + '" has no grammar.');
      return a2.tokens = r.tokenize(a2.code, a2.grammar), r.hooks.run("after-tokenize", a2), i.stringify(r.util.encode(a2.tokens), a2.language);
    },
    tokenize: function(e3, t2) {
      var n2 = t2.rest;
      if (n2) {
        for (var a2 in n2)
          t2[a2] = n2[a2];
        delete t2.rest;
      }
      var r2 = new l();
      return u(r2, r2.head, e3), o(e3, r2, t2, r2.head, 0), function(e4) {
        var t3 = [], n3 = e4.head.next;
        for (; n3 !== e4.tail; )
          t3.push(n3.value), n3 = n3.next;
        return t3;
      }(r2);
    },
    hooks: {
      all: {},
      add: function(e3, t2) {
        var n2 = r.hooks.all;
        n2[e3] = n2[e3] || [], n2[e3].push(t2);
      },
      run: function(e3, t2) {
        var n2 = r.hooks.all[e3];
        if (n2 && n2.length)
          for (var a2, i2 = 0; a2 = n2[i2++]; )
            a2(t2);
      }
    },
    Token: i
  };
  function i(e3, t2, n2, a2) {
    this.type = e3, this.content = t2, this.alias = n2, this.length = 0 | (a2 || "").length;
  }
  function s(e3, t2, n2, a2) {
    e3.lastIndex = t2;
    var r2 = e3.exec(n2);
    if (r2 && a2 && r2[1]) {
      var i2 = r2[1].length;
      r2.index += i2, r2[0] = r2[0].slice(i2);
    }
    return r2;
  }
  function o(e3, t2, n2, a2, l2, d2) {
    for (var p2 in n2)
      if (n2.hasOwnProperty(p2) && n2[p2]) {
        var g2 = n2[p2];
        g2 = Array.isArray(g2) ? g2 : [g2];
        for (var h = 0; h < g2.length; ++h) {
          if (d2 && d2.cause == p2 + "," + h)
            return;
          var f = g2[h], m = f.inside, b = !!f.lookbehind, y = !!f.greedy, v = f.alias;
          if (y && !f.pattern.global) {
            var S = f.pattern.toString().match(/[imsuy]*$/)[0];
            f.pattern = RegExp(f.pattern.source, S + "g");
          }
          for (var k = f.pattern || f, A = a2.next, F = l2; A !== t2.tail && !(d2 && F >= d2.reach); F += A.value.length, A = A.next) {
            var w = A.value;
            if (t2.length > e3.length)
              return;
            if (!(w instanceof i)) {
              var x, E = 1;
              if (y) {
                if (!(x = s(k, F, e3, b)) || x.index >= e3.length)
                  break;
                var T = x.index, _ = x.index + x[0].length, L = F;
                for (L += A.value.length; T >= L; )
                  L += (A = A.next).value.length;
                if (F = L -= A.value.length, A.value instanceof i)
                  continue;
                for (var $ = A; $ !== t2.tail && (L < _ || typeof $.value == "string"); $ = $.next)
                  E++, L += $.value.length;
                E--, w = e3.slice(F, L), x.index -= F;
              } else if (!(x = s(k, 0, w, b)))
                continue;
              T = x.index;
              var R = x[0], O = w.slice(0, T), C = w.slice(T + R.length), D = F + w.length;
              d2 && D > d2.reach && (d2.reach = D);
              var N = A.prev;
              if (O && (N = u(t2, N, O), F += O.length), c(t2, N, E), A = u(t2, N, new i(p2, m ? r.tokenize(R, m) : R, v, R)), C && u(t2, A, C), E > 1) {
                var I = {
                  cause: p2 + "," + h,
                  reach: D
                };
                o(e3, t2, n2, A.prev, F, I), d2 && I.reach > d2.reach && (d2.reach = I.reach);
              }
            }
          }
        }
      }
  }
  function l() {
    var e3 = {
      value: null,
      prev: null,
      next: null
    }, t2 = {
      value: null,
      prev: e3,
      next: null
    };
    e3.next = t2, this.head = e3, this.tail = t2, this.length = 0;
  }
  function u(e3, t2, n2) {
    var a2 = t2.next, r2 = {
      value: n2,
      prev: t2,
      next: a2
    };
    return t2.next = r2, a2.prev = r2, e3.length++, r2;
  }
  function c(e3, t2, n2) {
    for (var a2 = t2.next, r2 = 0; r2 < n2 && a2 !== e3.tail; r2++)
      a2 = a2.next;
    t2.next = a2, a2.prev = t2, e3.length -= r2;
  }
  if (e2.Prism = r, i.stringify = function e3(t2, n2) {
    if (typeof t2 == "string")
      return t2;
    if (Array.isArray(t2)) {
      var a2 = "";
      return t2.forEach(function(t3) {
        a2 += e3(t3, n2);
      }), a2;
    }
    var i2 = {
      type: t2.type,
      content: e3(t2.content, n2),
      tag: "span",
      classes: ["token", t2.type],
      attributes: {},
      language: n2
    }, s2 = t2.alias;
    s2 && (Array.isArray(s2) ? Array.prototype.push.apply(i2.classes, s2) : i2.classes.push(s2)), r.hooks.run("wrap", i2);
    var o2 = "";
    for (var l2 in i2.attributes)
      o2 += " " + l2 + '="' + (i2.attributes[l2] || "").replace(/"/g, "&quot;") + '"';
    return "<" + i2.tag + ' class="' + i2.classes.join(" ") + '"' + o2 + ">" + i2.content + "</" + i2.tag + ">";
  }, !e2.document)
    return e2.addEventListener ? (r.disableWorkerMessageHandler || e2.addEventListener("message", function(t2) {
      var n2 = JSON.parse(t2.data), a2 = n2.language, i2 = n2.code, s2 = n2.immediateClose;
      e2.postMessage(r.highlight(i2, r.languages[a2], a2)), s2 && e2.close();
    }, false), r) : r;
  var d = r.util.currentScript();
  function p() {
    r.manual || r.highlightAll();
  }
  if (d && (r.filename = d.src, d.hasAttribute("data-manual") && (r.manual = true)), !r.manual) {
    var g = document.readyState;
    g === "loading" || g === "interactive" && d && d.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16);
  }
  return r;
}(typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope ? self : {});
e.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
}, e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup, e.hooks.add("wrap", function(e2) {
  e2.type === "entity" && (e2.attributes.title = e2.content.replace(/&amp;/, "&"));
}), Object.defineProperty(e.languages.markup.tag, "addInlined", {
  value: function(t, n) {
    var a = {};
    a["language-" + n] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: e.languages[n]
    }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var r = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: a
      }
    };
    r["language-" + n] = {
      pattern: /[\s\S]+/,
      inside: e.languages[n]
    };
    var i = {};
    i[t] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return t;
      }), "i"),
      lookbehind: true,
      greedy: true,
      inside: r
    }, e.languages.insertBefore("markup", "cdata", i);
  }
}), Object.defineProperty(e.languages.markup.tag, "addAttribute", {
  value: function(t, n) {
    e.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(/(^|["'\s])/.source + "(?:" + t + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
      lookbehind: true,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [n, "language-" + n],
              inside: e.languages[n]
            },
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
}), e.languages.html = e.languages.markup, e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, e.languages.xml = e.languages.extend("markup", {}), e.languages.ssml = e.languages.xml, e.languages.atom = e.languages.xml, e.languages.rss = e.languages.xml, function(e2) {
  var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  e2.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + t.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + t.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    string: {
      pattern: t,
      greedy: true
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    punctuation: /[(){};:,]/
  }, e2.languages.css.atrule.inside.rest = e2.languages.css;
  var n = e2.languages.markup;
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
}(e), e.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
}, e.languages.javascript = e.languages.extend("clike", {
  "class-name": [e.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  keyword: [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
    lookbehind: true
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), e.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: "language-regex",
        inside: e.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: e.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: e.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: e.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: e.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), e.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: true,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: e.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: "property"
  }
}), e.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: "property"
  }
}), e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"), e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), e.languages.js = e.languages.javascript, function(e2) {
  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: "punctuation",
    inside: null
  }, a = {
    bash: n,
    environment: {
      pattern: RegExp("\\$" + t),
      alias: "constant"
    },
    variable: [{
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        variable: [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        punctuation: /\(\(?|\)\)?|,|;/
      }
    }, {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        variable: /^\$\(|^`|\)$|`$/
      }
    }, {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        punctuation: /[\[\]]/,
        environment: {
          pattern: RegExp("(\\{)" + t),
          lookbehind: true,
          alias: "constant"
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  e2.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    "function-name": [{
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: "function"
    }, {
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: "function"
    }],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: true
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: true,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: true
    },
    string: [{
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: a
    }, {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        bash: n
      }
    }, {
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: a
    }, {
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        entity: a.entity
      }
    }],
    environment: {
      pattern: RegExp("\\$?" + t),
      alias: "constant"
    },
    variable: a.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  }, n.inside = e2.languages.bash;
  for (var r = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], i = a.variable[1].inside, s = 0; s < r.length; s++)
    i[r[s]] = e2.languages.bash[r[s]];
  e2.languages.shell = e2.languages.bash;
}(e), function(e2) {
  var t, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  e2.languages.css.selector = {
    pattern: e2.languages.css.selector.pattern,
    lookbehind: true,
    inside: t = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"),
        greedy: true,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              punctuation: /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          "attr-value": [n, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          number: /[\dn]+/,
          operator: /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/
    }
  }, e2.languages.css.atrule.inside["selector-function-argument"].inside = t, e2.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var a = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  }, r = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  e2.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    hexcode: {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    color: [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        unit: a,
        number: r,
        function: /[\w-]+(?=\()/,
        punctuation: /[(),]/
      }
    }],
    entity: /\\[\da-f]{1,8}/i,
    unit: a,
    number: r
  });
}(e), function(e2) {
  var t = e2.languages.javadoclike = {
    parameter: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
      lookbehind: true
    },
    keyword: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: true
    },
    punctuation: /[{}]/
  };
  Object.defineProperty(t, "addSupport", {
    value: function(t2, n) {
      typeof t2 == "string" && (t2 = [t2]), t2.forEach(function(t3) {
        !function(t4, n2) {
          var a = "doc-comment", r = e2.languages[t4];
          if (r) {
            var i = r[a];
            if (!i) {
              var s = {
                "doc-comment": {
                  pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                  lookbehind: true,
                  alias: "comment"
                }
              };
              i = (r = e2.languages.insertBefore(t4, "comment", s))[a];
            }
            if (i instanceof RegExp && (i = r[a] = {
              pattern: i
            }), Array.isArray(i))
              for (var o = 0, l = i.length; o < l; o++)
                i[o] instanceof RegExp && (i[o] = {
                  pattern: i[o]
                }), n2(i[o]);
            else
              n2(i);
          }
        }(t3, function(e3) {
          e3.inside || (e3.inside = {}), e3.inside.rest = n;
        });
      });
    }
  }), t.addSupport(["java", "javascript", "php"], t);
}(e), function(e2) {
  e2.languages.typescript = e2.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), e2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e2.languages.typescript.parameter, delete e2.languages.typescript["literal-property"];
  var t = e2.languages.extend("typescript", {});
  delete t["class-name"], e2.languages.typescript["class-name"].inside = t, e2.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: t
        }
      }
    }
  }), e2.languages.ts = e2.languages.typescript;
}(e), function(e2) {
  var t = e2.languages.javascript, n = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, a = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
  e2.languages.jsdoc = e2.languages.extend("javadoclike", {
    parameter: {
      pattern: RegExp(a + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
      lookbehind: true,
      inside: {
        punctuation: /\./
      }
    }
  }), e2.languages.insertBefore("jsdoc", "keyword", {
    "optional-parameter": {
      pattern: RegExp(a + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
      lookbehind: true,
      inside: {
        parameter: {
          pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
          lookbehind: true,
          inside: {
            punctuation: /\./
          }
        },
        code: {
          pattern: /(=)[\s\S]*(?=\]$)/,
          lookbehind: true,
          inside: t,
          alias: "language-javascript"
        },
        punctuation: /[=[\]]/
      }
    },
    "class-name": [{
      pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
        return n;
      })),
      lookbehind: true,
      inside: {
        punctuation: /\./
      }
    }, {
      pattern: RegExp("(@[a-z]+\\s+)" + n),
      lookbehind: true,
      inside: {
        string: t.string,
        number: t.number,
        boolean: t.boolean,
        keyword: e2.languages.typescript.keyword,
        operator: /=>|\.\.\.|[&|?:*]/,
        punctuation: /[.,;=<>{}()[\]]/
      }
    }],
    example: {
      pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
      lookbehind: true,
      inside: {
        code: {
          pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
          lookbehind: true,
          inside: t,
          alias: "language-javascript"
        }
      }
    }
  }), e2.languages.javadoclike.addSupport("javascript", e2.languages.jsdoc);
}(e), function(e2) {
  var t = e2.util.clone(e2.languages.javascript), n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function i(e3, t2) {
    return e3 = e3.replace(/<S>/g, function() {
      return n;
    }).replace(/<BRACES>/g, function() {
      return a;
    }).replace(/<SPREAD>/g, function() {
      return r;
    }), RegExp(e3, t2);
  }
  r = i(r).source, e2.languages.jsx = e2.languages.extend("markup", t), e2.languages.jsx.tag.pattern = i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e2.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e2.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e2.languages.jsx.tag.inside.comment = t.comment, e2.languages.insertBefore("inside", "attr-name", {
    spread: {
      pattern: i(/<SPREAD>/.source),
      inside: e2.languages.jsx
    }
  }, e2.languages.jsx.tag), e2.languages.insertBefore("inside", "special-attr", {
    script: {
      pattern: i(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: e2.languages.jsx
      }
    }
  }, e2.languages.jsx.tag);
  var s = function(e3) {
    return e3 ? typeof e3 == "string" ? e3 : typeof e3.content == "string" ? e3.content : e3.content.map(s).join("") : "";
  }, o = function(t2) {
    for (var n2 = [], a2 = 0; a2 < t2.length; a2++) {
      var r2 = t2[a2], i2 = false;
      if (typeof r2 != "string" && (r2.type === "tag" && r2.content[0] && r2.content[0].type === "tag" ? r2.content[0].content[0].content === "</" ? n2.length > 0 && n2[n2.length - 1].tagName === s(r2.content[0].content[1]) && n2.pop() : r2.content[r2.content.length - 1].content === "/>" || n2.push({
        tagName: s(r2.content[0].content[1]),
        openedBraces: 0
      }) : n2.length > 0 && r2.type === "punctuation" && r2.content === "{" ? n2[n2.length - 1].openedBraces++ : n2.length > 0 && n2[n2.length - 1].openedBraces > 0 && r2.type === "punctuation" && r2.content === "}" ? n2[n2.length - 1].openedBraces-- : i2 = true), (i2 || typeof r2 == "string") && n2.length > 0 && n2[n2.length - 1].openedBraces === 0) {
        var l = s(r2);
        a2 < t2.length - 1 && (typeof t2[a2 + 1] == "string" || t2[a2 + 1].type === "plain-text") && (l += s(t2[a2 + 1]), t2.splice(a2 + 1, 1)), a2 > 0 && (typeof t2[a2 - 1] == "string" || t2[a2 - 1].type === "plain-text") && (l = s(t2[a2 - 1]) + l, t2.splice(a2 - 1, 1), a2--), t2[a2] = new e2.Token("plain-text", l, null, l);
      }
      r2.content && typeof r2.content != "string" && o(r2.content);
    }
  };
  e2.hooks.add("after-tokenize", function(e3) {
    e3.language !== "jsx" && e3.language !== "tsx" || o(e3.tokens);
  });
}(e), function() {
  if (e !== void 0 && typeof document != "undefined" && document.querySelector) {
    var t, n = "line-numbers", a = "linkable-line-numbers", r = function() {
      if (t === void 0) {
        var e2 = document.createElement("div");
        e2.style.fontSize = "13px", e2.style.lineHeight = "1.5", e2.style.padding = "0", e2.style.border = "0", e2.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e2), t = e2.offsetHeight === 38, document.body.removeChild(e2);
      }
      return t;
    }, i = true;
    e.plugins.lineHighlight = {
      highlightLines: function(t2, s2, c2) {
        var d2 = (s2 = typeof s2 == "string" ? s2 : t2.getAttribute("data-line") || "").replace(/\s+/g, "").split(",").filter(Boolean), p = +t2.getAttribute("data-line-offset") || 0, g = (r() ? parseInt : parseFloat)(getComputedStyle(t2).lineHeight), h = e.util.isActive(t2, n), f = t2.querySelector("code"), m = h ? t2 : f || t2, b = [], y = f && m != f ? function(e2, t3) {
          var n2 = getComputedStyle(e2), a2 = getComputedStyle(t3);
          function r2(e3) {
            return +e3.substr(0, e3.length - 2);
          }
          return t3.offsetTop + r2(a2.borderTopWidth) + r2(a2.paddingTop) - r2(n2.paddingTop);
        }(t2, f) : 0;
        d2.forEach(function(n2) {
          var a2 = n2.split("-"), r2 = +a2[0], i2 = +a2[1] || r2, s3 = t2.querySelector('.line-highlight[data-range="' + n2 + '"]') || document.createElement("div");
          if (b.push(function() {
            s3.setAttribute("aria-hidden", "true"), s3.setAttribute("data-range", n2), s3.className = (c2 || "") + " line-highlight";
          }), h && e.plugins.lineNumbers) {
            var o2 = e.plugins.lineNumbers.getLine(t2, r2), l2 = e.plugins.lineNumbers.getLine(t2, i2);
            if (o2) {
              var u2 = o2.offsetTop + y + "px";
              b.push(function() {
                s3.style.top = u2;
              });
            }
            if (l2) {
              var d3 = l2.offsetTop - o2.offsetTop + l2.offsetHeight + "px";
              b.push(function() {
                s3.style.height = d3;
              });
            }
          } else
            b.push(function() {
              s3.setAttribute("data-start", String(r2)), i2 > r2 && s3.setAttribute("data-end", String(i2)), s3.style.top = (r2 - p - 1) * g + y + "px", s3.textContent = new Array(i2 - r2 + 2).join(" \n");
            });
          b.push(function() {
            s3.style.width = t2.scrollWidth + "px";
          }), b.push(function() {
            m.appendChild(s3);
          });
        });
        var v = t2.id;
        if (h && e.util.isActive(t2, a) && v) {
          l(t2, a) || b.push(function() {
            t2.classList.add(a);
          });
          var S = parseInt(t2.getAttribute("data-start") || "1");
          o(".line-numbers-rows > span", t2).forEach(function(e2, t3) {
            var n2 = t3 + S;
            e2.onclick = function() {
              var e3 = v + "." + n2;
              i = false, location.hash = e3, setTimeout(function() {
                i = true;
              }, 1);
            };
          });
        }
        return function() {
          b.forEach(u);
        };
      }
    };
    var s = 0;
    e.hooks.add("before-sanity-check", function(e2) {
      var t2 = e2.element.parentElement;
      if (c(t2)) {
        var n2 = 0;
        o(".line-highlight", t2).forEach(function(e3) {
          n2 += e3.textContent.length, e3.parentNode.removeChild(e3);
        }), n2 && /^(?: \n)+$/.test(e2.code.slice(-n2)) && (e2.code = e2.code.slice(0, -n2));
      }
    }), e.hooks.add("complete", function t2(a2) {
      var r2 = a2.element.parentElement;
      if (c(r2)) {
        clearTimeout(s);
        var i2 = e.plugins.lineNumbers, o2 = a2.plugins && a2.plugins.lineNumbers;
        if (l(r2, n) && i2 && !o2)
          e.hooks.add("line-numbers", t2);
        else
          e.plugins.lineHighlight.highlightLines(r2)(), s = setTimeout(d, 1);
      }
    }), window.addEventListener("hashchange", d), window.addEventListener("resize", function() {
      o("pre").filter(c).map(function(t2) {
        return e.plugins.lineHighlight.highlightLines(t2);
      }).forEach(u);
    });
  }
  function o(e2, t2) {
    return Array.prototype.slice.call((t2 || document).querySelectorAll(e2));
  }
  function l(e2, t2) {
    return e2.classList.contains(t2);
  }
  function u(e2) {
    e2();
  }
  function c(t2) {
    return !(!t2 || !/pre/i.test(t2.nodeName)) && (!!t2.hasAttribute("data-line") || !(!t2.id || !e.util.isActive(t2, a)));
  }
  function d() {
    var t2 = location.hash.slice(1);
    o(".temporary.line-highlight").forEach(function(e2) {
      e2.parentNode.removeChild(e2);
    });
    var n2 = (t2.match(/\.([\d,-]+)$/) || [, ""])[1];
    if (n2 && !document.getElementById(t2)) {
      var a2 = t2.slice(0, t2.lastIndexOf(".")), r2 = document.getElementById(a2);
      if (r2)
        r2.hasAttribute("data-line") || r2.setAttribute("data-line", ""), e.plugins.lineHighlight.highlightLines(r2, n2, "temporary ")(), i && document.querySelector(".temporary.line-highlight").scrollIntoView();
    }
  }
}(), function() {
  if (e !== void 0 && typeof document != "undefined") {
    var t = "line-numbers", n = /\n(?!$)/g, a = e.plugins.lineNumbers = {
      getLine: function(e2, n2) {
        if (e2.tagName === "PRE" && e2.classList.contains(t)) {
          var a2 = e2.querySelector(".line-numbers-rows");
          if (a2) {
            var r2 = parseInt(e2.getAttribute("data-start"), 10) || 1, i2 = r2 + (a2.children.length - 1);
            n2 < r2 && (n2 = r2), n2 > i2 && (n2 = i2);
            var s = n2 - r2;
            return a2.children[s];
          }
        }
      },
      resize: function(e2) {
        i([e2]);
      },
      assumeViewportIndependence: true
    }, r = void 0;
    window.addEventListener("resize", function() {
      a.assumeViewportIndependence && r === window.innerWidth || (r = window.innerWidth, i(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))));
    }), e.hooks.add("complete", function(a2) {
      if (a2.code) {
        var r2 = a2.element, s = r2.parentNode;
        if (s && /pre/i.test(s.nodeName) && !r2.querySelector(".line-numbers-rows") && e.util.isActive(r2, t)) {
          r2.classList.remove(t), s.classList.add(t);
          var o, l = a2.code.match(n), u = l ? l.length + 1 : 1, c = new Array(u + 1).join("<span></span>");
          (o = document.createElement("span")).setAttribute("aria-hidden", "true"), o.className = "line-numbers-rows", o.innerHTML = c, s.hasAttribute("data-start") && (s.style.counterReset = "linenumber " + (parseInt(s.getAttribute("data-start"), 10) - 1)), a2.element.appendChild(o), i([s]), e.hooks.run("line-numbers", a2);
        }
      }
    }), e.hooks.add("line-numbers", function(e2) {
      e2.plugins = e2.plugins || {}, e2.plugins.lineNumbers = true;
    });
  }
  function i(e2) {
    if ((e2 = e2.filter(function(e3) {
      var t3 = function(e4) {
        if (!e4)
          return null;
        return window.getComputedStyle ? getComputedStyle(e4) : e4.currentStyle || null;
      }(e3)["white-space"];
      return t3 === "pre-wrap" || t3 === "pre-line";
    })).length != 0) {
      var t2 = e2.map(function(e3) {
        var t3 = e3.querySelector("code"), a2 = e3.querySelector(".line-numbers-rows");
        if (t3 && a2) {
          var r2 = e3.querySelector(".line-numbers-sizer"), i2 = t3.textContent.split(n);
          r2 || ((r2 = document.createElement("span")).className = "line-numbers-sizer", t3.appendChild(r2)), r2.innerHTML = "0", r2.style.display = "block";
          var s = r2.getBoundingClientRect().height;
          return r2.innerHTML = "", {
            element: e3,
            lines: i2,
            lineHeights: [],
            oneLinerHeight: s,
            sizer: r2
          };
        }
      }).filter(Boolean);
      t2.forEach(function(e3) {
        var t3 = e3.sizer, n2 = e3.lines, a2 = e3.lineHeights, r2 = e3.oneLinerHeight;
        a2[n2.length - 1] = void 0, n2.forEach(function(e4, n3) {
          if (e4 && e4.length > 1) {
            var i2 = t3.appendChild(document.createElement("span"));
            i2.style.display = "block", i2.textContent = e4;
          } else
            a2[n3] = r2;
        });
      }), t2.forEach(function(e3) {
        for (var t3 = e3.sizer, n2 = e3.lineHeights, a2 = 0, r2 = 0; r2 < n2.length; r2++)
          n2[r2] === void 0 && (n2[r2] = t3.children[a2++].getBoundingClientRect().height);
      }), t2.forEach(function(e3) {
        var t3 = e3.sizer, n2 = e3.element.querySelector(".line-numbers-rows");
        t3.style.display = "none", t3.innerHTML = "", e3.lineHeights.forEach(function(e4, t4) {
          n2.children[t4].style.height = e4 + "px";
        });
      });
    }
  }
}(), function() {
  if (e !== void 0 && typeof document != "undefined") {
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var t = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, n = "data-src-status", a = "loading", r = "loaded", i = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';
    e.hooks.add("before-highlightall", function(e2) {
      e2.selector += ", " + i;
    }), e.hooks.add("before-sanity-check", function(s2) {
      var o = s2.element;
      if (o.matches(i)) {
        s2.code = "", o.setAttribute(n, a);
        var l = o.appendChild(document.createElement("CODE"));
        l.textContent = "Loading\u2026";
        var u = o.getAttribute("data-src"), c = s2.language;
        if (c === "none") {
          var d = (/\.(\w+)$/.exec(u) || [, "none"])[1];
          c = t[d] || d;
        }
        e.util.setLanguage(l, c), e.util.setLanguage(o, c);
        var p = e.plugins.autoloader;
        p && p.loadLanguages(c), function(e2, t2, n2) {
          var a2 = new XMLHttpRequest();
          a2.open("GET", e2, true), a2.onreadystatechange = function() {
            a2.readyState == 4 && (a2.status < 400 && a2.responseText ? t2(a2.responseText) : a2.status >= 400 ? n2("\u2716 Error " + a2.status + " while fetching file: " + a2.statusText) : n2("\u2716 Error: File does not exist or is empty"));
          }, a2.send(null);
        }(u, function(t2) {
          o.setAttribute(n, r);
          var a2 = function(e2) {
            var t3 = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e2 || "");
            if (t3) {
              var n2 = Number(t3[1]), a3 = t3[2], r2 = t3[3];
              return a3 ? r2 ? [n2, Number(r2)] : [n2, void 0] : [n2, n2];
            }
          }(o.getAttribute("data-range"));
          if (a2) {
            var i2 = t2.split(/\r\n?|\n/g), s3 = a2[0], u2 = a2[1] == null ? i2.length : a2[1];
            s3 < 0 && (s3 += i2.length), s3 = Math.max(0, Math.min(s3 - 1, i2.length)), u2 < 0 && (u2 += i2.length), u2 = Math.max(0, Math.min(u2, i2.length)), t2 = i2.slice(s3, u2).join("\n"), o.hasAttribute("data-start") || o.setAttribute("data-start", String(s3 + 1));
          }
          l.textContent = t2, e.highlightElement(l);
        }, function(e2) {
          o.setAttribute(n, "failed"), l.textContent = e2;
        });
      }
    }), e.plugins.fileHighlight = {
      highlight: function(t2) {
        for (var n2, a2 = (t2 || document).querySelectorAll(i), r2 = 0; n2 = a2[r2++]; )
          e.highlightElement(n2);
      }
    };
    var s = false;
    e.fileHighlight = function() {
      s || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), s = true), e.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }
}();
var classNames = {
  "$editor": "",
  "$scrollbarX": "",
  "code": "or3gr9",
  "div": "or1cqo",
  "nowrap": "ba1z8w",
  "pre": "or7sv8",
  "textarea": "or2bxt orctbj orshze ortniz orxge6",
  "wrap": "batbmf"
};
function Editor(_a) {
  var _b = _a, {
    autoFocus = false,
    children = "",
    copyOnClick = false,
    id,
    lang = "js",
    onInput,
    readOnly = false,
    rows = 3,
    style: style$1,
    wrap = true
  } = _b, props = __objRest(_b, [
    "autoFocus",
    "children",
    "copyOnClick",
    "id",
    "lang",
    "onInput",
    "readOnly",
    "rows",
    "style",
    "wrap"
  ]);
  const codeRef = react.useRef(null);
  const textRef = react.useRef(null);
  const wrapRef = react.useRef(null);
  const [value, setValue] = react.useState(children);
  function handleClick(e2) {
    const target = e2.target;
    target.select();
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(target.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      document.execCommand("copy");
    }
  }
  const handleInput = react.useCallback(function handleInput2(e2) {
    setValue(e2.target.value || "");
    if (style.isFn(onInput)) {
      onInput(e2);
    }
  }, [onInput]);
  function handleScroll() {
    if (wrapRef.current && textRef.current) {
      wrapRef.current.scrollTop = textRef.current.scrollTop;
      wrapRef.current.scrollLeft = textRef.current.scrollLeft;
    }
  }
  function handleUpdate() {
    e.highlightElement(codeRef.current);
  }
  react.useEffect(function() {
    if (children !== value) {
      setValue(children);
    }
  }, [children, value]);
  react.useEffect(handleUpdate, [value]);
  react.useEffect(function() {
    if (wrapRef && wrapRef.current) {
      new ResizeObserver(function(entries) {
        for (const entry of entries) {
          e.plugins.lineNumbers.resize(entry.target);
          e.plugins.lineHighlight.highlightLines(entry.target)();
        }
      }).observe(wrapRef.current);
    }
  }, [wrapRef]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: classNames.div,
    children: [/* @__PURE__ */ jsxRuntime.jsx("pre", __spreadProps(__spreadValues({
      "aria-hidden": true,
      className: style.cx(wrap ? classNames.wrap : classNames.nowrap, `language-${lang}`, "line-numbers", classNames.pre),
      id,
      ref: wrapRef,
      style: style$1
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: style.cx(wrap ? classNames.wrap : classNames.nowrap, `language-${lang}`, classNames.code),
        ref: codeRef,
        children: value + (value[value.length - 1] === "\n" ? " " : "")
      })
    })), /* @__PURE__ */ jsxRuntime.jsx("textarea", {
      autoFocus,
      className: style.cx(wrap ? classNames.wrap : classNames.nowrap, classNames.textarea),
      onClick: copyOnClick ? handleClick : void 0,
      onInput: handleInput,
      onScroll: handleScroll,
      readOnly,
      ref: textRef,
      rows,
      spellCheck: false,
      style: style$1,
      value
    })]
  });
}
exports.Editor = Editor;
exports.classNames = classNames;
exports.e = e;
exports.useParam = useParam;
exports.useVisualViewport = useVisualViewport;
