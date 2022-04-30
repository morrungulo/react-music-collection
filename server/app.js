"use strict";

const express = require('express');
const loaders = require('./loaders');

process.title = "backend-music-collection";

async function startServer(port) {
  const app = express();
  loaders.initialize({ expressApp: app })
    .then(() => {
      const server = app.listen(port, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Your server is ready on port ' + port + '!');
      });

      process.on('SIGTERM', () => {
        server.close(() => {
          console.log('Shutdown the server!');
        })
      });
    })
    .catch(err => {
      console.error('Could not start application: ' + err)
    });
}

startServer(3000);
