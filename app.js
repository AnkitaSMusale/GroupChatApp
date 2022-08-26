const path = require('path');
const express = require('express');
const cors = require('cors')
const bodyparser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

app.use(express.json());
app.use(bodyparser.json());

const User = require('./models/user');

const UserRoutes = require('./router/user');

const dotenv = require('dotenv');
// get config vars
dotenv.config();

app.use(cors());

app.use('/user', UserRoutes);

app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync()
    .then(() => {
        console.log(User);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })