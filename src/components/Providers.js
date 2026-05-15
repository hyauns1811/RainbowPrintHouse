"use client";

import { createContext, useState, useContext, useEffect } from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function Providers({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart");
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, mounted]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = () => setCartItems([]);

  const initialOptions = {
    clientId: "test", // This is the PayPal test client ID
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartTotal, clearCart }}>
        {children}
      </CartContext.Provider>
    </PayPalScriptProvider>
  );
}
