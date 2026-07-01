import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Solutions = () => {
  useEffect(() => {
    document.title = "Business Solutions | Tech Binders";
  }, []);

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> How We Help</div>
          <h1 className="hero-title reveal delay-1">Solutions Designed <br/> <span className="gradient-text">for Real Problems</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            We don't just write code; we solve business problems. Whether you're launching a new product or trying to make your operations more efficient, we have a solution for you.
          </p>
        </div>
      </section>

      <section style={{padding: '60px 0 100px 0'}}>
        <div className="container">
          <div className="services-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px'}}>
            
            <div className="glass-card reveal" style={{padding: '50px', display: 'flex', flexDirection: 'column', height: '100%'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '16px', color: 'var(--white)'}}>Startup MVP Development</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '32px', flexGrow: 1}}>
                Have a great idea but need technical help to build it? We help founders launch Minimum Viable Products quickly, so you can test the market and start getting users without breaking the bank.
              </p>
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '32px'}}>
                <li style={{marginBottom: '12px'}}><i className="fas fa-check" style={{color: 'var(--red-primary)', marginRight: '12px'}}></i> Rapid Prototyping & Design</li>
                <li style={{marginBottom: '12px'}}><i className="fas fa-check" style={{color: 'var(--red-primary)', marginRight: '12px'}}></i> Core Feature Development</li>
                <li style={{marginBottom: '12px'}}><i className="fas fa-check" style={{color: 'var(--red-primary)', marginRight: '12px'}}></i> Scalable Architecture from Day 1</li>
              </ul>
              <Link to="/quote" className="btn-secondary">Discuss Your Startup</Link>
            </div>

            <div className="glass-card reveal delay-1" style={{padding: '50px', display: 'flex', flexDirection: 'column', height: '100%', background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(10, 10, 15, 0.8) 100%)'}}>
              <div className="badge" style={{marginBottom: '16px', alignSelf: 'flex-start'}}><span className="badge-dot"></span> Most Requested</div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '16px', color: 'var(--white)'}}>Business Workflow Automation</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '32px', flexGrow: 1}}>
                Stop wasting time on manual data entry and repetitive tasks. We build custom software that connects your existing tools and automates your day-to-day operations.
              </p>
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '32px'}}>
                <li style={{marginBottom: '12px'}}><i className="fas fa-check" style={{color: 'var(--red-primary)', marginRight: '12px'}}></i> API Integrations (Zapier, Custom)</li>
                <li style={{marginBottom: '12px'}}><i className="fas fa-check" style={{color: 'var(--red-primary)', marginRight: '12px'}}></i> Custom Internal Dashboards</li>
                <li style={{marginBottom: '12px'}}><i className="fas fa-check" style={{color: 'var(--red-primary)', marginRight: '12px'}}></i> Data Syncing & Reporting</li>
              </ul>
              <Link to="/contact" className="btn-primary">Automate Your Business</Link>
            </div>

            <div className="glass-card reveal delay-2" style={{padding: '50px', display: 'flex', flexDirection: 'column', height: '100%'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '16px', color: 'var(--white)'}}>Custom AI Integrations</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '32px', flexGrow: 1}}>
                Make AI work for your specific business needs. We integrate tools like OpenAI into your workflows to help with customer support, content generation, or data analysis.
              </p>
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '32px'}}>
                <li style={{marginBottom: '12px'}}><i className="fas fa-check" style={{color: 'var(--red-primary)', marginRight: '12px'}}></i> Custom Knowledge Base Chatbots</li>
                <li style={{marginBottom: '12px'}}><i className="fas fa-check" style={{color: 'var(--red-primary)', marginRight: '12px'}}></i> Automated Content Generation</li>
                <li style={{marginBottom: '12px'}}><i className="fas fa-check" style={{color: 'var(--red-primary)', marginRight: '12px'}}></i> AI-Powered Data Insights</li>
              </ul>
              <Link to="/contact" className="btn-secondary">Explore AI Solutions</Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
