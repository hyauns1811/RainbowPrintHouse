import "./globals.css";
import Providers from "@/components/Providers";
import CartIcon from "@/components/CartIcon";
import Link from "next/link";

export const metadata = {
  title: "FREINDLY HOHAMON SCALE LIMITED | Premium Home Gym Equipment",
  description: "Elevate your workout with premium home gym equipment. We offer weight benches, rubber dumbbell sets, and plyometric boxes.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="main-header">
            <div className="container header-content">
              <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/logo.png" alt="Rainbow Print House" style={{ height: '48px', width: 'auto' }} />
              </Link>
              <nav className="nav-links">
                <Link href="/shop">Shop All</Link>
                <Link href="/category/weight-benches">Benches</Link>
                <Link href="/category/dumbbells">Dumbbells</Link>
                <Link href="/category/plyometric-boxes">Plyo Boxes</Link>
                <CartIcon />
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="footer">
            <div className="container">
              <div className="footer-grid">
                <div>
                  <Link href="/" style={{ display: 'inline-block' }}>
                    <img src="/logo.png" alt="FREINDLY HOHAMON SCALE LIMITED" style={{ height: '56px', width: 'auto' }} />
                  </Link>
                  <p style={{ color: '#94a3b8', marginTop: '1rem' }}>Premium home gym equipment to build your ultimate workout space. Durable, reliable, and designed for results.</p>
                </div>
                <div>
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link href="/shop">Shop All</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </div>
                <div>
                  <h3>Policies</h3>
                  <ul>
                    <li><Link href="/policies/shipping">Shipping Policy</Link></li>
                    <li><Link href="/policies/return-refund">Return & Refund</Link></li>
                    <li><Link href="/policies/privacy">Privacy Policy</Link></li>
                    <li><Link href="/policies/terms-of-service">Terms of Service</Link></li>
                  </ul>
                </div>
                <div>
                  <h3>Contact</h3>
                  <ul style={{ color: '#94a3b8' }}>
                    <li>Hong Kong Company: FREINDLY HOHAMON SCALE LIMITED</li>
                    <li>Address Hong Kong: SUITE C, LEVEL 7, WORLD TRUST TOWER, 50 STANLEY STREET, CENTRAL, HONG KONG</li>
                    <li>Business Registration No. 7 7 9 5 6 2 1 4</li>
                    <li>Email: support@ghiblistores.com</li>
                    <li>Phone: 0782720037</li>
                    <li>Hours: Monday – Friday 8:30am – 4:45pm EST</li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom">
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <img src="/paypal-icon.png" alt="Secure Payment with PayPal" style={{ height: '32px' }} />
                </div>
                <p>&copy; {new Date().getFullYear()} FREINDLY HOHAMON SCALE LIMITED. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
