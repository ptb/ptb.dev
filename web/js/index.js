Promise.all ([
  import ("./vendor/react.js"),
  import ("./vendor/react-dom.js")
]).then (([
  { "createElement": h, Fragment },
  { hydrate }
]) => {
  hydrate (h (Fragment), document.getElementById ("root"))
})
