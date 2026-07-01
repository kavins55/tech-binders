import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Resources = () => {
  useEffect(() => {
    document.title = "Insights & Resources | Tech Binders";
  }, []);

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0', background: 'linear-gradient(to bottom, var(--bg-card), var(--bg))'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> Knowledge Hub</div>
          <h1 className="hero-title reveal delay-1">Insights & <span className="gradient-text">Resources</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            Thoughts on software development, choosing the right tech stack, and building digital products that succeed.
          </p>
        </div>
      </section>

      <section style={{padding: '60px 0 100px 0'}}>
        <div className="container">
          
          <div className="section-header reveal">
            <h2 className="section-title" style={{fontSize: '2rem'}}>Featured Guides</h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '80px'}}>
            <div className="glass-card reveal" style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
              <div style={{width: '100px', height: '140px', background: 'var(--red-primary)', borderRadius: '8px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-red)'}}>
                <i className="fas fa-file-pdf" style={{fontSize: '3rem', color: 'white'}}></i>
              </div>
              <div>
                <span className="section-tag" style={{padding: '4px 10px', fontSize: '0.65rem'}}>Founders</span>
                <h3 style={{fontSize: '1.2rem', margin: '12px 0 8px 0'}}>The Startup Tech Stack Guide</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px'}}>A pragmatic guide to choosing the right technologies for your MVP without over-engineering.</p>
                <Link to="#" style={{color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.9rem'}}>Read Guide <i className="fas fa-arrow-right" style={{marginLeft: '4px'}}></i></Link>
              </div>
            </div>

            <div className="glass-card reveal delay-1" style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
              <div style={{width: '100px', height: '140px', background: '#0f3460', borderRadius: '8px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(15, 52, 96, 0.3)'}}>
                <i className="fas fa-file-pdf" style={{fontSize: '3rem', color: 'white'}}></i>
              </div>
              <div>
                <span className="section-tag" style={{padding: '4px 10px', fontSize: '0.65rem'}}>Automation</span>
                <h3 style={{fontSize: '1.2rem', margin: '12px 0 8px 0'}}>Automating Your Small Business</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px'}}>How to use tools like Zapier, Make, and custom scripts to save 10+ hours a week.</p>
                <Link to="#" style={{color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.9rem'}}>Read Guide <i className="fas fa-arrow-right" style={{marginLeft: '4px'}}></i></Link>
              </div>
            </div>
          </div>

          <div className="section-header reveal">
            <h2 className="section-title" style={{fontSize: '2rem'}}>Latest Articles</h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            
            <div className="glass-card reveal" style={{padding: '0', overflow: 'hidden'}}>
              <div style={{height: '200px', background: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)'}}>
                <i className="fab fa-react" style={{fontSize: '4rem', color: 'var(--text-muted)'}}></i>
              </div>
              <div style={{padding: '30px'}}>
                <span style={{color: 'var(--text-muted)', fontSize: '0.8rem', display: 'block', marginBottom: '8px'}}>October 12, 2026 • 5 min read</span>
                <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Why We Chose React for Your App</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px'}}>An explanation of why React continues to be our go-to choice for building user interfaces.</p>
                <Link to="#" style={{color: 'var(--red-primary)', fontWeight: '600'}}>Read Article <i className="fas fa-arrow-right" style={{marginLeft: '4px'}}></i></Link>
              </div>
            </div>

            <div className="glass-card reveal delay-1" style={{padding: '0', overflow: 'hidden'}}>
              <div style={{height: '200px', background: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)'}}>
                <i className="fas fa-plug" style={{fontSize: '4rem', color: 'var(--text-muted)'}}></i>
              </div>
              <div style={{padding: '30px'}}>
                <span style={{color: 'var(--text-muted)', fontSize: '0.8rem', display: 'block', marginBottom: '8px'}}>September 28, 2026 • 8 min read</span>
                <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Understanding APIs (For Non-Techies)</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px'}}>A simple explanation of how different software applications talk to each other.</p>
                <Link to="#" style={{color: 'var(--red-primary)', fontWeight: '600'}}>Read Article <i className="fas fa-arrow-right" style={{marginLeft: '4px'}}></i></Link>
              </div>
            </div>

            <div className="glass-card reveal delay-2" style={{padding: '0', overflow: 'hidden'}}>
              <div style={{height: '200px', background: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)'}}>
                <i className="fas fa-robot" style={{fontSize: '4rem', color: 'var(--text-muted)'}}></i>
              </div>
              <div style={{padding: '30px'}}>
                <span style={{color: 'var(--text-muted)', fontSize: '0.8rem', display: 'block', marginBottom: '8px'}}>September 15, 2026 • 6 min read</span>
                <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Practical AI for Small Businesses</h3>
                <p style={{color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px'}}>How to cut through the hype and actually use AI to improve your daily workflows.</p>
                <Link to="#" style={{color: 'var(--red-primary)', fontWeight: '600'}}>Read Article <i className="fas fa-arrow-right" style={{marginLeft: '4px'}}></i></Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Resources;
