const fs = require('fs');

// there are couple of types of streams. read streams , write streams
const readStream = fs.createReadStream('./docs/blog3.txt');

// here
//'data' is the name of the event being listened for.

// This event is emitted whenever the stream has a chunk of data ready to be consumed.

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('----------NEW CHUNK--------------');
//     console.log(chunk.toString());
//     writeStream.write('\nNEW WRITE CHUNK\n');
//     writeStream.write(chunk);
// })

// the pipe method do the same thing like the above funcationality
// we can use pipe method to connect the read streams with the write streams
readStream.pipe(writeStream);