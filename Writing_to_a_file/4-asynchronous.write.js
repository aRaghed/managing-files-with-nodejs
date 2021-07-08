// Untilizing Options
const { writeFile, appendFile } = require('fs');

// Example, create a new file without modifing if it already exists
/*
writeFile('./data/app.log', 
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    {flag: 'wx'}, // <--- 'w': write, 'x: exclusive flag (Error if the file already exists)
    (err) => {
        err ? console.log(err) : console.log("file saved");
    });
*/

// The three main flags
// r: Read Mode, w: Write Mode, a: Append Mode

// Extended flags
// x: Exlusive (throw an error if file already exists),
// +: Multiple modes (r+),
// s: syncronous (This is for the file IO and not for the java function,
// including it will not convert open to opensync)

// Read Options (allowed combinations)
// r: Opens the file in Read Move, 
// r+: Opens the file in read and write mode,
// rs+: Opens the file in read and write mode synchronously

// Write Options (Allowed combinations)
// w: Open file in write mode
// wx: Open the file in exclusive mode (First above)
// w+:  Opens the file in Read and write Mode
// wx+: Opens the file in Read and write Mode and throws an error if file already exists

// Append Options
// a: Opens the file in Append mode
// ax: Opens the file in Append mode exclusively
// a+: Opens the file in Append and read mode
// ax+: Opens the file in Append & read mode exclusively
// as: Opens the file in Append mode synchronously
// as+: Opens the file in appending and reading synchronously

// Example were we make some adjustments, were we set os level adjustments on the file
/*
const { constants } = require('fs');
writeFile('./data/newapp.log', 
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    {mode: constants.S_IWGRP | constants.S_IRUSR}, // <- mode: 0o600 (chmod)
    (err) => {
        err ? console.log(err) : console.log("file saved");
    });
*/

// Example write file with encoding
writeFile('./data/newapp.log', 
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    {encoding: 'base64'}, // <- encoding: base64
    (err) => {
        err ? console.log(err) : console.log("file saved");
    });  

