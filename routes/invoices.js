const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const invoiceController = require('../controllers/invoiceController');

// All invoice routes are protected
router.post('/', auth, invoiceController.createInvoice);
router.get('/', auth, invoiceController.getInvoices);
// ... (other invoice routes)

module.exports = router;