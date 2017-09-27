'use strict'

// const config = require('../config.js')
const store = require('../store')
const app = require('../app.js')

const createCountry = function (data) {
  console.log('create entry in api running')
  return $.ajax({
    url: app.host + '/countries',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateCountry = function (data, id) {
  console.log('update entry in api running')
  return $.ajax({
    url: app.host + '/countries/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllCountries = function () {
  console.log('view in api running')
  return $.ajax({
    url: app.host + '/countries',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteCountry = function (data) {
  console.log('delete  in api running')
  return $.ajax({
    url: app.host + '/countries/' + data,
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
