exports.render = function(req,res){

    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    //It goes to the view folder defined in express.js and matches the index with the view passing the parameters
	res.render('index', {
		title : 'Hello everyone from the world',
        userFullName: req.user ? req.user.fullName : ''
	});
}