import React from 'react';
import Categories from '../Component/Categories';
import FeaturedCollection from '../Component/FeaturedCollection';
import Header from '../Component/Header';
import ShippingAddressForm from '../Component/ShippingAddressForm';
import ShoppingCartView from '../Component/ShoppingCartView';
import { useCartContext } from './CartContext';

export const Cart = () => {
  const {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    products,
    view,
    setView,
    toggleReaction,
    proceedToCheckout
  } = useCartContext();

  return (
    <div className="container mx-auto">
      <Header cartItemCount={items.length} onCartClick={() => setView('cart')} />
      <main className="p-4">
        {view === 'main' && (
          <>
            <Categories />
            <FeaturedCollection
              products={products}
              addToCart={addToCart}
              toggleReaction={toggleReaction}
            />
          </>
        )}
        {view === 'cart' && (
          <ShoppingCartView
            items={items}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            proceedToCheckout={proceedToCheckout}
          />
        )}
        {view === 'shipping' && <ShippingAddressForm />}
      </main>
    </div>
  );
};