import type { FC, PropsWithChildren } from "react"

import { styles } from "./styles"

export const ProjectSection: FC<
  PropsWithChildren<{
    iframeSrc?: string
    imgSrc: string
    title: string
  }>
> = ({ children, imgSrc, title }) => (
  <article className={styles["project"]}>
    <div>
      <h3>{title}</h3>
      {children}
    </div>
    <div>
      <picture>
        <source
          srcSet={`${imgSrc}.avif`}
          type="image/avif"
        />
        <source
          srcSet={`${imgSrc}.webp`}
          type="image/webp"
        />
        <img
          alt={`Screenshot of ${title}`}
          loading="lazy"
          src={`${imgSrc}.jpg`}
        />
      </picture>
    </div>
  </article>
)
