'use strict'

const store = require('../store')
const index = require('../index')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed up!')
  $('#message').text('Successfully Signed Up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (error) {
  console.log('not working')
  console.error(error)
  $('#message').text('Error on Sign-Up, Please Try Again')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Successfully Signed In!')
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.change-password').show()
  $('.sign-out').show()
  $('.change-password').removeClass('hidden')
  $('.sign-out').removeClass('hidden')
  $('h3').hide()
  $('.btn').removeClass('hidden')
  $('.btn').show()
  $('.centered').hide()
  $('.create-country').removeClass('hidden')
  $('.create-country').show()
  $('.get-countries').removeClass('hidden')
  $('.get-countries').show()
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on Sign-In, Please Try Again')
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Out!')
  $('#message').text('Successfully Signed Out!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('h3').show()
  $('.btn').hide()
  $('.centered').show()
  $('.create-country').hide()
  $('.get-countries').hide()
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error Signing Out')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  console.log('Successfully Changed Password!')
  $('#message').text('Successfully Changed Password!')
  $('.change-password').trigger('reset')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on Change Password, Please Try Again')
  $('.change-password').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
