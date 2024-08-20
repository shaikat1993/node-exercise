/*
if we need to load different pages in a website 
we need a routing way to do that so that 
people can go into different pages
*/ 

const http = require('http');

// now we want to load html files , 
//for that we need to use fs(file system module)

const fileSystem = require('fs');
const { error } = require('console');

// create the server
const server = http.createServer((req,res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-type', 'text/html');

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // now readfile based on path
    fileSystem.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // res.end(data);

            // if we want to write only one thing 
            //then we can directly send it to end method
            res.end(data);
        }
    }) 
})

// listen the server for changes
server.listen(3000, 'localhost', () => {
    console.log('listening to port 3000');
})


