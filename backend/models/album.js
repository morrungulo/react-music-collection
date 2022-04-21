const mongoose = require('mongoose');

const requiredMessage = 'is required'

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, requiredMessage],
    trim: true
  },
  number: {
    type: Number,
    required: [true, requiredMessage],
  },
});

const albumSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, requiredMessage],
    trim: true,
  },

  artist: {
    type: String,
    required: [true, requiredMessage],
    trim: true,
  },

  image: {
    type: String,
    trim: true
  },

  rating: {
    type: Number,
    default: 0
  },

  favorite: {
    type: Boolean,
    default: false,
  },

  songs: [songSchema]

}, { timestamps: true });

const Album = mongoose.model('album', albumSchema);

module.exports = Album;