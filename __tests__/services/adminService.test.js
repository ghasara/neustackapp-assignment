const { generateDiscountCode, getReport } = require('../../services/adminService');

describe('Admin Service', () => {
  describe('generateDiscountCode', () => {
    it('should generate a valid discount code', async () => {
      const discountCode = await generateDiscountCode();
      expect(discountCode).toMatch(/^DISCOUNT-\w+$/);
    });
  });

  describe('getReport', () => {
    it('should fetch sales report correctly', async () => {
      const report = await getReport();
      expect(report).toHaveProperty('totalSales');
      expect(report).toHaveProperty('ordersProcessed');
      expect(report).toHaveProperty('discountsUsed');
      // Assuming these are positive integers or zero
      expect(report.totalSales).toBeGreaterThanOrEqual(0);
      expect(report.ordersProcessed).toBeGreaterThanOrEqual(0);
      expect(report.discountsUsed).toBeGreaterThanOrEqual(0);
    });
  });
});
