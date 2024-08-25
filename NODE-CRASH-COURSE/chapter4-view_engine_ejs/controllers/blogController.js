//Import Blog Model
const BlogModel = require("../models/blog");

// following the naving conventions
// 1. blog_index(for all blogs)
// 2. blog details(for a single blog)
// 3. blog_create_get(for creating a new blog)
// 4. blog_create_post (for submitting the data for the new blog)
// 5. blog_delete (for deleting a specific blog) 

// 1. blog_index(for all blogs)
const blog_index = (req, res) => {
    BlogModel.find().sort({ createdAt: -1 })
    .then(result => {
        res.render('blogs/index', {
        title: 'All Blogs',
        blogs: result
        })
    }).catch(err => {
        console.log(err);
    })
} 

// 2. blog details(for a single blog)
const blog_details = (req,res) => {
    const id = req.params.id;
    BlogModel.findById(id)
      .then(result => {
        res.render('blogs/details', {
          title: 'Blog Detail',
          blog: result
        })
      }).catch(err => {
        res.status(404).render('404', {title: 'Blog not found'});
      })
}

// 3. blog_create_get(for creating a new blog)
const blog_create_get = (req,res) => {
    res.render('blogs/createBlog', 
        { title: 'Create a new Blog' });
}

// 4. blog_create_post (for submitting the data for the new blog)
const blog_create_post = (req,res) => {
    const blog = new BlogModel(req.body);
    blog.save()
      .then((result) => {
        res.redirect('/blogs');
      }).catch((err) => {
        console.log(err);
      })
}

// 5. blog_delete (for deleting a specific blog) 
const blog_delete = (req, res) => {
    const id = req.params.id;
    BlogModel.findByIdAndDelete(id)
      .then((result) => {
        res.json({ redirect: '/blogs' });
      }).catch(err => {
        console.log(err);
      });
}

module.exports = {
    blog_index,
    blog_details, 
    blog_create_get,
    blog_create_post,
    blog_delete
}