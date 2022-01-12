const Users = require("../models/users-model");
const jwt = require('jsonwebtoken');
//const bycrpt = require("bcryptjs");


const findUser = (query) => Users.find(query);
const createUser = (query) => Users.create(query);
const removeUser = (_id) => Users.findOneAndDelete({ _id });
const editUser = (_id, body) => Users.findOneAndUpdate({ _id }, body);

const login = async ({ username, password }, next) => {
    const user = await Users.findOne({ username }).exec();
    if (!user) {
        next("Invalid User");
        return;
    }
    const isValid = await user.comparePassword(password);

    if (!isValid) {
        next("Invalid Password");
        return;
    }
    const token = jwt.sign({
        username,
        _id: user.id,
        maxAge: "2d"
    }, 'jgnbdlsnvblkdsagkladlkag65g4d5gdasgsadgag')
    return token;
};

module.exports = {
    login,
    findUser,
    createUser,
    removeUser,
    editUser,
};
