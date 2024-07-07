import React from 'react';

const ShoppingCartView = ({ items, removeFromCart, proceedToCheckout }) => (
  <div className="mt-8 bg-white p-4 rounded-lg shadow">
    <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
    {items.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{item.name} - ${item.price}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <strong>Total: ${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong>
        </div>
        <button
          onClick={proceedToCheckout}
          className="mt-4 w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
        >
          Proceed to Checkout
        </button>
      </>
    )}
  </div>
);

export default ShoppingCartView;