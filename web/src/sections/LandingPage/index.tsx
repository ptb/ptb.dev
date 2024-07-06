import type { FC } from "react"

import { TestingPost } from "@/sections//BlogPosts/TestingPost"
import { IntroPost } from "@/sections/BlogPosts/IntroPost"
import { ProjectPost } from "@/sections/BlogPosts/ProjectPost"

export const LandingPage: FC = () => (
  <>
    <IntroPost />
    <ProjectPost />
    <TestingPost />
  </>
)
