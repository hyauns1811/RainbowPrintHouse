export const metadata = {
  title: "Contact Us | FREINDLY HOHAMON SCALE LIMITED",
  description: "Get in touch with FREINDLY HOHAMON SCALE LIMITED customer support.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help you with your home gym setup.</p>
        </div>
      </div>
      
      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Get In Touch</h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Have questions about our products, an existing order, or need advice on building your home gym? Send us a message and our team will get back to you within 24 hours.
            </p>
            
            <form style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label className="form-label">Name</label>
                <input type="text" className="form-input" required />
              </div>
              
              <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-input" required />
              </div>
              
              <div>
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" required />
              </div>
              
              <div>
                <label className="form-label">Message</label>
                <textarea className="form-input" rows="5" required style={{ resize: 'vertical' }}></textarea>
              </div>
              
              <button type="submit" className="btn-primary" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.125rem' }}>
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="glass-panel" style={{ padding: '3rem', marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Email:</strong><br />
                support@ghiblistores.com
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Phone:</strong><br />
                0782720037
              </div>
              <div>
                <strong>Hours:</strong><br />
                Monday – Friday: 8:30am – 4:45pm EST<br />
                Saturday - Sunday: Closed
              </div>
            </div>
            
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Company Information</h3>
              <p>
                <strong>Hong Kong Company:</strong> FREINDLY HOHAMON SCALE LIMITED<br />
                <strong>Address Hong Kong:</strong> SUITE C, LEVEL 7, WORLD TRUST TOWER, 50 STANLEY STREET, CENTRAL, HONG KONG<br />
                <strong>Business Registration No.</strong> 7 7 9 5 6 2 1 4
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
