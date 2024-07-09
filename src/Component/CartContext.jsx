import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryFee] = useState(20);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('main');
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    surname: '',
    homeAddress: '',
    officeAddress: '',
    pickUpPoint: '',
    countryCode: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const newSubtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal + deliveryFee);
  }, [items, deliveryFee]);

  const addToCart = (product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const toggleReaction = (id) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
  };

  const proceedToCheckout = () => {
    setView('shipping');
    navigate('/checkout');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      subtotal,
      deliveryFee,
      total,
      products,
      setProducts,
      view,
      setView,
      toggleReaction,
      proceedToCheckout,
      form,
      handleChange,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
