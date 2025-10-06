const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    purchaseNumber: { type: String, required: true },
    supplierName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    items: [ { name: String, quantity: Number, rate: Number } ],
    totalAmount: { type: Number, required: true },
    isPaid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Purchase', PurchaseSchema);