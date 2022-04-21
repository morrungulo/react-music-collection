const _ = require('lodash')
const { AlbumNotFoundError, AlbumValidationError } = require("../errors")
const Album = require("../models/album")

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
  const body = _.pick(req.body, ['name', 'artist', 'image', 'songs', 'rating', 'favorite'])
  Album.create(body)
    .then(album => {
      res.status(201).json(req.minimal ? resultOkNoData() : resultOk(album))
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

const patch_album = (req, res, next) => {
  const { id } = req.params;
  const body = _.pick(req.body, ['name', 'artist', 'image', 'rating', 'favorite'])
  Album.findByIdAndUpdate(id, { $set: body }, { new: !req.minimal })
    .then(album => {
      const result = album === null ? resultNotOk("unknown album") : req.minimal ? resultOkNoData() : resultOk(album)
      res.status(200).json(result)
    })
    .catch(err => next(new AlbumNotFoundError()))
}

module.exports = {
  get_all_albums,
  get_album,
  post_add_album,
  delete_album,
  patch_album,
}
