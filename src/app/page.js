import Link from "next/link";
import { categories } from "@/data/products";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop" 
          alt="Gym background" 
          className="hero-bg"
        />
        <div className="container hero-content">
          <h1 className="hero-title">Build Your Dream Home Gym</h1>
          <p className="hero-subtitle">Premium weight benches, dumbbells, and plyometric boxes engineered for maximum performance and durability.</p>
          <Link href="/shop" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Shop Now
          </Link>
        </div>
      </section>

      <section className="container" style={{ padding: '5rem 1.5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Shop By Category</h2>
        <div className="product-grid">
          {categories.map(category => (
            <Link href={`/category/${category.slug}`} key={category.id} className="product-card">
              <img src={category.image} alt={category.name} className="product-image" />
              <div className="product-info" style={{ textAlign: 'center' }}>
                <h3 className="product-title">{category.name}</h3>
                <span className="btn-secondary" style={{ width: '100%' }}>View Products</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="container" style={{ padding: '2rem 1.5rem 5rem' }}>
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
          <h2>Why Choose Rainbow Print House?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>Premium Quality</h3>
              <p>Commercial-grade steel and materials designed to last a lifetime.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>Fast Shipping</h3>
              <p>Delivery in 3-7 days anywhere in the US. Standard $9.99 shipping rate.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>Secure Checkout</h3>
              <p>100% secure payments via PayPal SDK with Buyer Protection.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
