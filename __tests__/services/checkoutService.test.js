const { checkout } = require('../../services/orderService');

describe('Checkout Service', () => {
  it('should process checkout correctly without discount', async () => {
    const cartItems = [{ itemId: 1, quantity: 2, price: 15.00 }];
    const result = await checkout(cartItems, '');
    expect(result.total).toBe(30);
    expect(result.discountApplied).toBe(false);
  });
});
