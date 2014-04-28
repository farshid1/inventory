mongoose = require('mongoose'),
user = require('../models/user.js');
//LL - called on 'user/new' POST
exports.add = function(req, res) {
  doesUserExist(req, res, createUser);
};


// Attempts to authenticate user
exports.login = function(req, res) {
  user.findOne({ email: req.body.username , password:req.body.password},"firstName lastName", function (err, userResult) {
    if (err) return console.error(err);
    //if(!Object.keys(userResult).length){
        console.log(userResult);
        console.log("sdfadsfadsf");
      res.jsonp(userResult);
    // }
    // else {
    //   res.jsonp({status: "failerd"});
    // }
  });
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


