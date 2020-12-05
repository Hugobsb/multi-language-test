const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('./routes');
const favicon = require('serve-favicon');
const cookieConfiguration = require('./cookie');
const sessionConfiguration = require('./session');
// const mongoose = require('mongoose');

// mongoose.connect('insertMongoUrlHere', {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// });

const app = express();

app.use(express.json());
app.use(express.static(path.join('public')));
app.use(cookieParser(sessionConfiguration.secret));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(path.resolve(__dirname, 'utils', 'icon', 'favicon.png')));
app.use(session(sessionConfiguration.cookie = cookieConfiguration));
app.use(routes);

module.exports = app;