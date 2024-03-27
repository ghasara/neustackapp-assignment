const request = require('supertest');
const app = require('../../index'); // Make sure to export your Express app

describe('Checkout Route', () => {
  describe('POST /api/checkout', () => {
    it('should successfully process a checkout', async () => {
      const response = await request(app)
        .post('/api/checkout')
        .send({
          cart: [{ itemId: 1, quantity: 1, price: 100 }],
          discountCode: 'VALID-DISCOUNT'
        })
        .expect(200);

      expect(response.body).toHaveProperty('total');
      expect(response.body).toHaveProperty('discountApplied', true);
    });

    it('should return an error for invalid discount code', async () => {
      const response = await request(app)
        .post('/api/checkout')
        .send({
          cart: [{ itemId: 1, quantity: 1, price: 100 }],
          discountCode: 'INVALID'
        })
        .expect(400);

      expect(response.body.error).toBe('Invalid discount code');
    });
  });
});
