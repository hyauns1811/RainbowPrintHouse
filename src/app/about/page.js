export const metadata = {
  title: "About Us | Rainbow Print House",
  description: "Learn more about Rainbow Print House and our mission to provide the best home gym equipment.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="page-header" style={{
        background: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop') center/cover`
      }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>About Rainbow Print House</h1>
          <p style={{ color: '#cbd5e1' }}>Forging stronger bodies, one home gym at a time.</p>
        </div>
      </div>
      
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Mission</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.8' }}>
            At Rainbow Print House, we believe that world-class fitness shouldn't require a monthly membership or a commute. Our mission is to engineer and provide commercial-grade gym equipment designed specifically for the home environment. We want to empower you to forge a stronger, healthier version of yourself, right in your own space.
          </p>
          
          <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>The Rainbow Print House Standard</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.8' }}>
            We specialize in the essentials of strength training: heavy-duty weight benches, ergonomic rubber-coated dumbbells, and indestructible plyometric boxes. Every product we sell has been rigorously tested to ensure it can withstand the most intense workouts. We don't believe in cutting corners. When you buy from Rainbow Print House, you're making an investment that will last a lifetime.
          </p>
          
          <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Why Choose Us?</h2>
          <ul style={{ fontSize: '1.125rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Premium Quality:</strong> We use high-gauge steel and durable materials.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Fast Shipping:</strong> We process orders quickly and offer affordable $9.99 flat-rate shipping.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Dedicated Support:</strong> Our team is composed of fitness enthusiasts ready to help you build your perfect setup.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
