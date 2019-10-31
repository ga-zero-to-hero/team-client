'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetIndex = function(event) {
  event.preventDefault()
  api.getIndex()
    .then(ui.onGetIndexSuccess)
    .catch(ui.onGetIndexFailure)
}


module.exports = {
  onGetIndex
}
