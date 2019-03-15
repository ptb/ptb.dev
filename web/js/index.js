Promise.all ([
  import ("./react.js"),
  import ("./react-dom.js")
]).then (([
  { "createElement": h, Fragment },
  { hydrate }
]) => {
  hydrate (h (Fragment), document.getElementById ("root"))
})
