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

// Step 1: Configure Environment Variables
require("dotenv").config();

// Step 2: Import Required Modules
const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Step 3: import router
const blogRoutes = require('./routes/blogRoutes');

// Step 4: Connect to MongoDB Database
const dbURI = 'mongodb+srv://sadidur:shaikat12345@nodetutorials.kbpqp.mongodb.net/blog-application?retryWrites=true&w=majority&appName=nodetutorials';

mongoose.connect(dbURI)
  .then((result) => {
    // Start the Express App
    const app = express();

    // Step 5: Register View Engine (EJS)
    app.set('view engine', 'ejs');

    // Step 6: Serve Static Files (styles folder)
    app.use(express.static('style'));

    // Step 7: Parse URL-Encoded Data (for creating new blogs)
    app.use(express.urlencoded({ extended: true }));

    // Step 8: Use Morgan Middleware for Logging
    app.use(morgan('dev'));

    // Step 9: Define Routes

    // Redirect to /blogs
    app.get('/', (req, res) => {
      res.redirect('/blogs');
    });

    // Get About Page
    app.get('/about', (req, res) => {
      res.render('about', { title: 'About' });
    });

    // blog routes
    app.use('/blogs',blogRoutes);

    // 404 Error Handler
    app.use((req, res) => {
      res.status(404).render('404', { title: '404' });
    });

    // Start Listening for Requests
    app.listen(3000);
  })
  .catch((error) => console.log(error));



// // configure env file
// require("dotenv").config();

// const express = require('express');
// const ejs = require('ejs');
// const morgan = require('morgan');

// // implementing mongoose
// // const mongoose = require('mongoose');
// const mongoose = require('mongoose');

// // importing blogModel
// const BlogModel = require("./models/blog");
// /*
// we can create the enviroment file for modularity


// const db = process.env.dbURI;
// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//     })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error(err));;

// or another way is to crate in this same file
// */


// // setup an express app
// const app = express();

// // connecting the database via the mongoose
// const dbURI = 'mongodb+srv://sadidur:shaikat12345@nodetutorials.kbpqp.mongodb.net/blog-application?retryWrites=true&w=majority&appName=nodetutorials'

// mongoose.connect(dbURI)
//     .then((result) => 
//     //listen for request
//     app.listen(3000))
//     .catch((error) => console.log(error));

// //registering view engine
// app.set('view engine', 'ejs');

// // middleware & static files
// // here we are making the style folder public for 
// // which styles.css file will be accessible
// app.use(express.static('style'));
// app.use(morgan('dev'));

// //redirecting
// app.get('/', (req,res) => {
//     res.redirect('/blogs');
// })

// // blog routes
// app.get('/blogs', (req,res) => {
//     BlogModel.find().sort({createdAt: -1})
//     .then(result => {
//         res.render('index', 
//             {
//                 title: 'All Blogs', 
//                 blogs: result
//             })
//     }).catch(err => {
//         console.log(err);
//     })
// })

// app.get('/', (req, res) => {
//     const blogs = [
//         {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//       ];
//     res.render('index', {title: 'Home', blogs});
// })
// app.get('/about', (req,res) => {
//     res.render('about', {title: 'About'});
// })

// // now create an handler funtion for creating new blogs and show it into the web page
// app.get('/blogs/create' , (req,res) => {
//     res.render('createBlog', {title: 'Create a new Blog'} );
// })

// app.use((req,res) => {
//     res.status(404).render('404', {title: '404'});
// })






