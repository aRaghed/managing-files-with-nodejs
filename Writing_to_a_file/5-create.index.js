// Requirements for index.js
// Open file, Get List of file, Iterate over List, Write to file, Close file

const { closeSync, openSync, readdirSync, writeSync} = require('fs');
const camelCase = require('camelcase');

const indexfd = openSync('./index.js', 'w');

const files = readdirSync('./read');

console.log(files);

files.map(f => {
    const name = f.replace("js","");
    console.log(`adding a file: ${name}`);

    writeSync(indexfd,
        `module.exports.${camelCase(name)} = require('./read/${name}').read;\n`); 
});


closeSync(indexfd);