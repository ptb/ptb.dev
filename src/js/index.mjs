Promise.all ([
  import ("./react.mjs"),
  import ("./react-dom.mjs")
]).then (([
  { createElement: h, Fragment },
  { hydrate }
]) => {
  hydrate (h (Fragment), document.getElementById ("root"))
})
