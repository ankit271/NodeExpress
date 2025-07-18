
import fs from 'fs';
/*
console.log(1)
fs.writeFileSync("test.txt", "Welcome to node js")
fs.writeFile("testing.txt","Welcome to Node",(err) =>{
    if(err)
        console.log(err)
    console.log("file written")
})
console.log(10)
console.log(100)
*/
/*
console.log(1)
fs.readFile("test.txt", "utf8", (err, data) => {
    if (err)
        console.log(err);
    console.log(data)
})
console.log(10)
console.log(100)
*/
const data = fs.readFileSync("test.txt", "utf8")
console.log(data)
/*
fs.mkdir("./log", (err) =>{
    if(err)
        console.log(err)
    console.log("folder created")
})

 */

let res = fs.existsSync("./log")
console.log(res)