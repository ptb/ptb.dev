import { create } from "@ptb/style/macro"

export default create({
  "$mono": {
    "fontFamily": [
      {
        "fontFamily": "Source Code Pro",
        "fontStyle": "normal",
        "fontWeight": 400,
        "src": "url('/fonts/source-code-pro-400.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Code Pro",
        "fontStyle": "italic",
        "fontWeight": 400,
        "src": "url('/fonts/source-code-pro-400i.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Code Pro",
        "fontStyle": "normal",
        "fontWeight": 700,
        "src": "url('/fonts/source-code-pro-700.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Code Pro",
        "fontStyle": "italic",
        "fontWeight": 700,
        "src": "url('/fonts/source-code-pro-700i.woff2') format('woff2')"
      }
    ]
  },
  "$sans": {
    "fontFamily": [
      {
        "fontFamily": "Source Sans Pro",
        "fontStyle": "normal",
        "fontWeight": 400,
        "src": "url('/fonts/source-sans-pro-400.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Sans Pro",
        "fontStyle": "italic",
        "fontWeight": 400,
        "src": "url('/fonts/source-sans-pro-400i.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Sans Pro",
        "fontStyle": "normal",
        "fontWeight": 700,
        "src": "url('/fonts/source-sans-pro-700.woff2') format('woff2')"
      },
      {
        "fontFamily": "Source Sans Pro",
        "fontStyle": "italic",
        "fontWeight": 700,
        "src": "url('/fonts/source-sans-pro-700i.woff2') format('woff2')"
      }
    ]
  },
  "$serif": {
    "fontFamily": [
      {
        "fontFamily": "PT Serif",
        "fontStyle": "normal",
        "fontWeight": 400,
        "src": "url('/fonts/pt-serif-400.woff2') format('woff2')"
      },
      {
        "fontFamily": "PT Serif",
        "fontStyle": "italic",
        "fontWeight": 400,
        "src": "url('/fonts/pt-serif-400i.woff2') format('woff2')"
      },
      {
        "fontFamily": "PT Serif",
        "fontStyle": "normal",
        "fontWeight": 700,
        "src": "url('/fonts/pt-serif-700.woff2') format('woff2')"
      },
      {
        "fontFamily": "PT Serif",
        "fontStyle": "italic",
        "fontWeight": 700,
        "src": "url('/fonts/pt-serif-700i.woff2') format('woff2')"
      }
    ]
  },
  ":root": {
    "$scrollbarX": {
      "&::WebkitScrollbar": {
        "bg": "transparent",
        "height": 1,
        "width": 0
      },
      "&::WebkitScrollbarThumb": {
        "bg": "hsl(var(--hue),var(--sat),25%)"
      },
      "&::WebkitScrollbarTrack": {
        "bg": "hsl(var(--hue),var(--sat),20%)"
      },
      "overflowX": "auto",
      "scrollbarWidth": "thin"
    },
    "$unstyle": {
      "a": {
        "color": "inherit",
        "textDecoration": "none"
      },
      "h": {
        "marginBlockEnd": 0,
        "marginBlockStart": 0
      },
      "ul": {
        "listStyleType": "none",
        "marginBlockEnd": 0,
        "marginBlockStart": 0,
        "paddingInlineStart": 0
      }
    },
    "*,*::after,*::before": {
      "boxSizing": "inherit"
    },
    ":root": {
      "--hue": "240",
      "--icon-size": "4.4rem",
      "--mono": "Source Code Pro,monospace",
      "--sans": "Source Sans Pro,sans-serif",
      "--sat": "5%",
      "--serif": "PT Serif,serif",
      "--side-width": "14em",
      "bg": {
        "_": "hsl(var(--hue),var(--sat),15%)",
        "Lt": "hsl(var(--hue),var(--sat),95%)"
      },
      "boxSizing": "border-box",
      "color": {
        "_": "hsl(var(--hue),var(--sat),75%)",
        "Lt": "hsl(var(--hue),var(--sat),10%)"
      },
      "fontSize": "62.5%",
      "WebkitTapHighlightColor": "transparent",
      "WebkitTextSizeAdjust": "100%"
    },
    "@supports (WebkitTouchCallout:none)": {
      ":where(input)": {
        "fontSize": "1.6rem"
      }
    },
    "body": {
      "fontSize": "1.8rem",
      "m": 0
    },
    "body,#root": {
      "bg": "inherit"
    }
  }
})
