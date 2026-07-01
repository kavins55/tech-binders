import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies | Tech Binders";
  }, []);

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> Client Success Stories</div>
          <h1 className="hero-title reveal delay-1">Proven Results <br/> <span className="gradient-text">for Growing Businesses</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            Explore how we've helped startups and small-to-medium businesses build software that saves time, reduces costs, and drives real growth.
          </p>
        </div>
      </section>

      <section style={{padding: '60px 0 100px 0'}}>
        <div className="container">
          
          {/* Case Study 1 */}
          <div className="glass-card reveal" style={{display: 'flex', flexDirection: 'column', gap: '30px', padding: '0', overflow: 'hidden', marginBottom: '60px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'stretch'}}>
              <div style={{background: 'linear-gradient(135deg, #0f3460, #1a1a2e)', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <span className="section-tag" style={{alignSelf: 'flex-start', marginBottom: '20px', borderColor: 'rgba(255,255,255,0.2)', color: 'white'}}>Retail & E-Commerce</span>
                <h3 style={{fontSize: '2rem', color: 'white', marginBottom: '16px'}}>Custom Inventory Automation</h3>
                <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem'}}>Connecting Shopify with physical store inventory to prevent overselling.</p>
              </div>
              <div style={{padding: '50px'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '12px', color: 'var(--red-primary)'}}>The Challenge</h4>
                <p style={{color: 'var(--text-muted)', marginBottom: '24px'}}>A growing boutique retailer was manually updating their online inventory at the end of every day. As sales grew, this led to overselling out-of-stock items and frustrating customers.</p>
                
                <h4 style={{fontSize: '1.2rem', marginBottom: '12px', color: 'var(--red-primary)'}}>The Solution</h4>
                <p style={{color: 'var(--text-muted)', marginBottom: '24px'}}>We built a custom integration using Node.js that listens to their in-store Point of Sale system and instantly updates their Shopify storefront in real-time. We also added a custom dashboard for staff to track discrepancies.</p>
                
                <div style={{display: 'flex', gap: '40px', marginTop: '30px', borderTop: '1px solid var(--border)', paddingTop: '30px'}}>
                  <div>
                    <h5 style={{fontSize: '1.8rem', color: 'var(--text-primary)'}}>15 hrs</h5>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Saved Per Week</p>
                  </div>
                  <div>
                    <h5 style={{fontSize: '1.8rem', color: 'var(--text-primary)'}}>0%</h5>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Overselling Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="glass-card reveal" style={{display: 'flex', flexDirection: 'column', gap: '30px', padding: '0', overflow: 'hidden', marginBottom: '60px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'stretch'}}>
              <div style={{padding: '50px'}}>
                <h4 style={{fontSize: '1.2rem', marginBottom: '12px', color: 'var(--red-primary)'}}>The Challenge</h4>
                <p style={{color: 'var(--text-muted)', marginBottom: '24px'}}>A regional logistics company with 50+ delivery vans was relying on group text messages and whiteboards to dispatch drivers, leading to lost packages and inefficient routes.</p>
                
                <h4 style={{fontSize: '1.2rem', marginBottom: '12px', color: 'var(--red-primary)'}}>The Solution</h4>
                <p style={{color: 'var(--text-muted)', marginBottom: '24px'}}>We developed a simple, easy-to-use mobile app (React Native) for the drivers to scan packages and view their daily routes. Dispatchers use a web dashboard to track van locations in real-time via GPS.</p>
                
                <div style={{display: 'flex', gap: '40px', marginTop: '30px', borderTop: '1px solid var(--border)', paddingTop: '30px'}}>
                  <div>
                    <h5 style={{fontSize: '1.8rem', color: 'var(--text-primary)'}}>20%</h5>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Faster Deliveries</p>
                  </div>
                  <div>
                    <h5 style={{fontSize: '1.8rem', color: 'var(--text-primary)'}}>98%</h5>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Delivery Accuracy</p>
                  </div>
                </div>
              </div>
              <div style={{background: 'linear-gradient(135deg, #1f4037, #99f2c8)', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <span className="section-tag" style={{alignSelf: 'flex-start', marginBottom: '20px', borderColor: 'rgba(0,0,0,0.2)', color: '#000'}}>Logistics</span>
                <h3 style={{fontSize: '2rem', color: '#000', marginBottom: '16px'}}>Delivery Fleet Tracking App</h3>
                <p style={{color: 'rgba(0,0,0,0.7)', fontSize: '1.1rem'}}>Replacing group texts with a dedicated dispatch and routing system.</p>
              </div>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '80px'}} className="reveal">
            <h3 style={{marginBottom: '24px'}}>Ready to write your success story?</h3>
            <Link to="/contact" className="btn-primary">Let's Discuss Your Project</Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
