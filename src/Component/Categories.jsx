import React from 'react';
import CategoryItem from './CategoryItem';
import SkirtAndBlouse from './SkirtAndBlouse';

const Categories = () => (
  <section className="my-8">
    <h2 className="text-2xl font-bold mb-4">Category</h2>
    <div className="flex justify-between">
      <CategoryItem name="T-shirt" />
      <SkirtAndBlouse />
      <CategoryItem name="Jacket" />
      <CategoryItem name="Dress" />
    </div>
  </section>
);

export default Categories;