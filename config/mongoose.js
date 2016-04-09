/**
 * Created by sergioletras on 02/04/16.
 */
var config = require('./config'),
    mongoose = require('mongoose')

module.exports = function () {
    var db = mongoose.connect(config.db);

    require('../app/models/user.server.model');

    return db;
}