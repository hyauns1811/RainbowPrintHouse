"use client";

import { useCart } from "@/components/Providers";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '80vh' }}>
      <h1 style={{ marginBottom: '2rem' }}>Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2>Your cart is empty</h2>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>Looks like you haven't added any gear to your cart yet.</p>
          <Link href="/shop" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem', alignItems: 'start' }}>
          <div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.name}</h3>
                    <div className="cart-item-price">${item.price.toFixed(2)}</div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '0.25rem' }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{ padding: '0.25rem 0.75rem', background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer' }}
                        >-</button>
                        <span style={{ padding: '0 0.5rem' }}>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{ padding: '0.25rem 0.75rem', background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer' }}
                        >+</button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{ background: 'transparent', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="cart-summary glass-panel">
            <h2 style={{ marginBottom: '1.5rem' }}>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <Link href="/checkout" className="btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '1rem', fontSize: '1.125rem' }}>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
