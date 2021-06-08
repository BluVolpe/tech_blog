const { Blog } = require('../models');

const blogdata = [
    {
        title: 'Handlebars',
        text: 'Handlebars is an express package that will let you create layouts and change those layouts.',
        // date: 'Put a date in',
    },
    {
        title: 'CSS',
        text: 'CSS will allow you to style your website.',
        // date: 'Put a date in',
    },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;