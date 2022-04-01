import { create } from "@ptb/style/macro"

export default create({
  "cssBlock": {
    "&": {
      "gridArea": "2/1/3/2",
      "overflowY": "auto"
    },
    "Md": {
      "pl": 8,
      "py": 8
    },
    "Sm": {
      "p": 8
    }
  },
  "cssLabel": {
    "& > span": {
      "backgroundImage":
        "url(\"data:image/svg+xml,%3csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3e%3cg stroke='hsl(240%2c5%25%2c70%25)'%3e%3cpath d='M92 28 42 78' fill='none' stroke-linecap='round' stroke-width='20'/%3e%3cpath d='m27 89 4 4 13-6v-5h-6v-6h-5Z' fill='hsl(240%2c10%25%2c20%25)'/%3e%3cpath d='m24 96 7-3-4-4Z' fill='hsl(240%2c5%25%2c70%25)'/%3e%3c/g%3e%3cpath d='m81 25 14 14' fill='none' stroke='hsl(240%2c10%25%2c20%25)' stroke-width='5'/%3e%3c/svg%3e\")"
    },
    "gridArea": "1/1/2/2"
  },
  "grid": {
    "&": {
      "display": "grid"
    },
    "Md": {
      "gridTemplateColumns": "1fr 1fr",
      "gridTemplateRows":
        "var(--icon-size) calc(var(--viewport-height, 100vh) - var(--icon-size))"
    },
    "Sm": {
      "gridTemplateRows":
        "repeat(2, var(--icon-size) calc((var(--viewport-height, 100vh) / 2) - var(--icon-size)))"
    }
  },
  "head": {
    "&": {
      "alignItems": "center",
      "borderBottom": "1px solid hsl(var(--hue),var(--sat),25%)",
      "display": "flex",
      "justifyContent": "space-between",
      "p": ".5rem"
    },
    "& > *": {
      "backgroundPosition": "1.2rem center",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "1.8rem",
      "borderRadius": 6,
      "cursor": "default",
      "fontFamily": "var(--sans)",
      "fontSize": "1.4rem",
      "pl": "3.6rem",
      "pr": "1.4rem",
      "py": ".6rem",
      "userSelect": "none"
    }
  },
  "icon": {
    "&": {
      "alignItems": "center",
      "display": "flex",
      "flexGrow": 1
    }
  },
  "jsBlock": {
    "&": {
      "overflowY": "auto",
      "p": 8
    },
    "Md": {
      "gridArea": "2/2/3/3"
    },
    "Sm": {
      "gridArea": "4/1/5/2"
    }
  },
  "jsLabel": {
    "& > span": {
      "backgroundImage":
        "url(\"data:image/svg+xml,%3csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath d='M44 32c-24 0 0 28-24 28 24 0 0 28 24 28' fill='none' id='a' stroke='hsl(240%2c5%25%2c70%25)' stroke-width='11'/%3e%3cuse transform='matrix(-1 0 0 1 120 0)' xlink:href='%23a'/%3e%3c/svg%3e\")"
    },
    "Md": {
      "gridArea": "1/2/2/3"
    },
    "Sm": {
      "gridArea": "3/1/4/2"
    }
  },
  "vscode": {
    "& > a": {
      "&:hover,&:focus,&:active": {
        "bg": "hsl(var(--hue),var(--sat),20%)",
        "color": "hsl(var(--hue),var(--sat),90%)"
      },
      "backgroundImage":
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100'%3E%3Cmask id='a' width='100' height='100' x='0' y='0' mask-type='alpha' maskUnits='userSpaceOnUse'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M71 99.3c1.5.6 3.3.6 4.9-.2l20.6-9.9c2.1-1 3.5-3.2 3.5-5.6V16.4c0-2.4-1.4-4.6-3.5-5.6L75.9.8a6.2 6.2 0 0 0-7.1 1.3L29.4 38 12.2 25a4.2 4.2 0 0 0-5.3.1l-5.5 5a4.2 4.2 0 0 0 0 6.2L16.2 50 1.4 63.6a4.2 4.2 0 0 0 0 6.1l5.5 5a4.2 4.2 0 0 0 5.3.3l17.2-13 39.4 36c.6.5 1.3 1 2.1 1.3Zm4-72L45.1 50l30 22.7V27.3Z' clip-rule='evenodd'/%3E%3C/mask%3E%3Cg mask='url(%23a)'%3E%3Cpath fill='%230065A9' d='M96.5 10.8 75.9.8a6.2 6.2 0 0 0-7.2 1.3L1.3 63.6a4.2 4.2 0 0 0 0 6.1l5.5 5a4.2 4.2 0 0 0 5.3.3l81.3-61.6c2.7-2.1 6.6-.2 6.6 3.3v-.3c0-2.4-1.4-4.6-3.5-5.6Z'/%3E%3Cg filter='url(%23b)'%3E%3Cpath fill='%23007ACC' d='m96.5 89.2-20.6 10a6.2 6.2 0 0 1-7.2-1.3L1.3 36.4a4.2 4.2 0 0 1 0-6.1l5.5-5a4.2 4.2 0 0 1 5.3-.3l81.3 61.6c2.7 2.1 6.6.2 6.6-3.3v.3c0 2.4-1.4 4.6-3.5 5.6Z'/%3E%3C/g%3E%3Cg filter='url(%23c)'%3E%3Cpath fill='%231F9CF0' d='M75.9 99.1a6.2 6.2 0 0 1-7.2-1.2c2.4 2.3 6.3.7 6.3-2.6V4.7c0-3.3-4-5-6.3-2.6A6.2 6.2 0 0 1 76 .9l20.6 9.9c2.1 1 3.5 3.2 3.5 5.6v67.2c0 2.4-1.4 4.6-3.5 5.6l-20.6 10Z'/%3E%3C/g%3E%3Cpath fill='url(%23d)' fill-rule='evenodd' d='M70.9 99.3c1.5.6 3.3.6 5-.2l20.5-9.9c2.2-1 3.5-3.2 3.5-5.6V16.4c0-2.4-1.3-4.6-3.5-5.6L75.8.8a6.2 6.2 0 0 0-7 1.3L29.2 38 12 25a4.2 4.2 0 0 0-5.3.1l-5.5 5a4.2 4.2 0 0 0 0 6.2L16.2 50 1.3 63.6a4.2 4.2 0 0 0 0 6.1l5.5 5a4.2 4.2 0 0 0 5.3.3l17.2-13 39.4 36c.6.5 1.4 1 2.2 1.3Zm4-72L45 50l30 22.7V27.3Z' clip-rule='evenodd' opacity='.3' style='mix-blend-mode:overlay'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='b' width='116.7' height='92.2' x='-8.4' y='15.8' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='4.2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' mode='overlay' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='c' width='47.9' height='116.2' x='60.4' y='-8.1' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='4.2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' mode='overlay' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3ClinearGradient id='d' x1='49.9' x2='49.9' y1='.3' y2='99.7' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E\")",
      "color": "inherit",
      "cursor": "pointer",
      "display": "inline-block",
      "mr": 3,
      "textDecoration": "none"
    }
  }
})
