const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    invoiceNumber: { type: String, required: true },
    customerName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    items: [ { name: String, quantity: Number, rate: Number } ],
    totalAmount: { type: Number, required: true },
    isPaid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);