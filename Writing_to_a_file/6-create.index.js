// Requirements for index.js
// Open file, Get List of file, Iterate over List, Write to file, Close file
// With file watcher

const { closeSync, openSync, readdirSync, watch, writeSync} = require('fs');
const camelCase = require('camelcase');

watch('./read', () => {
    const indexfd = openSync('./index.js', 'w');

    const files = readdirSync('./read');

    files.map(f => {
        const name = f.replace("js","");
        console.log(`adding a file: ${f}`);

        writeSync(indexfd,
            `module.exports.${camelCase(name)} = require('./read/${name}').read;\n`); 
    });


    closeSync(indexfd);
});