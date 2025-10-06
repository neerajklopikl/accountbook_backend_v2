const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
// We will create this controller file next
const quotationController = require('../controllers/quotationController');

// All quotation routes are protected
router.post('/', auth, quotationController.createQuotation);
router.get('/', auth, quotationController.getQuotations);

module.exports = router;