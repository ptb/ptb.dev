import { StrictMode } from "react"
import { render } from "react-dom"

import App from "./pages/index.page.jsx"

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
)
