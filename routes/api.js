// Packages
const express = require('express');

// Router
const router = express.Router();

// Controller
const controller = require('../controllers/api');

// Validator
const validator = require('../validators/api');

router.post('/', validator.post_data, controller.post_data);

module.exports = router;
