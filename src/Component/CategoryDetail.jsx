import React from 'react';
import { ArrowLeft, Star } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import productData from '../productData';

const CategoryDetail = () => {
  const { id: productID } = useParams();
  const navigate = useNavigate();
  
  const buyNow = () => {
    navigate('/shipping');
  }
  // Combine all products into a single array
  const allProducts = [
    ...productData.products,
    ...productData.newCollection,
    ...productData.tShirts
  ];
  // Find the product with the matching ID
  const product = allProducts.find(product => product.id === Number(productID));

  if (!product) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="mb-4">
        <button className="p-2" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
      </div>
      <img src={product.image} alt={product.name} className="w-full h-90 object-cover mb-4 rounded-md"/>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="ml-1">{product.rating}/5</span>
          </div>
        </div>
        <p className="text-gray-600">{product.description}</p>
        <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
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
          <button className="px-4 py-2 border border-gray-300 rounded-md">Add to Cart</button>
          <button className="px-4 py-2 bg-black text-white rounded-md" onClick={buyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;