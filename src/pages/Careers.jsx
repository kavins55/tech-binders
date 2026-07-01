import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | Tech Binders";
  }, []);

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0', background: 'linear-gradient(to bottom, var(--bg-card), var(--bg))'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> Join the Team</div>
          <h1 className="hero-title reveal delay-1">Build the Future of <br/> <span className="gradient-text">Enterprise Software</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            We are looking for exceptional engineers, architects, and designers who want to solve hard problems and make a global impact.
          </p>
        </div>
      </section>

      <section style={{padding: '60px 0'}}>
        <div className="container">
          <div className="section-header reveal centered">
            <h2 className="section-title">Why Tech Binders?</h2>
            <p className="section-subtitle">An environment engineered for growth and innovation.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '60px'}}>
            
            <div className="glass-card reveal">
              <i className="fas fa-laptop-house" style={{fontSize: '2rem', color: 'var(--red-primary)', marginBottom: '16px'}}></i>
              <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Remote-First Culture</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>Work from anywhere in the world. We care about your output and code quality, not your physical location.</p>
            </div>
            
            <div className="glass-card reveal delay-1">
              <i className="fas fa-heartbeat" style={{fontSize: '2rem', color: 'var(--red-primary)', marginBottom: '16px'}}></i>
              <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Comprehensive Health</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>Top-tier medical, dental, and vision coverage for you and your dependents, plus mental health stipends.</p>
            </div>

            <div className="glass-card reveal delay-2">
              <i className="fas fa-chart-line" style={{fontSize: '2rem', color: 'var(--red-primary)', marginBottom: '16px'}}></i>
              <h3 style={{fontSize: '1.2rem', marginBottom: '12px'}}>Continuous Learning</h3>
              <p style={{color: 'var(--text-muted)', fontSize: '0.95rem'}}>Annual learning stipends for conferences, courses, and certifications to keep your skills sharp.</p>
            </div>

          </div>
        </div>
      </section>

      <section style={{padding: '100px 0', background: 'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-header reveal centered">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">Find your next big opportunity.</p>
          </div>

          <div style={{maxWidth: '800px', margin: '60px auto 0 auto', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            
            {/* Job 1 */}
            <div className="glass-card reveal" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px'}}>
              <div>
                <h3 style={{fontSize: '1.3rem', marginBottom: '8px'}}>Senior Full-Stack Engineer</h3>
                <div style={{display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                  <span><i className="fas fa-map-marker-alt"></i> Remote (US/Canada)</span>
                  <span><i className="fas fa-clock"></i> Full-Time</span>
                </div>
              </div>
              <Link to="/contact" className="btn-secondary" style={{padding: '10px 20px'}}>Apply</Link>
            </div>

            {/* Job 2 */}
            <div className="glass-card reveal delay-1" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px'}}>
              <div>
                <h3 style={{fontSize: '1.3rem', marginBottom: '8px'}}>Cloud Infrastructure Architect</h3>
                <div style={{display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                  <span><i className="fas fa-map-marker-alt"></i> Remote (Global)</span>
                  <span><i className="fas fa-clock"></i> Full-Time</span>
                </div>
              </div>
              <Link to="/contact" className="btn-secondary" style={{padding: '10px 20px'}}>Apply</Link>
            </div>

            {/* Job 3 */}
            <div className="glass-card reveal delay-2" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px'}}>
              <div>
                <h3 style={{fontSize: '1.3rem', marginBottom: '8px'}}>Lead UI/UX Designer</h3>
                <div style={{display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                  <span><i className="fas fa-map-marker-alt"></i> Remote (Europe/Asia)</span>
                  <span><i className="fas fa-clock"></i> Full-Time</span>
                </div>
              </div>
              <Link to="/contact" className="btn-secondary" style={{padding: '10px 20px'}}>Apply</Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
