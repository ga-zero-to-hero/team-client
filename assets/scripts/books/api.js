'use strict'

const getIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/books',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

module.exports = {
  getIndex
}
