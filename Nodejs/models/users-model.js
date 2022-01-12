const mongoose = require('mongoose');


const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: " ",
    }
}, {
    toJSON: {
        transform: (doc, ret, options) => {
            delete ret.password;
            delete ret.__v;
            return ret;
        },
    }
},
    { timestamps: true }
);

userSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, function (error, encrypted) {
        user.password = encrypted;
        next();
    })
})

//Compare Method
userSchema.methods.comparePassword = function (password) {
    const isValid = bcrypt.compareSync(password, this.password);
    return isValid;

};

const user = mongoose.model('User', userSchema);

module.exports = user;