const request = require('supertest');
const app = require('../../index'); // Ensure your Express app is exported

describe('Cart Routes', () => {
  describe('POST /api/cart/add', () => {
    it('should add an item to the cart and return the updated cart', async () => {
      const response = await request(app)
        .post('/api/cart/add')
        .send({
            itemId: [{ id: 1, quantity: 2, price: 15.00 }],
            quantity: { id: 1, quantity: 2, price: 15.00 }
        })
        .expect(200);

      expect(response.body).toEqual([{ id: 1, quantity: 4, price: 15.00 }]);
    });
  });
});
