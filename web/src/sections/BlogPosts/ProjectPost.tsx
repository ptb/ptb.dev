/* eslint-disable @stylistic/jsx-child-element-spacing */
import type { FC } from "react"

import { BlogPost } from "./BlogPost"
import { ProjectSection } from "./ProjectSection"

export const ProjectPost: FC = () => (
  <BlogPost tags={["projects"]}>
    <ProjectSection
      imgSrc="/projects/hivebrite.com"
      title="Hivebrite"
    >
      <p>
        <a href="https://hivebrite.com">Hivebrite</a> is a community
        engagement platform that helps organizations build and grow
        private communities. Hivebrite offers customizable branded
        community portals to facilitate networking, collaboration, and
        discussion among members.
      </p>
      <p>
        During my almost four years at Hivebrite, I worked on a
        variety of key product features: events across time zones,
        fund raising projects, accessibility improvements (
        <abbr title="accessibility">a11y</abbr>), and translations (
        <abbr title="internationalization">i18n</abbr>). I helped
        migrate dozens of design system components for forms and
        modals to TypeScript. I also addressed all issues spanning
        between the Ruby on Rails/React web app and the white-labeled
        React Native mobile apps for iOS and Android.
      </p>
    </ProjectSection>
    <ProjectSection
      imgSrc="/projects/minibardelivery.com"
      title="Minibar Delivery"
    >
      <p>
        <a href="https://minibardelivery.com">Minibar Delivery</a> is
        a service that offers on-demand delivery of wine, beer,
        spirits, and mixers. Minibar Delivery partners with local
        liquor stores in over 200 U.S. cities to offer a wide
        selection of beverages, delivered right to customers' doors.
        It makes it easy to shop for alcohol and have it delivered in
        under an hour.
      </p>
      <p>
        Over a ten month period, I migrated the entire Minibar
        Delivery front-end from Ruby on Rails templates with jQuery
        and Backbone.js to React with Next.js. SEO was the priority,
        so <a href="https://schema.org">schema.org</a> microdata was
        added to all product pages and search results. The modernized
        site replaced the existing production e-commerce storefront
        without any downtime or loss of sales.
      </p>
    </ProjectSection>
    <ProjectSection
      iframeSrc="https://bigfundj.com/music/"
      imgSrc="/projects/bigfundj.com"
      title="BIG FUN Disc Jockeys"
    >
      <p>
        <a href="https://bigfundj.com">BIG FUN Disc Jockeys</a> is a
        professional Bay Area DJ service that specializes in providing
        high-energy entertainment for weddings, parties, corporate
        events, and more. With a team of experienced DJs, they offer
        personalized music playlists, state-of-the-art sound systems,
        and vibrant lighting setups to ensure every event is memorable
        and fun.
      </p>
      <p>
        I developed the entire BIG FUN Disc Jockeys website based on
        provided Photoshop design mock-ups. It was the first site I
        built specifically for high-resolution ("Retina") displays
        before such displays were commonplace.
      </p>
    </ProjectSection>
  </BlogPost>
)
