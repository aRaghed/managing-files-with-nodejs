// Writing an Entire File
const { writeFile} = require('fs');

// Writing to a file.
// This example will empty the app.log file, restore it using git (git checkout data/app.log)

writeFile('./data/app.log', 
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    (err) => {
        err ? console.log(err) : console.log("file saved");
    });
