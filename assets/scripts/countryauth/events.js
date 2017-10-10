'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateCountry = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.createCountry(data)
    .then(ui.createCountrySuccess)
    .catch(ui.createCountryFailure)
}

const onShowAllCountries = function () {
  api.showAllCountries()
    .then(ui.showAllCountriesSuccess)
    .catch(ui.showAllCountriesFailure)
}

const onDeleteCountry = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.deleteCountry($(event.target).data('id'))
    .then(ui.deleteCountrySuccess)
    .catch(ui.deleteCountryFailure)
}

const onUpdateCountry = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  event.preventDefault()
  api.updateCountry(data)
    .then(ui.updateCountrySuccess)
    .catch(ui.updateCountryFailure)
}

const addHandlers = function () {
  $('#create-country').on('submit', onCreateCountry)
  $('#update-country').on('submit', onUpdateCountry)
  $('.get-countries').on('click', onShowAllCountries)
  $('.remove-country').on('click', onDeleteCountry)
  $('.update-country').on('submit', onUpdateCountry)
}

module.exports = {
  addHandlers,
  onDeleteCountry,
  onShowAllCountries,
  onUpdateCountry
}
