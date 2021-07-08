// Reading a chunk at a time
const fs = require('fs');

let totalsize = 0;
fs.stat('./data/app.log', (err, {size}) => totalsize = size);

fs.open('./data/app.log', (err, fd) => {
    const buffer = Buffer.alloc(200);

    for(let i=0; i <= totalsize / buffer.length; i++){
        fs.read(fd, buffer, 0, buffer.length, i*buffer.length, (err, count, buff) => {
            console.log(buff.toString());
        })
    }
})

// Conclussion
// Run this example and chech the console, the lines in the console an the file
// does not match since this is a asynchronous call that will not guarantee that
// the logs will be in order.
