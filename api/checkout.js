// checkout.js
// Handles the checkout process, including applying discounts and finalizing the purchase.

const express = require('express');
const router = express.Router();
const { checkout } = require('../services/orderService');

/**
 * POST /checkout
 * Processes the checkout operation. Expects a cart and optionally a discount code in the request body.
 */
router.post('/', (req, res, next) => {
  try {
    const { cart, discountCode } = req.body;
    const result = checkout(cart, discountCode);
    res.status(200).json(result);
  } catch (error) {
    if (error.message === 'InvalidDiscountCode') {
      return res.status(400).json({ error: 'Invalid discount code' });
    }
    next(error); // Pass errors to the central error handler.
  }
})

module.exports = router;
