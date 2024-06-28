import type { FC, PropsWithChildren } from "react"

import { styles } from "@/sections/LandingPage/styles"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <header className={styles["header"]}>
      <h1>
        <a href="/">ptb.dev</a>
      </h1>
      <ul>
        <li>
          <a href="/resume.pdf">Résumé</a>
        </li>
        <li>
          <a href="https://github.com/ptb">GitHub</a>
        </li>
        <li>
          <a href="/style/">@ptb/style</a>
        </li>
      </ul>
    </header>
    <main>{children}</main>
  </>
)
