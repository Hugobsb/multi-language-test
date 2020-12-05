const Users = require('../models/User');
const Data = require('../models/Data');

module.exports = {
    getUsers() {
        return Users.find({}).then(users => users);
    },
    
    getData() {
        return Data.find({}).then(data => data);
    }
};