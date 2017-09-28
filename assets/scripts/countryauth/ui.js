'use strict'
// const store = require('../store')
const countryTemplate = require('../templates/country-list.handlebars')

const createCountrySuccess = (data) => {
}

const createCountryFailure = () => {
}

// const showAllCountriesSuccess = (data) => {
//   store.countries = data.recipes
//   $('.create-country').val('')
//
//   const showCountriesHtml = countryTemplate({ countries: data.countries })
//   $('h2').append(showCountriesHtml)

const showAllCountriesFailure = () => {
}

const deleteCountrySuccess = () => {

}

const deleteCountryFailure = () => {
}

// const getFormFields = require(`../../lib/get-form-fields`)
// console.log('hello')

// $('#create-country').on('submit', function (event) {
// event.preventDefault()
// console.log('hey there')
// })

// const onCreateCountrySuccess = (data) => {
// $('.modal-body').hide()
// }

const showAllCountriesSuccess = (data) => {
  const showCountriesHTML = countryTemplate({countries: data.countries})
  $('.content').append(showCountriesHTML)
  console.log('heey')
}
// $('h4').text(countryNames)
// $('')
// for (var i = 0; i < data.countries.length; i++) {
// console.log(data.countries[i].name)
// }
// console.log(data)

module.exports = {
  createCountrySuccess,
  createCountryFailure,
  showAllCountriesSuccess,
  showAllCountriesFailure,
  deleteCountrySuccess,
  deleteCountryFailure
}
