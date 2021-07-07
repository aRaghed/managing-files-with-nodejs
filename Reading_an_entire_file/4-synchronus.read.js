//Reading a file Synchronously
const { convertCsv } = require("../csv.parse");
const { readFileSync } = require("fs");

// Working with Synchronously file reader
// Results in a table but can't handle if errors
/*
const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf8");

console.table(convertCsv(data));*/


// Unhandled error which will crash the applications ,
// as soon as we change the file name to a missing file
// Results in Error: ENOENT: no such file or directory, open './data/pulitzer-circulation-data.cs
/*
const data = readFileSync("./data/pulitzer-circulation-data.cs", "utf8");

console.table(convertCsv(data));
*/

// To fix the unhandled error with readFileSync enclosure it with an try catch.
// Will not crash the application.
// Note!!!! but this will completely block your application until its done.
/*
try {
    const data = readFileSync("./data/pulitzer-circulation-data.cs", "utf8");

    console.table(convertCsv(data));
} catch (err) {
    console.log(`Error with file: ${err}`)
}*/



