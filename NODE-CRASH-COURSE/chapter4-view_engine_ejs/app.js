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

// configure env file
require("dotenv").config();

const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');

// implementing mongoose
// const mongoose = require('mongoose');
const mongoose = require('mongoose');

// importing blogModel
const BlogModel = require("./models/blog");
/*
we can create the enviroment file for modularity


const db = process.env.dbURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));;

or another way is to crate in this same file
*/


// setup an express app
const app = express();

// connecting the database via the mongoose
const dbURI = 'mongodb+srv://sadidur:shaikat12345@nodetutorials.kbpqp.mongodb.net/blog-application?retryWrites=true&w=majority&appName=nodetutorials'

mongoose.connect(dbURI)
    .then((result) => 
    //listen for request
    app.listen(3000))
    .catch((error) => console.log(error));

//registering view engine
app.set('view engine', 'ejs');

// middleware & static files
// here we are making the style folder public for 
// which styles.css file will be accessible
app.use(express.static('style'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// how to add blog
app.get('/add-blog', (req,res) => {
    // create a new instance of blog document
    // and save that to blog collection
    // const blogModel = new BlogModel({
    //     title: 'New Blog 2',
    //     snippet: 'about my new blog',
    //     body: 'here is the body of my new blog'
    // });
    blogModel.save()
    .then( (result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });

})

// to retrieve the data from the database and show them 
// how to retrive all blog
app.get('/all-blogs', (req, res) => {
    BlogModel.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

// lets try find a single blog
// how to find a single blog
app.get('/single-blog', (req, res) => {
    BlogModel.findById('66ca7bb503c878ffde9d8077')
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
})

// how to delete a blog
// app.get('/delete-blog', (req,res) => {
//     BlogModel.findByIdAndDelete('66ca7bb503c878ffde9d8077')
//     .then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     })
// })

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






