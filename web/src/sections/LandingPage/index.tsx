import type { FC } from "react"

import { TestingPost } from "@/sections//BlogPosts/TestingPost"
import { ProjectPost } from "@/sections/BlogPosts/ProjectPost"

export const LandingPage: FC = () => (
  <>
    {/* <div className={styles["hero"]}>
        <div>
          <h2>Hi, I&rsquo;m Peter!</h2>
          <p>Senior TypeScript Developer with React Web and Native</p>
        </div>
      </div>
      <hr /> */}
    <ProjectPost />
    <TestingPost />
  </>
)
