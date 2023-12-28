/* 
Node.js streams are objects that let you read data from a source or write data to a destination in a continuous fashion. There are four fundamental stream types in Node.js:

Readable: Streams from which data can be read (e.g., file system reads).
Writable: Streams to which data can be written (e.g., file system writes).
Duplex: Streams that are both Readable and Writable (e.g., TCP sockets).
Transform: Duplex streams that can modify or transform the data as it is written and read (e.g., compression).

Streams are advantageous because they can handle large amounts of data without consuming large amounts of memory, and they can process data as soon as it becomes available, in small chunks.

*/

const fs = require('fs');
const path = require('path');

// Create a readable stream
let readableStream = fs.createReadStream(path.join(__dirname, 'input.txt'));

// Create a writable stream
let writableStream = fs.createWriteStream(path.join(__dirname, 'output.txt'));

// Pipe the read and write operations
readableStream.pipe(writableStream);

console.log('Piped the data from input.txt to output.txt');


