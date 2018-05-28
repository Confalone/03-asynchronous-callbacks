'use strict';

let read = require('../lib/reader.js');

describe('The Reader Module', () => {

    it(' should return error when given an improper file name', (done) => {

        let fp = ['bad.txt'];

        read(fp, (err) => {

            expect(err).toBe('undefined');
        });
        done();

    });

    it(' should return an error when given erroneous file name', (done) => {

        let fp = ['lab_03_tyler/data/data1.txt', 'lab_03_tylor/data/data1.txt'];

        read(fp, (err, info) => {

            expect(err).toBe('undefined');
        });
        done();

    });

    it(' should return a file', (done) => {

        let fp = ['lab_03_tyler/data/data1.txt'];

        read(fp, (err, info) => {

            expect(err).toBe('undefined');

            const received = info.toString();
            expect(received).toBe(info[0]);
        });
        done();
    });

    it(' should return file contents when given an array of files', (done) => {

        let fpS = ['lab_03_tyler/data/data2.txt', 'lab_03_tyler/data/data3.txt', 'lab_03_tyler/data/data1.txt'];
        let array = [];

        read(fpS, (err, info) => {

            expect(err).toBe('undefined');

            array.push(info);
        });


        const returns = info.toString();

        expect(returns).toBe('DATA 2 DATA 3 DATA 1');
        done();
    });
});

it(' should return an ordered array when given an array of files', (done) => {

    let fpS = ['lab_03_tyler/data/data2.txt', 'lab_03_tyler/data/data3.txt', 'lab_03_tyler/data/data1.txt'];
    let array = [];

    read(fp, (err, info) => {

        expect(err).toBe('undefined');

        array.push(info.toString());

        expect(array[3]).toContain('DATA');

        done();
    });
});

//     });
//     expect(true).toBe(Arr.isArr(array));
//     done();
// });

// it[' should return an array in the proper order', (done) => {

//     let fp = ['lab_03_tyler/data/data2.txt', 'lab_03_tyler/data/data3.txt', 'lab_03_tyler/data/data1.txt'];
//     let array = [];

// }]
// })
//     })
//     })
// };