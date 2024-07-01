import type { FC, PropsWithChildren } from "react"

import { styles } from "./styles"

export const BlogPost: FC<PropsWithChildren<{ tags: string[] }>> = ({
  children,
  tags
}) => (
  <article
    className={styles["article"]}
    itemProp="blogPost"
    itemScope
    itemType="http://schema.org/BlogPosting"
  >
    <header className={styles["header"]}>
      <div>
        <ul className={styles["tags"]}>
          {tags.map((tag) => (
            <li key={tag}>
              <span
                className={styles["tag"]}
                itemProp="keywords"
                rel="tag"
                title={tag}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </header>
    {children}
  </article>
)
