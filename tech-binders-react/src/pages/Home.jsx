import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Hero3D from '../components/Hero3D';

const Home = () => {
  useEffect(() => {
    document.title = "Tech Binders | Enterprise Software & Digital Transformation";
  }, []);

  return (
    <>
      {/* 3D Premium Hero Section */}
      <Hero3D />

      {/* Trust Banner / Marquee */}
      <div className="trust-banner">
        <div className="marquee-container">
          <div className="marquee-content premium-track">
            {/* Set 1 */}
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> Custom Software Development</span></div>
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> Cloud Infrastructure</span></div>
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> Business Automation</span></div>
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> AI Integration</span></div>
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> Web & Mobile Apps</span></div>
            {/* Set 2 (Duplicate for seamless loop) */}
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> Custom Software Development</span></div>
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> Cloud Infrastructure</span></div>
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> Business Automation</span></div>
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> AI Integration</span></div>
            <div className="trust-item"><i className="fas fa-check-circle" style={{color: 'var(--red-primary)'}}></i><span> Web & Mobile Apps</span></div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="about-section" style={{padding: '100px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
            <div className="reveal">
              <div className="badge"><span className="badge-dot"></span> Our Purpose</div>
              <h2 className="section-title" style={{textAlign: 'left', marginBottom: '24px'}}>Our Vision</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '32px', lineHeight: 1.8}}>
                To become the trusted technology partner that transforms ambitious ideas into powerful digital experiences, enabling businesses worldwide to innovate, scale, and lead with confidence.
              </p>
              <Link to="/about-us" className="btn-secondary">Get to Know Us</Link>
            </div>
            <div className="glass-card reveal delay-1" style={{padding: '40px', background: 'var(--bg-card-2)'}}>
              <h3 style={{marginBottom: '24px', fontSize: '1.8rem'}}>Our Mission</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--red-primary)', marginTop: '4px', fontSize: '1.1rem'}}></i>
                  <p style={{color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, lineHeight: 1.5}}>Deliver high-quality software engineered for performance and scalability.</p>
                </li>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--red-primary)', marginTop: '4px', fontSize: '1.1rem'}}></i>
                  <p style={{color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, lineHeight: 1.5}}>Simplify complex business processes through intelligent technology.</p>
                </li>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--red-primary)', marginTop: '4px', fontSize: '1.1rem'}}></i>
                  <p style={{color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, lineHeight: 1.5}}>Build long-term partnerships based on trust, transparency, and results.</p>
                </li>
                <li style={{marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--red-primary)', marginTop: '4px', fontSize: '1.1rem'}}></i>
                  <p style={{color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, lineHeight: 1.5}}>Continuously innovate to help clients stay ahead in a digital-first world.</p>
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--red-primary)', marginTop: '4px', fontSize: '1.1rem'}}></i>
                  <p style={{color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, lineHeight: 1.5}}>Create meaningful digital products that drive measurable business growth.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-section" style={{padding: '100px 0', background: 'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-header reveal centered">
            <div className="badge"><span className="badge-dot"></span> What We Do</div>
            <h2 className="section-title">Core Services</h2>
            <p className="section-subtitle">Everything you need to build, launch, and scale your digital products.</p>
          </div>
          <div className="services-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'}}>
            {/* 1. Website Development */}
            <div className="service-card glass-card reveal">
              <div className="service-icon"><i className="fas fa-globe"></i></div>
              <h3>Website Development</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px'}}>Build a powerful online presence with custom, responsive, and high-performance websites tailored to your business goals. From business websites to e-commerce platforms, we create secure, scalable, and SEO-friendly solutions that deliver exceptional user experiences.</p>
            </div>

            {/* 2. Mobile App Development */}
            <div className="service-card glass-card reveal delay-1">
              <div className="service-icon"><i className="fas fa-mobile-alt"></i></div>
              <h3>Mobile App Development</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px'}}>Transform your ideas into feature-rich mobile applications for Android and iOS. We develop intuitive, scalable, and high-performing apps that help businesses engage customers and streamline operations.</p>
            </div>

            {/* 3. UI/UX Design */}
            <div className="service-card glass-card reveal delay-2">
              <div className="service-icon"><i className="fas fa-paint-brush"></i></div>
              <h3>UI/UX Design</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px'}}>Create seamless digital experiences with modern, user-centered interface designs. Our UI/UX solutions focus on usability, aesthetics, and functionality to maximize user engagement.</p>
            </div>

            {/* 4. Logo Design */}
            <div className="service-card glass-card reveal">
              <div className="service-icon"><i className="fas fa-drafting-compass"></i></div>
              <h3>Logo Design</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px'}}>Build a memorable brand identity with professionally crafted logos that reflect your vision and values. Every design is unique, modern, and created to leave a lasting impression.</p>
            </div>

            {/* 5. Poster & Graphic Design */}
            <div className="service-card glass-card reveal delay-1">
              <div className="service-icon"><i className="fas fa-palette"></i></div>
              <h3>Poster & Graphic Design</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px'}}>Capture attention with visually stunning graphics for marketing, promotions, and branding. We create creative designs that communicate your message effectively across digital and print platforms.</p>
            </div>

            {/* 6. Video Editing */}
            <div className="service-card glass-card reveal delay-2">
              <div className="service-icon"><i className="fas fa-video"></i></div>
              <h3>Video Editing</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px'}}>Bring your content to life with professional video editing and engaging motion graphics. We create high-quality videos that increase audience engagement and strengthen your brand.</p>
            </div>

            {/* 7. AI & Business Automation */}
            <div className="service-card glass-card reveal">
              <div className="service-icon"><i className="fas fa-robot"></i></div>
              <h3>AI & Business Automation</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px'}}>Increase efficiency and reduce manual work with intelligent automation solutions. We build smart systems that automate business processes and improve productivity.</p>
            </div>

            {/* 8. Hosting */}
            <div className="service-card glass-card reveal delay-1">
              <div className="service-icon"><i className="fas fa-server"></i></div>
              <h3>Hosting</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px'}}>Launch your website with reliable hosting, domain management, and secure cloud deployment. We ensure your website stays online, fast, and protected 24/7.</p>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '48px'}} className="reveal">
            <Link to="/services" className="btn-primary">View All Services <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{padding: '100px 0'}}>
        <div className="container">
          <div className="section-header reveal centered">
            <div className="badge"><span className="badge-dot"></span> Why Choose Us</div>
            <h2 className="section-title">Why Businesses Choose Tech Binders</h2>
            <p className="section-subtitle" style={{maxWidth: '800px', margin: '16px auto 0'}}>We deliver innovative digital solutions with a focus on quality, speed, and reliability. From startups to growing businesses, our team transforms ideas into powerful digital experiences.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '48px', alignItems: 'stretch'}}>
            
            <div className="glass-card reveal" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <div style={{width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(220,38,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(220,38,38,0.2)'}}>
                <i className="fas fa-rocket" style={{fontSize: '1.8rem', color: 'var(--red-primary)'}}></i>
              </div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Fast Delivery</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, margin: 0}}>Deliver projects on time without compromising quality.</p>
            </div>

            <div className="glass-card reveal delay-1" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <div style={{width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(220,38,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(220,38,38,0.2)'}}>
                <i className="fas fa-gem" style={{fontSize: '1.8rem', color: 'var(--red-primary)'}}></i>
              </div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Premium Quality</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, margin: 0}}>Clean, scalable, and industry-standard solutions.</p>
            </div>

            <div className="glass-card reveal delay-2" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <div style={{width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(220,38,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(220,38,38,0.2)'}}>
                <i className="fas fa-comments" style={{fontSize: '1.8rem', color: 'var(--red-primary)'}}></i>
              </div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>24/7 Support</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, margin: 0}}>Reliable support before and after project delivery.</p>
            </div>

            <div className="glass-card reveal" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <div style={{width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(220,38,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(220,38,38,0.2)'}}>
                <i className="fas fa-wallet" style={{fontSize: '1.8rem', color: 'var(--red-primary)'}}></i>
              </div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Affordable Pricing</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, margin: 0}}>Transparent pricing with maximum value.</p>
            </div>

            <div className="glass-card reveal delay-1" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <div style={{width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(220,38,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(220,38,38,0.2)'}}>
                <i className="fas fa-shield-alt" style={{fontSize: '1.8rem', color: 'var(--red-primary)'}}></i>
              </div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Secure Solutions</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, margin: 0}}>Built with security, performance, and reliability in mind.</p>
            </div>

            <div className="glass-card reveal delay-2" style={{padding: '40px', display: 'flex', flexDirection: 'column'}}>
              <div style={{width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(220,38,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(220,38,38,0.2)'}}>
                <i className="fas fa-chart-line" style={{fontSize: '1.8rem', color: 'var(--red-primary)'}}></i>
              </div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '12px'}}>Growth Focused</h3>
              <p style={{color: 'var(--text-muted)', lineHeight: 1.6, margin: 0}}>Solutions designed to help businesses scale and succeed.</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="process-section" style={{background: 'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-header reveal centered">
            <div className="badge"><span className="badge-dot"></span> How We Work</div>
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">A simple, transparent approach to bringing your ideas to life.</p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step reveal">
              <div className="step-number">01</div>
              <div className="step-content glass-card">
                <h3>Discovery & Planning</h3>
                <p>We start by listening. We learn about your business goals, your audience, and the problem you want to solve before writing a single line of code.</p>
              </div>
            </div>
            <div className="process-step reveal delay-1">
              <div className="step-number">02</div>
              <div className="step-content glass-card">
                <h3>Design & Development</h3>
                <p>Our team designs an intuitive user experience, then builds the software using modern frameworks. We keep you updated with regular progress check-ins.</p>
              </div>
            </div>
            <div className="process-step reveal delay-2">
              <div className="step-number">03</div>
              <div className="step-content glass-card">
                <h3>Testing & Refinement</h3>
                <p>We rigorously test the product across different devices and scenarios to ensure everything works smoothly, securely, and without bugs.</p>
              </div>
            </div>
            <div className="process-step reveal delay-3">
              <div className="step-number">04</div>
              <div className="step-content glass-card">
                <h3>Launch & Support</h3>
                <p>Once approved, we deploy your project to the live environment. But we don't stop there. We provide ongoing support and maintenance as you grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box glass-card reveal">
            <div className="cta-content">
              <h2>Ready to Build Something Great?</h2>
              <p>Let's talk about your business goals and how we can help you achieve them.</p>
            </div>
            <div className="cta-actions">
              <Link to="/quote" className="btn-primary">Start a Project</Link>
              <Link to="/contact" className="btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
