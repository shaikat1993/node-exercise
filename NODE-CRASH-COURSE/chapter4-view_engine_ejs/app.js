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
const ejs = require('ejs');

// setup an express app
const app = express();

//registering view engine
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

// implementing middle ware
app.use((req,res, next) => {
    console.log('new request made');
    console.log('host', req.hostname);
    console.log('path', req.path);
    console.log('method', req.method);
    next();
});

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'Home', blogs});
})
app.get('/about', (req,res) => {
    res.render('about', {title: 'About'});
})

// now create an handler funtion for creating new blogs and show it into the web page
app.get('/blogs/create' , (req,res) => {
    res.render('createBlog', {title: 'Create a new Blog'} );
})

app.use((req,res) => {
    res.status(404).render('404', {title: '404'});
})






