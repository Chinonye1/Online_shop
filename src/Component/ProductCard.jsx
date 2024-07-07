import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ name, price, rating }) => (
  <div className="bg-white p-4 rounded shadow">
    <div className="relative">
      <div className="bg-gray-300 w-full h-48 mb-2"></div>
      <button className="absolute top-2 right-2">
        <Heart size={24} />
      </button>
    </div>
    <h3>{name}</h3>
    <div className="flex justify-between items-center">
      <span>${price}</span>
      <span>⭐ {rating}</span>
    </div>
  </div>
);

export default ProductCard;