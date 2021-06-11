const { User } = require('../models');

const userData = [
    {
        username: 'Billy',
        password: '$2b$10$F3rcu8eg2UUx',
    },
    {
        username: 'Pat',
        password: '$2b$10$F3rcu',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;