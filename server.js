process.env.NODE_ENV = process.env.NODE_ENV || 'development'
//The mongoose config file should be the first to be loaded for other modules to take advantage of it.
var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000');