export const metadata = {
  title: "Contact Us | Rainbow Print House",
  description: "Get in touch with Rainbow Print House customer support.",
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
                support@rainbowprinthouse.com
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Phone:</strong><br />
                +1 4042100623
              </div>
              <div>
                <strong>Hours:</strong><br />
                Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                Saturday - Sunday: Closed
              </div>
            </div>
            
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Headquarters</h3>
              <p>
                Rainbow Print House<br />
                6707 W Waters Avenue<br />
                Tampa, FL 33634<br />
                United States
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
