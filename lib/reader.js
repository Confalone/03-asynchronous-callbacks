'use strict';

let fs = require('fs');

module.exports = exports = (paths, callback) => {
  let array = [];

  paths.map(paths => {
    fs.readFile(paths, (err, info) => {
      if (err) {
        callback(err);
      } else {
        array.push(info.toString().trim());
        if (array.length === paths.length) {
          callback(null, array);
        }
      }
    });
  });
};