const Invoice = require('../models/Invoice');

// @route   POST api/invoices
// @desc    Create an invoice
// @access  Private
exports.createInvoice = async (req, res) => {
    const {
        invoiceNumber,
        customerName,
        items,
        totalAmount,
        isPaid,
        transportDetails,
        additionalFields,
        otherDetails,
        bankDetails,
        termsAndConditions
    } = req.body;

    try {
        const newInvoice = new Invoice({
            userId: req.user.id,
            invoiceNumber,
            customerName,
            items,
            totalAmount,
            isPaid,
            transportDetails,
            additionalFields,
            otherDetails,
            bankDetails,
            termsAndConditions
        });

        const invoice = await newInvoice.save();
        res.status(201).json(invoice);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @route   GET api/invoices
// @desc    Get all invoices for a user
// @access  Private
exports.getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(invoices);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};