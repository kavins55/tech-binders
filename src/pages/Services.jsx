import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Our Services | Tech Binders";
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0', background: 'linear-gradient(to bottom, var(--bg-card), var(--bg))'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> What We Do</div>
          <h1 className="hero-title reveal delay-1">Services Built for <br/> <span className="gradient-text">Growth</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            We offer full-cycle software development, from initial concept to launch and beyond. Whatever your technical challenge, we have the team to solve it.
          </p>
        </div>
      </section>

      <section className="services-section" style={{padding: '60px 0 100px 0'}}>
        <div className="container">
          <div className="services-grid" style={{gridTemplateColumns: '1fr', gap: '40px'}}>
            
            {/* 1. Website Development */}
            <div id="website-development" className="service-card glass-card reveal" style={{display: 'flex', gap: '3rem', textAlign: 'left', padding: '60px', alignItems: 'center'}}>
              <div className="service-icon" style={{margin: '0', flexShrink: 0, width: '100px', height: '100px', fontSize: '3rem'}}><i className="fas fa-globe"></i></div>
              <div>
                <h3 style={{fontSize: '2rem', marginBottom: '16px'}}>Website Development</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '24px'}}>
                  Build a powerful online presence with custom, responsive, and high-performance websites tailored to your business goals. From business websites to e-commerce platforms, we create secure, scalable, and SEO-friendly solutions that deliver exceptional user experiences.
                </p>
                <h4 style={{marginBottom: '12px', fontSize: '1.1rem', color: 'white'}}>What's Included:</h4>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  <span className="section-tag">Business Websites</span>
                  <span className="section-tag">Portfolio Websites</span>
                  <span className="section-tag">E-Commerce Stores</span>
                  <span className="section-tag">Landing Pages</span>
                  <span className="section-tag">Custom Web Applications</span>
                  <span className="section-tag">Website Maintenance & Support</span>
                </div>
              </div>
            </div>
            
            {/* 2. Mobile App Development */}
            <div id="mobile-app-development" className="service-card glass-card reveal" style={{display: 'flex', gap: '3rem', textAlign: 'left', padding: '60px', alignItems: 'center'}}>
              <div className="service-icon" style={{margin: '0', flexShrink: 0, width: '100px', height: '100px', fontSize: '3rem'}}><i className="fas fa-mobile-alt"></i></div>
              <div>
                <h3 style={{fontSize: '2rem', marginBottom: '16px'}}>Mobile App Development</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '24px'}}>
                  Transform your ideas into feature-rich mobile applications for Android and iOS. We develop intuitive, scalable, and high-performing apps that help businesses engage customers and streamline operations.
                </p>
                <h4 style={{marginBottom: '12px', fontSize: '1.1rem', color: 'white'}}>What's Included:</h4>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  <span className="section-tag">Android App Development</span>
                  <span className="section-tag">iOS App Development</span>
                  <span className="section-tag">Cross-Platform Apps</span>
                  <span className="section-tag">API Integration</span>
                  <span className="section-tag">Firebase Integration</span>
                  <span className="section-tag">App Maintenance & Updates</span>
                </div>
              </div>
            </div>

            {/* 3. UI/UX Design */}
            <div id="ui-ux-design" className="service-card glass-card reveal" style={{display: 'flex', gap: '3rem', textAlign: 'left', padding: '60px', alignItems: 'center'}}>
              <div className="service-icon" style={{margin: '0', flexShrink: 0, width: '100px', height: '100px', fontSize: '3rem'}}><i className="fas fa-paint-brush"></i></div>
              <div>
                <h3 style={{fontSize: '2rem', marginBottom: '16px'}}>UI/UX Design</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '24px'}}>
                  Create seamless digital experiences with modern, user-centered interface designs. Our UI/UX solutions focus on usability, aesthetics, and functionality to maximize user engagement.
                </p>
                <h4 style={{marginBottom: '12px', fontSize: '1.1rem', color: 'white'}}>What's Included:</h4>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  <span className="section-tag">User Interface Design</span>
                  <span className="section-tag">User Experience Design</span>
                  <span className="section-tag">Wireframes & Prototypes</span>
                  <span className="section-tag">Responsive Design</span>
                  <span className="section-tag">Design Systems</span>
                  <span className="section-tag">Interactive Mockups</span>
                </div>
              </div>
            </div>

            {/* 4. Logo Design */}
            <div id="logo-design" className="service-card glass-card reveal" style={{display: 'flex', gap: '3rem', textAlign: 'left', padding: '60px', alignItems: 'center'}}>
              <div className="service-icon" style={{margin: '0', flexShrink: 0, width: '100px', height: '100px', fontSize: '3rem'}}><i className="fas fa-drafting-compass"></i></div>
              <div>
                <h3 style={{fontSize: '2rem', marginBottom: '16px'}}>Logo Design</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '24px'}}>
                  Build a memorable brand identity with professionally crafted logos that reflect your vision and values. Every design is unique, modern, and created to leave a lasting impression.
                </p>
                <h4 style={{marginBottom: '12px', fontSize: '1.1rem', color: 'white'}}>What's Included:</h4>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  <span className="section-tag">Custom Logo Design</span>
                  <span className="section-tag">Brand Identity</span>
                  <span className="section-tag">Brand Guidelines</span>
                  <span className="section-tag">Business Card Design</span>
                  <span className="section-tag">Social Media Branding</span>
                  <span className="section-tag">Logo Variations</span>
                </div>
              </div>
            </div>

            {/* 5. Poster & Graphic Design */}
            <div id="poster-design" className="service-card glass-card reveal" style={{display: 'flex', gap: '3rem', textAlign: 'left', padding: '60px', alignItems: 'center'}}>
              <div className="service-icon" style={{margin: '0', flexShrink: 0, width: '100px', height: '100px', fontSize: '3rem'}}><i className="fas fa-palette"></i></div>
              <div>
                <h3 style={{fontSize: '2rem', marginBottom: '16px'}}>Poster & Graphic Design</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '24px'}}>
                  Capture attention with visually stunning graphics for marketing, promotions, and branding. We create creative designs that communicate your message effectively across digital and print platforms.
                </p>
                <h4 style={{marginBottom: '12px', fontSize: '1.1rem', color: 'white'}}>What's Included:</h4>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  <span className="section-tag">Social Media Posts</span>
                  <span className="section-tag">Promotional Posters</span>
                  <span className="section-tag">Flyers & Brochures</span>
                  <span className="section-tag">Banners</span>
                  <span className="section-tag">Event Graphics</span>
                  <span className="section-tag">Marketing Materials</span>
                </div>
              </div>
            </div>

            {/* 6. Video Editing */}
            <div id="video-editing" className="service-card glass-card reveal" style={{display: 'flex', gap: '3rem', textAlign: 'left', padding: '60px', alignItems: 'center'}}>
              <div className="service-icon" style={{margin: '0', flexShrink: 0, width: '100px', height: '100px', fontSize: '3rem'}}><i className="fas fa-video"></i></div>
              <div>
                <h3 style={{fontSize: '2rem', marginBottom: '16px'}}>Video Editing</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '24px'}}>
                  Bring your content to life with professional video editing and engaging motion graphics. We create high-quality videos that increase audience engagement and strengthen your brand.
                </p>
                <h4 style={{marginBottom: '12px', fontSize: '1.1rem', color: 'white'}}>What's Included:</h4>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  <span className="section-tag">Promotional Videos</span>
                  <span className="section-tag">Instagram Reels</span>
                  <span className="section-tag">YouTube Videos</span>
                  <span className="section-tag">Product Videos</span>
                  <span className="section-tag">Intro & Outro Animations</span>
                </div>
              </div>
            </div>

            {/* 7. AI & Business Automation */}
            <div id="ai-automation" className="service-card glass-card reveal" style={{display: 'flex', gap: '3rem', textAlign: 'left', padding: '60px', alignItems: 'center'}}>
              <div className="service-icon" style={{margin: '0', flexShrink: 0, width: '100px', height: '100px', fontSize: '3rem'}}><i className="fas fa-robot"></i></div>
              <div>
                <h3 style={{fontSize: '2rem', marginBottom: '16px'}}>AI & Business Automation</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '24px'}}>
                  Increase efficiency and reduce manual work with intelligent automation solutions. We build smart systems that automate business processes and improve productivity.
                </p>
                <h4 style={{marginBottom: '12px', fontSize: '1.1rem', color: 'white'}}>What's Included:</h4>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  <span className="section-tag">AI Chatbots</span>
                  <span className="section-tag">WhatsApp Automation</span>
                  <span className="section-tag">Email Automation</span>
                  <span className="section-tag">Workflow Automation</span>
                  <span className="section-tag">CRM Integration</span>
                  <span className="section-tag">API Automation</span>
                </div>
              </div>
            </div>

            {/* 8. Hosting */}
            <div id="hosting" className="service-card glass-card reveal" style={{display: 'flex', gap: '3rem', textAlign: 'left', padding: '60px', alignItems: 'center'}}>
              <div className="service-icon" style={{margin: '0', flexShrink: 0, width: '100px', height: '100px', fontSize: '3rem'}}><i className="fas fa-server"></i></div>
              <div>
                <h3 style={{fontSize: '2rem', marginBottom: '16px'}}>Hosting</h3>
                <p style={{color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '24px'}}>
                  Launch your website with reliable hosting, domain management, and secure cloud deployment. We ensure your website stays online, fast, and protected 24/7.
                </p>
                <h4 style={{marginBottom: '12px', fontSize: '1.1rem', color: 'white'}}>What's Included:</h4>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  <span className="section-tag">Domain Registration</span>
                  <span className="section-tag">Secure Web Hosting</span>
                  <span className="section-tag">Cloud Deployment</span>
                  <span className="section-tag">Performance Optimization</span>
                  <span className="section-tag">Technical Support</span>
                </div>
              </div>
            </div>

          </div>

          <div style={{textAlign: 'center', marginTop: '80px'}} className="reveal">
            <h3 style={{marginBottom: '24px'}}>Not sure which service you need?</h3>
            <Link to="/contact" className="btn-primary">Let's Talk It Through</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
