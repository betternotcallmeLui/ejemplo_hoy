const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const authController = require('./controllers/authController');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authController);

mongoose.set('strictQuery', false)

mongoose.connect("mongodb://mongo:XrCeUXv9RDZR8WYOvZca@containers-us-west-179.railway.app:7194", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected!');
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server started on port ${process.env.PORT || 3000}`);
        });
    })
    .catch((error) => console.error(error));