'use strict';

let read = require('../lib/reader.js');

describe('The Reader Module', () => {
  it(' should return error when given an improper file name', (done) => {
    let fp = ['errWrongSorryGoThatWay.txt'];
    read(fp, (err) => {
      expect(err).toBeDefined();
    });
    done();
  });

  it(' should return an error when given erroneous file name', (done) => {
    let fp = ['lab_03_tyler/data/data1.txt', 'lab_03_tylor/data/data1.txt'];
    read(fp, (err, info) => { // eslint-disable-line
      expect(err).toBeDefined();
    });
    done();
  });

  it(' should return a file', (done) => {

    let fp = [`${__dirname}/../data/data1.txt`];

    read(fp, (err, info) => {

      expect(err).toBeDefined();
      const received = info.toString();
      expect(received).toBe(info[0]);
    });
    done();
  });
});