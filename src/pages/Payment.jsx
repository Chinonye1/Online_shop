import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Check } from 'lucide-react';
import { useCartContext } from "../Component/CartContext";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('Card Payment');
  const { subtotal, deliveryFee, total, form } = useCartContext();
  const [orderFinalized, setOrderFinalized] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setOrderFinalized(true);
};

  if (orderFinalized) {
    return (
      <div className="max-w-md mx-auto p-4 text-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="button w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-white" size={32} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Thank you for your order</h2>
          <p className="text-gray-600 mb-6">Your order is placed</p>
          <button className="w-ful button text-white py-3 rounded font-semibold mb-2">
            View Order
          </button>
          <button className="w-full bg-white button py-3 rounded font-semibold border button">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center mb-4">
        <ArrowLeft className="mr-2" />
        <h1 className="text-xl font-semibold">Checkout</h1>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Delivery</h2>
          <button className="text-blue-600 text-sm">CHANGE</button>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p className="flex justify-between">
            <span>{form.firstName} {form.surname}</span>
            {form.middleName && <span>{form.middleName}</span>}
          </p>
          <p>{form.homeAddress || 'No home address provided'}</p>
          {form.officeAddress && <p>{form.officeAddress}</p>}
          {form.pickUpPoint && <p>Pick-up point: {form.pickUpPoint}</p>}
          <p>{form.countryCode}</p>
          <p>Phone: {form.phoneNumber}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Payment method</h2>
        <div className="space-y-2">
          {['Card Payment', 'Bank Transfer', 'USSD'].map((method) => (
            <label key={method} className="flex items-center p-2 border rounded">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              {method}
              {method === 'Card Payment' && <CreditCard className="ml-auto" />}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Order Summary</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery fee</span>
            <span>${deliveryFee}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full text-white py-3 rounded font-semibold button"
      >
        Finalize Order
      </button>
    </div>
  );
};

export default PaymentForm;