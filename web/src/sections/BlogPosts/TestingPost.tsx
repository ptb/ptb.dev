/* eslint-disable @stylistic/jsx-child-element-spacing */
import { css, cx } from "@ptb/style/index"
import type { FC } from "react"

import { BlogPost } from "./BlogPost"
import { styles } from "./styles"

export const TestingPost: FC = () => (
  <BlogPost tags={["code"]}>
    <div className={styles["post"]}>
      <h2>
        <a href="/code/testing">Comprehensive Testing for React</a>
      </h2>
      <p className={css({ px: 24 })}>
        Testing is a core practice of professional software
        development. In this article, I'm going to discuss{" "}
        <strong>automated testing</strong> in React web apps
        specifically; that is, tests which exercise the desired
        functionality, are committed beside the application code, and
        are automatically run as part of a continuous integration (CI)
        process before merging.
      </p>
      <div className={css({ p: 24 })}>
        <h3 className={css({ m: 0 })}>Why Test?</h3>
        <div
          className={css({
            display: "flex",
            flexDirection: { Md: "row", Sm: "column" }
          })}
        >
          <div className={css({ flexBasis: { Md: "50%" } })}>
            <ul className={css({ m: 0 })}>
              <li>
                <em>Improved Code Quality:</em> Automated tests can
                help <strong>detect bugs</strong> early in the
                development cycle, reducing the likelihood of defects
                in production. Tests provide a safety net when{" "}
                <strong>refactoring code</strong>, ensuring that
                changes do not introduce new bugs.
              </li>
              <li>
                <em>Faster Development Cycle:</em>{" "}
                <strong>Identifying issues early</strong> in the
                development process can save time and resources
                compared to fixing bugs discovered later. Automated
                tests enable <strong>continuous integration</strong>{" "}
                and continuous deployment (CI/CD), speeding up the
                development and release cycles.
              </li>
              <li>
                <em>Documentation:</em> Tests serve as a form of{" "}
                <strong>living documentation</strong> for the
                codebase, illustrating how different parts of the
                application are expected to behave. Writing tests
                often requires clearly{" "}
                <strong>specifying the expected behavior</strong> of
                the code, which helps clarify requirements and design
                decisions.
              </li>
              <li>
                <em>Increased Confidence:</em> A comprehensive test
                suite provides confidence that the application{" "}
                <strong>works as intended</strong>, even after changes
                or additions. Tests help ensure that new code does not
                break existing functionality,{" "}
                <strong>reducing the risk</strong> of regressions
              </li>
            </ul>
          </div>
          <div className={css({ flexBasis: { Md: "50%" } })}>
            <ul className={css({ m: 0 })}>
              <li>
                <em>Maintainability:</em> Well-tested code is{" "}
                <strong>easier to refactor</strong>, as tests can
                quickly reveal if changes have unintended
                consequences. When a test fails, it provides a clear
                indication of what part of the code is malfunctioning,{" "}
                <strong>simplifying debugging</strong>.
              </li>
              <li>
                <em>Cost Efficiency:</em> Automated tests{" "}
                <strong>reduce debugging time</strong> and QA, leading
                to lower development costs. Preventing bugs from
                reaching production{" "}
                <strong>lowers maintenance costs</strong> and effort
                associated with fixing issues post-release.
              </li>
              <li>
                <em>Enhanced Collaboration:</em> Tests{" "}
                <strong>help communicate</strong> how the system
                should behave to all team members, fostering better
                collaboration and understanding. Tests are part of
                each pull request's <strong>code review</strong> of
                the application code to ensure that the code is
                functioning as intended.
              </li>
              <li>
                <em>User Satisfaction:</em> Regularly tested code is
                more likely to be <strong>stable and reliable</strong>
                , leading to higher user satisfaction. Users can trust
                that <strong>features work as advertised</strong>,
                increasing their confidence in the product.
              </li>
              <li>
                <em>Scalable Testing:</em> Tests can be{" "}
                <strong>
                  automatically run on different environments
                </strong>{" "}
                and configurations, ensuring that the application
                behaves as expected on multiple platforms.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["project"]}>
        <div>
          <h3>What is Unit Testing?</h3>
          <p>
            Unit testing involves testing functions in isolation to
            ensure they work correctly. Ideally, unit tests are small
            and fast, focusing on specific pieces of code.
          </p>
          <h3>
            Stop Using <code>console.log</code>?
          </h3>
          <p>
            If you find yourself running a piece of code and using{" "}
            <code>console.log</code> to see the output, it's time to{" "}
            <strong>put that code into a unit test</strong>. While{" "}
            <code>console.log</code> can be helpful for quick
            debugging, it doesn't provide the repeatability and
            reliability that unit tests offer. Unit tests not only
            confirm that your code works correctly now, but they also
            ensure it continues to work correctly in the future as
            your codebase evolves.
          </p>
          <p>
            <em>
              If it's worth checking with <code>console.log</code>,
              it's worth validating with a unit test.
            </em>
          </p>
        </div>
        <div>
          <picture>
            <source
              srcSet="/projects/unit-test.avif"
              type="image/avif"
            />
            <source
              srcSet="/projects/unit-test.webp"
              type="image/webp"
            />
            <img
              alt="Example unit test"
              loading="lazy"
              src="/projects/unit-test.jpg"
            />
          </picture>
        </div>
      </div>
      <div className={styles["project"]}>
        <div>
          <h3>What is Component Testing?</h3>
          <p>
            Component testing involves testing individual React
            components to ensure they render correctly and behave as
            expected. Until recently, React component testing
            primarily relied on <strong>React Testing Library</strong>{" "}
            and <strong>JSDOM</strong>. While these tools are
            efficient and performant, they <em>simulate</em> a browser
            environment rather than using a real one. A better
            alternative is <strong>Playwright</strong>: a modern
            testing framework that supports real browsers, including
            Chrome, Firefox, and Safari.
          </p>
          <ul>
            <li>
              <em>Real Browser Environment:</em> Testing in real
              browsers is more <strong>accurate</strong>, catching
              bugs that might be missed with JSDOM. Playwright allows
              you to run tests{" "}
              <strong>across different browsers</strong>, ensuring
              your application works consistently for all users.
            </li>
            <li>
              <em>Enhanced Debugging:</em> Access to browser{" "}
              <strong>developer tools</strong> during tests makes
              debugging easier and more efficient. Playwright can take{" "}
              <strong>screenshots and videos</strong> of test runs,
              providing valuable insights into test failures.
            </li>
            <li>
              <em>Advanced Features:</em> Playwright handles{" "}
              <strong>complex user interactions</strong> with ease,
              allowing you to test more realistic user scenarios.{" "}
              <strong>Intercept network requests</strong> and API
              responses to test how your application behaves under
              different conditions.
            </li>
          </ul>
        </div>
        <div>
          <picture>
            <source
              srcSet="/projects/component-test.avif"
              type="image/avif"
            />
            <source
              srcSet="/projects/component-test.webp"
              type="image/webp"
            />
            <img
              alt="Example component test"
              loading="lazy"
              src="/projects/component-test.jpg"
            />
          </picture>
        </div>
      </div>
      <div className={styles["project"]}>
        <div>
          <h3>What is End-to-End (E2E) Testing?</h3>
          <p>
            End-to-end testing involves testing complete application
            workflows from start to finish, simulating real user
            scenarios.
          </p>
          <p>
            End-to-end tests ensure that all integrated components
            work together as expected. These tests validate
            interactions between different systems, such as
            authentication, APIs, and third-party services, ensuring
            seamless integration.
          </p>
          <p>
            E2E tests help identify issues that may arise when
            different parts of the system interact, which unit or
            component tests are not designed to catch. These tests can
            reduce the need for repetitive manual testing, freeing up
            manual testers to focus on higher-value tasks.
          </p>
        </div>
        <div>
          <picture>
            <source
              srcSet="/projects/e2e-test.avif"
              type="image/avif"
            />
            <source
              srcSet="/projects/e2e-test.webp"
              type="image/webp"
            />
            <img
              alt="Example end-to-end test"
              loading="lazy"
              src="/projects/e2e-test.jpg"
            />
          </picture>
        </div>
      </div>
      <div className={cx(styles["cols"], styles["p24"])}>
        <div>
          <h3>What is Code Coverage?</h3>
          <p>
            Code coverage is a metric used in software testing to
            measure the extent to which the source code of a program
            is executed when a particular test suite runs. It provides
            insights into which parts of the codebase are being tested
            and which are not, helping to identify untested or
            under-tested areas.
          </p>
          <p>
            Code coverage is a valuable metric in software testing,
            providing insights into how much of the codebase is
            exercised by tests. While it is an important aspect of
            testing, it should be used in conjunction with other
            testing practices to ensure comprehensive and effective
            test coverage. Achieving high code coverage can lead to
            improved code quality and reliability, but it is crucial
            to <strong>focus on the quality of tests</strong> rather
            than just the coverage percentage.
          </p>
        </div>
        <div>
          <ul className={css({ m: 0 })}>
            <li>
              Code coverage helps identify parts of the code that are{" "}
              <strong>not covered by tests</strong>.
            </li>
            <li>
              Higher code coverage can{" "}
              <strong>increase confidence when refactoring</strong>,
              as tests can catch any regressions introduced during the
              process.
            </li>
            <li>
              Code coverage helps assess the effectiveness of the test
              suite,{" "}
              <strong>identifying inadequately tested parts</strong>{" "}
              of an application.
            </li>
            <li>
              High code coverage{" "}
              <strong>does not guarantee the absence of bugs</strong>!
              Tests may not cover all edge cases or potential error
              conditions.
            </li>
            <li>
              Aiming for{" "}
              <strong>
                100% test coverage is often unnecessary.
              </strong>{" "}
              Focus on high quality <em>useful</em> tests on critical
              parts of the codebase. Writing superficial tests to
              increase coverage can lead to a false sense of security.
            </li>
            <li>
              Ideally,{" "}
              <strong>
                code coverage should measure all types of testing
              </strong>
              : unit, component, and end-to-end tests. However, it is
              not necessary to test the same section of code with all
              three methods, as this can be redundant.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </BlogPost>
)
