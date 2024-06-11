import { create, css } from "@ptb/style/index"
import type { FC, PropsWithChildren } from "react"

export const Project: FC<
  PropsWithChildren<{ imgSrc: string; title: string }>
> = ({ children, imgSrc, title }) => {
  const classNames = create({
    article: {
      "&:nth-child(even) img": {
        transform: "rotate(2deg)"
      },
      "&:nth-child(odd) > div:first-child": {
        order: { Md: 2 }
      },
      "&:nth-child(odd) img": {
        transform: "rotate(-2deg)"
      },
      "bg": "#eee",
      // "filter": "drop-shadow(var(--shadow1))",
      "boxShadow": "var(--shadow1)",
      "display": "flex",
      "flexDirection": {
        Md: "row",
        Sm: "column"
      },
      "maxWidth": "60em",
      "mx": "auto",
      "my": "var(--24px)",
      "p": "var(--24px)"
    }
  })

  return (
    <article className={classNames["article"]}>
      <div className={css({ flexBasis: { Md: "50%" } })}>
        <h3 className={css({ fontFamily: "var(--sans)" })}>
          {title}
        </h3>
        {children}
      </div>
      <div
        className={css({
          display: "flex",
          flexBasis: { Md: "50%" },
          justifyContent: "center"
        })}
      >
        <img
          alt={`Screenshot of ${title}`}
          className={css({
            boxShadow: "var(--shadow1)",
            maxWidth: "90%"
          })}
          src={imgSrc}
        />
      </div>
    </article>
  )
}
