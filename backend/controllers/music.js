const Album = require("../models/album")

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

const resultOk = (data) => {
  return {
    success: true,
    data
  }
}

const resultOkNoData = () => {
  return {
    success: true
  }
}

const resultNotOk = (message) => {
  return {
    success: false,
    message
  }
}

const get_all_albums = (req, res, next) => {
  Album.find()
    .then(albums => {
      res.status(200).json(resultOk(albums))
    })
    .catch(err => next(err))
}

const get_album = (req, res, next) => {
  const { id } = req.params
  Album.findById(id)
    .then(album => {
      const result = album === null ? resultNotOk("unknown album") : resultOk(album)
      res.status(200).json(result)
    })
    .catch(err => next(new AlbumNotFoundError()))
}

const post_add_album = (req, res, next) => {
  const { name, artist, image, songs } = req.body
  Album.create({
    name,
    artist,
    image,
    songs,
  })
    .then(album => {
      res.status(201).json(resultOk(album))
    })
    .catch(err => next(new AlbumValidationError(err.message)))
}

const delete_album = (req, res, next) => {
  const { id } = req.params;
  Album.findByIdAndDelete(id)
    .then(album => {
      const result = album === null ? resultNotOk("unknown album") : resultOkNoData()
      res.status(200).json(result)
    })
    .catch(err => next(new AlbumNotFoundError()))
}

module.exports = {
  get_all_albums,
  get_album,
  post_add_album,
  delete_album,
}
