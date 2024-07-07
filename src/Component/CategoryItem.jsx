import React from 'react';

const CategoryItem = ({ name, onClick }) => (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div className="w-24 h-24 bg-gray-300 rounded-full mb-2"></div>
      <span>{name}</span>
    </div>
  );

export default CategoryItem;