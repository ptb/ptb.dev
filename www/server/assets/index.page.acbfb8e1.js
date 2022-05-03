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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var react = require("react");
var editor = require("./editor.e60e46c9.js");
var useTabs = require("./use-tabs.92d9d407.js");
var style = require("@ptb/style");
var jsxRuntime = require("react/jsx-runtime");
var classNames$7 = {
  "code": "c8z8xf kcs4l4",
  "grid": "oreuk5",
  "head": "orz66k",
  "hide": "duh7by",
  "iframe": "orrz0k",
  "link": "oripas",
  "main": "or0702 ort98m orwsln orz8ms",
  "radio": "duh7by",
  "tabpanel": "ornwae orx5mt"
};
function Iframe(_a) {
  var _b = _a, {
    title
  } = _b, props = __objRest(_b, [
    "title"
  ]);
  const ref = react.useRef(null);
  return /* @__PURE__ */ jsxRuntime.jsx("iframe", __spreadValues({
    className: classNames$7.iframe,
    loading: "lazy",
    ref,
    title
  }, props));
}
function AtomicClasses() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Atomic Classes"
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      children: ["Each property/value pair creates an atomic class name by default. You\u2019ll notice that regardless of the order that the rules are listed, they always result in the same order in the stylesheet. That means that all of the", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "textAlign"
      }), " properties will always be together, which makes it possible to audit the styles by just reading.", " ", /* @__PURE__ */ jsxRuntime.jsxs("em", {
        children: ["This is a live editor, try changing some of the values for", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
          className: classNames$7.code,
          children: "maxWidth"
        }), " or", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
          className: classNames$7.code,
          children: "fontSize"
        }), " here and see what the effect is immediately."]
      }), " ", "Switch to the HTML tab and notice that the class name for that property is recalculated based on the value, but the two letter prefix that is based on the property does not change."]
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++backgroundColor%3A+%22%239c9%22%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++padding%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+%22200px%22%2C%0A++++++++margin%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+%2210px%22%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+%22bold%22%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+%2224px%22%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=2",
      style: {
        "height": "80vh"
      }
    })]
  });
}
function DeepMergeObjects() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Deep Merge Objects"
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      children: ["If you pass an array of objects as the first argument to the", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "css"
      }), " function, the objects will be expanded (as in the case of", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "bg"
      }), ") then deep merged. Only the \u201Csurviving\u201D property/value pairs are used."]
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%5B%0A++++++++%7B%0A++++++++++bg%3A+%22%239c9%22%2C%0A++++++++++color%3A+%22%23333%22%2C%0A++++++++++p%3A+%224px+10px%22%2C%0A++++++++++display%3A+%22block%22%2C%0A++++++++++maxWidth%3A+200%2C%0A++++++++++m%3A+%22auto%22%2C%0A++++++++++textAlign%3A+%22center%22%2C%0A++++++++++borderRadius%3A+10%2C%0A++++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++++fontWeight%3A+700%2C%0A++++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++++fontSize%3A+24%2C%0A++++++++%7D%2C%0A++++++++%7B%0A++++++++++backgroundColor%3A+%22%23cfc%22%2C%0A++++++++++maxWidth%3A+275%2C%0A++++++++++overflow%3A+%22hidden%22%2C%0A++++++++++whiteSpace%3A+%22nowrap%22%2C%0A++++++++++textOverflow%3A+%22ellipsis%22%2C%0A++++++++%7D%0A++++++%5D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&e=6%2C9%2C19-20&s=25-27%2C45-47&i=17%2C68#t=3",
      style: {
        "height": "80vh"
      }
    })]
  });
}
function GroupedClasses() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Grouped Classes"
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      children: ["But if you prefer to have fewer class names attached to elements, that is an option, too. Just wrap the styles in an object with as the key. Depending on your needs, you could choose to group styles together under a single class name or individual classes depending on what your needs are. If you\u2019re planning on re-using a group of styles throughout your project, you\u2019ll want to group them with", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "&"
      }), ". It results in a slightly larger stylesheet, but fewer class names in the HTML."]
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%22%26%22%3A+%7B%0A++++++++++backgroundColor%3A+%22%239c9%22%2C%0A++++++++++color%3A+%22%23333%22%2C%0A++++++++++padding%3A+%224px+10px%22%2C%0A++++++++++display%3A+%22block%22%2C%0A++++++++++maxWidth%3A+%22200px%22%2C%0A++++++++++margin%3A+%22auto%22%2C%0A++++++++++textAlign%3A+%22center%22%2C%0A++++++++++borderRadius%3A+%2210px%22%2C%0A++++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++++fontWeight%3A+%22bold%22%2C%0A++++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++++fontSize%3A+%2224px%22%2C%0A++++++++%7D%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=2",
      style: {
        "height": "80vh"
      }
    })]
  });
}
var classNames$6 = style.create({
  "$ui": {
    "card": {
      "borderRadius": ".4rem",
      "boxShadow": "0 0 0 1px #000",
      "flexGrow": 1,
      "m": "1rem",
      "width": "calc(33.3% - 2rem)"
    },
    "cards": {
      "display": "flex",
      "flexDirection": {
        "Md": "row",
        "Sm": "column"
      },
      "flexWrap": "wrap",
      "m": "1rem"
    }
  },
  "card": {
    "& > h3": {
      "m": 0
    },
    "& > p": {
      "mb": 0
    },
    "bg": "rgba(255,255,255,.04)",
    "borderRadius": "1rem",
    "boxShadow": "0 0 4px 1px rgba(0,0,0,.1)",
    "flexGrow": 1,
    "m": ".5rem",
    "Md": {
      "minWidth": "16em",
      "width": "calc(33.3% - 1rem)"
    },
    "p": "1.5rem"
  },
  "cards": {
    "display": "flex",
    "flexDirection": {
      "Md": "row",
      "Sm": "column"
    },
    "flexWrap": "wrap"
  },
  "code": {
    "bg": "rgba(255,255,255,.1)",
    "borderRadius": 3,
    "boxShadow": "0 0 4px 1px rgba(0,0,0,.1)",
    "display": "inline-block",
    "px": 3,
    "py": 0
  },
  "hero": {},
  "install": {
    "&:focus": {
      "outline": "none"
    },
    "appearance": "none",
    "bg": "rgba(255,255,255,.04)",
    "border": "none",
    "borderRadius": "1rem",
    "boxShadow": "0 0 4px 1px rgba(0,0,0,.1)",
    "color": "inherit",
    "display": "block",
    "fontFamily": "monospace",
    "fontSize": "inherit",
    "mx": "auto",
    "p": "1rem",
    "textAlign": "center",
    "width": "22em"
  },
  "link": {
    "&:hover": {
      "textDecoration": "underline"
    },
    "color": "inherit",
    "textDecoration": "none"
  },
  "section": {
    "& > h2": {
      "mx": "2rem"
    },
    "maxWidth": "120rem",
    "mx": "auto"
  },
  "subtitle": {
    "textAlign": "center"
  },
  "title": {
    "fontFamily": "var(--sans)",
    "fontSize": {
      "Md": "4rem",
      "Sm": "2.8rem"
    },
    "maxWidth": "12em",
    "mx": "auto",
    "my": 0,
    "textAlign": "center"
  }
});
function Introduction() {
  function handleClick(e) {
    const target = e.target;
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
  return /* @__PURE__ */ jsxRuntime.jsxs("article", {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("section", {
      className: classNames$6.hero,
      children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
        className: classNames$6.title,
        children: "Manage CSS Like a Boss. Declare Your Styles and You\u2019re Done."
      }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
        className: classNames$6.subtitle,
        role: "doc-subtitle",
        children: [/* @__PURE__ */ jsxRuntime.jsx("code", {
          children: "@ptb/style"
        }), " is a CSS compiler with a powerful, intuitive API that makes authoring CSS faster and easier."]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      children: /* @__PURE__ */ jsxRuntime.jsx("input", {
        className: classNames$6.install,
        onClick: handleClick,
        value: "npm install @ptb/style"
      })
    }), /* @__PURE__ */ jsxRuntime.jsxs("section", {
      className: classNames$6.section,
      children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
        children: "Simple"
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: classNames$6.cards,
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "No More Naming"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Skip naming and remembering class or component names. Names are generated automatically and consistently based on styles input."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "One Core Function"
          }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
            children: ["The core function, named ", /* @__PURE__ */ jsxRuntime.jsx("code", {
              className: classNames$6.code,
              children: "css"
            }), ", parses and deduplicates all styles, returns class names, and dynamically applies them to the current web page."]
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Setup Not Required"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Perfect for prototyping ideas quickly. No theme providers, wrappers, special components, props, plugins, or build configurations needed."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Separation of Concerns"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Styles are separate from structure. Imagine having to use a special type of component just to use Redux. Styles should be simple."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Consistent Results"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "In any order, the same input will result in the same output, whether rendered at build time, server-side, or at runtime in the browser."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "No More Conflicts"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Declare your styles and those styles are applied. No more specificity issues, naming collisions, or side effects from cascading styles."
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("section", {
      className: classNames$6.section,
      children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
        children: "Powerful"
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: classNames$6.cards,
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Any Selector or None"
          }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
            children: ["Use any selector: ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors",
              children: "type"
            }), ", ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors",
              children: "class"
            }), ", ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors",
              children: "ID"
            }), ", ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors",
              children: "universal"
            }), ", ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors",
              children: "attribute"
            }), ", ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator",
              children: "adjacent "
            }), " ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator",
              children: "sibling"
            }), ", ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator",
              children: "child"
            }), ", or ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator",
              children: "descendant"
            }), " selectors, ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",
              children: "pseudo classes"
            }), " and ", /* @__PURE__ */ jsxRuntime.jsx("a", {
              className: classNames$6.link,
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements",
              children: "elements"
            }), "."]
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Real Media Queries"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Media queries can be used at the top of a group of styles, at the bottom under a CSS property, or nested inside of other media queries."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Override Styles Easily"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Provide an array of styles and they will be deep merged. Start with a base set of styles followed by any modifications for easy variants."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Sass-Style Nesting"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Nested rules can be complex and combined with commas. Each nested selector is combined separately and merged back into the selector list."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Built-In Abbreviations"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Styled System inspired shorthand properties are built-in. Several common media queries have abbreviations and you can add your own."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "DIY Shortcuts"
          }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
            children: ["Define abbreviations for CSS properties (using ", /* @__PURE__ */ jsxRuntime.jsx("code", {
              className: classNames$6.code,
              children: "$properties"
            }), "), conditional queries (", /* @__PURE__ */ jsxRuntime.jsx("code", {
              className: classNames$6.code,
              children: "$media"
            }), " or ", /* @__PURE__ */ jsxRuntime.jsx("code", {
              className: classNames$6.code,
              children: "$supports"
            }), "), and vendor prefixes (", /* @__PURE__ */ jsxRuntime.jsx("code", {
              className: classNames$6.code,
              children: "$prefixes"
            }), ")."]
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("section", {
      className: classNames$6.section,
      children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
        children: "Flexible"
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: classNames$6.cards,
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Atomic or Group Names"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Automatically creates atomic class names per style declaration or group styles under a single class name. Or both, you get to choose."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "CSR, SSR, or Build-Time"
          }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
            children: ["Universal tool that works with modern browsers and Node.js. Render at build-time (", /* @__PURE__ */ jsxRuntime.jsx("abbr", {
              title: "Static Site Generator: e.g. Gatsby or Vite",
              children: "SSG"
            }), "), server-side (", /* @__PURE__ */ jsxRuntime.jsx("abbr", {
              title: "Server-Side Rendering: e.g. Next.js or Remix",
              children: "SSR"
            }), "), or on the client (", /* @__PURE__ */ jsxRuntime.jsx("abbr", {
              title: "Single Page Application: e.g. Create React App",
              children: "SPA"
            }), ")."]
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Variables and Snippets"
          }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
            children: ["Define theme variables or blocks of styles using ", /* @__PURE__ */ jsxRuntime.jsx("code", {
              className: classNames$6.code,
              children: "$"
            }), "-prefixed key names and reuse them later without needing a context or theme provider."]
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "React Or Any Framework"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Works great with React or any other JavaScript framework or even plain JavaScript. It\u2019s just a function and returns class names."
          })]
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("section", {
      className: classNames$6.section,
      children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
        children: "Performant"
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: classNames$6.cards,
        children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Production-Ready"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Use the Babel macro to extract static styles to a CSS file. Styles are \u201Ccompiled away\u201D leaving just class names for a zero-runtime footprint."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Optimized Output"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Styles are ordered simply and consistently. Selectors are parsed, de-duplicated, and grouped with identical declarations automatically."
          })]
        }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: classNames$6.card,
          children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
            children: "Modern CSS for Pros"
          }), /* @__PURE__ */ jsxRuntime.jsx("p", {
            children: "Simple enough for a novice developer and powerful enough for the needs of an experienced team. Optimized from development to delivery."
          })]
        })]
      })]
    })]
  });
}
function StylesAreJSObjects() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Styles are JavaScript Objects"
    }), /* @__PURE__ */ jsxRuntime.jsx("h3", {
      children: "Can be defined inline\u2026"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      "data-line": "5-8",
      lang: "jsx",
      rows: 1,
      children: [`import { css } from "@ptb/style"`, ``, `export default () => (`, `  <span`, `    className={css({`, `      fontFamily: "sans-serif",`, `      fontSize: "24px"`, `    })}`, `  >`, `    Buy Now!`, `  </span>`, `)`].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsx("h3", {
      children: "in variables\u2026"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      "data-line": "4-7,10",
      lang: "jsx",
      children: [`import { css } from "@ptb/style"`, ``, `export default () => {`, `  const styles = {`, `    fontFamily: "sans-serif",`, `    fontSize: "24px"`, `  }`, ``, `  return (`, `    <span className={css(styles)}>`, `      Buy Now!`, `    </span>`, `  )`, `}`].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsx("h3", {
      children: "by importing from other files\u2026"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      "data-line": "4-7",
      lang: "js",
      children: [`import { css } from "@ptb/style"`, ``, `export default {`, `  button: css({`, `    fontFamily: "sans-serif",`, `    fontSize: "24px"`, `  })`, `}`].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      "data-line": "1,4",
      lang: "jsx",
      children: [`import classNames from "./styles.js"`, ``, `export default () => (`, `  <span className={classNames.button}>`, `    Buy Now!`, `  </span>`, `)`].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsx("h3", {
      children: "\u2026or passed as props."
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      "data-line": "3,4",
      lang: "jsx",
      children: [`import { css } from "@ptb/style"`, ``, `export default ({ styles }) => (`, `  <span className={css(styles)}>`, `    Buy Now!`, `  </span>`, `)`].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsx("h3", {
      children: "\u2026or an array of JavaScript Objects"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      "data-line": "5-13",
      lang: "jsx",
      children: [`import { css } from "@ptb/style"`, ``, `export default () => (`, `  <span`, `    className={css([`, `      {`, `        fontFamily: "sans-serif",`, `        fontSize: "24px"`, `      },`, `      {`, `        fontSize: "36px"`, `      }`, `    ])}`, `  >`, `    Buy Now!`, `  </span>`, `)`].join("\n")
    })]
  });
}
var classNames$5 = {
  "convert": "kd9w0h",
  "demo": "kdbcwx",
  "github": "kd2vly",
  "link": "e3hlrd embtae or1ov5 ordqbv orewfl oru05l"
};
function ConvertLink() {
  return /* @__PURE__ */ jsxRuntime.jsx("a", {
    className: style.cx(classNames$5.link, classNames$5.convert),
    href: "./convert/",
    target: "_blank",
    children: "Convert"
  });
}
function DemoLink() {
  return /* @__PURE__ */ jsxRuntime.jsx("a", {
    className: style.cx(classNames$5.link, classNames$5.demo),
    href: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%22%40media+%28prefersColorScheme%3A+dark%29%22%3A+%7B%0A++++++++++bg%3A+%22%239c9%22%2C%0A++++++++++color%3A+%22%23333%22%0A++++++++%7D%2C%0A++++++++%22%40media+%28prefersColorScheme%3A+light%29%22%3A+%7B%0A++++++++++bg%3A+%22%23363%22%2C%0A++++++++++color%3A+%22%23ccc%22%0A++++++++%7D%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+%7B%0A++++++++++%22%40media+%28max-width%3A+767px%29%22%3A+20%2C%0A++++++++++%22%40media+%28min-width%3A+768px%29%22%3A+24%0A++++++++%7D%2C%0A++++++++animationName%3A+%7B%0A++++++++++%220%25%22%3A+%7B%0A++++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++++%7D%2C%0A++++++++++%2210%25%2C20%25%22%3A+%7B%0A++++++++++++transform%3A%0A++++++++++++++%22scale3d%28.9%2C.9%2C.9%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++++%7D%2C%0A++++++++++%2230%25%2C50%25%2C70%25%2C90%25%22%3A+%7B%0A++++++++++++transform%3A%0A++++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C3deg%29%22%0A++++++++++%7D%2C%0A++++++++++%2240%25%2C60%25%2C80%25%22%3A+%7B%0A++++++++++++transform%3A%0A++++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++++%7D%2C%0A++++++++++to%3A+%7B%0A++++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++++%7D%0A++++++++%7D%2C%0A++++++++animationDuration%3A+%221s%22%2C%0A++++++++animationIterationCount%3A+%22infinite%22%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D",
    target: "_blank",
    children: "Demo"
  });
}
function GitHubLink() {
  return /* @__PURE__ */ jsxRuntime.jsx("a", {
    className: style.cx(classNames$5.link, classNames$5.github),
    href: "https://github.com/ptb/style",
    rel: "noreferrer",
    target: "_blank",
    children: "GitHub"
  });
}
var classNames$4 = {
  "logo": "eouf4u or2ndg orxn9c"
};
function Logo() {
  return /* @__PURE__ */ jsxRuntime.jsx("h1", {
    className: classNames$4.logo,
    children: "ptb/style"
  });
}
var classNames$3 = {
  "icon": "or3jdb",
  "menu": "duvu4f or1jco",
  "path1": "mi6pjw or170y orjefm",
  "path2": "ore52m orjefm",
  "path3": "mixgal orjefm orxqsw"
};
function Menu({
  checked = false
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("label", {
    "aria-checked": checked,
    "aria-label": "Menu",
    className: classNames$3.menu,
    htmlFor: "menu",
    children: /* @__PURE__ */ jsxRuntime.jsxs("svg", {
      "aria-hidden": "true",
      className: classNames$3.icon,
      focusable: "false",
      height: "32",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 120 120",
      width: "32",
      children: [/* @__PURE__ */ jsxRuntime.jsx("defs", {
        children: /* @__PURE__ */ jsxRuntime.jsx("path", {
          d: "M30 60h60",
          id: "a"
        })
      }), /* @__PURE__ */ jsxRuntime.jsxs("g", {
        stroke: "hsl(240,15%,80%)",
        strokeWidth: "6",
        children: [/* @__PURE__ */ jsxRuntime.jsx("use", {
          className: classNames$3.path1,
          xlinkHref: "#a"
        }), /* @__PURE__ */ jsxRuntime.jsx("use", {
          className: classNames$3.path2,
          xlinkHref: "#a"
        }), /* @__PURE__ */ jsxRuntime.jsx("use", {
          className: classNames$3.path3,
          xlinkHref: "#a"
        })]
      })]
    })
  });
}
function ComplexSelectors() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Complex Selectors"
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: "All selectors are supported. Just be cautioned. This could be considered a bad practice. Just because you can doesn\u2019t mean you should. You\u2019ll notice that when global selectors are used, class names for those styles are not emitted to the element just added to the stylesheet."
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%22%5Baria-selected%3Dtrue%5D%22%3A+%7B%0A++++++++++fontWeight%3A+700%0A++++++++%7D%2C%0A++++++++%22%3Ahover%2C+ul+%3E+%3Alast-child+li%3Anth-child%28odd%29%3Anot%28%3Alast-child%29%22%3A+%7B%0A++++++++++textDecoration%3A+%22underline%22%0A++++++++%7D%2C%0A++++++++%22%3Aroot%22%3A+%7B%0A++++++++++%22--primary-color%22%3A+%22%23363%22%2C%0A++++++++++%22--sat%22%3A+%225%25%22%0A++++++++%7D%2C%0A++++++++%22%5Brole%3Dtablist%5D%22%3A+%7B%0A++++++++++%22--hue%22%3A+%22120%22%2C%0A++++++++++%22--sat%22%3A+%2230%25%22%0A++++++++%7D%2C%0A++++++++bg%3A+%22var%28--primary-color%29%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=3",
      style: {
        "height": "85vh"
      }
    })]
  });
}
function NestingSelector() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Nesting Selector"
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%22main%2C%23root%22%3A+%7B%0A++++++++++%22%26%3Esection%2Cdiv+%26%22%3A+%7B%0A++++++++++++color%3A+%22%23eee%22%0A++++++++++%7D%0A++++++++%7D%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&e=5%2C6&s=1&i=12-36#t=3"
    })]
  });
}
function PlaceholderClasses() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("h2", {
      children: ["Placeholder Classes (", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "%"
      }), ")"]
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cdiv%3E%0A++++++%3Cinput%0A++++++++className%3D%7Bcss%28%7B%0A++++++++++%22%25check%22%3A+true%0A++++++++%7D%29%7D%0A++++++++type%3D%22checkbox%22%0A++++++%2F%3E%0A++++++%3Cspan%0A++++++++className%3D%7Bcss%28%7B%0A++++++++++%22%25check%3Anot%28%3Achecked%29+%2B+%26%22%3A+%7B%0A++++++++++++bg%3A+%22%23363%22%0A++++++++++%7D%0A++++++++%7D%29%7D%0A++++++%3E%0A++++++++Buy+Now%21%0A++++++%3C%2Fspan%3E%0A++++%3C%2Fdiv%3E%0A++%29%0A%7D&e=8%2C17&s=1#t=3"
    })]
  });
}
function DisplayFile(_c) {
  var _d = _c, {
    lang = "js",
    src,
    style: style$1 = {}
  } = _d, props = __objRest(_d, [
    "lang",
    "src",
    "style"
  ]);
  const ref = react.useRef(null);
  const onScroll = style.debounce(function onScroll2() {
    editor.e.highlightElement(ref.current);
    editor.e.plugins.lineNumbers.resize(ref.current);
    editor.e.plugins.lineHighlight.highlightLines(ref.current)();
  });
  react.useEffect(onScroll, [onScroll, props, ref]);
  return /* @__PURE__ */ jsxRuntime.jsx("pre", __spreadProps(__spreadValues({
    className: [editor.classNames.div, editor.classNames.$editor, editor.classNames.pre, `language-${lang}`].join(" "),
    "data-src": src,
    style: __spreadValues({
      "display": "block",
      "userSelect": "auto"
    }, style$1),
    onScroll
  }, props), {
    ref
  }));
}
function CSSProperties() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Shorthand Properties"
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      children: ["Supports", " ", /* @__PURE__ */ jsxRuntime.jsx("a", {
        className: classNames$7.link,
        href: "https://styled-system.com/api/",
        children: "Styled System"
      }), " ", "shorthand properties."]
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++bg%3A+%22%239c9%22%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+%22200px%22%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+%2210px%22%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+%22bold%22%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+%2224px%22%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&e=5-6%2C9&s=25-27%2C29-31%2C33-35&i=2-35%2C70-86#t=3",
      style: {
        "height": "calc(var(--viewport-height) * .35)"
      }
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: style.css({
        "display": "grid",
        "gap": 8,
        "gridTemplateColumns": "1fr 1fr",
        "p": 8
      }),
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
          children: "CSS Properties"
        }), /* @__PURE__ */ jsxRuntime.jsx(DisplayFile, {
          src: "./get-property-id.json",
          style: {
            "height": "calc(var(--viewport-height) * .35)"
          }
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        children: [/* @__PURE__ */ jsxRuntime.jsxs("h3", {
          children: ["Shorthand", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
            className: classNames$7.code,
            children: "$properties"
          })]
        }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
          style: {
            "height": "calc(var(--viewport-height) * .35)"
          },
          children: JSON.stringify(style.getShorthands(), null, 2)
        })]
      })]
    })]
  });
}
function FontFaceRules() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("h2", {
      children: [/* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "@font-face"
      }), " Rules"]
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cdiv%3E%0A++++++%3Cdiv%0A++++++++className%3D%7Bcss%28%7B%0A++++++++++fontFamily%3A+%5B%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++++fontWeight%3A+400%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fsource-sans-pro-400.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++++fontStyle%3A+%22oblique%22%2C%0A++++++++++++++fontWeight%3A+400%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fsource-sans-pro-400i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++++fontWeight%3A+700%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fsource-sans-pro-700.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22Source+Sans+Pro%22%2C%0A++++++++++++++fontStyle%3A+%22oblique%22%2C%0A++++++++++++++fontWeight%3A+700%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fsource-sans-pro-700i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%0A++++++++++%5D%2C%0A++++++++++fontSize%3A+24%2C%0A++++++++++fontWeight%3A+700%0A++++++++%7D%29%7D%0A++++++%3E%0A++++++++Buy+Now%21%0A++++++%3C%2Fdiv%3E%0A++++++%3Cdiv%0A++++++++className%3D%7Bcss%28%7B%0A++++++++++fontFamily%3A+%5B%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++++fontWeight%3A+400%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fpt-serif-400.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++++fontStyle%3A+%22italic%22%2C%0A++++++++++++++fontWeight%3A+400%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fpt-serif-400i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++++fontStyle%3A+%22normal%22%2C%0A++++++++++++++fontWeight%3A+700%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fpt-serif-700.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%2C%0A++++++++++++%7B%0A++++++++++++++fontFamily%3A+%22PT+Serif%22%2C%0A++++++++++++++fontStyle%3A+%22italic%22%2C%0A++++++++++++++fontWeight%3A+700%2C%0A++++++++++++++src%3A+%22url%28%27%2Ffonts%2Fpt-serif-700i.woff2%27%29+format%28%27woff2%27%29%22%0A++++++++++++%7D%0A++++++++++%5D%2C%0A++++++++++fontSize%3A+24%2C%0A++++++++++fontWeight%3A+700%0A++++++++%7D%29%7D%0A++++++%3E%0A++++++++Buy+Again%21%0A++++++%3C%2Fdiv%3E%0A++++%3C%2Fdiv%3E%0A++%29%0A%7D#t=3#t=3"
    })]
  });
}
function KeyframesRules() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("h2", {
      children: [/* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "@keyframes"
      }), " Rules"]
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++animationName%3A+%7B%0A++++++++++%220%25%22%3A+%7B%0A++++++++++++transform%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++++%7D%2C%0A++++++++++%2210%25%2C20%25%22%3A+%7B%0A++++++++++++transform%3A%0A++++++++++++++%22scale3d%28.9%2C.9%2C.9%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++++%7D%2C%0A++++++++++%2230%25%2C50%25%2C70%25%2C90%25%22%3A+%7B%0A++++++++++++transform%3A%0A++++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C3deg%29%22%0A++++++++++%7D%2C%0A++++++++++%2240%25%2C60%25%2C80%25%22%3A+%7B%0A++++++++++++transform%3A%0A++++++++++++++%22scale3d%281.1%2C1.1%2C1.1%29+rotate3d%280%2C0%2C1%2C-3deg%29%22%0A++++++++++%7D%2C%0A++++++++++to%3A+%7B%0A++++++++++++%22transform%22%3A+%22scale3d%281%2C1%2C1%29%22%0A++++++++++%7D%0A++++++++%7D%2C%0A++++++++animationDuration%3A+%221s%22%2C%0A++++++++animationIterationCount%3A+%22infinite%22%2C%0A++++++++bg%3A+%22%239c9%22%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&e=5-24&s=45-47%2C57-77&i=2-58#t=1"
    })]
  });
}
function MediaQueries() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Media Queries"
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: "Media queries can be nested or inverted. This is seriously powerful feature. If you\u2019re creating a design to switch between light mode and dark mode, you can keep the values for each at the \u201Cbottom\u201D of the style object under the CSS property it affects. This provides the flexibility to create a media query at any point without enforcing a specific structure."
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%22%40media+%28min-width%3A+768px%29%22%3A+%7B%0A++++++++++%22%40media+%28-webkit-min-device-pixel-ratio%3A+2%29%22%3A+%7B%0A++++++++++++backgroundImage%3A+%22url%28%5C%22data%3Aimage%2Fsvg%2Bxml%2C%253csvg+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27+width%3D%27120%27+height%3D%27120%27%253e%253cpath+d%3D%27M16+111h88c0-32-32-15-32-31C112+8+8+8+48+80c0+16-32-1-32+31Z%27+fill%3D%27none%27+stroke%3D%27black%27+stroke-width%3D%272%27%2F%253e%253c%2Fsvg%253e%5C%22%29%22%2C%0A++++++++++++backgroundPosition%3A+%7B%0A++++++++++++++%22%40media+%28orientation%3Alandscape%29%22%3A+%2210px+0%22%0A++++++++++++%7D%2C%0A++++++++++++backgroundRepeat%3A+%22no-repeat%22%2C%0A++++++++++++backgroundSize%3A+30%0A++++++++++%7D%0A++++++++%7D%2C%0A++++++++%22%40media+%28prefersColorScheme%3Adark%29%22%3A+%7B%0A++++++++++bg%3A+%7B%0A++++++++++++%22%40media+%28maxWidth%3A767.98px%29%22%3A+%22%23363%22%2C%0A++++++++++++%22%40media+%28minWidth%3A768px%29%22%3A+%22%23633%22%0A++++++++++%7D%2C%0A++++++++++borderColor%3A+%22%23030%22%2C%0A++++++++++color%3A+%22%23eee%22%0A++++++++%7D%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=3&e=5%2C6%2C9%2C15%2C17-18&s=41%2C47%2C61%2C67%2C73&i=179-182%2C201-204%2C223-226%2C245-248%2C268-271%2C290-293%2C312-314%2C333-335#t=3",
      style: {
        "height": "calc(var(--viewport-height) * .25)"
      }
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      style: {
        "display": "grid",
        "gap": 8,
        "gridTemplateColumns": "1fr 1fr",
        "padding": 8
      },
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
          children: /* @__PURE__ */ jsxRuntime.jsx("code", {
            className: classNames$7.code,
            children: "$media"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
          lang: "js",
          rows: 2,
          children: JSON.stringify(style.getConditionals(), null, 2)
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        children: [/* @__PURE__ */ jsxRuntime.jsx("h3", {
          children: /* @__PURE__ */ jsxRuntime.jsx("code", {
            className: classNames$7.code,
            children: "$supports"
          })
        }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
          lang: "js",
          rows: 2,
          children: JSON.stringify(style.getConditionals("supports"), null, 2)
        })]
      })]
    })]
  });
}
function StoredVariables() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("h2", {
      children: ["Stored Variables Using", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "$"
      }), " Prefix"]
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++%24colors%3A+%7B%0A++++++++++borders%3A+%7B%0A++++++++++++heavy%3A+%22%23030%22%0A++++++++++%7D%2C%0A++++++++++buttons%3A+%22%23363%22%2C%0A++++++++++text%3A+%7B%0A++++++++++++primary%3A+%22%23cfc%22%0A++++++++++%7D%0A++++++++%7D%2C%0A+++++++%24mainFont%3A+%5B%0A+++++++++%22Georgia%22%2C%0A+++++++++%22Times+New+Roman%22%2C%0A+++++++++%22serif%22%0A++++++++%5D%2C%0A++++++++%24width%3A+%222px%22%2C%0A++++++++bg%3A+%22%24colors.buttons%22%2C%0A++++++++color%3A+%22%24colors.text.primary%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%22%24width+solid+%24colors.borders.heavy%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22%24mainFont%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D#t=2&e=5-21%2C28%2C30&s=14%2C34%2C38%2C42&i=2-28#t=3"
    })]
  });
}
function VendorPrefixes() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [" ", /* @__PURE__ */ jsxRuntime.jsxs("h2", {
      children: ["Stored Variables Using", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "$"
      }), " Prefix"]
    }), /* @__PURE__ */ jsxRuntime.jsx("h3", {
      children: /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "$prefixes"
      })
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "js",
      rows: 2,
      children: JSON.stringify(style.getPrefixes(), null, 2)
    })]
  });
}
var classNames$2 = {
  "heading": "duashw ori88l"
};
function Heading(_e) {
  var _f = _e, {
    children
  } = _f, props = __objRest(_f, [
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx("h3", __spreadProps(__spreadValues({
    className: classNames$2.heading
  }, props), {
    children
  }));
}
var classNames$1 = {
  "blur": "duvu4f orgon0 orgz8o orjefw",
  "foot": "kd4rv4 or661w",
  "side": "fbuqhn h9747f",
  "sublist": "du55pr or1v06 or7dra orb8h7",
  "tab": "or5d1l or6cxf or77o3 or7qxx ori2ie orwbnb",
  "tablist": "du55pr or1v06 or7dra orb8h7"
};
var classNames = {
  "-with-create-react-app": "kd24jo",
  "-with-gatsby": "kdyhbr",
  "-with-next-js": "kdre8k",
  "-with-tailwind-css": "kd3siy",
  "-with-vite": "kdb8lg",
  "atomic-classes": "kdavy2",
  "complex-selectors": "kdl98y",
  "css-properties": "kdscmx",
  "deep-merge-objects": "kde01s",
  "fallback-array-values": "kdxv8u",
  "font-face-rules": "kdoz44",
  "grouped-classes": "kd61ka",
  "introduction": "kdkmy8",
  "item": "orauug orf0o0",
  "keyframes-rules": "kdakmv",
  "media-queries": "kdn5jr",
  "nesting-selector": "kdcigh",
  "placeholder-classes": "kd5iit",
  "smart-integers": "kdh6y9",
  "stored-variables": "kd6g9l",
  "styles-are-js-objects": "kdd1qq",
  "vendor-prefixes": "kdbkmf",
  "zero-runtime-option": "kd1ohh"
};
function TocItem({
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: [classNames.item, style.get(classNames, useTabs.getId(children))].join(" "),
    children
  });
}
function SideMenu({
  labels,
  param,
  selected,
  setParam,
  setSelected,
  tabs
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("aside", {
      className: classNames$1.side,
      children: /* @__PURE__ */ jsxRuntime.jsx(useTabs.Tablist, {
        classNames: classNames$1,
        group: "toc",
        heading: Heading,
        initial: param,
        menuitem: TocItem,
        orientation: "vertical",
        selected,
        setSelected,
        tabs,
        total: labels.length,
        updParams: setParam
      })
    }), /* @__PURE__ */ jsxRuntime.jsx("label", {
      "aria-label": "Close menu",
      className: classNames$1.blur,
      htmlFor: "menu"
    }), /* @__PURE__ */ jsxRuntime.jsx("footer", {
      className: classNames$1.foot,
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
        children: ["Made With ", /* @__PURE__ */ jsxRuntime.jsx("abbr", {
          title: "Love",
          children: "\u2764\uFE0F"
        }), " in", " ", /* @__PURE__ */ jsxRuntime.jsx("abbr", {
          title: "New Hampshire",
          children: "NH"
        })]
      })
    })]
  });
}
function FallbackArrayValues() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Fallback Array Values"
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: "Fallbacks use arrays."
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++bg%3A+%5B%0A++++++++++%22%239c9%22%2C%0A++++++++++%22rgba%28153%2C204%2C153%2C.8%29%22%2C%0A++++++++++%22lch%2877.463%25+31.76+141.167+%2F+80%25%29%22%0A++++++++%5D%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&e=5-9&s=33-37&i=2-28#t=3"
    })]
  });
}
function SmartIntegers() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Smart Integers"
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      children: ["Converts integers to", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "px"
      }), " values, except for those where it wouldn\u2019t be correct. As examples,", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "lineHeight"
      }), ",", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "order"
      }), ", and", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "fontWeight"
      }), "."]
    }), /* @__PURE__ */ jsxRuntime.jsx(Iframe, {
      src: "./demo/?x=export+default+function+%28%29+%7B%0A++return+%28%0A++++%3Cspan%0A++++++className%3D%7Bcss%28%7B%0A++++++++bg%3A+%22%239c9%22%2C%0A++++++++color%3A+%22%23333%22%2C%0A++++++++p%3A+%224px+10px%22%2C%0A++++++++display%3A+%22block%22%2C%0A++++++++maxWidth%3A+200%2C%0A++++++++m%3A+%22auto%22%2C%0A++++++++textAlign%3A+%22center%22%2C%0A++++++++borderRadius%3A+10%2C%0A++++++++border%3A+%222px+solid+%23696%22%2C%0A++++++++fontWeight%3A+700%2C%0A++++++++fontFamily%3A+%22sans-serif%22%2C%0A++++++++fontSize%3A+24%2C%0A++++++%7D%29%7D%0A++++%3E%0A++++++Buy+Now%21%0A++++%3C%2Fspan%3E%0A++%29%0A%7D&e=8%2C11%2C13%2C15&s=5-7%2C9-11%2C21-23%2C41-43&i=53-69%2C104-120%2C138-154%2C172-188#t=3"
    })]
  });
}
function WithCreateReactApp() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "With Create React App"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "bash",
      rows: 1,
      children: ["yarn create react-app my-react-app", "cd my-react-app", "yarn add @ptb/style", "echo '' > src/styles.css"].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsxs("h3", {
      children: ["Add to ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "src/App.js"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "jsx",
      rows: 2,
      children: [`import { css } from "@ptb/style/macro"`, `import "./styles.css"`].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsxs("h3", {
      children: ["Both ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "yarn start"
      }), " or", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "yarn build"
      }), " should work as expected, including hot reload."]
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "bash",
      rows: 1,
      children: ["yarn start", "# or", "yarn build"].join("\n")
    })]
  });
}
function WithGatsby() {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
}
function WithNextJs() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "With Next.js"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "bash",
      children: ["yarn create next-app my-next-app", "cd my-next-app", "yarn add @ptb/style", "yarn add babel-plugin-macros", "echo '' > styles/styles.css"].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsxs("h3", {
      children: ["Create (or add to)", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: ".babelrc"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      children: ["{", '  "presets": ["next/babel"],', '  "plugins": ["babel-plugin-macros"]', "}"].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsxs("h3", {
      children: ["Add to ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "package.json"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "js",
      rows: 3,
      children: [`  "babelMacros": {`, `    "@ptb/style": {`, `      "output": "styles/styles.css"`, `    }`, `  }`].join("\n")
    }), "),", /* @__PURE__ */ jsxRuntime.jsxs("h3", {
      children: ["Add to ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "pages/_app.js"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "js",
      rows: 1,
      children: `import '../styles/styles.css'`
    }), /* @__PURE__ */ jsxRuntime.jsxs("h3", {
      children: ["Create (or add to)", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "pages/_document.js"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "jsx",
      rows: 1,
      children: [`import { getStyles } from "@ptb/style"`, `import Document from "next/document"`, `import { Fragment } from "react"`, ``, `export default class extends Document {`, `  static async getInitialProps(ctx) {`, `    const initialProps =`, `      await Document.getInitialProps(ctx)`, ``, `    return {`, `      ... initialProps,`, `      styles: (`, `        <Fragment>`, `          {initialProps.styles}`, `          <style`, `            dangerouslySetInnerHTML={{`, `              __html: getStyles ()`, `            }}`, `            data-creator="@ptb/style" />`, `        </Fragment>`, `      )`, `    }`, `  }`, `}`].join("\n")
    }), /* @__PURE__ */ jsxRuntime.jsxs("h3", {
      children: ["In each component file, for example", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "pages/index.js"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "js",
      rows: 1,
      children: `import { css } from "@ptb/style/macro"`
    }), /* @__PURE__ */ jsxRuntime.jsx("h3", {
      children: "Start Next.js server"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "bash",
      rows: 1,
      children: ["yarn dev"].join("\n")
    })]
  });
}
function WithTailwindCSS() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("h2", {
      children: ["With", " ", /* @__PURE__ */ jsxRuntime.jsx("a", {
        className: classNames$7.link,
        href: "https://tailwindcss.com/docs/utility-first",
        children: "Tailwind CSS"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      children: ["Using Tailwind with", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "@ptb/style"
      }), " is possibly simpler than Tailwind on its own! The Babel macro", " ", /* @__PURE__ */ jsxRuntime.jsx("a", {
        className: classNames$7.link,
        href: "https://github.com/ben-rogerson/twin.macro#readme",
        children: /* @__PURE__ */ jsxRuntime.jsx("code", {
          className: classNames$7.code,
          children: "twin.macro"
        })
      }), " ", "generates a JavaScript object that is perfect as input for the", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "css"
      }), " function."]
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: "First, add the required packages:"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "bash",
      rows: 1,
      children: "yarn add babel-plugin-macros tailwindcss twin.macro"
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      children: ["Then, in each component file, import from", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "twin.macro"
      }), " and call Tailwind CSS classes as a tagged template. At build time, the", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "tw``"
      }), " expression will be replaced by a JavaScript object representing those styles."]
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      children: [/* @__PURE__ */ jsxRuntime.jsx("strong", {
        children: "Note:"
      }), " The", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "twin.macro"
      }), " import", " ", /* @__PURE__ */ jsxRuntime.jsx("em", {
        children: "must"
      }), " be listed ", /* @__PURE__ */ jsxRuntime.jsx("em", {
        children: "before"
      }), " the", " ", /* @__PURE__ */ jsxRuntime.jsx("code", {
        className: classNames$7.code,
        children: "@ptb/style"
      }), " import."]
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      lang: "jsx",
      children: [`import tw from "twin.macro"`, `import { css } from "@ptb/style/macro"`, ``, `export default () => (`, `  <span`, `    className={css([`, "      tw`flex flex-col items-center justify-center h-screen`,", `      {`, `        fontFamily: "sans-serif",`, `        fontSize: "24px"`, `      }`, `    ])}`, `  >`, `    Buy Now!`, `  </span>`, `)`].join("\n")
    })]
  });
}
function WithVite() {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
}
function ZeroRuntimeOption() {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsxs("h2", {
      children: ["Setup Not ", /* @__PURE__ */ jsxRuntime.jsx("em", {
        children: "Required"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: "Simply add the library to your project and import it in each file where it is used. No container, context, Babel configuration, or webpack plugins required."
    }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
      children: ["If you wish to utilize the zero-runtime option, there is", " ", /* @__PURE__ */ jsxRuntime.jsx("em", {
        children: "some"
      }), " setup needed, mostly to pre-render components and save the resulting styles to a css file."]
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      "data-line": "1,3",
      lang: "bash",
      rows: 2,
      children: `npm install @ptb/style
# or
yarn add @ptb/style`
    }), /* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: "Zero-Runtime Option"
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: "Instead of importing from"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      rows: 1,
      children: `import { css } from "@ptb/style"`
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: "import the Babel macro instead:"
    }), /* @__PURE__ */ jsxRuntime.jsx(editor.Editor, {
      rows: 1,
      children: `import { css } from "@ptb/style/macro"`
    })]
  });
}
function Docs() {
  const tabs = {
    "Basics": ["Introduction", "Styles Are JS Objects", "Deep Merge Objects", "Atomic Classes", "Grouped Classes"],
    "Shorthand Keys": ["Stored Variables", "CSS Properties", "Media Queries", "Font Face Rules", "Keyframes Rules", "Vendor Prefixes"],
    "Selectors": ["Complex Selectors", "Nesting Selector", "Placeholder Classes"],
    "Values & Variables": ["Smart Integers", "Fallback Array Values"],
    "Production Ready": ["Zero\u2013Runtime Option", "\u2026with Create React App", "\u2026with Gatsby", "\u2026with Next.js", "\u2026with Tailwind CSS", "\u2026with Vite"]
  };
  const {
    labels,
    param,
    selected,
    setParam,
    setSelected
  } = useTabs.useTabs({
    "group": "toc",
    tabs
  });
  editor.useVisualViewport();
  const [checked, setChecked] = react.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: classNames$7.grid,
    children: [/* @__PURE__ */ jsxRuntime.jsx("input", {
      checked,
      className: classNames$7.hide,
      id: "menu",
      onChange: () => setChecked(!checked),
      type: "checkbox"
    }), /* @__PURE__ */ jsxRuntime.jsxs("header", {
      className: classNames$7.head,
      children: [/* @__PURE__ */ jsxRuntime.jsx(Menu, {}), /* @__PURE__ */ jsxRuntime.jsx(Logo, {}), /* @__PURE__ */ jsxRuntime.jsx(ConvertLink, {}), /* @__PURE__ */ jsxRuntime.jsx(DemoLink, {}), /* @__PURE__ */ jsxRuntime.jsx(GitHubLink, {})]
    }), /* @__PURE__ */ jsxRuntime.jsx(SideMenu, {
      labels,
      param,
      selected,
      setParam,
      setSelected,
      tabs
    }), /* @__PURE__ */ jsxRuntime.jsx("main", {
      className: classNames$7.main,
      children: /* @__PURE__ */ jsxRuntime.jsx(useTabs.Tabpanels, {
        classNames: classNames$7,
        group: "toc",
        labels,
        selected,
        children: [Introduction, StylesAreJSObjects, DeepMergeObjects, AtomicClasses, GroupedClasses, StoredVariables, CSSProperties, MediaQueries, FontFaceRules, KeyframesRules, VendorPrefixes, ComplexSelectors, NestingSelector, PlaceholderClasses, SmartIntegers, FallbackArrayValues, ZeroRuntimeOption, WithCreateReactApp, WithGatsby, WithNextJs, WithTailwindCSS, WithVite].map(function(Component, i) {
          return /* @__PURE__ */ jsxRuntime.jsx(useTabs.Tabpanel, {
            children: /* @__PURE__ */ jsxRuntime.jsx(Component, {})
          }, i);
        })
      })
    })]
  });
}
function DocsPage() {
  return /* @__PURE__ */ jsxRuntime.jsx(Docs, {});
}
exports["default"] = DocsPage;
