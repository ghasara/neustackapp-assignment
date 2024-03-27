// cart.js
// Handles cart-related routes for adding, and removing items from the shopping cart.

const express = require('express');
const router = express.Router();
const { addToCart } = require('../services/cartService');

/**
 * POST /cart/add
 * Adds an item to the cart. Expects an item ID and quantity in the request body.
 */
router.post('/add', (req, res, next) => {
  try {
    const { itemId, quantity } = req.body;
    const updatedCart = addToCart(itemId, quantity); // Assume addToCart is implemented in cartService.
    res.json(updatedCart);
  } catch (error) {
    next(error); // Pass errors to the central error handler.
  }
});

module.exports = router;
