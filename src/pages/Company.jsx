import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Company = () => {
  useEffect(() => {
    document.title = "Our Company | Tech Binders";
  }, []);

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0', background: 'linear-gradient(to bottom, var(--bg-card), var(--bg))'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> About Tech Binders</div>
          <h1 className="hero-title reveal delay-1">Building Digital Solutions for <br/> <span className="gradient-text">Modern Businesses</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            At Tech Binders, we help startups, businesses, and entrepreneurs transform their ideas into powerful digital solutions. From websites and mobile apps to branding, AI automation, and cloud hosting, we deliver innovative technology that drives growth and long-term success.
          </p>
        </div>
      </section>

      <section style={{padding: '60px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
            <div className="reveal">
              <h2 style={{fontSize: '2.5rem', marginBottom: '24px'}}>Why Tech Binders?</h2>
              <p style={{color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '24px'}}>
                We believe technology should be simple, scalable, and accessible for every business. Our team combines creativity, innovation, and technical expertise to build high-quality digital products that solve real business challenges.
              </p>
              <p style={{color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8'}}>
                Every project is developed with a strong focus on performance, user experience, security, and future scalability. We don't just build software, we create long-term digital solutions that help businesses grow with confidence.
              </p>
            </div>
            <div className="glass-card reveal delay-1" style={{padding: '40px'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}}>
                <div>
                  <h4 style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '8px'}}>15+</h4>
                  <p style={{color: 'var(--text-primary)'}}>Projects Delivered</p>
                </div>
                <div>
                  <h4 style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '8px'}}>10+</h4>
                  <p style={{color: 'var(--text-primary)'}}>Business Services</p>
                </div>
                <div>
                  <h4 style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '8px'}}>100%</h4>
                  <p style={{color: 'var(--text-primary)'}}>Client Satisfaction</p>
                </div>
                <div>
                  <h4 style={{fontSize: '3rem', color: 'var(--red-primary)', marginBottom: '8px'}}>24/7</h4>
                  <p style={{color: 'var(--text-primary)'}}>Technical Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" style={{padding: '100px 0', background: 'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-header reveal centered">
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">The people dedicated to making your project a success.</p>
          </div>

          {/* Developer Team */}
          <div className="reveal" style={{ marginTop: '60px', marginBottom: '30px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Developer Team</h3>
            <p style={{ color: 'var(--text-muted)' }}>Building scalable software, web applications, automation tools, and innovative technology solutions.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px'}}>
            <div className="glass-card reveal" style={{textAlign: 'center', padding: '40px 20px'}}>
              <img src="/assets/kannan.jpeg" alt="KANNAN K" style={{width: '200px', height: '220px', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center', margin: '0 auto 24px auto', display: 'block', border: '3px solid var(--border)'}} />
              <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>KANNAN K</h3>
              <p style={{color: 'var(--red-primary)', fontSize: '0.9rem', marginBottom: '16px'}}>Project Manager & Client Relations</p>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Leads project planning, client communication, pricing strategy, quality assurance, and successful project delivery.</p>
              <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px'}}>
                <a href="mailto:kevinkskannan@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/kannan-selvam-289427293?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fab fa-linkedin"></i></a>
                <a href="https://kannan-website-2026.netlify.app/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-globe"></i></a>
              </div>
            </div>
            
            <div className="glass-card reveal delay-1" style={{textAlign: 'center', padding: '40px 20px'}}>
              <img src="/assets/kavin.png" alt="KAVIN S" style={{width: '200px', height: '220px', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center', margin: '0 auto 24px auto', display: 'block', border: '3px solid var(--border)'}} />
              <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>KAVIN S</h3>
              <p style={{color: 'var(--red-primary)', fontSize: '0.9rem', marginBottom: '16px'}}>Full Stack Developer</p>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Specializes in website development, mobile applications, deployment, technical support, and creative digital media production.</p>
              <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px'}}>
                <a href="mailto:kavinselvaraj005@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/kavin-s-3b6003301/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fab fa-linkedin"></i></a>
                <a href="https://kavinportfolio-three.vercel.app" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-globe"></i></a>
              </div>
            </div>

            <div className="glass-card reveal delay-2" style={{textAlign: 'center', padding: '40px 20px'}}>
              <img src="/assets/madhan.jpeg" alt="MADHAN R" style={{width: '200px', height: '220px', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center', margin: '0 auto 24px auto', display: 'block', border: '3px solid var(--border)'}} />
              <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>MADHAN R</h3>
              <p style={{color: 'var(--red-primary)', fontSize: '0.9rem', marginBottom: '16px'}}>Full Stack Developer</p>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Develops scalable web and mobile applications while ensuring software quality, testing, deployment, and maintenance.</p>
              <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px'}}>
                <a href="mailto:madhan.r8015@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-envelope"></i></a>
                <a href="https://madhan-r-portfolio-beta.vercel.app" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-globe"></i></a>
              </div>
            </div>
          </div>

          {/* Sales & Marketing Team */}
          <div className="reveal" style={{ marginTop: '80px', marginBottom: '30px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Sales & Marketing Team</h3>
            <p style={{ color: 'var(--text-muted)' }}>Driving business growth, digital marketing strategies, and ensuring exceptional client success.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px'}}>
            <div className="glass-card reveal" style={{textAlign: 'center', padding: '40px 20px'}}>
              <img src="/assets/pavithra.jpeg" alt="PAVITHRA R" style={{width: '200px', height: '220px', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center', margin: '0 auto 24px auto', display: 'block', border: '3px solid var(--border)'}} />
              <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>PAVITHRA R</h3>
              <p style={{color: 'var(--red-primary)', fontSize: '0.9rem', marginBottom: '16px'}}>Sales & Client Success Executive</p>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Builds strong client relationships, manages sales communication, and ensures customer satisfaction.</p>
              <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px'}}>
                <a href="mailto:paviram8695@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/pavithra-r-070842300?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fab fa-linkedin"></i></a>
                <a href="https://pavi-portfolio-2026.netlify.app/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-globe"></i></a>
              </div>
            </div>
            
            <div className="glass-card reveal delay-1" style={{textAlign: 'center', padding: '40px 20px'}}>
              <img src="/assets/yogeshwaran.jpeg" alt="YOGESWARAN R" style={{width: '200px', height: '220px', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center', margin: '0 auto 24px auto', display: 'block', border: '3px solid var(--border)'}} />
              <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>YOGESWARAN R</h3>
              <p style={{color: 'var(--red-primary)', fontSize: '0.9rem', marginBottom: '16px'}}>Digital Marketing Specialist</p>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Handles SEO, Google Ads, Meta Ads, social media marketing, analytics, and digital growth strategies.</p>
              <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px'}}>
                <a href="mailto:ryogeshwaran612@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/r-yogeshwaran-a55091301?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fab fa-linkedin"></i></a>
                <a href="https://yogi-portfolio-five.vercel.app" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-globe"></i></a>
              </div>
            </div>
          </div>

          {/* Design & Branding Team */}
          <div className="reveal" style={{ marginTop: '80px', marginBottom: '30px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Design & Branding Team</h3>
            <p style={{ color: 'var(--text-muted)' }}>Crafting intuitive user experiences, striking brand identities, and visually engaging designs.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px'}}>
            <div className="glass-card reveal" style={{textAlign: 'center', padding: '40px 20px'}}>
              <img src="/assets/muthukumar.jpeg" alt="MUTHUKUMAR S" style={{width: '200px', height: '220px', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center', margin: '0 auto 24px auto', display: 'block', border: '3px solid var(--border)'}} />
              <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>MUTHUKUMAR S</h3>
              <p style={{color: 'var(--red-primary)', fontSize: '0.9rem', marginBottom: '16px'}}>UI/UX & Brand Designer</p>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Creates modern user interfaces, brand identities, logos, marketing creatives, and digital experiences.</p>
              <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px'}}>
                <a href="mailto:muthukumar80123@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/muthukumar-s-4a2857300?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fab fa-linkedin"></i></a>
                <a href="https://my-portfolio-pink-xi-26.vercel.app" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-globe"></i></a>
              </div>
            </div>
            
            <div className="glass-card reveal delay-1" style={{textAlign: 'center', padding: '40px 20px'}}>
              <img src="/assets/mervin.jpeg" alt="MERWIN R" style={{width: '200px', height: '220px', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center', margin: '0 auto 24px auto', display: 'block', border: '3px solid var(--border)'}} />
              <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>MERWIN R</h3>
              <p style={{color: 'var(--red-primary)', fontSize: '0.9rem', marginBottom: '16px'}}>UI/UX & Brand Designer</p>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Designs visually engaging interfaces, branding materials, social media creatives, and professional graphics.</p>
              <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '16px'}}>
                <a href="mailto:rmervin2005nkl@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/mervin-r-121091301?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fab fa-linkedin"></i></a>
                <a href="https://mervin-r.vercel.app/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}><i className="fas fa-globe"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding: '100px 0'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="reveal" style={{marginBottom: '24px'}}>Ready to Work Together?</h2>
          <p className="reveal delay-1" style={{color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px auto', fontSize: '1.1rem'}}>
            Whether you have a fully formed idea or just a concept, we're here to help you build it.
          </p>
          <div className="reveal delay-2">
            <Link to="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
