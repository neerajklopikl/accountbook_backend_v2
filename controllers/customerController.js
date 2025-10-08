const Customer = require('../models/Customer');

exports.createCustomer = async (req, res) => {
    try {
        const newCustomer = new Customer({
            userId: req.user.id,
            ...req.body
        });
        const customer = await newCustomer.save();
        res.json(customer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({ userId: req.user.id });
        res.json(customers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};