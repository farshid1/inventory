var inventory = require('./controllers/inventory.js');
var user = require('./controllers/user.js');
var sales = require('./controllers/sales.js');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// User routes :
	app.post('/api/user/login', user.login);
	app.post('/api/user/add', user.add);
	app.get('/api/user/logout', user.isAuthenticated, user.logout);
	app.post('/api/user/update', user.isAuthenticated, user.update);

	//Inventory routes :
	app.post('/api/inventory/add',user.isAuthenticated, inventory.add);
	app.post('/api/inventory/edit', user.isAuthenticated, inventory.edit);
	app.post('/api/inventory/search', user.isAuthenticated, inventory.seach);

	//Sales routes : 
	app.post('/api/sales/addInvoice', user.isAuthenticated, sales.addInvoice);
	app.post('/api/sales/editInvoice', user.isAuthenticated, sales.editInvoice);
	app.post('/api/sales/searchProduct', user.isAuthenticated, sales.seachProduct);
	app.post('/api/sales/InvoiceFinlaized',user.isAuthenticated, sales.InvoiceFinlaized);

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};