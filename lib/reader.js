'use strict';

const fs = require ('fs');

module.exports = exports = (fp, cb) => {
    let array = [];
    fp.map(file => {
        fs.read (fp, (err, info) =>
    {
        if (err) {
            cb (err);
        } else {
            array.push(info.toString());
            if (array.length === paths.lenth) {
                cb (undefined, array);
            }
        }
    });
    });
}