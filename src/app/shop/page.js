import Link from "next/link";
import { products } from "@/data/products";

export const metadata = {
  title: "Shop All | Rainbow Print House",
  description: "Browse our entire collection of premium home gym equipment.",
};

export default function ShopPage() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Shop All Equipment</h1>
          <p>Everything you need for your home gym.</p>
        </div>
      </div>
      
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="product-grid">
          {products.map(product => (
            <Link href={`/product/${product.slug}`} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <div className="product-category">{product.category.replace("-", " ")}</div>
                <h3 className="product-title">{product.name}</h3>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <span className="btn-secondary" style={{ width: '100%' }}>View Details</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
