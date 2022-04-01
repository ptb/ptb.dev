import { create } from "@ptb/style/macro"

export default create({
  "icon": {
    "&": {
      "borderRadius": 6,
      "display": "block",
      "m": ".6rem"
    }
  },
  "menu": {
    "Md": {
      "display": "none"
    },
    "Sm": {
      "&": {
        "cursor": "pointer",
        "display": "inline-block"
      }
    }
  },
  "path1": {
    "#menu:checked ~ header &": {
      "transform": "rotate(135deg)"
    },
    "&": {
      "transformOrigin": "center",
      "transitionDuration": ".5s"
    },
    "transform": "translate(0,-24px)"
  },
  "path2": {
    "#menu:checked ~ header &": {
      "transform": "scale(0)"
    },
    "&": {
      "transformOrigin": "center",
      "transitionDuration": ".5s"
    }
  },
  "path3": {
    "#menu:checked ~ header &": {
      "transform": "rotate(-135deg)"
    },
    "&": {
      "transformOrigin": "center",
      "transitionDuration": ".5s"
    },
    "transform": "translate(0,24px)"
  }
})
