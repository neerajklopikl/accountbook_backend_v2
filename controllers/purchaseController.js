const Purchase = require('../models/Purchase');

// @route   POST api/purchases
// @desc    Create a purchase
// @access  Private
exports.createPurchase = async (req, res) => {
    const { purchaseNumber, supplierName, items, totalAmount, isPaid } = req.body;

    try {
        const newPurchase = new Purchase({
            userId: req.user.id,
            purchaseNumber,
            supplierName,
            items,
            totalAmount,
            isPaid
        });

        const purchase = await newPurchase.save();
        res.json(purchase);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @route   GET api/purchases
// @desc    Get all purchases for a user
// @access  Private
exports.getPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(purchases);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};