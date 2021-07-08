const { convertCsv } = require('../csv.parse');
const { open, read } = require("fs");

// using asynchronous with callbacks
open('./data/pulitzer-circulation-data.csv', (err, fd) => {
    // assing  a buffer with 200 bytes
    const buffer = Buffer.alloc(200);
    // == Function parameters
    // fd is the file descriptor
    // buffer is the buffer
    // 0 = what byte possition we start in the buffer once we start reading
    // the buffer lenght
    // 0 = from what byte in the file we start reading
    // == Callback ==
    // err : error
    // count: how many bytes that was read, if buffer > than file
    // buffer: data that was read
    read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
        console.table(convertCsv(buffer.toString()));
    });
});