const { Blog } = require("../models");

const blogdata = [
  {
    title: "Handlebars",
    text: "Handlebars is an express package that will let you create layouts and change those layouts.",
    user_id: 1,
  },
  {
    title: "CSS",
    text: "CSS will allow you to style your website.",
    user_id: 2,
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
