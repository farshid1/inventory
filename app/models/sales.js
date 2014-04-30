var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var sales = new Schema({
    salesPersonId: Number,
    comments: String,
    customerId: Number,
    totalPrice: Number,
    date: Date,
    state: Number,
    products: [{
        upc: Number,
        name: String,
        quantity: Number,
        price: Number
    }]
});

var sales = mongoose.model('sales', sales);

module.exports = sales;