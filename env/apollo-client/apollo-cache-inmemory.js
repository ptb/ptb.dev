/*! @copyright Apollo GraphQL | @license MIT | @link apollographql.com | @version 1.5.1 *//* eslint-disable */import{ApolloCache as t}from"./apollo-cache.js";import{getQueryDefinition as e,assign as r,getDefaultValues as n,isEqual as i,getMainDefinition as o,getFragmentDefinitions as a,createFragmentMap as s,shouldInclude as c,isField as u,resultKeyNameFromField as l,isInlineFragment as f,mergeDeepArray as p,argumentsObjectFromField as h,getDirectiveInfoFromField as d,maybeDeepFreeze as y,isIdValue as v,getStoreKeyName as m,toIdValue as g,isJsonValue as b,getOperationDefinition as w,isProduction as O,storeKeyNameFromField as S,addTypenameToDocument as _,isTest as x}from"./apollo-utilities.js";var R=function(t,e){return(R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function j(t,e){function r(){this.constructor=t}R(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var E=function(){return(E=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function M(t){this.map=new Map,this.newest=null,this.oldest=null,this.max=t&&t.max,this.dispose=t&&t.dispose}var I=M,C=M.prototype;function T(t,e){var r=t.map.get(e);if(r&&r!==t.newest){var n=r.older,i=r.newer;i&&(i.older=n),n&&(n.newer=i),r.older=t.newest,r.older.newer=r,r.newer=null,t.newest=r,r===t.oldest&&(t.oldest=i)}return r}C.has=function(t){return this.map.has(t)},C.get=function(t){var e=T(this,t);return e&&e.value},C.set=function(t,e){var r=T(this,t);return r?r.value=e:(r={key:t,value:e,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)},C.clean=function(){if("number"==typeof this.max)for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)},C.delete=function(t){var e=this.map.get(t);return!!e&&(e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.map.delete(t),"function"==typeof this.dispose&&this.dispose(t,e.value),!0)};var k={Cache:I},V="function"==typeof Symbol&&"function"==typeof Symbol.for,A=V?Symbol.for("immutable-tuple"):"@@__IMMUTABLE_TUPLE__@@",D=V?Symbol.for("immutable-tuple-root"):"@@__IMMUTABLE_TUPLE_ROOT__@@";function F(t,e,r,n){return Object.defineProperty(t,e,{value:r,enumerable:!!n,writable:!1,configurable:!1}),r}var P=Object.freeze||function(t){return t};function z(t){switch(typeof t){case"object":if(null===t)return!1;case"function":return!0;default:return!1}}var q=function(){this._weakMap=null,this._strongMap=null,this.data=null};q.prototype.get=function(t){var e=this._getMap(t,!1);if(e)return e.get(t)},q.prototype.set=function(t,e){return this._getMap(t,!0).set(t,e),e},q.prototype._getMap=function(t,e){return e?z(t)?this._weakMap||(this._weakMap=new WeakMap):this._strongMap||(this._strongMap=new Map):z(t)?this._weakMap:this._strongMap};var Q=Array[D]||F(Array,D,new q,!1);function K(){return W(arguments)}function W(t){for(var e=Q,r=t.length,n=0;n<r;++n){var i=t[n];e=e.get(i)||e.set(i,new q)}return e.data||(e.data=Object.create(null))}function B(){var t=arguments,e=K.apply(null,arguments);if(e.tuple)return e.tuple;for(var r=Object.create(B.prototype),n=arguments.length,i=0;i<n;++i)r[i]=t[i];return F(r,"length",n,!1),P(e.tuple=r)}function L(t){return!(!t||!0!==t[A])}function N(t){for(var e=[],r=t.length;r--;)e[r]=t[r];return e}F(B.prototype,A,!0,!1),B.isTuple=L,function(t){function e(e,r){var n=Object.getOwnPropertyDescriptor(Array.prototype,e);t(e,n,!!r)}e("every"),e("filter"),e("find"),e("findIndex"),e("forEach"),e("includes"),e("indexOf"),e("join"),e("lastIndexOf"),e("map"),e("reduce"),e("reduceRight"),e("slice"),e("some"),e("toLocaleString"),e("toString"),e("reverse",!0),e("sort",!0),e(V&&Symbol.iterator||"@@iterator")}(function(t,e,r){var n=e&&e.value;"function"==typeof n&&(e.value=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var i=n.apply(r?N(this):this,t);return Array.isArray(i)?B.apply(void 0,i):i},Object.defineProperty(B.prototype,t,e))});var U=Array.prototype.concat;B.prototype.concat=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return B.apply(void 0,U.apply(N(this),t.map(function(t){return L(t)?N(t):t})))};var G=Object.freeze({default:B,tuple:B,lookup:K,lookupArray:W});function J(t,e){return t(e={exports:{}},e.exports),e.exports}var Y,Z=J(function(t,e){var r=new function(){};function n(){return r}try{var i=t["eriuqer".split("").reverse().join("")]("fibers");n=function(){return i.current||r}}catch(t){}e.get=function(){var t=n();return t._optimism_local||(t._optimism_local=Object.create(null))}}),$=(Z.get,J(function(t,e){var r=Z.get,n=Object.create(null),i=[],o=[];function a(t,e){if(!t)throw new Error(e||"assertion failure")}function s(t,e,r){this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,c(this,t,e,r),++s.count}function c(t,e,r,i){t.fn=e,t.key=r,t.args=i,t.value=n,t.dirty=!0,t.subscribe=null,t.unsubscribe=null,t.recomputing=!1,t.reportOrphan=null}e.POOL_TARGET_SIZE=100,s.count=0,s.acquire=function(t,e,r){var n=o.pop();return n?(c(n,t,e,r),n):new s(t,e,r)},e.Entry=s;var u=s.prototype;function l(t){var e=t.reportOrphan;return"function"==typeof e&&0===t.parents.size&&!0===e(t)}function f(t){t.parents.forEach(function(e){d(e,t)})}function p(t){t.parents.forEach(function(e){y(e,t)})}function h(t){return t.dirty||t.dirtyChildren&&t.dirtyChildren.size}function d(t,e){if(a(t.childValues.has(e)),a(h(e)),t.dirtyChildren){if(t.dirtyChildren.has(e))return}else t.dirtyChildren=i.pop()||new Set;t.dirtyChildren.add(e),f(t)}function y(t,e){var r=t.childValues;a(r.has(e)),a(!h(e));var i=r.get(e);i===n?r.set(e,e.value):i!==e.value&&t.setDirty(),v(t,e),h(t)||p(t)}function v(t,r){var n=t.dirtyChildren;n&&(n.delete(r),0===n.size&&(i.length<e.POOL_TARGET_SIZE&&i.push(n),t.dirtyChildren=null))}function m(t){a(!t.recomputing,"already recomputing"),t.recomputing=!0;var e=b(t),n=r(),i=n.currentParentEntry;n.currentParentEntry=t;var o=!0;try{t.value=t.fn.apply(null,t.args),o=!1}finally{t.recomputing=!1,a(n.currentParentEntry===t),n.currentParentEntry=i,o||!function(t){if("function"==typeof t.subscribe)try{O(t),t.unsubscribe=t.subscribe.apply(null,t.args)}catch(e){return t.setDirty(),!1}return!0}(t)?t.setDirty():function(t){t.dirty=!1,h(t)||p(t)}(t)}return e.forEach(l),t.value}u.recompute=function(){if(function(t){var e=r().currentParentEntry;if(e)return t.parents.add(e),e.childValues.has(t)||e.childValues.set(t,n),h(t)?d(e,t):y(e,t),e}(this)||!l(this))return function t(e){if(e.dirty)return m(e);if(h(e)&&(e.dirtyChildren.forEach(function(r){a(e.childValues.has(r));try{t(r)}catch(t){e.setDirty()}}),e.dirty))return m(e);a(e.value!==n);return e.value}(this)},u.setDirty=function(){this.dirty||(this.dirty=!0,this.value=n,f(this),O(this))},u.dispose=function(){var t=this;b(t).forEach(l),O(t),t.parents.forEach(function(e){e.setDirty(),w(e,t)}),function(t){a(0===t.parents.size),a(0===t.childValues.size),a(null===t.dirtyChildren),o.length<e.POOL_TARGET_SIZE&&o.push(t)}(t)};var g=[];function b(t){var e=g;return t.childValues.size>0&&(e=[],t.childValues.forEach(function(r,n){w(t,n),e.push(n)})),a(null===t.dirtyChildren),e}function w(t,e){e.parents.delete(t),t.childValues.delete(e),v(t,e)}function O(t){var e=t.unsubscribe;"function"==typeof e&&(t.unsubscribe=null,e())}})),H=($.POOL_TARGET_SIZE,$.Entry,(Y=G)&&Y.default||Y),X=k.Cache,tt=H.tuple,et=$.Entry,rt=Z.get;var nt=function(t,e){var r=!!(e=function(t){return"function"!=typeof(t=t||Object.create(null)).makeCacheKey&&(t.makeCacheKey=tt),"number"!=typeof t.max&&(t.max=Math.pow(2,16)),t}(e)).disposable,n=new X({max:e.max,dispose:function(t,e){e.dispose()}});function i(t){if(r)return n.delete(t.key),!0}function o(){if(!r||rt().currentParentEntry){var o=e.makeCacheKey.apply(null,arguments);if(!o)return t.apply(null,arguments);for(var a=[],s=arguments.length;s--;)a[s]=arguments[s];var c=n.get(o);c?c.args=a:(n.set(o,c=et.acquire(t,o,a)),c.subscribe=e.subscribe,r&&(c.reportOrphan=i));var u=c.recompute();return n.set(o,c),0===c.parents.size&&n.clean(),r?void 0:u}}return o.dirty=function(){var t=e.makeCacheKey.apply(null,arguments);t&&n.has(t)&&n.get(t).setDirty()},o},it="Invariant Violation",ot=Object.setPrototypeOf,at=void 0===ot?function(t,e){return t.__proto__=e,t}:ot,st=function(t){function e(r){void 0===r&&(r=it);var n=t.call(this,"number"==typeof r?it+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=it,at(n,e.prototype),n}return j(e,t),e}(Error);function ct(t,e){if(!t)throw new st(e)}!function(t){t.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return console.warn.apply(console,t)},t.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return console.error.apply(console,t)}}(ct||(ct={}));var ut=new Map;if(ut.set(1,2)!==ut){var lt=ut.set;Map.prototype.set=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return lt.apply(this,t),this}}var ft=new Set;if(ft.add(3)!==ft){var pt=ft.add;Set.prototype.add=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return pt.apply(this,t),this}}var ht={};"function"==typeof Object.freeze&&Object.freeze(ht);try{ut.set(ht,ht).delete(ht)}catch(ot){var dt=function(t){return t&&function(e){try{ut.set(e,e).delete(e)}finally{return t.call(Object,e)}}};Object.freeze=dt(Object.freeze),Object.seal=dt(Object.seal),Object.preventExtensions=dt(Object.preventExtensions)}var yt=!1;function vt(){var t=!yt;return x()||(yt=!0),t}var mt=function(){function t(){}return t.prototype.ensureReady=function(){return Promise.resolve()},t.prototype.canBypassInit=function(){return!0},t.prototype.match=function(t,e,r){var n=r.store.get(t.id);return!n&&"ROOT_QUERY"===t.id||!!n&&(n.__typename&&n.__typename===e||(vt(),"heuristic"))},t}(),gt=function(){function t(t){t&&t.introspectionQueryResultData?(this.possibleTypesMap=this.parseIntrospectionResult(t.introspectionQueryResultData),this.isReady=!0):this.isReady=!1,this.match=this.match.bind(this)}return t.prototype.match=function(t,e,r){ct(this.isReady,10);var n=r.store.get(t.id);if(!n)return!1;if(ct(n.__typename,11),n.__typename===e)return!0;var i=this.possibleTypesMap[e];return!!(i&&i.indexOf(n.__typename)>-1)},t.prototype.parseIntrospectionResult=function(t){var e={};return t.__schema.types.forEach(function(t){"UNION"!==t.kind&&"INTERFACE"!==t.kind||(e[t.name]=t.possibleTypes.map(function(t){return t.name}))}),e},t}(),bt=function(){function t(){this.children=null,this.key=null}return t.prototype.lookup=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.lookupArray(t)},t.prototype.lookupArray=function(t){var e=this;return t.forEach(function(t){e=e.getOrCreate(t)}),e.key||(e.key=Object.create(null))},t.prototype.getOrCreate=function(e){var r=this.children||(this.children=new Map),n=r.get(e);return n||r.set(e,n=new t),n},t}(),wt=Object.prototype.hasOwnProperty,Ot=function(){function t(t){void 0===t&&(t=Object.create(null));var e=this;this.data=t,this.depend=nt(function(t){return e.data[t]},{disposable:!0,makeCacheKey:function(t){return t}})}return t.prototype.toObject=function(){return this.data},t.prototype.get=function(t){return this.depend(t),this.data[t]},t.prototype.set=function(t,e){e!==this.data[t]&&(this.data[t]=e,this.depend.dirty(t))},t.prototype.delete=function(t){wt.call(this.data,t)&&(delete this.data[t],this.depend.dirty(t))},t.prototype.clear=function(){this.replace(null)},t.prototype.replace=function(t){var e=this;t?(Object.keys(t).forEach(function(r){e.set(r,t[r])}),Object.keys(this.data).forEach(function(r){wt.call(t,r)||e.delete(r)})):Object.keys(this.data).forEach(function(t){e.delete(t)})},t}();function St(t){return new Ot(t)}var _t=function(){function t(t){var e=void 0===t?{}:t,r=e.cacheKeyRoot,n=void 0===r?new bt:r,i=e.freezeResults,o=void 0!==i&&i,a=this,s=this.executeStoreQuery,c=this.executeSelectionSet;this.freezeResults=o,this.executeStoreQuery=nt(function(t){return s.call(a,t)},{makeCacheKey:function(t){var e=t.query,r=t.rootValue,i=t.contextValue,o=t.variableValues,a=t.fragmentMatcher;if(i.store instanceof Ot)return n.lookup(e,i.store,a,JSON.stringify(o),r.id)}}),this.executeSelectionSet=nt(function(t){return c.call(a,t)},{makeCacheKey:function(t){var e=t.selectionSet,r=t.rootValue,i=t.execContext;if(i.contextValue.store instanceof Ot)return n.lookup(e,i.contextValue.store,i.fragmentMatcher,JSON.stringify(i.variableValues),r.id)}})}return t.prototype.readQueryFromStore=function(t){return this.diffQueryAgainstStore(E({},t,{returnPartialData:!1})).result},t.prototype.diffQueryAgainstStore=function(t){var o=t.store,a=t.query,s=t.variables,c=t.previousResult,u=t.returnPartialData,l=void 0===u||u,f=t.rootId,p=void 0===f?"ROOT_QUERY":f,h=t.fragmentMatcherFunction,d=t.config,y=e(a);s=r({},n(y),s);var v={store:o,dataIdFromObject:d&&d.dataIdFromObject||null,cacheRedirects:d&&d.cacheRedirects||{}},m=this.executeStoreQuery({query:a,rootValue:{type:"id",id:p,generated:!0,typename:"Query"},contextValue:v,variableValues:s,fragmentMatcher:h}),g=m.missing&&m.missing.length>0;return g&&!l&&m.missing.forEach(function(t){if(!t.tolerable)throw new st(2)}),c&&i(c,m.result)&&(m.result=c),{result:m.result,complete:!g}},t.prototype.executeStoreQuery=function(t){var e=t.query,r=t.rootValue,n=t.contextValue,i=t.variableValues,c=t.fragmentMatcher,u=void 0===c?Rt:c,l=o(e),f=a(e),p={query:e,fragmentMap:s(f),contextValue:n,variableValues:i,fragmentMatcher:u};return this.executeSelectionSet({selectionSet:l.selectionSet,rootValue:r,execContext:p})},t.prototype.executeSelectionSet=function(t){var e=this,r=t.selectionSet,n=t.rootValue,i=t.execContext,o=i.fragmentMap,a=i.contextValue,s=i.variableValues,h={result:null},d=[],y=a.store.get(n.id),v=y&&y.__typename||"ROOT_QUERY"===n.id&&"Query"||void 0;function m(t){var e;return t.missing&&(h.missing=h.missing||[],(e=h.missing).push.apply(e,t.missing)),t.result}return r.selections.forEach(function(t){var r;if(c(t,s))if(u(t)){var p=m(e.executeField(y,v,t,i));void 0!==p&&d.push(((r={})[l(t)]=p,r))}else{var h=void 0;if(f(t))h=t;else if(!(h=o[t.name.value]))throw new st(3);var g=h.typeCondition.name.value,b=i.fragmentMatcher(n,g,a);if(b){var w=e.executeSelectionSet({selectionSet:h.selectionSet,rootValue:n,execContext:i});"heuristic"===b&&w.missing&&(w=E({},w,{missing:w.missing.map(function(t){return E({},t,{tolerable:!0})})})),d.push(m(w))}}}),h.result=p(d),this.freezeResults,h},t.prototype.executeField=function(t,e,r,n){var i=n.variableValues,o=n.contextValue,a=function(t,e,r,n,i,o){o.resultKey;var a=o.directives,s=r;(n||a)&&(s=m(s,n,a));var c=void 0;if(t&&void 0===(c=t[s])&&i.cacheRedirects&&"string"==typeof e){var u=i.cacheRedirects[e];if(u){var l=u[r];l&&(c=l(t,n,{getCacheKey:function(t){return g({id:i.dataIdFromObject(t),typename:t.__typename})}}))}}if(void 0===c)return{result:c,missing:[{object:t,fieldName:s,tolerable:!1}]};b(c)&&(c=c.json);return{result:c}}(t,e,r.name.value,h(r,i),o,{resultKey:l(r),directives:d(r,i)});return Array.isArray(a.result)?this.combineExecResults(a,this.executeSubSelectedArray(r,a.result,n)):r.selectionSet?null==a.result?a:this.combineExecResults(a,this.executeSelectionSet({selectionSet:r.selectionSet,rootValue:a.result,execContext:n})):(xt(r,a.result),this.freezeResults,a)},t.prototype.combineExecResults=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=null;return t.forEach(function(t){t.missing&&(r=r||[]).push.apply(r,t.missing)}),{result:t.pop().result,missing:r}},t.prototype.executeSubSelectedArray=function(t,e,r){var n=this,i=null;function o(t){return t.missing&&(i=i||[]).push.apply(i,t.missing),t.result}return e=e.map(function(e){return null===e?null:Array.isArray(e)?o(n.executeSubSelectedArray(t,e,r)):t.selectionSet?o(n.executeSelectionSet({selectionSet:t.selectionSet,rootValue:e,execContext:r})):(xt(t,e),e)}),this.freezeResults,{result:e,missing:i}},t}();function xt(t,e){if(!t.selectionSet&&v(e))throw new st(4)}function Rt(){return!0}function jt(t){ct(v(t),5)}var Et=function(){function t(t){void 0===t&&(t=Object.create(null)),this.data=t}return t.prototype.toObject=function(){return this.data},t.prototype.get=function(t){return this.data[t]},t.prototype.set=function(t,e){this.data[t]=e},t.prototype.delete=function(t){this.data[t]=void 0},t.prototype.clear=function(){this.data=Object.create(null)},t.prototype.replace=function(t){this.data=t||Object.create(null)},t}();function Mt(t){return new Et(t)}var It=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="WriteError",e}return j(e,t),e}(Error);function Ct(t,e){var r=new It("Error writing result to store for query:\n "+JSON.stringify(e));return r.message+="\n"+t.message,r.stack=t.stack,r}var Tt=function(){function t(){}return t.prototype.writeQueryToStore=function(t){var e=t.query,r=t.result,n=t.store,i=void 0===n?St():n,o=t.variables,a=t.dataIdFromObject,s=t.fragmentMatcherFunction;return this.writeResultToStore({dataId:"ROOT_QUERY",result:r,document:e,store:i,variables:o,dataIdFromObject:a,fragmentMatcherFunction:s})},t.prototype.writeResultToStore=function(t){var e=t.dataId,i=t.result,o=t.document,c=t.store,u=void 0===c?St():c,l=t.variables,f=t.dataIdFromObject,p=t.fragmentMatcherFunction,h=w(o);try{return this.writeSelectionSetToStore({result:i,dataId:e,selectionSet:h.selectionSet,context:{store:u,processedData:{},variables:r({},n(h),l),dataIdFromObject:f,fragmentMap:s(a(o)),fragmentMatcherFunction:p}})}catch(t){throw Ct(t,o)}},t.prototype.writeSelectionSetToStore=function(t){var e=this,r=t.result,n=t.dataId,i=t.selectionSet,o=t.context,a=o.variables,s=o.store,p=o.fragmentMap;return i.selections.forEach(function(t){if(c(t,a))if(u(t)){var i=l(t),s=r[i];if(void 0!==s)e.writeFieldToStore({dataId:n,value:s,field:t,context:o});else{var h=!1,d=!1;t.directives&&t.directives.length&&(h=t.directives.some(function(t){return t.name&&"defer"===t.name.value}),d=t.directives.some(function(t){return t.name&&"client"===t.name.value})),!h&&!d&&o.fragmentMatcherFunction}}else{var y=void 0;f(t)?y=t:ct(y=(p||{})[t.name.value],6);var v=!0;if(o.fragmentMatcherFunction&&y.typeCondition){var m=g({id:"self",typename:void 0}),b={store:new Et({self:r}),cacheRedirects:{}},w=o.fragmentMatcherFunction(m,y.typeCondition.name.value,b);O(),v=!!w}v&&e.writeSelectionSetToStore({result:r,selectionSet:y.selectionSet,dataId:n,context:o})}}),s},t.prototype.writeFieldToStore=function(t){var e,r,n,o=t.field,a=t.value,s=t.dataId,c=t.context,u=c.variables,l=c.dataIdFromObject,f=c.store,p=S(o,u);if(o.selectionSet&&null!==a)if(Array.isArray(a)){var h=s+"."+p;r=this.processArrayValue(a,h,o.selectionSet,c)}else{var d=s+"."+p,y=!0;if(kt(d)||(d="$"+d),l){var m=l(a);ct(!m||!kt(m),7),(m||"number"==typeof m&&0===m)&&(d=m,y=!1)}Vt(d,o,c.processedData)||this.writeSelectionSetToStore({dataId:d,result:a,selectionSet:o.selectionSet,context:c});var b=a.__typename;r=g({id:d,typename:b},y);var w=(n=f.get(s))&&n[p];if(w!==r&&v(w)){var O=void 0!==w.typename,_=void 0!==b,x=O&&_&&w.typename!==b;ct(!y||w.generated||x,8),ct(!O||_,9),w.generated&&(x?y||f.delete(w.id):function t(e,r,n){if(e===r)return!1;var o=n.get(e);var a=n.get(r);var s=!1;Object.keys(o).forEach(function(e){var r=o[e],c=a[e];v(r)&&kt(r.id)&&v(c)&&!i(r,c)&&t(r.id,c.id,n)&&(s=!0)});n.delete(e);var c=E({},o,a);if(i(c,a))return s;n.set(r,c);return!0}(w.id,r.id,f))}}else r=null!=a&&"object"==typeof a?{type:"json",json:a}:a;(n=f.get(s))&&i(r,n[p])||f.set(s,E({},n,((e={})[p]=r,e)))},t.prototype.processArrayValue=function(t,e,r,n){var i=this;return t.map(function(t,o){if(null===t)return null;var a=e+"."+o;if(Array.isArray(t))return i.processArrayValue(t,a,r,n);var s=!0;if(n.dataIdFromObject){var c=n.dataIdFromObject(t);c&&(a=c,s=!1)}return Vt(a,r,n.processedData)||i.writeSelectionSetToStore({dataId:a,result:t,selectionSet:r,context:n}),g({id:a,typename:t.__typename},s)})},t}();function kt(t){return"$"===t[0]}function Vt(t,e,r){if(!r)return!1;if(r[t]){if(r[t].indexOf(e)>=0)return!0;r[t].push(e)}else r[t]=[e];return!1}var At={fragmentMatcher:new mt,dataIdFromObject:Dt,addTypename:!0,resultCaching:!0,freezeResults:!1};function Dt(t){if(t.__typename){if(void 0!==t.id)return t.__typename+":"+t.id;if(void 0!==t._id)return t.__typename+":"+t._id}return null}var Ft=Object.prototype.hasOwnProperty,Pt=function(t){function e(e,r,n){var i=t.call(this,Object.create(null))||this;return i.optimisticId=e,i.parent=r,i.transaction=n,i}return j(e,t),e.prototype.toObject=function(){return E({},this.parent.toObject(),this.data)},e.prototype.get=function(t){return Ft.call(this.data,t)?this.data[t]:this.parent.get(t)},e}(Et),zt=function(t){function e(e){void 0===e&&(e={});var r=t.call(this)||this;r.watches=new Set,r.typenameDocumentCache=new Map,r.cacheKeyRoot=new bt,r.silenceBroadcast=!1,r.config=E({},At,e),r.config.customResolvers&&(r.config.cacheRedirects=r.config.customResolvers),r.config.cacheResolvers&&(r.config.cacheRedirects=r.config.cacheResolvers),r.addTypename=r.config.addTypename,r.data=r.config.resultCaching?new Ot:new Et,r.optimisticData=r.data,r.storeWriter=new Tt,r.storeReader=new _t({cacheKeyRoot:r.cacheKeyRoot,freezeResults:e.freezeResults});var n=r,i=n.maybeBroadcastWatch;return r.maybeBroadcastWatch=nt(function(t){return i.call(r,t)},{makeCacheKey:function(t){if(!t.optimistic&&!t.previousResult)return n.data instanceof Ot?n.cacheKeyRoot.lookup(t.query,JSON.stringify(t.variables)):void 0}}),r}return j(e,t),e.prototype.restore=function(t){return t&&this.data.replace(t),this},e.prototype.extract=function(t){return void 0===t&&(t=!1),(t?this.optimisticData:this.data).toObject()},e.prototype.read=function(t){return"string"==typeof t.rootId&&void 0===this.data.get(t.rootId)?null:this.storeReader.readQueryFromStore({store:t.optimistic?this.optimisticData:this.data,query:this.transformDocument(t.query),variables:t.variables,rootId:t.rootId,fragmentMatcherFunction:this.config.fragmentMatcher.match,previousResult:t.previousResult,config:this.config})},e.prototype.write=function(t){this.storeWriter.writeResultToStore({dataId:t.dataId,result:t.result,variables:t.variables,document:this.transformDocument(t.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:this.config.fragmentMatcher.match}),this.broadcastWatches()},e.prototype.diff=function(t){return this.storeReader.diffQueryAgainstStore({store:t.optimistic?this.optimisticData:this.data,query:this.transformDocument(t.query),variables:t.variables,returnPartialData:t.returnPartialData,previousResult:t.previousResult,fragmentMatcherFunction:this.config.fragmentMatcher.match,config:this.config})},e.prototype.watch=function(t){var e=this;return this.watches.add(t),function(){e.watches.delete(t)}},e.prototype.evict=function(t){throw new st(1)},e.prototype.reset=function(){return this.data.clear(),this.broadcastWatches(),Promise.resolve()},e.prototype.removeOptimistic=function(t){for(var e=[],r=0,n=this.optimisticData;n instanceof Pt;)n.optimisticId===t?++r:e.push(n),n=n.parent;if(r>0){for(this.optimisticData=n;e.length>0;){var i=e.pop();this.performTransaction(i.transaction,i.optimisticId)}this.broadcastWatches()}},e.prototype.performTransaction=function(t,e){var r=this.data,n=this.silenceBroadcast;this.silenceBroadcast=!0,"string"==typeof e&&(this.data=this.optimisticData=new Pt(e,this.optimisticData,t));try{t(this)}finally{this.silenceBroadcast=n,this.data=r}this.broadcastWatches()},e.prototype.recordOptimisticTransaction=function(t,e){return this.performTransaction(t,e)},e.prototype.transformDocument=function(t){if(this.addTypename){var e=this.typenameDocumentCache.get(t);return e||(e=_(t),this.typenameDocumentCache.set(t,e),this.typenameDocumentCache.set(e,e)),e}return t},e.prototype.broadcastWatches=function(){var t=this;this.silenceBroadcast||this.watches.forEach(function(e){return t.maybeBroadcastWatch(e)})},e.prototype.maybeBroadcastWatch=function(t){t.callback(this.diff({query:t.query,variables:t.variables,previousResult:t.previousResult&&t.previousResult(),optimistic:t.optimistic}))},e}(t);export{zt as InMemoryCache,Dt as defaultDataIdFromObject,_t as StoreReader,jt as assertIdValue,It as WriteError,Ct as enhanceErrorWithDocument,Tt as StoreWriter,mt as HeuristicFragmentMatcher,gt as IntrospectionFragmentMatcher,Et as ObjectCache,Mt as defaultNormalizedCacheFactory};