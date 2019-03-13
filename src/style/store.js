/* @flow strict *//* @ts-check */

/* ::
type StoreIdType = Array < string > | string

type StoreValueType = {|
  id: ?StoreIdType,
  key: string,
  media: string,
  rule: ?string
|}

type MediaType = Map < string, StoreValueType >

type StoreType = Map < string, MediaType >

export type { MediaType, StoreIdType, StoreType, StoreValueType }
*/

/**
 * @typedef {?string | string[]} StoreIdType
 *
 * @typedef {Object} StoreValueType
 * @property {StoreIdType} id
 * @property {string} key
 * @property {string} media
 * @property {?string} rule
 *
 * @typedef {Map<string, Map<string, StoreValueType>>} StoreType
 */

export const store /* : StoreType */ = ((
  /** @type {StoreType} */ STORE /* : StoreType */
) /* : StoreType */ => STORE) (new Map ())
