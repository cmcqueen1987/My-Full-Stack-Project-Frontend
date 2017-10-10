'use strict'
const store = require('../store')
const countryTemplate = require('../templates/country-list.handlebars')

const createCountrySuccess = (data) => {
  $('#create-country').trigger('reset')
  $("#create-country-modal").modal("hide")
  $(".get-countries").click()
  $('#message').hide()
}

const updateCountrySuccess = (data) => {
  $("#update-country-modal").modal("hide")
  $(".get-countries").click()
  $('#message').hide()
}

const createCountryFailure = () => {
}

const showAllCountriesFailure = () => {
}

const deleteCountrySuccess = (data) => {
  $('.get-countries').click()
}

const deleteCountryFailure = () => {
}

const showAllCountriesSuccess = (data) => {
  store.countries = data.countries
  const showCountriesHTML = countryTemplate({countries: data.countries})
  $('.content').html(showCountriesHTML)
  $('.content').show()
  const events = require('./events')
  $('.remove-country').on('click', events.onDeleteCountry)
  $('.edit-country').on('click', function(event) {
    $("#update-country input[name='country[id]']").val($(event.target).data("id"))
    $("#update-country input[name='country[name]']").val($(event.target).data("name"))
    $("#update-country input[name='country[continent]']").val($(event.target).data("continent"))
    $("#update-country input[name='country[capital_city]']").val($(event.target).data("capital_city"))
    $('#update-country-modal').modal("show")
  })

  if (data.countries.length === 0) {
    $('#message').text('No countries, please add a country!')
    $('#message').show()
  }
}

module.exports = {
  createCountrySuccess,
  createCountryFailure,
  showAllCountriesSuccess,
  showAllCountriesFailure,
  deleteCountrySuccess,
  deleteCountryFailure,
  updateCountrySuccess,
}
