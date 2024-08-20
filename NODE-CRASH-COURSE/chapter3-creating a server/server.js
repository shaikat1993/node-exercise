/*
This is for covering the communication between a browser and a server.

🌐 Server listens for incoming requests from 
a browser, then responds with HTML, 
images, CSS or JSON.

🖥️ IP addresses and domains are used to connect 
to the correct server hosting a website.

📱 Localhost is used as a domain name to connect to the local computer 
as a host during development.

🚪 Port numbers represent specific channels on a computer 
for software to communicate through.

⌨️ Creating a server and listening for requests in Node.js 
involves using the HTTP module and invoking the listen method.
*/

// in node we manually creates the server which
// lives on the backend of our website


// and its this server that listen for the requests from the browser and then 
// decides what responses to send back to the browser.

// we now we will create a local server on our computer using Node.js
// which can then be used to actively listen for requests and respond to them

// for that we will need a core node module which is we called the HTTP module. 
const http = require('http');

//creating server using the http module
const server = http.createServer((request, response) => {
    console.log('request made');
}); // server created;

// now we have to listen so that the server can take the request and 
// in response we will get something from the server
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});



