const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
// We will create this controller file next
const expenseController = require('../controllers/expenseController');

// All expense routes are protected
router.post('/', auth, expenseController.createExpense);
router.get('/', auth, expenseController.getExpenses);

module.exports = router;