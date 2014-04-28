//inventory controller


exports.add = function(res,req){
var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");
};

exports.edit = function(res,req){
	var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");

};

exports.search = function(res,req){
	var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");

};
