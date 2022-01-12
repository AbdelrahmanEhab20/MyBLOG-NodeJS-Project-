const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const cors = require('cors');
const authMiddleWare = require('./middleware/auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/Blog');

app.use(express.json());
app.use(cors());

app.use('/users', usersRoutes);
app.use(authMiddleWare);
app.use('/posts', postsRoutes);


app.use((err, req, res, next) => {
    res.status(500).json({ err });
});

app.listen(3000, () => {
    console.log(`Connection Successeded`);
});