import React from 'react';
import ProductCard from './ProductCard';
import productData from '../productData';


const FeaturedCollection = ({ addToCart, toggleReaction }) => (
  <section className="my-8">
    <h2 className="text-2xl font-bold mb-4">Featured Collection</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {productData.products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          toggleReaction={toggleReaction}
        /> 
      ))}
    </div>
    <h2 className="text-2xl font-bold mb-4">Newest Collection</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {productData.newCollection.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          toggleReaction={toggleReaction}
        />
      ))}
    </div>
  </section>
);

export default FeaturedCollection;
