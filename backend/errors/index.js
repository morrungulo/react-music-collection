class AlbumValidationError extends Error {
  constructor(message) {
    super(message)
    this.status = 400
  }
}

class AlbumNotFoundError extends Error {
  constructor() {
    super('invalid album')
    this.status = 400
  }
}

class RequestValidationError extends Error {
  constructor(message) {
    super(message)
    this.status = 422
  }
}

module.exports = {
  AlbumValidationError,
  AlbumNotFoundError,
  RequestValidationError
}