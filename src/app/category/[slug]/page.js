import Link from "next/link";
import { products, categories } from "@/data/products";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = categories.find(c => c.slug === resolvedParams.slug);
  if (!category) return { title: "Category Not Found" };
  return { title: `${category.name} | Rainbow Print House` };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const category = categories.find(c => c.slug === resolvedParams.slug);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(p => p.category === category.slug);

  return (
    <div>
      <div className="page-header" style={{
        background: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${category.image}) center/cover`
      }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>{category.name}</h1>
          <p style={{ color: '#cbd5e1' }}>Explore our high-quality {category.name.toLowerCase()}</p>
        </div>
      </div>
      
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="product-grid">
          {categoryProducts.map(product => (
            <Link href={`/product/${product.slug}`} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <span className="btn-secondary" style={{ width: '100%' }}>View Details</span>
              </div>
            </Link>
          ))}
        </div>
        
        {categoryProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
