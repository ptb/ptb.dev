import { create } from "@ptb/style/macro"

export default create({
  "code": {
    "bg": "hsl(var(--hue),var(--sat),25%)",
    "fontFamily": "var(--mono)"
  },
  "grid": {
    "&": {
      "bg": "inherit",
      "display": "grid",
      "gridTemplateAreas": "'head head' 'side main' 'foot main'",
      "gridTemplateColumns": "var(--side-width) 1fr",
      "gridTemplateRows":
        "var(--icon-size) calc(var(--viewport-height, 100vh) - var(--icon-size) - var(--icon-size)) var(--icon-size)",
      "overflowX": "hidden"
    }
  },
  "head": {
    "&": {
      "alignItems": "center",
      "borderBottom": "1px solid",
      "borderColor": "hsl(var(--hue),var(--sat),25%)",
      "display": "flex",
      "gridArea": "head",
      "width": "var(--viewport-width, 100vw)"
    }
  },
  "hide": {
    "display": "none"
  },
  "iframe": {
    "&": {
      "borderWidth": 0,
      "height": "calc(var(--viewport-height, 100vh) * .6)",
      "outline": "none",
      "resize": "both",
      "width": "100%"
    }
  },
  "link": {
    "&": {
      "$unstyle.a": true
    }
  },
  "main": {
    "&": {
      "bg": "inherit",
      "borderColor": "hsl(var(--hue),var(--sat),25%)",
      "borderLeft": "1px solid",
      "fontFamily": "var(--serif)",
      "gridArea": "main",
      "overflowY": "auto"
    },
    "Sm": {
      "#menu:checked ~ &": {
        "filter": "blur(3px)",
        "transform": "translateX(0)"
      },
      "#menu:not(:checked) ~ &": {
        "filter": "blur(0)",
        "transform":
          "translateX(calc((var(--side-width) * -1) + var(--icon-size)))"
      },
      "&": {
        "transitionDuration": ".5s",
        "transitionProperty": "filter,transform",
        "transitionTimingFunction": "ease-in-out",
        "width": "calc(var(--viewport-width, 100vw) - var(--icon-size))"
      }
    }
  },
  "p": {
    "mx": "1em"
  },
  "radio": {
    "display": "none"
  },
  "tabpanel": {
    "&": {
      "outline": "none",
      "p": 8
    },
    "input[name=toc]:not(:checked) + &": {
      "display": "none"
    }
  }
})
