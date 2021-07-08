// Importance of closing
const fs = require("fs");

// This example show the problem when the file is not closed and re-opened multiple times
// The error is thrown by the operating system since it has a limit on how many open files it accepts,
// Hence the ticking timebomb.
/*
console.log('Opening files...');
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync("./data/app.log");
  console.log(fd);
}
*/


module.exports.read = () => {
// This example shows how it works if you close the file afterwards.
  console.log('Opening files...');
  for (let i = 0; i < 50000; i++) {
    const fd = fs.openSync("./data/app.log");
    fs.close(fd);
  }
}

// Closing notes
// Every time you use a FileDiscriptor remember to close the files afterwards.

