const mongoose = require('mongoose');

module.exports = {
    initialize: async () => {
        try {
            // const dbURI = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DBNAME}`;
            const dbURI = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DBNAME}`;
            console.log(dbURI);
            await mongoose.connect(dbURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                socketTimeoutMS: 15000
            })
            console.log('Mongoose loaded!')
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}