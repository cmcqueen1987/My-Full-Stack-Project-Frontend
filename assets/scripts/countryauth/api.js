'use strict'

const config = require('../config.js')
const store = require('../store')

const createCountry = function (data) {
  console.log('create')
  return $.ajax({
    url: config.apiOrigin + '/countries',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateCountry = function (data) {
  console.log('update')
  return $.ajax({
    url: config.apiOrigin + '/countries/' + data.country.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllCountries = function (data) {
  console.log('view')
  return $.ajax({
    url: config.apiOrigin + '/countries',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const index = function () {
//   console.log('view')
//   return $.ajax({
//     url: config.apiOrigin + '/countries',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
const deleteCountry = function (data) {
  console.log('delete')
  return $.ajax({
    url: config.apiOrigin + '/countries/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createCountry,
  deleteCountry,
  updateCountry,
  showAllCountries
}
