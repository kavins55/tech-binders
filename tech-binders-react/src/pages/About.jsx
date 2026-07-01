const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> Our Story</div>
          <h1 className="hero-title reveal delay-1">Technology Made Human.</h1>
          <p className="hero-desc reveal delay-2" style={{ maxWidth: '700px', margin: '0 auto' }}>
            We believe that great software shouldn't be complicated. At Tech Binders, we build technology that empowers people and helps businesses thrive.
          </p>
        </div>
      </section>

      {/* Why We Exist / Our Story */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="reveal">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Why We Exist</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.7' }}>
                Tech Binders started with a simple observation: too many businesses struggle to find reliable technology partners. Agencies often overpromise, deliver bloated code, or leave their clients behind once a project launches.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                We wanted to change that. We built a company focused on transparency, high-quality engineering, and actual human connection. We exist to build software that solves real problems without the unnecessary jargon.
              </p>
            </div>
            <div className="glass-card reveal delay-1" style={{ padding: '40px', background: 'var(--bg-card)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Our Mission</h3>
                  <p style={{ color: 'var(--text-muted)' }}>To bridge the gap between complex technology and everyday business growth by creating intuitive, powerful digital tools.</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Our Vision</h3>
                  <p style={{ color: 'var(--text-muted)' }}>To become the most trusted technology partner for growing companies, known for our craftsmanship and integrity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ padding: '80px 0', background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header reveal centered">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle">How we ensure your project is a success from day one.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div className="glass-card reveal" style={{ padding: '32px' }}>
              <div style={{ color: 'var(--red-primary)', fontSize: '2rem', marginBottom: '20px' }}><i className="fas fa-comments"></i></div>
              <h3 style={{ marginBottom: '12px' }}>Listen First</h3>
              <p style={{ color: 'var(--text-muted)' }}>We don't assume we know what you need. We listen to your challenges and learn how your business operates before proposing a solution.</p>
            </div>
            <div className="glass-card reveal delay-1" style={{ padding: '32px' }}>
              <div style={{ color: 'var(--red-primary)', fontSize: '2rem', marginBottom: '20px' }}><i className="fas fa-code-branch"></i></div>
              <h3 style={{ marginBottom: '12px' }}>Build Smart</h3>
              <p style={{ color: 'var(--text-muted)' }}>We choose the right tools for the job, not just the trendiest ones. Our code is clean, scalable, and easy to maintain.</p>
            </div>
            <div className="glass-card reveal delay-2" style={{ padding: '32px' }}>
              <div style={{ color: 'var(--red-primary)', fontSize: '2rem', marginBottom: '20px' }}><i className="fas fa-users"></i></div>
              <h3 style={{ marginBottom: '12px' }}>Grow Together</h3>
              <p style={{ color: 'var(--text-muted)' }}>A launch is just the beginning. We stick around to offer ongoing support, iteration, and scaling as your business expands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-header reveal centered">
            <h2 className="section-title">Our Culture</h2>
            <p className="section-subtitle">The people behind the code.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
            <div className="reveal" style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'rgba(220,38,38,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--red-primary)', fontSize: '2rem' }}>
                <i className="fas fa-laptop-house"></i>
              </div>
              <h3 style={{ marginBottom: '12px' }}>Remote-First</h3>
              <p style={{ color: 'var(--text-muted)' }}>We hire the best talent, regardless of geography. Our diverse team brings unique perspectives to every project.</p>
            </div>
            <div className="reveal delay-1" style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'rgba(220,38,38,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--red-primary)', fontSize: '2rem' }}>
                <i className="fas fa-book-open"></i>
              </div>
              <h3 style={{ marginBottom: '12px' }}>Always Learning</h3>
              <p style={{ color: 'var(--text-muted)' }}>Technology moves fast. We give our team the time and resources to continuously learn and master new skills.</p>
            </div>
            <div className="reveal delay-2" style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'rgba(220,38,38,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--red-primary)', fontSize: '2rem' }}>
                <i className="fas fa-heart"></i>
              </div>
              <h3 style={{ marginBottom: '12px' }}>No Egos</h3>
              <p style={{ color: 'var(--text-muted)' }}>We leave our egos at the door. We collaborate openly, accept feedback, and focus on delivering the best result for our clients.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
