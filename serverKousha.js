// modules =================================================
var express = require('express');
var app     = express();
var mongoose= require('mongoose');

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)


app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	var userSchema = mongoose.Schema({
		role: { type: Number, min: 1, max: 3 },
	    firstName: String,
	    lastName: String,
	    phoneNumber: Number,
	    email: String,
	    password: String

	});

	var user = mongoose.model('user', userSchema);

	


app.listen(port);

//Read the db to make sure the admin has been inserted to the db.	
// user.findOne({ role: 1 },"email firstName lastName", function (err, userResult) {
//   if (err) return console.error(err);
//   if(!Object.keys(userResult).length){
//   	console.log("doens't exist");
// 	var admin = new user({ 		
// 			role: 1,
// 		    firstName: "admin",
// 		    lastName: "admin",
// 		    phoneNumber: 0,
// 		    email: "admin@admin.com",
// 		    password: "admin" });
// 		admin.save(function (err, admin) {
// 		  if (err) return console.error(err);
// 		  admin;
// 		});
//   }
//   else{
//   	console.log(userResult)
//   }
// });
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app


});



