import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Bell } from 'lucide-react';

const Header = ({ cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Category', path: '/' },
    { name: 'Featured Collection', path: '/' },
    { name: 'Support', path: '/' },
    { name: 'Contact', path: '/' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold">FASIONextra</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.path} className="text-gray-700 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Icons (visible on both desktop and mobile) */}
          <div className="flex items-center space-x-4">
            <button aria-label="Notifications" className="focus:outline-none">
              <Bell className="h-6 w-6 text-gray-700" />
            </button>
            <button onClick={onCartClick} className="relative focus:outline-none" aria-label="Shopping cart">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button aria-label="User profile" className="focus:outline-none">
                <User className="h-6 w-6 text-gray-700" />
              </button>
              <button aria-label="Search" className="ml-auto focus:outline-none">
                <Search className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;