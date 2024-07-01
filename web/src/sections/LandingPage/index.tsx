import type { FC } from "react"

import { TestingPost } from "@/sections//BlogPosts/TestingPost"
import { ProjectPost } from "@/sections/BlogPosts/ProjectPost"

export const LandingPage: FC = () => (
  <>
    <ProjectPost />
    <TestingPost />
  </>
)
