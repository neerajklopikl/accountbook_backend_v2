const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    invoiceNumber: { type: String, required: true },
    customerName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    items: [ { name: String, quantity: Number, rate: Number } ],
    totalAmount: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    transportDetails: {
        vehicleNo: String,
        driverName: String
    },
    additionalFields: { type: Map, of: String },
    otherDetails: {
        notes: String
    },
    bankDetails: {
        accountHolderName: String,
        accountNumber: String
    },
    termsAndConditions: String,
});

module.exports = mongoose.model('Invoice', InvoiceSchema);