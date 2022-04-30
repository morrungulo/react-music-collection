const { validationResult } = require('express-validator')
const { RequestValidationError } = require('../errors')

const validateRequest = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const messages = errors.array().map(err => `${err.param}: ${err.msg}`)
    throw new RequestValidationError(messages.join(', '))
  }
  next()
}

module.exports = {
  validateRequest,
}