import { Head as ParentHead } from "../../+Head"

export const Head = () => (
  <>
    <ParentHead />
    <meta
      content="Testing is a core practice of professional software development. In this article, I'm going to discuss automated testing in React web apps specifically; that is, tests which exercise the desired functionality, are committed beside the application code, and are automatically run as part of a continuous integration (CI) process before merging."
      name="description"
    />
  </>
)
