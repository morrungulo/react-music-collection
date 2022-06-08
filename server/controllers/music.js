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

const get_all_albums = async (req, res, next) => {
  try {
    const albums = await Album.find()
    res.status(200).json(resultOk(albums))
  } catch (error) {
    next(error)
  }
}

const get_album = async (req, res, next) => {
  const { id } = req.params
  try {
    const album = await Album.findById(id)
    const result = (album === null) ? resultNotOk("unknown album") : resultOk(album)
    res.status(200).json(result)
  } catch (error) {
    next(new AlbumNotFoundError())
  }
}

const post_add_album = async (req, res, next) => {
  const body = _.pick(req.body, ['name', 'artist', 'image', 'songs', 'rating', 'favorite'])
  try {
    const album = await Album.create(body)
    const result = req.minimal ? resultOkNoData() : resultOk(album)
    res.status(201).json(result)
  } catch (error) {
    next(new AlbumValidationError(error.message))
  }
}

const delete_album = async (req, res, next) => {
  const { id } = req.params;
  try {
    const album = await Album.findByIdAndDelete(id)
    const result = album === null ? resultNotOk("unknown album") : resultOkNoData()
    res.status(200).json(result)
  } catch (error) {
    next(new AlbumNotFoundError())
  }
}

const patch_album = async (req, res, next) => {
  const { id } = req.params;
  const body = _.pick(req.body, ['name', 'artist', 'image', 'rating', 'favorite'])
  try {
    const album = await Album.findByIdAndUpdate(id, { $set: body }, { new: !req.minimal })
    const result = album === null ? resultNotOk("unknown album") : req.minimal ? resultOkNoData() : resultOk(album)
    res.status(200).json(result)
  } catch (error) {
    next(new AlbumNotFoundError())
  }
}

module.exports = {
  get_all_albums,
  get_album,
  post_add_album,
  delete_album,
  patch_album,
}
