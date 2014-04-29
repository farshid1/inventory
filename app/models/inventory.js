var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var inventory = new Schema({
	upc: Number,
    name: String,
    picture: String,
    onHandQu: Number,
    onHoldQu: Number,
    soldQu: Number,
    price: Number,
    addLogs: [{
    	inventoryPersonId: Number,
    	date: Date,
    	quantity: Number
    }]
});

var inventory = mongoose.model('inventory', userSchema);

module.exports = inventory;