import { create } from "@ptb/style/macro"

export default create({
  "logo": [
    {
      "&": {
        "$unstyle.h": true
      }
    },
    {
      "&": {
        "color": "hsl(var(--hue),var(--sat),85%)",
        "flexGrow": 1,
        "fontFamily": "var(--sans)",
        "fontSize": "2.4rem",
        "userSelect": "none"
      },
      "&::before": {
        "color": "hsl(var(--hue),var(--sat),65%)",
        "content": "'@'"
      },
      "Md": {
        "pl": "1rem"
      }
    }
  ]
})
