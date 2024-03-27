// cartService.js
// Manages cart operations such as adding items.

/**
 * Adds an item to the cart or updates its quantity if it already exists.
 * @param {Array} cart The current shopping cart array.
 * @param {Object} item The item to add, containing `id` and `quantity`.
 * @returns {Array} The updated cart array.
 */
function addToCart(cart, itemToAdd) {
  const existingItemIndex = cart.findIndex(item => item.id === itemToAdd.id);
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += itemToAdd.quantity;
  } else {
    cart.push(itemToAdd);
  }
  return cart;
}


module.exports = { addToCart };
