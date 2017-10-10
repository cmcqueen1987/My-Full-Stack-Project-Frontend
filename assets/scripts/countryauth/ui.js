'use strict'
const store = require('../store')
const countryTemplate = require('../templates/country-list.handlebars')

const createCountrySuccess = (data) => {
  $('#create-country').trigger('reset')
  $('#message').hide()
  console.log('running')
}

const createCountryFailure = () => {
}

const showAllCountriesFailure = () => {
}

const deleteCountrySuccess = (data) => {
  const events = require('./events')
  events.onShowAllCountries()
  // $('.remove-country').on('click', function () {
  // $('.remove-country').hide()
  console.log('running!')
  // })
// }
}

const deleteCountryFailure = () => {
}

// const getFormFields = require(`../../lib/get-form-fields`)
// console.log('hello')

// $('#create-country').on('submit', function (event) {
// event.preventDefault()
// console.log('hey there')
// })

const showAllCountriesSuccess = (data) => {
  store.countries = data.countries
  const showCountriesHTML = countryTemplate({countries: data.countries})
  $('.content').html(showCountriesHTML)
  $('.content').show()
  const events = require('./events')
  $('.remove-country').on('click', events.onDeleteCountry)
  console.log(events)
  // if (data.countries == '') {
  // $('#message').text('No countries, please add a country!')
}

module.exports = {
  createCountrySuccess,
  createCountryFailure,
  showAllCountriesSuccess,
  showAllCountriesFailure,
  deleteCountrySuccess,
  deleteCountryFailure
}
