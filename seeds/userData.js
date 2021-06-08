const { User } = require('../models');

const userData = [
    {
        username: 'adamthecoder',
        email: 'adam@email.com',
        password: 'rootroot',
    },
    {
        username: 'wizardpatrick',
        email: 'patrick@email.com',
        password: 'rootroot',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;