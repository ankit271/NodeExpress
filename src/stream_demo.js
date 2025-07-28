const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const filePath = './large_file.txt'; // Path to the file to stream
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    readStream.pipe(res); // Pipe the file stream directly to the HTTP response
}).listen(3000, () => {
    console.log('Server listening on port 3000');
});