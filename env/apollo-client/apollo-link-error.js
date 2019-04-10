/*! @copyright Apollo GraphQL | @license MIT | @link apollographql.com | @version 1.1.10 *//* eslint-disable */import{__extends as r}from"./tslib.js";import{ApolloLink as e,Observable as n}from"./apollo-link.js";function o(r){return new e(function(e,o){return new n(function(n){var t,i,u;try{t=o(e).subscribe({next:function(t){t.errors&&(u=r({graphQLErrors:t.errors,response:t,operation:e,forward:o}))?i=u.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)}):n.next(t)},error:function(t){(u=r({operation:e,networkError:t,graphQLErrors:t&&t.result&&t.result.errors,forward:o}))?i=u.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)}):n.error(t)},complete:function(){u||n.complete.bind(n)()}})}catch(t){r({networkError:t,operation:e,forward:o}),n.error(t)}return function(){t&&t.unsubscribe(),i&&t.unsubscribe()}})})}var t=function(e){function n(r){var n=e.call(this)||this;return n.link=o(r),n}return r(n,e),n.prototype.request=function(r,e){return this.link.request(r,e)},n}(e);export{o as onError,t as ErrorLink};