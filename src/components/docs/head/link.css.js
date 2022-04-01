import { create } from "@ptb/style/macro"

export default create({
  "convert": {
    "backgroundImage":
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='%23000' stroke-width='4'%3E%3Cg id='a'%3E%3Cpath d='M32 32H8v56h40V48Z' fill='hsl(240,5%25,75%25)'/%3E%3Cpath d='M32 32v16h16' fill='none'/%3E%3C/g%3E%3Cuse xlink:href='%23a' transform='translate(64)'/%3E%3Cpath d='M34 60h26V48l22 18-22 18V72H34Z' fill='hsl(240,5%25,75%25)' stroke='hsl(240,5%25,15%25)' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E\")"
  },
  "demo": {
    "backgroundImage":
      "url(\"data:image/svg+xml,%3csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cellipse cx='60' cy='60' fill='none' id='a' rx='47' ry='18' stroke='hsl(240%2c5%25%2c70%25)' stroke-width='6'/%3e%3cuse transform='rotate(60 60 60)' xlink:href='%23a'/%3e%3cuse transform='rotate(-60 60 60)' xlink:href='%23a'/%3e%3c/svg%3e\")"
  },
  "github": {
    "backgroundImage":
      "url(\"data:image/svg+xml,%3csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='hsl(240%2c10%25%2c80%25)' d='M60 9a52 52 0 0 0-16 102c2 0 3-2 3-3v-9c-14 3-17-7-17-7-3-6-6-7-6-7-5-4 0-3 0-3 5 0 8 5 8 5 5 8 12 6 15 4l4-7c-12-1-24-6-24-25 0-6 2-11 5-14 0-2-2-7 1-14 0 0 4-2 14 5a50 50 0 0 1 26 0c10-7 14-5 14-5 3 7 1 12 1 14 3 3 5 8 5 14 0 20-12 24-24 25 2 2 4 5 4 10v14c0 2 1 3 3 3A52 52 0 0 0 60 9'/%3e%3c/svg%3e\")"
  },
  "link": [
    {
      "&": {
        "$unstyle.a": true
      }
    },
    {
      "&": {
        "alignItems": "center",
        "backgroundPosition": ".6rem center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "calc(var(--icon-size) * .6)",
        "borderRadius": 6,
        "cursor": "pointer",
        "display": "flex",
        "fontFamily": "var(--sans)",
        "fontWeight": 700,
        "justifySelf": "flex-end",
        "mr": "1rem",
        "overflow": "hidden",
        "pl": "calc(var(--icon-size) * .85)",
        "py": ".2rem"
      },
      "&:active,&:focus,&:hover": {
        "bg": "hsl(var(--hue),var(--sat),24%)"
      },
      "Md": {
        "pr": "1.2rem"
      },
      "Sm": {
        "maxWidth": "calc(var(--icon-size) * .85)"
      }
    }
  ]
})
