const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    address: { type: String },
    email: { type: String },
    phone: { type: String },
    gstin: { type: String }
});

module.exports = mongoose.model('Company', CompanySchema);