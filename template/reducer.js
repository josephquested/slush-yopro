module.exports = (state, action) => {
  var newState = require('clone')(state)

  switch (action.type) {
    case 'INIT':
      return newState

    default:
      return newState
  }
}
