import { Heart, ShoppingCart } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, addToCart, toggleReaction }) => {
  const navigate = useNavigate();
  const { id, name, price, rating, liked, image } = product;

  const handleClick = () => {
  navigate(`/product/${id}?name=${name}`);
};
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover mb-2 rounded"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleReaction(id);
          }}
          className={`absolute top-2 right-2 p-1 rounded-full ${
            liked ? "text-red-500" : "text-gray-500"
          }`}
        >
          <Heart size={24} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>
      <h3 className="font-semibold">{name}</h3>
      <div className="flex justify-between items-center mt-2">
        <span>${parseFloat(price).toFixed(2)}</span>
        <div className="flex items-center">
          <span className="mr-2">⭐ {rating}</span>
          <button
            onClick={() => addToCart(product)}
            className="p-1 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={handleClick}
          className="p-1 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;