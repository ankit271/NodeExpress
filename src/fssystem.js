const fs = require('fs')

// non-blocking (async) - create a folder
/*
fs.mkdir("ErrorLog", (err)=>{
   if(err){
       console.log(err);
       return;
   }
   console.log("file created");
})
console.log("Completed")

 */

// append (appendFile) and write (writeFile)
/*
const message ="\nNode.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant."

fs.appendFile("ErrorLog/error.txt",message,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("file created");
})

 */
// read file
/*
fs.readFile("ErrorLog/error.txt","utf8",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})

 */
// delete
fs.unlink("ErrorLog/test.txt", (err) => {
    if (err) {
        throw err;
    }
    console.log('file deleted')
})