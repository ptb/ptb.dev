/*
  eslint-disable
    react/prop-types
 */

import { createContext, useContext } from "react"

/**
  @typedef {typeof import ("react")} React
 
  @typedef {
    import ("vite-plugin-ssr/client").PageContextBuiltInClient
  } PageContextBuiltInClient
 */

const Context = createContext(/** @type {any} */ (undefined))

/**
  `PageContextProvider` component.

  @param {object} props
  - Component inputs.

  @param {React.ReactElement} props.children
  - Initial content.

  @param {PageContextBuiltInClient} props.context
  - Context data.

  @returns {React.ReactElement}
    React component.
 */

export function PageContextProvider ({ children, context }) {
  return (
    <Context.Provider value={context}>{children}</Context.Provider>
  )
}

/**
  `useContext` React hook.

  @returns {PageContextBuiltInClient}
    Context data.
 */

export function usePageContext () {
  return useContext(Context)
}
