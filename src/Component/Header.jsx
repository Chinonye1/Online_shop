import React from 'react';
import { Link } from 'react-router-dom'; // Add this line

import { Search, ShoppingCart, User } from 'lucide-react';

const Header = ({ cartItemCount, onCartClick }) => (
  <header className="flex justify-between items-center p-4 bg-gray-100">
    <h1 className="text-xl font-bold">FASIONextra</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="#category">Category</Link></li>
        <li><Link to="#featured-collection">Featured Collection</Link></li>
        <li><Link to="#support">Support</Link></li>
        <li><Link to="#contact-section">Contact</Link></li>
      </ul>
    </nav>
    <div className="flex items-center space-x-4">
      <input type="text" placeholder="Search..." className="p-2 rounded" />
      <User size={24} />
      <Search size={24} />
      <button onClick={onCartClick} className="relative">
        <ShoppingCart size={24} />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItemCount}
          </span>
        )}
      </button>
    </div>
  </header>
);

export default Header;