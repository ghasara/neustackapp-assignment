const { addToCart } = require('../../services/cartService');

describe('Cart Service', () => {
    describe('addToCart', () => {
      it('should add an item to the cart', () => {
        const cart = [{ id: 1, quantity: 2, price: 15.00 }];
        const item = { id: 1, quantity: 2, price: 15.00 };
        const updatedCart = addToCart(cart, item);
        expect(updatedCart).toEqual([
          {
            id: 1,
            quantity: 4,
            price: 15.00
          }
        ]);
      });
    });
  });
