/*! @copyright Apollo GraphQL | @license MIT | @link apollographql.com | @version 1.2.2 *//* eslint-disable */import{__extends as t}from"./tslib.js";import{Observable as e,ApolloLink as o}from"./apollo-link.js";import{execute as r}from"./graphql.js";var n=function(o){function n(t){var e=t.schema,r=t.rootValue,n=t.context,c=o.call(this)||this;return c.schema=e,c.rootValue=r,c.context=n,c}return t(n,o),n.prototype.request=function(t){var o=this;return new e(function(e){Promise.resolve(r(o.schema,t.query,o.rootValue,"function"==typeof o.context?o.context(t):o.context,t.variables,t.operationName)).then(function(t){e.closed||(e.next(t),e.complete())}).catch(function(t){e.closed||e.error(t)})})},n}(o);export default n;export{n as SchemaLink};