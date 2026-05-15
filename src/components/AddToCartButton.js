"use client";

import { useCart } from "./Providers";
import { useState } from "react";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button 
      onClick={handleAdd}
      className={added ? "btn-secondary" : "btn-primary"}
      style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}
    >
      {added ? "Added to Cart!" : "Add to Cart"}
    </button>
  );
}
