const { Comment } = require("../models");

const commentdata = [
  {
    comment: "Test1",
    blog_id: 1,
  },
  {
    comment: "Test2",
    blog_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
