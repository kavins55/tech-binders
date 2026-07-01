import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Products = () => {
  useEffect(() => {
    document.title = "Our Products | Tech Binders";
  }, []);

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0', background: 'linear-gradient(to bottom, var(--bg-card), var(--bg))'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> Digital Products</div>
          <h1 className="hero-title reveal delay-1">Ready-to-Use <span className="gradient-text">Software Solutions</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            Beyond custom development, we build powerful, scalable software products that help businesses automate tasks, manage operations, and grow faster.
          </p>
        </div>
      </section>

      <section style={{padding: '60px 0 100px 0'}}>
        <div className="container">
          
          <div className="section-header reveal">
            <h2 className="section-title" style={{fontSize: '2rem'}}>Featured Products</h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px'}}>
            
            {/* Product 1 */}
            <div className="glass-card reveal" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
              <div style={{height: '200px', background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <i className="fas fa-chart-pie" style={{fontSize: '5rem', color: 'rgba(255,255,255,0.8)'}}></i>
              </div>
              <div style={{padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                <span className="section-tag" style={{padding: '4px 10px', fontSize: '0.7rem', alignSelf: 'flex-start'}}>SaaS</span>
                <h3 style={{fontSize: '1.4rem', margin: '12px 0 8px 0'}}>Binders CRM</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1}}>
                  A lightweight, lightning-fast Customer Relationship Management tool designed specifically for growing agencies and freelancers. Track leads and close deals seamlessly.
                </p>
                <Link to="/contact" className="btn-secondary" style={{textAlign: 'center', width: '100%'}}>Request Demo</Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="glass-card reveal delay-1" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
              <div style={{height: '200px', background: 'linear-gradient(45deg, #ff416c 0%, #ff4b2b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <i className="fas fa-store" style={{fontSize: '5rem', color: 'rgba(255,255,255,0.8)'}}></i>
              </div>
              <div style={{padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                <span className="section-tag" style={{padding: '4px 10px', fontSize: '0.7rem', alignSelf: 'flex-start'}}>E-Commerce</span>
                <h3 style={{fontSize: '1.4rem', margin: '12px 0 8px 0'}}>TechCart Express</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1}}>
                  A ready-to-deploy e-commerce engine that gives you a fully functional online store in days, not months. Complete with payment gateways and inventory management.
                </p>
                <Link to="/contact" className="btn-secondary" style={{textAlign: 'center', width: '100%'}}>Request Demo</Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="glass-card reveal delay-2" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
              <div style={{height: '200px', background: 'linear-gradient(45deg, #11998e 0%, #38ef7d 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <i className="fas fa-users-cog" style={{fontSize: '5rem', color: 'rgba(255,255,255,0.8)'}}></i>
              </div>
              <div style={{padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                <span className="section-tag" style={{padding: '4px 10px', fontSize: '0.7rem', alignSelf: 'flex-start'}}>HR Tool</span>
                <h3 style={{fontSize: '1.4rem', margin: '12px 0 8px 0'}}>TeamSync Pro</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1}}>
                  Automate employee onboarding, leave tracking, and payroll integrations. TeamSync Pro takes the headache out of HR for small to medium businesses.
                </p>
                <Link to="/contact" className="btn-secondary" style={{textAlign: 'center', width: '100%'}}>Request Demo</Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Products;
