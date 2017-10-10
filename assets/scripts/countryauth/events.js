'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateCountry = function (event) {
  // console.log('Created Country!')
  const data = getFormFields(event.target)
  event.preventDefault()
  api.createCountry(data)
    .then(ui.createCountrySuccess)
    .catch(ui.createCountryFailure)
}

const onShowAllCountries = function () {
  // console.log(event.target)
  api.showAllCountries()
    .then(ui.showAllCountriesSuccess)
    .catch(ui.showAllCountriesFailure)
}

const onDeleteCountry = function (event) {
  // console.log('delete is working!')
  const data = getFormFields(event.target)
  event.preventDefault()
  api.deleteCountry($(event.target).data('id'))
    .then(ui.deleteCountrySuccess)
    .catch(ui.deleteCountryFailure)
}

const onUpdateCountry = function (event) {
  // console.log('update is working')
  const data = getFormFields(event.target)
  // console.log(data)
  event.preventDefault()
  api.updateCountry(data)
    .then(onShowAllCountries)
    .catch(ui.updateCountryFailure)
}

const addHandlers = function () {
  $('#create-country').on('submit', onCreateCountry)
  $('.get-countries').on('click', onShowAllCountries)
  $('.remove-country').on('click', onDeleteCountry)
  // console.log('add run')
  $('.update-country').on('submit', onUpdateCountry)
}

module.exports = {
  addHandlers,
  onDeleteCountry,
  onShowAllCountries
}
