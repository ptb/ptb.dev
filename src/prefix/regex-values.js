/* @flow strict *//* @ts-check */

/**
 * @param {string} propertyValue
 * - Property value containing one or more valid values for CSS properties.
 *
 * @returns {?RegExpMatchArray}
 */

export const regexValues /* : (
  propertyValue: string
) => ? RegExp$matchResult */ = (
  propertyValue /* : string */ = ""
) /* : ? RegExp$matchResult */ => {
  /* eslint-disable-next-line max-len*/
  const regex = (/(?:((?:element|isolate-override|plaintext))|((?:calc|cross-fade|filter|grab(?:bing)?|image-set|sticky|zoom-(?:in|out)))|((?:fill(?:-available)?|fit-content|isolate|(?:max|min)-content|stretch))|((?:pixelated)))/u)

  return propertyValue.match (regex)
}
