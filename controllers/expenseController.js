const Expense = require('../models/Expense');

// @route   POST api/expenses
// @desc    Create an expense
// @access  Private
exports.createExpense = async (req, res) => {
    const { category, amount, description } = req.body;

    try {
        const newExpense = new Expense({
            userId: req.user.id,
            category,
            amount,
            description
        });

        const expense = await newExpense.save();
        res.json(expense);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @route   GET api/expenses
// @desc    Get all expenses for a user
// @access  Private
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(expenses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};