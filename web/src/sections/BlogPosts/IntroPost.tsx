import { css } from "@ptb/style/index"
import type { FC } from "react"

import { BlogPost } from "./BlogPost"

export const IntroPost: FC = () => (
  <BlogPost tags={["about"]}>
    <div
      className={css({
        "&": {
          display: "flex",
          flexDirection: {
            Md: "row",
            Sm: "column"
          }
        }
      })}
    >
      <div>
        <h2
          className={css({
            "&": {
              fontFamily: "var(--sans)",
              fontSize: 32,
              fontStyle: "italic",
              m: "24px 24px 12px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.4)"
            }
          })}
        >
          👋🏻 Hi, I’m Peter.
        </h2>
        <p className={css({ fontSize: 20, m: "12px 24px 24px" })}>
          I’m a senior front-end developer with decades of experience
          specializing in React and TypeScript. Proven track record in
          modernization efforts, mentoring, and developing
          high-performance web applications. Adept at solving complex
          problems with a focus on accessibility and user experience.
        </p>
      </div>

      <div
        className={css({
          display: "flex",
          flexBasis: { Md: "300px" },
          justifyContent: "flex-end"
        })}
      >
        <picture className={css({ p: 24 })}>
          <source
            srcSet="/hero/ptb.avif"
            type="image/avif"
          />
          <source
            srcSet="/hero/ptb.webp"
            type="image/webp"
          />
          <img
            height="150"
            src="/hero/ptb.png"
          />
        </picture>
      </div>
    </div>
  </BlogPost>
)
