const { convertCsv } = require("../csv.parse");
const { readFile } = require("fs");

// Unable to find file but strange error message
/*
readFile("./data/pulitzer-circulation-data.cs", "utf8", (err, data) => {
    const vals = convertCsv(data);

    console.table(vals);
}); */


// Unable to find file with handled error,
// do not forget the return else you still get a strange error
/*
readFile("./data/pulitzer-circulation-data.cs", "utf8", (err, data) => {
	if(err){
        console.log(`There is an problem with the file ${err}`);
        return;
    }
    const vals = convertCsv(data);

    console.table(vals);
}); */


// Missing encoding can't be handled by this code.
// do not forget the return else you still get a strange error
/*
readFile("./data/pulitzer-circulation-data.csv", (err, data) => {
	if(err){
        console.log(`There is an problem with the file ${err}`);
        return;
    }
    const vals = convertCsv(data);

    console.table(vals);
}); */


// This code shows that not specifing an encoding will result in a buffer.
// do not forget the return else you still get a strange error
// Result: <Buffer 4e 65 77 73 ... {x} more bytes>
/*
readFile("./data/pulitzer-circulation-data.csv", (err, data) => {
	if(err){
        console.log(`There is an problem with the file ${err}`);
        return;
    }
	
	console.log(data);
	
    const vals = convertCsv(data);

    console.table(vals);
}); */

// Missing callback will also produce an error
// Rarely happens but shows that the callback is required
// Result: TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined
/*
readFile("./data/pulitzer-circulation-data.csv"); */
