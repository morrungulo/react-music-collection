const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

module.exports = {
    initialize: async ({ expressApp }) => {
        return Promise.all([
            mongooseLoader.initialize(),
            expressLoader.initialize(expressApp),
        ]).then(values => {
            console.log('Initialization complete!');
        }).catch(err => {
            throw err;
        });
    }
};