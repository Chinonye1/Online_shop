import React from 'react';
import productData from '../productData';

const CategoryItem = ({ name, image }) => (
  <div className="flex flex-col items-center">
    <div className="w-48 h-48 bg-gray-300 rounded-full mb-2">
      {" "}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover mb-2 rounded-full"
      />
    </div>
    <span>{name}</span>
  </div>
);

const Categories = () => (
  <section className="my-8">
    <h2 className="text-2xl font-bold mb-4">Category</h2>
    <div className="flex justify-between">
    {productData.tShirts.map((product) => ( 
      <CategoryItem key={product.id} name={product.name} image={product.image} />
    ))}
    </div>
  </section>
);

export default Categories;