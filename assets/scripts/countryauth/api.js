'use strict'

const config = require('../config.js')
const store = require('../store')

const createCountry = function (data) {
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
  return $.ajax({
    url: config.apiOrigin + '/countries',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteCountry = function (data) {
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
