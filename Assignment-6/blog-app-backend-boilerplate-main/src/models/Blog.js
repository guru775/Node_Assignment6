const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic:{type:String},
    description:{type:String},
    posted_at:{type:String},
    posted_by:{type:String}
})

const Blog = mongooose.model('blog', blogSchema);

module.exports = Blog;