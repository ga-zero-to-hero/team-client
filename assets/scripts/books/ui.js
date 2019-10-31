'use strict'

const successMessage = function (newText) {
$('#message').text(newText)
$('#message').removeClass('failure')
$('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onGetIndexSuccess = function () {
  successMessage('Got books! Sweet.')
}

const onGetIndexFailure = function () {
  faiureMessage('Failed to get books. Not sweet.')
}

module.exports = {
  onGetIndexSuccess,
  onGetIndexFailure
}
