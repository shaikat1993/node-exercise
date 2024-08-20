/*
#### Summary
How to handle requests and responses in Node.js. 

It teaches you how to 
-> read files, 
-> set headers, 
-> send HTML pages, and 
-> implement basic routing. 

also  
discussing status codes and redirects, 
highlighting the need for a more organized approach for larger websites.

#### Highlights
- 💻 You can use Node.js to create a simple server that listens for requests on a specific port. 

- 📑 The `request` object contains information about the incoming request, 
    -> such as the URL and 
    -> the HTTP method used.

- 📨 The `response` object is used to send back data to the client. 
    -> You can set headers, 
    -> write data, and 
    -> end the response using this object.

- 🔁 You can use a `switch` statement to handle different routes based on the 
    -> requested URL, 
    -> sending back different HTML pages based on the route.

- 🚦 Status codes indicate 
    -> the success or failure of a request, 
    -> with different codes representing different scenarios. 
*/

const http = require('http');

const fileSystem = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // now we want to load html files , for that we need to use fs(file system module)
    fileSystem.readFile('./views/index.html', (error, data) => {
        if(error) {
            console.log(error);
            // if there is error then we need to end the response otherwise it will be alive
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

    /* 
    // to add anything into the response 3 steps are need to follow

    //set header content type
    res.setHeader('Content-type', 'text/html');

    // this is if we want to send or work incode in this file 

    // // write something to the header
    // res.write('<h2>hello world!!!</h2>');
    // res.write('<p>hello from sadid</p>');

    // after writing into the header end the header
    res.end();
    */
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})