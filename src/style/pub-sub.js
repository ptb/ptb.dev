/* @flow strict *//* @ts-check */

/* ::
type PubFnType = (value: mixed) => Array < mixed >

type SubFnType = (fn: Function) => () => boolean
*/

/**
 * @returns {{ pub: Function, sub: Function }}
 */

export const pubSub /* : { pub: PubFnType, sub: SubFnType } */ = ((
  /** @type {Function[]} */ subscriptions /* : Array < Function > */
) /* : { pub: PubFnType, sub: SubFnType } */ => ({
  "pub": (/** @type {any} */ value /* : mixed */) /* : Array < mixed > */ =>
    subscriptions.map ((
      /** @type {Function} */ fn /* : Function */
    ) /* : mixed */ => fn (value)),

  "sub": (/** @type {Function} */ fn /* : Function */) /* : Function */ => {
    const index /* : number */ = subscriptions.push (fn) - 1

    return () /* : boolean */ => delete subscriptions[index]
  }
})) ([])
