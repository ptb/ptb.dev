import { create } from "@ptb/style"

export default create({
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
})
