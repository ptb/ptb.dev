import { create } from "@ptb/style/macro"

export const styles = create({
  article: {
    "&": {
      bg: "#eee",
      boxShadow: "var(--shadow3)",
      fontFamily: "var(--serif)",
      maxWidth: 1170,
      mx: "auto",
      my: 24,
      width: {
        Md: "calc(100vw - 60px)"
      }
    }
  },
  cols: {
    "&": {
      display: "flex",
      flexDirection: {
        Md: "row",
        Sm: "column"
      }
    },
    "& > div": {
      flexBasis: { Md: "50%" }
    }
  },
  header: {
    "&": {
      background:
        "linear-gradient(rgba(255,255,255,.3),#494950 3px,#303036 calc(100% - 3px),rgba(0,0,0,.4)) #242428",
      boxShadow: "0 2px 2px rgba(0,0,0,.5)"
    },
    "& > div": {
      px: 16
    }
  },
  p24: {
    p: 24
  },
  post: {
    "& h3": {
      fontSize: 24,
      m: "24px"
    },
    "& h3, & h4": {
      fontFamily: "var(--sans)",
      textShadow: "1px 1px 2px rgba(0,0,0,0.4)"
    },
    "& h4": {
      fontSize: 20,
      m: "0 0 24px"
    }
  },
  project: {
    "&": {
      display: "flex",
      flexDirection: {
        Md: "row",
        Sm: "column"
      }
    },
    "& > div": {
      flexBasis: { Md: "50%" },
      p: 24
    },
    "& > div:nth-of-type(2)": {
      alignSelf: "center",
      textAlign: "center"
    },
    "& h3": {
      fontFamily: "var(--sans)",
      fontSize: 24,
      m: "0 0 24px",
      textShadow: "1px 1px 2px rgba(0,0,0,0.4)"
    },
    "& iframe": {
      "&::-webkit-scrollbar": {
        display: "none",
        width: 0
      },
      "boxShadow": "var(--shadow3)",
      "mx": -256,
      "my": -192
    },
    "& img": {
      boxShadow: "var(--shadow3)",
      maxWidth: "90%"
    },
    "&:nth-child(even) iframe": {
      transform: "rotate(2deg) scale(50%)"
    },
    "&:nth-child(even) img": {
      transform: "rotate(2deg)"
    },
    "&:nth-child(odd) > div:first-child": {
      order: { Md: 2 }
    },
    "&:nth-child(odd) iframe": {
      transform: "scale(50%) rotate(-2deg)"
    },
    "&:nth-child(odd) img": {
      transform: "rotate(-2deg)"
    }
  },
  tag: {
    "&": {
      alignItems: "center",
      color: "#321b1b",
      display: "flex",
      filter: "drop-shadow(0 1px 1px rgba(255,255,255,.3))",
      fontFamily: "Source Sans Pro,sans-serif",
      fontSize: 20,
      fontWeight: 600,
      py: 5,
      textDecoration: "none",
      textTransform: "capitalize",
      whiteSpace: "nowrap"
    },
    "&[title*=code]::before": {
      background:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cpath d='m64 16-20 88h12l20-88zM36 32 8 60l28 28 8-8-20-20 20-20zm48 0 28 28-28 28-8-8 20-20-20-20z' fill='%23321b1b'/%3E%3C/svg%3E\") 0 center no-repeat",
      content: "''",
      mr: 4,
      size: 20
    },
    "&[title*=project]::before": {
      background:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cpath d='m53 60 12-12 41 34c15 14-6 32-18 18zM9 56l16 16c2 2 4 2 6 0l4-4c2-2 2-4 0-6l-2-2 3-3c10 3 29-13 27-24l13-7c2-1 6-4 0-7-17-8-29-7-38 1L27 30c-4 4-4 10-3 15l-3 3-2-2c-2-2-4-2-6 0l-4 4c-2 2-2 4 0 6z' fill='%23321b1b'/%3E%3C/svg%3E\") 0 center no-repeat",
      content: "''",
      mr: 4,
      size: 20
    }
  },
  tags: {
    "&": {
      background:
        "linear-gradient(rgba(165,165,165,0.67843),rgba(91,91,91,0.71765)) red",
      borderBottom: "1px dashed rgba(0,0,0,0.5)",
      borderTop: "1px dashed rgba(255,255,255,0.2)",
      boxShadow:
        "inset 0 1px 2px rgba(255,255,255,0.3),inset 0 -1px 2px rgba(0,0,0,0.3),0 -2px #c27070,0 2px #8a4242,2px 4px 4px rgba(0,0,0,0.5)",
      display: "inline-flex",
      left: -26,
      listStyleType: "none",
      m: "10px 0",
      p: "5px 20px 5px 0",
      position: "relative"
    },
    "& > li": {
      ml: 15
    },
    "&::after": {
      borderColor: "#562929 #562929 transparent transparent",
      borderStyle: "solid",
      borderWidth: 5,
      bottom: "-13px",
      content: '""',
      position: "absolute"
    }
  }
})
