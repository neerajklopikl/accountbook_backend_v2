const Company = require('../models/Company');

exports.createCompany = async (req, res) => {
    try {
        const newCompany = new Company({
            userId: req.user.id,
            ...req.body
        });
        const company = await newCompany.save();
        res.json(company);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getCompany = async (req, res) => {
    try {
        const company = await Company.findOne({ userId: req.user.id });
        res.json(company);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};