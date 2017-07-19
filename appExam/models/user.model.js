const BaseData = require('./base.data');
const User = require('../models/user.model');

class UserData extends BaseData {
    constructor(db) {
        super(db, User);
    }

    checkPassword(username, password) {
        return this.collection
            .findOne({
                username,
            })
            .then((user) => {
                if (!user) {
                    throw new Error('Invalid user');
                }
                if (username.password !== password) {
                    throw new Error('invalid password');
                }
                return true;
            });
    }
}

module.exports = UserData;

