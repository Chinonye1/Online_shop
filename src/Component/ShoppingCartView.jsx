import React from 'react';
import { ArrowLeft, Minus, Plus, X } from 'lucide-react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => (
  <div className="bg-white p-2 rounded-lg shadow">
    <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2 rounded" />
    <h3 className="font-semibold">{item.name}</h3>
    <div className="flex justify-between items-center mt-2">
      <span>${item.price.toFixed(2)}</span>
      <div className="flex items-center">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1">
          <Minus size={16} />
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
          <Plus size={16} />
        </button>
        <button onClick={() => removeFromCart(item.id)} className="ml-2 p-1 text-red-500">
          <X size={16} />
        </button>
      </div>
    </div>
  </div>
);

const ShoppingCartView = ({ items, removeFromCart, updateQuantity, proceedToCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 20;
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-4">
          <button className="mr-4">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-bold">Cart</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {items.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-green-600">
              <span>To Pay</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={proceedToCheckout}
            className="w-full mt-4 py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-200"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartView;