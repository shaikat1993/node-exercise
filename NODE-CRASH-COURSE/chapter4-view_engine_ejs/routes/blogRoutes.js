const express = require('express');

const blogController = require('../controllers/blogController');

const router = express.Router();

// fetch all blogs
router.get('/', blogController.blog_index);
// Create New Blog
router.post('/', blogController.blog_create_post);
// Get Create Blog Page
router.get('/create', blogController.blog_create_get);
// Get Single Blog
router.get('/:id', blogController.blog_details);
// Delete Blog
router.delete('/:id', blogController.blog_delete);

module.exports = router;