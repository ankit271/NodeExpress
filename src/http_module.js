const http = require('http')

const PORT = 5000

const app = http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            res.setHeader("Content-Type", "text/html")
            res.statusCode = 200
            res.end("Hello World")
            break;
        case '/home':
            res.setHeader("Content-Type", "text/html")
            res.statusCode = 200
            res.end("Home Page")
            break;
        case '/about':
            res.statusCode = 200
            res.end("About Page")
            break;
        default:
            res.statusCode = 404
            res.end("Not Found");
            break;
    }

});

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`)
})