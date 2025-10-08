const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    billingAddress: { type: String },
    shippingAddress: { type: String }
});

module.exports = mongoose.model('Customer', CustomerSchema);