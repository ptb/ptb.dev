import type { FC } from "react"
import { usePageContext } from "vike-react/usePageContext"

export const Page: FC = () => {
  const { is404 } = usePageContext()

  return is404 ? (
    <>
      <h1>Not Found</h1>
      <p>The requested URL was not found on this server.</p>
    </>
  ) : (
    <>
      <h1>Internal Server Error</h1>
      <p>Something went wrong.</p>
    </>
  )
}
