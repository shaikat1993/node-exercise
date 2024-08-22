/*
Express is a framework that helps easily 
manage routing, 
server-side logic, and 
responses.

create Express apps and how to use Express 
-> to manage routing, 
-> server-side logic, and 
-> responses.


*/
const express = require('express');

// setup an express app
const app = express();

//listen for request
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
})
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
})

// app.get('/about', (req, res) => {
//     res.send('<p>about Page</p>');
// })

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//404 page (note: it should always be at the bottom)
app.use((req,res) => {
    res.status(404 ).sendFile('./views/404.html', {root: __dirname});
})






