<<<<<<< HEAD
//user controller
require('../../models/user.js');

var mongoose = require('mongoose'),
    User = mongoose.model('User');


//function doesUserExist(req, res, callback){
 
 	// find element in users collection 
  
     // if user already exist {
        
    
        //res.redirect("/api/user/add/error");
      //}

      //else{

        //username does not exist, create it
        //callback(req);
        //res.redirect("/user/login/success");
   
//}
//function createUser(req){

//}

=======
mongoose = require('mongoose'),
User = require('../models/user.js');
>>>>>>> FETCH_HEAD
//LL - called on 'user/new' POST
exports.add = function(req, res) {
  doesUserExist(req, res, createUser);
};


// Attempts to authenticate user
exports.login = function(req, res) {
<<<<<<< HEAD
  var success = {
    success: "success"
  };
  res.jsonp(success);
=======
  User.findOne({ email: req.body.username , password:req.body.password},"firstName lastName", function (err, userResult) {
    if (err) return console.error(err);
        console.log(userResult);
        console.log("sdfadsfadsf");
      res.jsonp(userResult);
  });
>>>>>>> FETCH_HEAD
};

exports.update = function(res,req){

};


exports.logout = function(res,req){

};
// - check if user is authenticated, proceed if true. Use this callback for proceeding to authenticated pages
exports.isAuthenticated = function(req, res, next){
  //user is trying to access protected page
  if (!req.session.uid) {
   
    res.redirect("/user/login");
  }
  //authenticated user, proceed
  else {
    next();
  }
}


