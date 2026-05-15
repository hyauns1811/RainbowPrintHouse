import { products } from "@/data/products";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  if (!product) return { title: "Product Not Found" };
  return { title: `${product.name} | Rainbow Print House`, description: product.description };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '80vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: '100px' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', borderRadius: '1rem', boxShadow: 'var(--shadow)', objectFit: 'cover' }} 
          />
        </div>
        
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <Link href={`/category/${product.category}`} className="product-category" style={{ display: 'inline-block' }}>
              {product.category.replace("-", " ")}
            </Link>
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.name}</h1>
          <div className="product-price" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            ${product.price.toFixed(2)}
          </div>
          
          <div style={{ marginBottom: '3rem' }}>
            <AddToCartButton product={product} />
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <h3>Description</h3>
            <p style={{ marginTop: '1rem', opacity: 0.9 }}>{product.description}</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3>Features</h3>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', opacity: 0.9 }}>
              {product.features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
