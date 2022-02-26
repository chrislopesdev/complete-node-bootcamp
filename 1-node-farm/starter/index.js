const fs = require('fs');
const http = require('http');

/* ******************** */
// FILES

// Blocking, synchronous way
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textInput);

// const textOutput = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOutput);
// console.log('File has been written.');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });
// console.log('This will happen before read-this');


/* ******************** */
// SERVER

const server = http.createServer((req, res) => {
  res.end('hello from the server');
});

server.listen(8000, () => {
  console.log('server is listening on port 8080');
});