import { css } from "@ptb/style/index"
import type { FC } from "react"

import { Project } from "./Project"

export const LandingPage: FC = () => {
  css({
    "*,*::before,*::after": {
      boxSizing: "inherit"
    },
    ":root": {
      "--4px": "0.25rem",
      "--8px": "0.5rem",
      "--12px": "0.75rem",
      "--16px": "1rem",
      "--20px": "1.25rem",
      "--24px": "1.5rem",
      "--32px": "2rem",
      "--48px": "3rem",
      "--64px": "4rem",
      "--80px": "5rem",
      "--96px": "6rem",
      "-Bg1": "transparent",
      "-Bg2": "rgba(0,0,0,.2)",
      "-Bg3": "rgba(255,255,255,.03)",
      "-Bg4": "#3d3d43",
      "-Color1": "#ddd",
      "-Hue": "240",
      "-Mono": "Source Code Pro,monospace",
      "-Sans": "Source Sans Pro,sans-serif",
      "-Sat": "5%",
      "-Serif": "PT Serif,serif",
      "-Shadow0": "0 0 4px rgba(0,0,0,.2)",
      "-Shadow1": "0 2px 4px rgba(0,0,0,.4)",
      "-Shadow2": "2px 2px 2px rgba(0,0,0,.8)",
      "background":
        "linear-gradient(225deg,var(--bg1) 70%,var(--bg2) 70%,var(--bg2) 75%,var(--bg3) 75%,var(--bg3) 80%,var(--bg1) 80%) 0 0/12px 12px,linear-gradient(315deg,var(--bg1) 45%,var(--bg2) 45%,var(--bg2) 50%,var(--bg3) 50%,var(--bg3) 55%,var(--bg1) 55%) 6px 0/12px 12px var(--bg4)",
      "boxSizing": "border-box",
      "WebkitTextSizeAdjust": "100%"
    },
    "a[href*='github']::before": {
      background:
        "url(\"data:image/svg+xml,%3csvg height='24' viewBox='0 0 120 120' width='24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='hsl(240%2c10%25%2c80%25)' d='M60 9a52 52 0 0 0-16 102c2 0 3-2 3-3v-9c-14 3-17-7-17-7-3-6-6-7-6-7-5-4 0-3 0-3 5 0 8 5 8 5 5 8 12 6 15 4l4-7c-12-1-24-6-24-25 0-6 2-11 5-14 0-2-2-7 1-14 0 0 4-2 14 5a50 50 0 0 1 26 0c10-7 14-5 14-5 3 7 1 12 1 14 3 3 5 8 5 14 0 20-12 24-24 25 2 2 4 5 4 10v14c0 2 1 3 3 3A52 52 0 0 0 60 9'/%3e%3c/svg%3e\") no-repeat",
      content: "''",
      mr: "var(--4px)",
      size: "24px"
    },
    "a[href*='resume']::before": {
      background:
        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' stroke='%23ddd' stroke-linecap='round' stroke-linejoin='round' stroke-width='10' d='m39 81 7-24 42-41c10-10 25 7 17 15L62 74Zm43-52 10 9M49 25H26c-8 0-13 5-13 13v56c0 8 5 13 13 13h56c8 0 13-8 13-16V71'/%3E%3C/svg%3E\")",
      content: "''",
      mr: "var(--4px)",
      size: "24px"
    },
    "body": {
      fontSize: "var(--16px)",
      margin: "0"
    },
    "header ul": {
      display: "flex",
      listStyleType: "none",
      margin: 0,
      padding: 0
    },
    "header.head": {
      alignItems: "center",
      backgroundColor: "var(--bg4)",
      boxShadow: "var(--shadow1)",
      color: "var(--color1)",
      display: "flex",
      fontFamily: "var(--sans)",
      justifyContent: "space-between",
      lineHeight: 1
    },
    "header.head a": {
      alignItems: "center",
      borderRadius: "var(--8px)",
      color: "inherit",
      display: "flex",
      filter: "drop-shadow(var(--shadow2))",
      fontSize: "var(--16px)",
      fontWeight: "bold",
      justifySelf: "flex-end",
      lineHeight: "var(--24px)",
      margin: "var(--8px)",
      padding: "var(--4px) var(--12px)",
      textDecoration: "none"
    },
    "header.head a:hover,header.head a:focus": {
      textDecoration: "underline"
    },
    "header.head h1": {
      m: 0
    },
    "header.head h1 a": {
      alignItems: "center",
      borderRadius: "var(--8px)",
      color: "var(--color1)",
      display: "flex",
      fontSize: "var(--24px)",
      margin: "var(--8px)",
      padding: "var(--4px) var(--12px)"
    },
    "header.head h1 a::before": {
      background:
        "url(\"data:image/svg+xml,%3Csvg height='24' viewBox='0 0 120 120' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M41 110C60-46 149 44 60 71c-27 9-58-5-23-56' fill='none' stroke='%23ddd' stroke-width='22'/%3E%3C/svg%3E\") 0 center no-repeat",
      content: "''",
      marginRight: "var(--4px)",
      size: "var(--24px)"
    },
    "main": {}
  })

  return (
    <>
      <header className="head">
        <h1>
          <a href="https://ptb.dev">ptb.dev</a>
        </h1>
        <ul
          className={css({
            "&::-webkit-scrollbar": {
              display: "none",
              height: 0
            },
            "maskImage":
              "linear-gradient(90deg, transparent, #000 var(--16px), #000 calc(100% - var(--16px)), transparent 100%)",
            "overflowX": "auto"
          })}
        >
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
      <main>
        <div
          className={css({
            alignItems: "center",
            backgroundImage: `url("/face.png"), url("/hero.jpg")`,
            backgroundPosition: "left top, center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "350px 350px, cover",
            display: "flex",
            height: "570px",
            justifyContent: "center"
          })}
        >
          <div
            className={css({
              backdropFilter: "blur(20px)",
              borderRadius: "var(--8px)",
              fontFamily: "var(--sans)",
              fontWeight: "bold",
              maskImage: `url("/mask.png")`,
              maskSize: "100% 100%",
              p: "var(--32px)",
              textAlign: "center",
              textShadow: "var(--shadow0)",
              WebkitBackdropFilter: "blur(20px)",
              width: "fit-content"
            })}
          >
            <div className={css({ fontSize: "var(--32px)" })}>
              <span
                className={css({
                  animationDuration: ".5s",
                  animationIterationCount: "infinite",
                  animationName: {
                    "0%": {
                      transform: "rotate(10deg)"
                    },
                    "50%": {
                      transform: "rotate(15deg)"
                    },
                    "100%": {
                      transform: "rotate(10deg)"
                    }
                  },
                  display: "inline-block"
                })}
              >
                👋🏻
              </span>{" "}
              Hi, I'm Peter!
            </div>
            <div
              className={css({
                fontSize: "var(--24px)",
                lineHeight: 1.5
              })}
            >
              Full-Stack TypeScript Developer
              <br />
              with React Web and Native
            </div>
          </div>
        </div>
        <Project
          imgSrc="/projects/hivebrite.com.png"
          title="Hivebrite"
        >
          <p>
            Hivebrite is a B2B SaaS community platform serving
            hundreds of organizations worldwide.
          </p>
          <ul>
            <li>
              Simplified cookie and OAuth authentication process for
              React Native mobile app using React Query.
            </li>
            <li>
              Helped lead modernization effort from JavaScript to
              Typescript, jQuery to React, and REST to GraphQL.
            </li>
            <li>
              Built features for job postings, account profiles,
              events across time zones, and membership campaigns.
            </li>
          </ul>
        </Project>
        <Project
          imgSrc="/projects/minibardelivery.com.png"
          title="Minibar Delivery"
        >
          <p>
            Minibar Delivery is an e-commerce store providing local
            alcohol delivery in over 200 cities across the United
            States.
          </p>
          <ul>
            <li>
              Migrated entire e-commerce frontend from Ruby on Rails
              views with jQuery/Backbone to React with Next.js.
            </li>
            <li>
              Developed a declarative zero-runtime functional
              CSS-in-JS tool for consistent and performant styling.
            </li>
          </ul>
        </Project>
        <Project
          imgSrc="/projects/home.jpg"
          title="The Bosse Family"
        >
          <p>
            Since 2010, I've been building our family's dream home in
            the woods of New Hampshire.
          </p>
          <ul>
            <li>
              Designed and built a super-insulated home, with three
              floors above ground, as a stay-at-home parent.
            </li>
            <li>
              Performed more than 95% of all electrical, plumbing,
              septic installation, masonry work, and framing.
            </li>
            <li>
              Connected our neighborhood to fiber network in nearby
              town using long-range 802.11ac Wi-Fi technology.
            </li>
          </ul>
        </Project>
        <Project
          imgSrc="/projects/bigfundj.com.png"
          title="BIG FUN Disc Jockeys"
        >
          <p>
            BIG FUN is a popular DJ business in the Bay Area of
            California.
          </p>
        </Project>
        <Project
          imgSrc="/projects/training.apple.com.png"
          title="Apple Training and Certification"
        >
          <p>
            Training and Certification is a team within Apple
            providing direct instruction in classrooms worldwide.
          </p>
          <ul>
            <li>
              Developed web app to locate Apple training centers
              worldwide, the first public Ruby on Rails app at Apple.
            </li>
            <li>
              Managed team supporting seven classrooms nationwide.
              Installed and distributed software and hardware.
            </li>
            <li>
              Installed and upgraded data center as sole DevOps,
              reducing costs while increasing capacity and security.
            </li>
          </ul>
        </Project>
        <Project
          imgSrc="/projects/agate.net.png"
          title="Agate Internet Services"
        >
          <p>
            In 1996, Agate Internet Services was the oldest and
            largest internet provider in the State of Maine.
          </p>
        </Project>
      </main>
    </>
  )
}
