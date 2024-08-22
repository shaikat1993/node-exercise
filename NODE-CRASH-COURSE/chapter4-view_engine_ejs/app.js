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

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req,res) => {
    res.render('about');
})

// now create an handler funtion for creating new blogs and show it into the web page
app.get('/blogs/create' , (req,res) => {
    res.render('createBlog');
})

app.use((req,res) => {
    res.status(404).render('404')
})






