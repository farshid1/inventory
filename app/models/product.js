var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
	upc: type: Number,
    name: String,
    currentQty: Number,
    onHoldQty: Number,
    soldQty: Number,
    picture: String,
    sale: [{
    		id: Number,
    		salesPersonId: Number,
    		lastModified: Date,
    		products: [{upc: Number, quantity: Number}],
    		status: Number,
    		customerId: Number
    	}],
    recievedInv: [{date: Date, quantity: Number}]
});

var product = mongoose.model('product', userSchema);

module.exports = product;