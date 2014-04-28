//user controller



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

//LL - called on 'user/new' POST
exports.add = function(req, res) {
  doesUserExist(req, res, createUser);
};


// Attempts to authenticate user
exports.login = function(req, res) {
 
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


