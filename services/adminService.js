// adminService.js
// Provides administrative functionalities such as generating discount codes and generating sales reports.

// In-memory dataset
let discountCodes = ['VALID-DISCOUNT'];
let reports = {
  ordersProcessed: 0,
  discountsIssued: 0,
  discountsUsed: 0,
  totalSales: 0,
};

/**
 * Generates a unique discount code.
 * @returns {string} A new discount code.
 */
const generateDiscountCode = () => {
  const newCode = `DISCOUNT-${new Date().getTime()}`;
  discountCodes.push(newCode);
  reports.discountsIssued++;
  return newCode;
};

/**
 * Checks the discount code validity.
 * @returns {boolean} A new discount code.
 */
const isDiscountValid = (code) => {
  const isValid = discountCodes.includes(code);
  if (isValid) {
    reports.discountsUsed++;
  }
  return isValid;
};

/**
 * Retrieves sales and discount reports.
 * @returns {Object} An object containing sales and discount data.
 */
const getReport = () => {
  return reports;
};

/**
 * It will update the reports.
 */
const updateSalesReport = (amount) => {
  reports.ordersProcessed++;
  reports.totalSales += amount;
};

module.exports = { generateDiscountCode, isDiscountValid, getReport, updateSalesReport };
