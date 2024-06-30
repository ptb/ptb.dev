import type { FC, PropsWithChildren } from "react"

import { styles } from "./styles"

export const ProjectSection: FC<
  PropsWithChildren<{
    iframeSrc?: string
    imgSrc: string
    title: string
  }>
> = ({ children, iframeSrc, imgSrc, title }) => (
  <article className={styles["project"]}>
    <div>
      <h3>{title}</h3>
      {children}
    </div>
    <div>
      {iframeSrc ? (
        <iframe
          height="768"
          loading="lazy"
          src={iframeSrc}
          width="1024"
        />
      ) : (
        <img
          alt={`Screenshot of ${title}`}
          loading="lazy"
          src={imgSrc}
        />
      )}
    </div>
  </article>
)
