const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createCompany, getCompany } = require('../controllers/companyController');

router.post('/', authMiddleware, createCompany);
router.get('/', authMiddleware, getCompany);

module.exports = router;