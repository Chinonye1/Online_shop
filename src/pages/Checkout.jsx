import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { useCartContext } from "../Component/CartContext";

const Checkout = () => {
  const { items, subtotal, deliveryFee, total } = useCartContext();
  console.log(items, subtotal, deliveryFee, total);
  const navigate = useNavigate();

  const formattedSubtotal = subtotal.toFixed(2);
  const formattedDeliveryFee = deliveryFee.toFixed(2);
  const formattedTotal = total.toFixed(2);

  const handleBuyNow = (item) => {
    // Implement buy now functionality
    console.log("Buy Now clicked for item:", item);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-semibold flex-grow text-center">
          Order Summary
        </h1>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md p-4 mb-4 relative"
        >
          <button className="absolute top-2 right-2  text-gray-400">
            <X size={20} />
          </button>
          <div className="flex">
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-md mr-4"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-sm mb-2">Size: {item.size}</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold">${item.price.toFixed(2)}</p>
                <div className="flex items-center">
                  <button className="border rounded-full w-6 h-6 flex items-center justify-center">
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="border rounded-full w-6 h-6 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleBuyNow(item)}
                  className="mt-2 bg-slate-900 text-white text-xs font-semibold px-2 py-1 rounded h-6 w-20 mb-2"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-white rounded-lg shadow-md p-4 mt-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${formattedSubtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery fee</span>
          <span>${formattedDeliveryFee}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg mb-2">
          <span>Total</span>
          <span>${formattedTotal}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>To Pay</span>
          <span>${formattedTotal}</span>
        </div>
      </div>
    
        <button
          onClick={() => navigate("/shipping")}
          className="w-full  p-3 rounded-lg mt-6 font-semibold button"
        >
          Proceed to Checkout
        </button>
  
    </div>
  );
};

export default Checkout;
