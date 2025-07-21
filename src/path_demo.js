const path = require("path");

console.log(__dirname); // current dir
console.log(__filename); // current file

console.log(path.join("ErrorLog","log1.txt"))

console.log(path.resolve(path.join("ErrorLog","log1.txt")));

if(path.extname(path.join("ErrorLog","log.txt")) === ".pdf")
    console.log("u can upload a PDF file");
else
    console.log("no");

if(path.isAbsolute(path.resolve(path.join("ErrorLog","log1.txt"))))
    console.log("absolute")
else
    console.log("relative");



/*
const fs = require("fs");


fs.readdir(__dirname, (err, files) => {
    if(err) throw err;
    console.log(files)
})
*/