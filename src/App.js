import React, { useState } from 'react';
import Header from './Component/Header';
import Categories from './Component/Categories';
import FeaturedCollection from './Component/FeaturedCollection';
import ShippingAddressForm from './Component/ShippingAddressForm';
import ShoppingCartView from './Component/ShoppingCartView';


const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('main');

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const proceedToCheckout = () => {
    setView('shipping');
  };

  return (
    <div className="container mx-auto">
      <Header cartItemCount={cart.length} onCartClick={() => setView('cart')} />
      <main className="p-4">
        {view === 'main' && (
          <>
            <Categories />
            <FeaturedCollection addToCart={addToCart} />
          </>
        )}
        {view === 'cart' && (
          <ShoppingCartView
            items={cart}
            removeFromCart={removeFromCart}
            proceedToCheckout={proceedToCheckout}
          />
        )}
        {view === 'shipping' && <ShippingAddressForm />}
      </main>
    </div>
  );
};

export default App;

