const Quotation = require('../models/Quotation');

// @route   POST api/quotations
// @desc    Create a quotation
// @access  Private
exports.createQuotation = async (req, res) => {
    const { quotationNumber, customerName, items, totalAmount, status } = req.body;

    try {
        const newQuotation = new Quotation({
            userId: req.user.id,
            quotationNumber,
            customerName,
            items,
            totalAmount,
            status
        });

        const quotation = await newQuotation.save();
        res.json(quotation);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @route   GET api/quotations
// @desc    Get all quotations for a user
// @access  Private
exports.getQuotations = async (req, res) => {
    try {
        const quotations = await Quotation.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(quotations);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};