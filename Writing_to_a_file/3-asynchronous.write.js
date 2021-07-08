// Appending To A File
const { writeFile, appendFile } = require('fs');

// This example will append to a file instead of overriding the data in the file
/*
writeFile('./data/app.log', 
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    {flag: 'a'}, // <--- 'a' will append
    (err) => {
        err ? console.log(err) : console.log("file saved");
    });*/


// The append function will do the same as using the writefile but without the flag option
// But Remember that all flags do not have corresponding functions so learn how to use it.
appendFile('./data/app.log', 
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    (err) => {
        err ? console.log(err) : console.log("file saved");
    });
