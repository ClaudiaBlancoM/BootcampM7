const db = require('../config/db.config');
const User = require('../models/user.model');
const Bootcamp = require('../models/bootcamp.model');

User.belongsToMany(Bootcamp, { through: 'User_Bootcamp' });
Bootcamp.belongsToMany(User, { through: 'User_Bootcamp' });

try {
    db.sync();
} catch(err) {
    console.log(err);
}

module.exports = { User, Bootcamp };