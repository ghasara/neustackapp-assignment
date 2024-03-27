// orderService.js
// Handles order processing, including checkout operations and discount code application.

const adminService = require('./adminService');

// In-memory dataset
let orderCount = 0;

/**
 * Processes the checkout operation, applying any valid discount codes.
 * @param {Array} cart The current shopping cart array.
 * @param {string} [discountCode] An optional discount code.
 * @returns {Object} An object containing the order summary.
 */
function checkout(cart, discountCode) {
  let total = calculateTotal(cart);
  let discountApplied = false;

  if (discountCode) {
    const isValid = adminService.isDiscountValid(discountCode);
    if (!isValid) {
      throw new Error('InvalidDiscountCode');
    }
    total *= 0.9; // Apply 10% discount
    discountApplied = true;
  }

  adminService.updateSalesReport(total); // Update report

  orderCount++;
  if (orderCount % 5 === 0) {
    adminService.generateDiscountCode();
  }

  return { total, discountApplied, orderCount };
};

// Calculate Total
const calculateTotal = (cart) => {
  return cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
};

module.exports = { checkout };
