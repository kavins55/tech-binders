import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Tech Binders";
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const topic = e.target[2].options[e.target[2].selectedIndex].text;
    const message = e.target[3].value;
    const waText = `Hello Tech Binder,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Topic:* ${topic}%0A*Message:* ${message}`;
    window.open(`https://wa.me/919790876317?text=${waText}`, '_blank');
  };

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0', background: 'linear-gradient(to bottom, var(--bg-card), var(--bg))'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> Contact Us</div>
          <h1 className="hero-title reveal delay-1">Let's Talk About <br/><span className="gradient-text">Your Project</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            Have an idea? Need some technical advice? Or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section style={{padding: '60px 0 100px 0'}}>
        <div className="container">
          
          <div className="responsive-grid-contact">
            
            {/* Contact Info */}
            <div className="reveal">
              <h2 style={{fontSize: '2rem', marginBottom: '32px'}}>Get in Touch</h2>
              
              <div style={{marginBottom: '40px', display: 'flex', gap: '20px'}}>
                <div style={{width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <i className="fas fa-envelope" style={{fontSize: '1.5rem', color: 'var(--red-primary)'}}></i>
                </div>
                <div>
                  <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>Email Us</h3>
                  <p style={{color: 'var(--text-muted)', marginBottom: '8px'}}>For new projects, general inquiries, or just to chat.</p>
                  <a href="mailto:techbinders7@gmail.com" style={{color: 'var(--red-primary)', fontWeight: '600'}}>techbinders7@gmail.com</a>
                </div>
              </div>

              <div style={{marginBottom: '40px', display: 'flex', gap: '20px'}}>
                <div style={{width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <i className="fas fa-headset" style={{fontSize: '1.5rem', color: 'var(--red-primary)'}}></i>
                </div>
                <div>
                  <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>Client Support</h3>
                  <p style={{color: 'var(--text-muted)', marginBottom: '8px'}}>Already working with us? Get help with your ongoing project.</p>
                  <a href="mailto:techbinders7@gmail.com" style={{color: 'var(--red-primary)', fontWeight: '600'}}>techbinders7@gmail.com</a>
                </div>
              </div>

              <div style={{display: 'flex', gap: '20px'}}>
                <div style={{width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <i className="fas fa-map-marker-alt" style={{fontSize: '1.5rem', color: 'var(--red-primary)'}}></i>
                </div>
                <div>
                  <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>Location</h3>
                  <p style={{color: 'var(--text-muted)', marginBottom: '8px'}}>
                    Tech Binder<br/>
                    Trichy, Tamil Nadu<br/>
                    ZIP: 621210
                  </p>
                  <a href="tel:+919790876317" style={{color: 'var(--red-primary)', fontWeight: '600'}}>+91 97908 76317</a>
                </div>
              </div>
            </div>

            {/* General Inquiry Form */}
            <div className="glass-card reveal delay-1" style={{padding: '40px'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '24px'}}>Send a Message</h3>
              <form onSubmit={handleWhatsAppSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem'}}>Full Name</label>
                  <input type="text" placeholder="What should we call you?" style={{padding: '14px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none'}} required />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem'}}>Email Address</label>
                  <input type="email" placeholder="your@email.com" style={{padding: '14px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none'}} required />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem'}}>How can we help?</label>
                  <select style={{padding: '14px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none', appearance: 'none'}}>
                    <option value="new_project">I want to start a new project</option>
                    <option value="existing_project">I need help with an existing project</option>
                    <option value="consulting">I just need some technical advice</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.9rem'}}>Message</label>
                  <textarea rows="5" placeholder="Tell us a little bit about what you're looking for..." style={{padding: '14px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical'}} required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{width: '100%', padding: '14px', marginTop: '10px'}}>Send Message</button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
