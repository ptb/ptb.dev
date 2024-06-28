/* eslint-disable @stylistic/jsx-child-element-spacing */
import { css } from "@ptb/style/index"
import type { FC } from "react"

import { BlogPost } from "./BlogPost"
import { styles } from "./styles"

export const TestingPost: FC = () => (
  <BlogPost tags={["code"]}>
    <div className={styles["post"]}>
      <h3>
        <a href="/code/testing">Comprehensive Testing for React</a>
      </h3>
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
        <h4 className={css({ m: 0 })}>Why Test?</h4>
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
          <h4>What is Unit Testing?</h4>
          <p>
            Unit testing involves testing functions in isolation to
            ensure they work correctly. Ideally, unit tests are small
            and fast, focusing on specific pieces of code.
          </p>
          <h4>
            Stop Using <code>console.log</code>?
          </h4>
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
          <img
            alt="Example unit test"
            src="/projects/unit-test.png"
          />
        </div>
      </div>
      <div className={styles["project"]}>
        <div>
          <h4>What is Component Testing?</h4>
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
          <img
            alt="Example unit test"
            src="/projects/component-test.png"
          />
        </div>
      </div>
      {/* <div className={cx(styles["cols"], styles["p24"])}>
        <div>
          <h4>What is End-to-End (E2E) Testing?</h4>
          <p>
            End-to-end testing involves testing entire application
            workflows from start to finish, simulating real user
            scenarios.
          </p>
        </div>
        <div />
      </div> */}
    </div>
  </BlogPost>
)
