export const metadata = {
  title: "Shipping Policy | FREINDLY HOHAMON SCALE LIMITED",
};

export default function ShippingPolicy() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}>
      <div className="policy-content glass-panel" style={{ padding: '3rem' }}>
        <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Shipping Policy</h1>
        
        <h2>Processing Time</h2>
        <p>All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays.</p>
        
        <h2>Shipping Rates & Delivery Estimates</h2>
        <p>We offer a flat shipping rate of <strong>$9.99</strong> for all orders within the continental United States. The estimated delivery time is <strong>3-7 business days</strong>.</p>
        
        <h2>Shipment Confirmation & Order Tracking</h2>
        <p>You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>
        
        <h2>Customs, Duties and Taxes</h2>
        <p>FREINDLY HOHAMON SCALE LIMITED is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer.</p>
        
        <h2>Damages</h2>
        <p>If you received your order damaged, please contact our support team immediately to file a claim. Please save all packaging materials and damaged goods before filing a claim.</p>
      </div>
    </div>
  );
}
