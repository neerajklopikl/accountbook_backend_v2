const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
// We will create this controller file next
const purchaseController = require('../controllers/purchaseController');

// All purchase routes are protected
router.post('/', auth, purchaseController.createPurchase);
router.get('/', auth, purchaseController.getPurchases);

module.exports = router;