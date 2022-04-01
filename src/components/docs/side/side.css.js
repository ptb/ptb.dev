import { create } from "@ptb/style/macro"

export default create({
  "blur": {
    "Md": {
      "display": "none"
    },
    "Sm": {
      "#menu:checked ~ &": {
        "opacity": 1,
        "transform": "translateX(0)",
        "zIndex": 1
      },
      "#menu:not(:checked) ~ &": {
        "opacity": 0,
        "transform":
          "translateX(calc((var(--side-width) * -1) + var(--icon-size)))",
        "zIndex": -1
      },
      "&": {
        "bg": "hsla(var(--hue),var(--sat),10%,.2)",
        "gridArea": "main",
        "transitionDuration": ".5s",
        "transitionProperty": "opacity,transform",
        "transitionTimingFunction": "ease-in-out",
        "width": "calc(var(--viewport-width, 100vw) - var(--icon-size))"
      }
    }
  },
  "foot": {
    "&": {
      "alignItems": "center",
      "backgroundPosition":
        "calc((var(--icon-size) - (var(--icon-size) * .6)) / 2)",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "calc(var(--icon-size) * .6)",
      "borderColor": "hsl(var(--hue),var(--sat),25%)",
      "borderTop": "1px solid",
      "color": "hsl(var(--hue),var(--sat),70%)",
      "cursor": "default",
      "display": "flex",
      "fontFamily": "var(--sans)",
      "fontWeight": 700,
      "gridArea": "foot",
      "pl": "var(--icon-size)",
      "userSelect": "none"
    },
    "backgroundImage":
      "url(\"data:image/svg+xml,%3csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m40 112c20-160 112-68 20-40-28 8.5-60-6-24-58' fill='none' stroke='hsl(240%2c10%25%2c80%25)' stroke-width='24'/%3e%3c/svg%3e\")"
  },
  "side": {
    "gridArea": "side",
    "overflowY": "auto"
  },
  "sublist": [
    {
      "&": {
        "$unstyle.ul": true
      }
    },
    {
      "&[aria-orientation=vertical],[aria-orientation=vertical] &": {
        "flexDirection": "column"
      },
      "display": "flex"
    }
  ],
  "tab": {
    "&": {
      "alignItems": "center",
      "backgroundPosition":
        "calc((var(--icon-size) - (var(--icon-size) * .5)) / 2)",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "calc(var(--icon-size) * .5)",
      "display": "flex",
      "fontFamily": "var(--sans)",
      "height": "var(--icon-size)",
      "transitionDuration": ".1s",
      "transitionProperty": "background-position,background-size",
      "transitionTimingFunction": "ease-in-out",
      "userSelect": "none"
    },
    "&:hover,&:focus,&:active": {
      "color": "hsl(var(--hue),var(--sat),90%)",
      "outline": "none"
    },
    "&[aria-selected=false]": {
      "cursor": "pointer"
    },
    "&[aria-selected=true]": {
      "color": "hsl(var(--hue),var(--sat),90%)",
      "fontWeight": 700
    }
  },
  "tablist": [
    {
      "&": {
        "$unstyle.ul": true
      }
    },
    {
      "&[aria-orientation=vertical],[aria-orientation=vertical] &": {
        "flexDirection": "column"
      },
      "display": "flex"
    }
  ]
})
