const mongoose = require('mongoose');
// A Schema is the thing that is going to define the structure of the 
// documents that we are gonna store inside a collection.
const Schema = mongoose.Schema;

// we need to create object with property with their type and required validation
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// now creating model
const BlogModel =mongoose.model('Blog', blogSchema);

module.exports = BlogModel;