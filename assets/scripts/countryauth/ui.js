
// const store = require('./store')
const api = require('./api')
// const getFormFields = require(`../../lib/get-form-fields`)
console.log('hello')

$('#create-country').on('submit', function (event) {
  event.preventDefault()
  console.log('hey there')
})

const onCreateCountrySuccess = (data) => {
  $('.modal-body').hide()
}

const showAllCountriesSuccess = (data) => {
  let countryNames = ''
  for (let i = 0; i < data.countries.length; i++) {
    countryNames = countryNames + ' ' + data.countries[i].name
  }
  $('h4').text(countryNames)
  // for (var i = 0; i < data.countries.length; i++) {
  // console.log(data.countries[i].name)
}
// console.log(data)

module.exports = {
  onCreateCountrySuccess,
  showAllCountriesSuccess
}
