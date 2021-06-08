const { Comment } = require('../models');

const commentdata = [
    {
        comment: 'This is amazing!',
        // date: "put a date in",
        user_id: 1,
        post_id: 2,
    },
    {
        comment: 'This is awesome!',
        // date: "put a date in",
        user_id: 1,
        post_id: 1,
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;