const mongoose = require('mongoose');

const QuotationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    quotationNumber: { type: String, required: true },
    customerName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    items: [ { name: String, quantity: Number, rate: Number } ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Draft' } // e.g., 'Draft', 'Sent', 'Accepted'
});

module.exports = mongoose.model('Quotation', QuotationSchema);