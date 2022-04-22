/*
  eslint-disable
    max-len,
    max-lines-per-function,
    react/prop-types
 */

import classNames from "./intro.css.js"

/**
  @typedef {typeof import ("react")} React
 */

/**
  `Introduction` React component.

  @returns {React.ReactElement}
    React component.
 */

export function Introduction () {
  /**
    Respond to mouse click events.

    @param {React.MouseEvent<HTMLInputElement>} e
    - An Event object.

    @returns {void}
   */

  function handleClick (e) {
    const target = /** @type {HTMLInputElement} */ (e.target)

    target.select()

    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(target.value)
      } catch (err) {
        console.error(err)
      }
    } else {
      document.execCommand("copy")
    }
  }

  return (
    <article>

      <section className={classNames.hero}>
        <h1 className={classNames.title}>
          Manage CSS Like a Boss.
          Declare Your Styles and You’re Done.
        </h1>
        <p className={classNames.subtitle} role="doc-subtitle">
          <code>@ptb/style</code> is a CSS compiler with a powerful, intuitive API that makes authoring CSS faster and easier.
        </p>
      </section>

      <div>
        <input
          className={classNames.install}
          onClick={handleClick}
          value="npm install @ptb/style"
        />
      </div>

      <section className={classNames.section}>
        <h2>
          Simple
        </h2>
        <div className={classNames.cards}>
          <div className={classNames.card}>
            <h3>No More Naming</h3>
            <p>
              Skip naming and remembering class or component names. Names are generated automatically and consistently based on styles input.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>One Core Function</h3>
            <p>
              The core function, named <code className={classNames.code}>css</code>, parses and deduplicates all styles, returns class names, and dynamically applies them to the current web page.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Setup Not Required</h3>
            <p>
              Perfect for prototyping ideas quickly. No theme providers, wrappers, special components, props, plugins, or build configurations needed.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Separation of Concerns</h3>
            <p>
              Styles are separate from structure. Imagine having to use a special type of component just to use Redux. Styles should be simple.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Consistent Results</h3>
            <p>
              In any order, the same input will result in the same output, whether rendered at build time, server-side, or at runtime in the browser.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>No More Conflicts</h3>
            <p>
              Declare your styles and those styles are applied. No more specificity issues, naming collisions, or side effects from cascading styles.
            </p>
          </div>
        </div>
      </section>

      <section className={classNames.section}>
        <h2>
          Powerful
        </h2>
        <div className={classNames.cards}>
          <div className={classNames.card}>
            <h3>Any Selector or None</h3>
            <p>
              Use any selector: <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors">type</a>, <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors">class</a>, <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors">ID</a>, <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors">universal</a>, <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors">attribute</a>, <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator">adjacent </a> <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator">sibling</a>, <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator">child</a>, or <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator">descendant</a> selectors, <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">pseudo classes</a> and <a className={classNames.link} href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements">elements</a>.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Real Media Queries</h3>
            <p>
              Media queries can be used at the top of a group of styles, at the bottom under a CSS property, or nested inside of other media queries.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Override Styles Easily</h3>
            <p>
              Provide an array of styles and they will be deep merged. Start with a base set of styles followed by any modifications for easy variants.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Sass-Style Nesting</h3>
            <p>
              Nested rules can be complex and combined with commas. Each nested selector is combined separately and merged back into the selector list.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Built-In Abbreviations</h3>
            <p>
              Styled System inspired shorthand properties are built-in. Several common media queries have abbreviations and you can add your own.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>DIY Shortcuts</h3>
            <p>
              Define abbreviations for CSS properties (using <code className={classNames.code}>$properties</code>), conditional queries (<code className={classNames.code}>$media</code> or <code className={classNames.code}>$supports</code>), and vendor prefixes (<code className={classNames.code}>$prefixes</code>).
            </p>
          </div>
        </div>
      </section>

      <section className={classNames.section}>
        <h2>
          Flexible
        </h2>
        <div className={classNames.cards}>
          <div className={classNames.card}>
            <h3>Atomic or Group Names</h3>
            <p>
              Automatically creates atomic class names per style declaration or group styles under a single class name. Or both, you get to choose.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>CSR, SSR, or Build-Time</h3>
            <p>
              Universal tool that works with modern browsers and Node.js. Render at build-time (<abbr title="Static Site Generator: e.g. Gatsby or Vite">SSG</abbr>), server-side (<abbr title="Server-Side Rendering: e.g. Next.js or Remix">SSR</abbr>), or on the client (<abbr title="Single Page Application: e.g. Create React App">SPA</abbr>).
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Variables and Snippets</h3>
            <p>
              Define theme variables or blocks of styles using <code className={classNames.code}>$</code>-prefixed key names and reuse them later without needing a context or theme provider.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>React Or Any Framework</h3>
            <p>
              Works great with React or any other JavaScript framework or even plain JavaScript. It’s just a function and returns class names.
            </p>
          </div>
        </div>
      </section>

      <section className={classNames.section}>
        <h2>
          Performant
        </h2>
        <div className={classNames.cards}>
          <div className={classNames.card}>
            <h3>Production-Ready</h3>
            <p>
              Use the Babel macro to extract static styles to a CSS file. Styles are “compiled away” leaving just class names for a zero-runtime footprint.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Optimized Output</h3>
            <p>
              Styles are ordered simply and consistently. Selectors are parsed, de-duplicated, and grouped with identical declarations automatically.
            </p>
          </div>
          <div className={classNames.card}>
            <h3>Modern CSS for Pros</h3>
            <p>
              Simple enough for a novice developer and powerful enough for the needs of an experienced team. Optimized from development to delivery.
            </p>
          </div>
        </div>
        {/* Optional Zero-Runtime
        Optimized Output Smallest Possible Output
        Developer Experience
        production-ready
extreme deduplication
        </div> */}
      </section>

    </article>
  )
}
