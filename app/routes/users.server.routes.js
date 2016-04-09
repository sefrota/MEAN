module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controller.js'),
        passport = require('passport');

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));

    app.route('/signout').get(users.signout);

    app.route('/users').post(users.create).get(users.list);

    app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);
    //This middleware will be executed before the other above to populate the parameter userId
    app.param('userId', users.userById);


}