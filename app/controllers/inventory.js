//inventory controller


exports.add = function(req,res){
var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");
  else{
  	
	}
};

exports.edit = function(req,res){
	var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");

};

exports.search = function(req,res){
	var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");

};
