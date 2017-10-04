'use strict'
const store = require('../store')
const countryTemplate = require('../templates/country-list.handlebars')

const createCountrySuccess = (data) => {
  $('#create-country').hide()
}

const createCountryFailure = () => {
}

const showAllCountriesFailure = () => {
}

const deleteCountrySuccess = (data) => {
  $('.remove-country').on('click', function () {
    $('.remove-country').hide()
  })
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
}

module.exports = {
  createCountrySuccess,
  createCountryFailure,
  showAllCountriesSuccess,
  showAllCountriesFailure,
  deleteCountrySuccess,
  deleteCountryFailure
}
