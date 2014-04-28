//sales controller


var mongoose = require('mongoose'),
    Customer = require('../models/customer.js');

exports.addInvoice = function(res,req){
	var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");

};

exports.editInvoice = function(res,req){
	var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");

};

exports.seachProduct = function(res,req){
	var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");

};

exports.InvoiceFinlaized = function(res,req){
	var uid = req.session.uid;

  if (uid === undefined)
    return res.redirect("/login");

};