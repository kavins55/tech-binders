import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Industries = () => {
  useEffect(() => {
    document.title = "Industries We Serve | Tech Binders";
  }, []);

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0', background: 'linear-gradient(to bottom, var(--bg-card), var(--bg))'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> Who We Help</div>
          <h1 className="hero-title reveal delay-1">Software Solutions <br/> <span className="gradient-text">for Every Industry</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            We build custom technology that fits your specific industry needs, whether you're managing patient data, selling products online, or tracking a fleet of vehicles.
          </p>
        </div>
      </section>

      <section style={{padding: '60px 0 100px 0'}}>
        <div className="container">
          <div className="services-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
            
            <div className="glass-card reveal" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <i className="fas fa-heartbeat" style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '24px'}}></i>
              <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>Healthcare & Clinics</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px'}}>
                Secure patient portals, appointment booking systems, and custom telehealth applications built with HIPAA compliance in mind.
              </p>
            </div>

            <div className="glass-card reveal delay-1" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <i className="fas fa-university" style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '24px'}}></i>
              <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>Finance & Accounting</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px'}}>
                Custom dashboards for financial reporting, secure client portals, and automated invoicing systems that save hours of manual data entry.
              </p>
            </div>

            <div className="glass-card reveal delay-2" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <i className="fas fa-shopping-bag" style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '24px'}}></i>
              <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>Retail & E-Commerce</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px'}}>
                Inventory management systems that sync online and in-store stock, custom Shopify apps, and bespoke online storefronts.
              </p>
            </div>
            
            <div className="glass-card reveal" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <i className="fas fa-truck" style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '24px'}}></i>
              <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>Logistics & Delivery</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px'}}>
                Driver tracking applications, automated route planning tools, and custom dashboards to manage your fleet and deliveries efficiently.
              </p>
            </div>

            <div className="glass-card reveal delay-1" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <i className="fas fa-graduation-cap" style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '24px'}}></i>
              <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>Education & Training</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px'}}>
                Custom learning management systems (LMS), online course platforms, and student progress tracking applications.
              </p>
            </div>

            <div className="glass-card reveal delay-2" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <i className="fas fa-industry" style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '24px'}}></i>
              <h3 style={{fontSize: '1.5rem', marginBottom: '16px'}}>Real Estate & Property</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px'}}>
                Property management portals, automated tenant onboarding systems, and custom CRM tools designed specifically for real estate agents.
              </p>
            </div>

          </div>
          
          <div className="glass-card reveal" style={{marginTop: '60px', padding: '60px', textAlign: 'center', background: 'var(--bg-card-2)'}}>
            <h2 style={{marginBottom: '24px'}}>Don't see your industry?</h2>
            <p style={{color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 32px auto', fontSize: '1.1rem'}}>
              Good software principles apply everywhere. We can learn your business quickly and build a solution that fits, no matter your niche.
            </p>
            <Link to="/contact" className="btn-primary">Let's Talk About Your Business</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
