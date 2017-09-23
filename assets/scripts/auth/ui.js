'use strict'

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

module.exports = {
  signUpSuccess,
  signUpFailure
}
