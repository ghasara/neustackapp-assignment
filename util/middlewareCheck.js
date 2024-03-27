const { check, validationResult } = require('express-validator');

// Validation middleware for adding an item to the cart
const validateCartItem = [
    check('item').isString().withMessage('Item must be a valid string'),
    check('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
];

module.exports = { validateCartItem }