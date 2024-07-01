import { create } from "@ptb/style/macro"

export const styles = create({
  header: {
    "&": {
      alignItems: "center",
      backgroundColor: "var(--bg4)",
      boxShadow: "var(--shadow1)",
      color: "var(--color1)",
      display: "flex",
      fontFamily: "var(--sans)",
      justifyContent: "space-between",
      lineHeight: 1
    },
    "& a": {
      alignItems: "center",
      borderRadius: "var(--8px)",
      color: "inherit",
      display: "flex",
      filter: "drop-shadow(var(--shadow2))",
      fontSize: "var(--16px)",
      fontWeight: "bold",
      justifySelf: "flex-end",
      lineHeight: "var(--24px)",
      margin: "var(--8px)",
      padding: "var(--4px) var(--12px)"
    },
    "& a[href*='github']::before": {
      background:
        "url(\"data:image/svg+xml,%3csvg height='24' viewBox='0 0 120 120' width='24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='hsl(240%2c10%25%2c80%25)' d='M60 9a52 52 0 0 0-16 102c2 0 3-2 3-3v-9c-14 3-17-7-17-7-3-6-6-7-6-7-5-4 0-3 0-3 5 0 8 5 8 5 5 8 12 6 15 4l4-7c-12-1-24-6-24-25 0-6 2-11 5-14 0-2-2-7 1-14 0 0 4-2 14 5a50 50 0 0 1 26 0c10-7 14-5 14-5 3 7 1 12 1 14 3 3 5 8 5 14 0 20-12 24-24 25 2 2 4 5 4 10v14c0 2 1 3 3 3A52 52 0 0 0 60 9'/%3e%3c/svg%3e\") no-repeat",
      content: "''",
      mr: "var(--4px)",
      size: "var(--24px)"
    },
    "& a[href*='resume']::before": {
      background:
        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%23ddd' stroke-linecap='round' stroke-linejoin='round' stroke-width='10' d='m39 81 7-24 42-41c10-10 25 7 17 15L62 74Zm43-52 10 9M49 25H26c-8 0-13 5-13 13v56c0 8 5 13 13 13h56c8 0 13-8 13-16V71'/%3E%3C/svg%3E\")",
      content: "''",
      mr: "var(--4px)",
      size: "var(--24px)"
    },
    "& h1": {
      "& a": {
        "&::before": {
          background:
            "url(\"data:image/svg+xml,%3Csvg height='24' viewBox='0 0 120 120' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M41 110C60-46 149 44 60 71c-27 9-58-5-23-56' fill='none' stroke='%23ddd' stroke-width='22'/%3E%3C/svg%3E\") 0 center no-repeat",
          content: "''",
          marginRight: "var(--4px)",
          size: "var(--24px)"
        },
        "alignItems": "center",
        "borderRadius": "var(--8px)",
        "color": "var(--color1)",
        "display": "flex",
        "fontSize": "var(--24px)",
        "margin": "var(--8px)",
        "padding": "var(--4px) var(--12px)"
      },
      "m": 0
    },
    "& ul": {
      display: "flex",
      listStyleType: "none",
      m: 0,
      maskImage:
        "linear-gradient(90deg, transparent, #000 var(--16px), #000 calc(100% - var(--16px)), transparent 100%)",
      MsOverflowStyle: "none",
      overflowX: "auto",
      p: 0,
      scrollbarWidth: "none"
    },
    "& ul a": {
      alignItems: "center",
      borderRadius: "var(--8px)",
      color: "inherit",
      display: "flex",
      filter: "drop-shadow(var(--shadow2))",
      fontSize: "var(--16px)",
      fontWeight: "bold",
      justifySelf: "flex-end",
      lineHeight: "var(--24px)",
      margin: "var(--8px)",
      padding: "var(--4px) var(--12px)"
    },
    "& ul::-webkit-scrollbar": {
      height: 0
    },
    "& ul::-webkit-scrollbar-thumb": {
      bg: "transparent"
    },
    "& ul::-webkit-scrollbar-track": {
      bg: "transparent"
    }
  },
  hero: {
    "&": {
      alignItems: "center",
      backgroundImage: `url("/hero/face.png"), url("/hero/hero.jpg")`,
      backgroundPosition: "left top, center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "350px 350px, cover",
      boxShadow: "inset var(--shadow1), var(--shadow1)",
      display: "flex",
      height: "570px",
      justifyContent: "center"
    },
    "& > div": {
      backdropFilter: "blur(10px)",
      borderRadius: "var(--8px)",
      fontFamily: "var(--sans)",
      fontWeight: "bold",
      maskImage: `url("/hero/mask.png")`,
      maskSize: "100% 100%",
      p: "var(--32px)",
      textAlign: "center",
      textShadow: "var(--shadow0)",
      WebkitBackdropFilter: "blur(10px)",
      width: "fit-content"
    },
    "& h2": {
      "&::before": {
        animationDuration: ".5s",
        animationIterationCount: "infinite",
        animationName: {
          "0%": {
            transform: "rotate(10deg)"
          },
          "50%": {
            transform: "rotate(15deg)"
          },
          "100%": {
            transform: "rotate(10deg)"
          }
        },
        content: "'👋🏻'",
        display: "inline-block",
        mr: "var(--16px)"
      },
      "alignItems": "center",
      "display": "inline-flex",
      "fontSize": "var(--32px)",
      "m": 0
    },
    "& p": {
      fontSize: "var(--24px)",
      lineHeight: 1.5,
      m: 0,
      maxWidth: "14em"
    }
  },
  root: {
    "*,*::before,*::after": {
      boxSizing: "inherit"
    },
    ":root": {
      "--4px": "0.25rem",
      "--8px": "0.5rem",
      "--12px": "0.75rem",
      "--16px": "1rem",
      "--20px": "1.25rem",
      "--24px": "1.5rem",
      "--32px": "2rem",
      "--48px": "3rem",
      "--64px": "4rem",
      "--80px": "5rem",
      "--96px": "6rem",
      "-Bg1": "transparent",
      "-Bg2": "rgba(0,0,0,.2)",
      "-Bg3": "rgba(255,255,255,.03)",
      "-Bg4": "#3d3d43",
      "-Color1": "#ddd",
      "-Hue": "240",
      "-Mono": "Source Code Pro,monospace",
      "-Sans": "Source Sans Pro,sans-serif",
      "-Sat": "5%",
      "-Serif": "PT Serif,serif",
      "-Shadow0": "0 0 4px rgba(0,0,0,.2)",
      "-Shadow1": "0 2px 4px rgba(0,0,0,.4)",
      "-Shadow2": "2px 2px 2px rgba(0,0,0,.8)",
      "-Shadow3": "2px 2px 4px rgba(0,0,0,.5)",
      "background":
        "linear-gradient(225deg,var(--bg1) 70%,var(--bg2) 70%,var(--bg2) 75%,var(--bg3) 75%,var(--bg3) 80%,var(--bg1) 80%) 0 0/12px 12px,linear-gradient(315deg,var(--bg1) 45%,var(--bg2) 45%,var(--bg2) 50%,var(--bg3) 50%,var(--bg3) 55%,var(--bg1) 55%) 6px 0/12px 12px var(--bg4)",
      "boxSizing": "border-box",
      "WebkitTextSizeAdjust": "100%"
    },
    "a": {
      "&:hover,&:focus": {
        textDecoration: "underline"
      },
      "color": "inherit",
      "textDecoration": "none"
    },
    "abbr": {
      cursor: "help",
      textDecorationLine: "underline",
      textDecorationStyle: "dotted"
    },
    "body": {
      fontSize: "var(--16px)",
      m: 0
    },
    "hr": {
      borderTop: "solid var(--bg2)",
      borderWidth: "1px 0 0",
      boxShadow: "0 1px 2px rgba(255,255,255,.3)",
      maxWidth: 1170,
      mx: "auto",
      my: 24,
      width: {
        Md: "calc(100vw - 60px)"
      }
    }
  }
})
