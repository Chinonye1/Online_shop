import React from 'react';
import productData from '../productData';

const CategoryItem = ({ name, image }) => (
  <div className="flex flex-col items-center  ">
    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gray-200 rounded-full mb-2 overflow-hidden">
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
  <section className="my-8 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold mb-4">Category</h2>
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 ">
    {productData.tShirts.map((product) => ( 
      <CategoryItem key={product.id} name={product.name} image={product.image} />
    ))}
    </div>
  </section>
);

export default Categories;