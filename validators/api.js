const { body, validationResult } = require('express-validator');

exports.post_data = [
    body('url').notEmpty().withMessage('URL should not be empty'),
    body('url').isLength({ max: 100 }).withMessage('URL is too long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
]