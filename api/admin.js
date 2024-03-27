// admin.js
/**
 * Admin routes for e-commerce store management, including generating discount codes
 * and viewing sales reports.
 */
const express = require('express');
const router = express.Router();
const { generateDiscountCode, getReport } = require('../services/adminService');

/**
 * GET /admin/generate-discount
 * Generates a new discount code and returns it.
 * This route should be protected and only accessible by authorized admin users.
 */
router.get('/generate-discount', (req, res, next) => {
  try {
    const discountCode = generateDiscountCode();
    res.status(200).json({ discountCode });
  } catch (error) {
    next(error); // Pass errors to the central error handler.
  }
});

/**
 * GET /admin/report
 * Fetches and returns a sales report, including total sales, number of orders,
 * and discounts given.
 * This route should be protected and only accessible by authorized admin users.
 */
router.get('/report', (req, res, next) => {
  try {
    const report = getReport();
    res.status(200).json(report);
  } catch (error) {
    next(error); // Pass errors to the central error handler.
  }
});

module.exports = router;
