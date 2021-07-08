//Read Asynchronously without Callbacks
const { convertCsv } = require("../csv.parse");
const fs = require("fs");
const { promisify } = require("util");

const promisifiedReadFile = promisify(fs.readFile);

// using promisified function
/*
promisifiedReadFile("./data/pulitzer-circulation-data.csv", "utf8")
    .then(data => console.table(convertCsv(data)))
    .catch(err => console.log(`File Error: ${err}`));
*/



module.exports.read = () => {

    // if you rather want to use async await then use this one instead
    const read = async () => {
        const data = await promisifiedReadFile("./data/pulitzer-circulation-data.csv", "utf8");
        console.table(convertCsv(data));
    };

    read();
}





