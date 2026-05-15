"use client";

import { useCart } from "@/components/Providers";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const router = useRouter();
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  if (orderComplete) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center', minHeight: '60vh' }}>
        <div className="glass-panel" style={{ padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ color: '#10b981', marginBottom: '1rem' }}>Order Successful!</h1>
          <p style={{ marginBottom: '2rem' }}>Thank you for your purchase. Your premium gym equipment is being prepared for shipping.</p>
          <Link href="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h2>Your cart is empty.</h2>
        <Link href="/shop" className="btn-primary" style={{ marginTop: '2rem' }}>Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Checkout</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Shipping Information</h2>
          <form style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label className="form-label">First Name</label>
                <input type="text" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input" required />
              </div>
            </div>
            
            <div>
              <label className="form-label">Address</label>
              <input type="text" className="form-input" required />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <label className="form-label">City</label>
                <input type="text" className="form-input" required />
              </div>
              <div>
                <label className="form-label">State</label>
                <input type="text" className="form-input" required />
              </div>
              <div>
                <label className="form-label">ZIP Code</label>
                <input type="text" className="form-input" required />
              </div>
            </div>
          </form>
        </div>
        
        <div className="cart-summary glass-panel">
          <h2 style={{ marginBottom: '1.5rem' }}>Order Summary</h2>
          <div style={{ marginBottom: '1.5rem', maxHeight: '300px', overflowY: 'auto' }}>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
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
          
          <div style={{ marginTop: '2rem' }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: total.toFixed(2),
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                console.log("Transaction completed by " + details.payer.name.given_name);
                clearCart();
                setOrderComplete(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
