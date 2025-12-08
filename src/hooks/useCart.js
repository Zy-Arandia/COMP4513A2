import { useState } from "react";

export function useCart() {
  const [shoppingCartState, setShoppingCartState] = useState([]);

  const addToCart = (product) => {
  const { id, selectedSize, quantity } = product;

  setShoppingCartState(prev => {
    const existing = prev.find(
      item => item.id === id && item.selectedSize === selectedSize
    );

    if (existing) {
      return prev.map(item =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    }

    return [...prev, { ...product, quantity }];
  });
};


  const removeFromCart = (id, size) => {
    setShoppingCartState(prev =>
      prev.filter(item => !(item.id === id && item.selectedSize === size))
    );
  };

  const updateQuantity = (id, size, qty) => {
    setShoppingCartState(prev =>
      prev.map(item =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  return { shoppingCartState, addToCart, removeFromCart, updateQuantity };
}

export default useCart;