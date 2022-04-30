const express = require('express');
const cors = require('cors');
const musicRoutes = require('../routes/music');
const { use404, use5xx } = require('../controllers/error');

module.exports = {
    initialize: async (expressApp) => {
        return new Promise((resolve, reject) => {

            // middleware & static files
            expressApp.use(express.json());
            expressApp.use(express.urlencoded({ extended: true }));
            expressApp.use(cors());

            // the api
            expressApp.use('/api/v1', musicRoutes);

            // handle errors
            expressApp.use(use404);
            expressApp.use(use5xx);

            // complete
            console.log('Express loaded!');

            // resolve promise
            resolve();
        });
    }
};