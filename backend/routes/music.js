const express = require('express');
const musicController = require('../controllers/music');

const router = express.Router();

router.get('/music', musicController.get_all_albums);
router.get('/music/:id', musicController.get_album);
router.post('/music', musicController.post_add_album);
router.delete('/music/:id', musicController.delete_album);

module.exports = router;

