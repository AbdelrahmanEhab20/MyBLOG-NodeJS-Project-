const jwt = require('jsonwebtoken');
const User = require('../models/users-model');


const auth = async (req, res, next) => {
    if (req.url == "/posts" && req.method == "GET") {
        next();
    }
    else {
        const { authorization } = req.headers;
        console.log(authorization);
        //check user logeed in successfully or not and return username,_id,maxAge , and(Create at )
        const payload = await jwt.verify(authorization, 'jgnbdlsnvblkdsagkladlkag65g4d5gdasgsadgag');
        console.log(payload);
        User.findOne({ _id: payload._id })
            .then(user => {
                req.user = user;
                next();
            })
    }
}

module.exports = auth;

// const auth = (req, res, next) => {
//     if (req.url == "/posts" && req.method == "GET") {
//         next();
//     }
//     else {
//         const { authorization } = req.headers;
//         //check user logeed in successfully or not and return username,_id,maxAge , and(Create at )
//         const payload = jwt.verify(authorization, 'jgnbdlsnvblkdsagkladlkag65g4d5gdasgsadgag');
//         //console.log(payload);
//         User.findOne({ username: payload.username })
//             .then(user => {
//                 req.user = user;
//                 next();
//             })
//     }

// }