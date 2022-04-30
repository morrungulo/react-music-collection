const express = require('express');
const { body, param } = require('express-validator');
const { validateRequest } = require('../middleware/validators');
const { preferMinimalOrRepresentation } = require('../middleware/headers');
const musicController = require('../controllers/music');

const router = express.Router();

router.get('/music', musicController.get_all_albums);

router.get('/music/:id',
  [
    param('id', 'must be a valid mongodb id').isMongoId(),
  ],
  validateRequest,
  musicController.get_album);

router.post('/music',
  [
    // these are mandatory
    body('name', 'must be a string longer than 1').isLength({ min: 1 }),
    body('artist', 'must be a string longer than 1').isLength({ min: 1 }),
    body('image', 'must be a valid url').isURL(),
    body('songs', 'must be an array of at least 1 song').isArray({ min: 1 }),

    // these are optional
    body('rating', 'must be a number between 0 and 4').optional().isInt({ min: 0, max: 4 }),
    body('favorite', 'must be a boolean').optional().isBoolean({ loose: false }),
  ],
  validateRequest,
  preferMinimalOrRepresentation,
  musicController.post_add_album);

router.delete('/music/:id',
  [
    param('id', 'must be a valid mongodb id').isMongoId(),
  ],
  validateRequest,
  musicController.delete_album);

router.patch('/music/:id',
  [
    param('id', 'must be a valid mongodb id').isMongoId(),

    // they are all optional (songs excluded)
    body('name', 'must be a string longer than 1').optional().isLength({ min: 1 }),
    body('artist', 'must be a string longer than 1').optional().isLength({ min: 1 }),
    body('image', 'must be a valid url').optional().isURL(),
    body('rating', 'must be a number between 0 and 4').optional().isInt({ min: 0, max: 4 }),
    body('favorite', 'must be a boolean').optional().isBoolean({ loose: false }),
  ],
  validateRequest,
  preferMinimalOrRepresentation,
  musicController.patch_album);

module.exports = router;

