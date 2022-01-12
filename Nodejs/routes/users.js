const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
//const Users = require("../models/users-model");
////const bycrpt = require('bcryptjs');

const {
    login,
    findUser,
    createUser,
    removeUser,
    editUser,
} = require("../controllers/cont-users");


// LogIN 
router.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    const token = await login({ username, password }, next);
    res.json(token);
});

// Get all user
router.get("/", async (req, res, next) => {
    findUser({})
        .then((doc) => res.json(doc))
        .catch((err) => console.log(err));
});

// post
router.post("/register", async (req, res, next) => {
    const user = req.body;
    await createUser(user)
        .then((doc) => res.json(doc))
        .catch((err) => next(err));
});

//patch (Update)
router.patch("/:id", async (req, res, next) => {
    const id = req.params.id;
    const user = req.body;
    await editUser(id, user)
        .then((doc) => res.json(doc))
        .catch((err) => next(err));
});

//Delete
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    removeUser(id)
        .then((doc) => res.json(doc))
        .catch((err) => next(err));
});

module.exports = router;
