const request = require('supertest');
const app = require('../../index'); // Make sure to export your Express app

describe('Admin Routes', () => {
  describe('GET /api/admin/generate-discount', () => {
    it('should generate a new discount code', async () => {
      const response = await request(app)
        .get('/api/admin/generate-discount')
        .expect(200);

      expect(response.body).toHaveProperty('discountCode');
      expect(response.body.discountCode).toMatch(/^DISCOUNT-\w+$/);
    });
  });

  describe('GET /api/admin/report', () => {
    it('should fetch the sales report', async () => {
      const response = await request(app)
        .get('/api/admin/report')
        .expect(200);

      expect(response.body).toHaveProperty('totalSales');
      expect(response.body).toHaveProperty('ordersProcessed');
      expect(response.body).toHaveProperty('discountsUsed');
      expect(response.body.totalSales).toBeGreaterThanOrEqual(0);
      expect(response.body.ordersProcessed).toBeGreaterThanOrEqual(0);
      expect(response.body.discountsUsed).toBeGreaterThanOrEqual(0);
    });
  });
});
