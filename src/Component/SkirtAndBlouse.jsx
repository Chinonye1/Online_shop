import React, { useState } from 'react';
import { ArrowLeft, Star } from 'lucide-react';
import CategoryItem from './CategoryItem';

const SkirtAndBlouseDetail = ({ onBack }) => (
  <div className="bg-white p-4 rounded-lg shadow-md max-w-2xl mx-auto">
    <div className="mb-4">
      <button className="p-2" onClick={onBack}>
        <ArrowLeft size={24} />
      </button>
    </div>
    <div className="bg-gray-200 h-64 mb-4 rounded-md"></div>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Skirt & Blouse</h2>
        <div className="flex items-center">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="ml-1">4.7/5</span>
        </div>
      </div>
      <p className="text-gray-600">
        Explore our collection of stylish skirts and blouses! From midi skirts to chic mini skirts and classic to trendy blouses. We
        have got you covered for every occasion. Elevate your style with our elegant and statement-making pieces.
      </p>
      <div>
        <h3 className="font-semibold mb-2">Select size</h3>
        <div className="flex space-x-2">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <button key={size} className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button className="px-4 py-2 border border-gray-300 rounded-md">Remove</button>
        <button className="px-4 py-2 bg-black text-white rounded-md">Buy Now</button>
      </div>
    </div>
  </div>
);

const SkirtAndBlouse = () => {
  const [showDetail, setShowDetail] = useState(false);

  return showDetail ? (
    <SkirtAndBlouseDetail onBack={() => setShowDetail(false)} />
  ) : (
    <CategoryItem name="Skirt & Blouse" onClick={() => setShowDetail(true)} />
  );
};

export default SkirtAndBlouse;