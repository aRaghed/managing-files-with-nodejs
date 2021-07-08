// Reading Parts Synchronously
// This code has a timebomb that could go of do not use it
// The null parameter in Readsync makes node keep track of 
// the last byte that was visited in the last read.
const fs = require('fs');

const fd = fs.openSync('./data/app.log');

let count = 0;

do {
const buffer = Buffer.alloc(200);

count = fs.readSync(fd, buffer, 0, buffer.length, null);

console.log(buffer.toString());
}while(count > 0)