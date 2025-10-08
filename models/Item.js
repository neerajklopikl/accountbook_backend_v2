const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    rate: { type: Number, required: true },
    unit: { type: String }
});

module.exports = mongoose.model('Item', ItemSchema);