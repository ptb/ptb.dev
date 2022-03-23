/*
  eslint-disable
    consistent-return,
    no-process-env
 */

import { dirname, join } from "path"
import { fileURLToPath } from "url"

import compression from "compression"
import express from "express"
import { createServer } from "vite"
import { createPageRenderer } from "vite-plugin-ssr"

/**
  Start vite app server.
    
  @returns {Promise<void>}
 */

async function serve () {
  const isProduction = process.env.NODE_ENV === "production"
  const port = process.env.PORT || 3200

  const root = dirname(fileURLToPath(import.meta.url))
  const outDir = "www"

  const info = [
    "\x1Bc",
    "  Server running at:",
    "",
    `  > Local: http://localhost:${port}/`
  ].join("\n")

  const app = express()

  app.use(compression())

  let viteDevServer

  if (isProduction) {
    app.use(express.static(join(root, outDir, "client")))
  } else {
    viteDevServer = await createServer({
      root,
      "server": {
        "middlewareMode": "ssr"
      }
    })

    app.use(viteDevServer.middlewares)
  }

  const renderPage = createPageRenderer({
    isProduction,
    outDir,
    root,
    viteDevServer
  })

  app.get("*", async function ({ "originalUrl": url }, res, next) {
    const { httpResponse } = await renderPage({ url })

    if (httpResponse) {
      const { body, contentType, statusCode } = httpResponse

      res.status(statusCode).type(contentType)
        .send(body)
    } else {
      return next()
    }
  })

  app.listen(port)
  console.info(info)
}

serve()
