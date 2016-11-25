var yo = require('yo-yo')

module.exports = (state, dispatch) => {
  return yo`
    <div>
      <h1>${state.title}</h1>
      <hr>
    </div>
  `
}
