import { useEffect } from 'react';

const Quote = () => {
  useEffect(() => {
    document.title = "Start a Project | Tech Binders";
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const fname = e.target[0].value;
    const lname = e.target[1].value;
    const email = e.target[2].value;
    const company = e.target[3].value || 'N/A';
    
    const helpSelect = e.target[4];
    const help = helpSelect.options[helpSelect.selectedIndex]?.text || '';
    
    const budgetSelect = e.target[5];
    const budget = budgetSelect.options[budgetSelect.selectedIndex]?.text || 'Not selected';
    
    const timelineSelect = e.target[6];
    const timeline = timelineSelect.options[timelineSelect.selectedIndex]?.text || 'Not selected';
    
    const project = e.target[7].value;
    
    const waText = `*New Project Request*%0A%0A*Name:* ${fname} ${lname}%0A*Email:* ${email}%0A*Company:* ${company}%0A*Needs Help With:* ${help}%0A*Budget:* ${budget}%0A*Timeline:* ${timeline}%0A*Project Details:* ${project}`;
    
    window.open(`https://wa.me/919790876317?text=${waText}`, '_blank');
  };

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0', background: 'linear-gradient(to bottom, var(--bg-card), var(--bg))'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> Get Started</div>
          <h1 className="hero-title reveal delay-1">Start a <span className="gradient-text">Project</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px', margin: '0 auto'}}>
            Ready to build something great? Fill out the short form below, and we'll get back to you within 24 hours to schedule a quick chat.
          </p>
        </div>
      </section>

      <section style={{padding: '60px 0 100px 0'}}>
        <div className="container" style={{maxWidth: '800px'}}>
          <div className="glass-card reveal" style={{padding: '60px'}}>
            <form onSubmit={handleWhatsAppSubmit} style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
              
              <div className="responsive-grid-2">
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)'}}>First Name *</label>
                  <input type="text" placeholder="John" style={{padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none'}} required />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)'}}>Last Name *</label>
                  <input type="text" placeholder="Doe" style={{padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none'}} required />
                </div>
              </div>

              <div className="responsive-grid-2">
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)'}}>Email Address *</label>
                  <input type="email" placeholder="john@company.com" style={{padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none'}} required />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)'}}>Company Name (Optional)</label>
                  <input type="text" placeholder="Your Startup or Business" style={{padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none'}} />
                </div>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <label style={{fontWeight: '600', color: 'var(--text-primary)'}}>What do you need help with? *</label>
                <select defaultValue="" style={{padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none', appearance: 'none'}} required>
                  <option value="" disabled>Select an option</option>
                  <option value="software">Custom Web/Mobile App Development</option>
                  <option value="automation">Business Workflow Automation</option>
                  <option value="ai">Custom AI Integration</option>
                  <option value="ecommerce">E-Commerce Setup</option>
                  <option value="consulting">Technical Advice / Consulting</option>
                </select>
              </div>

              <div className="responsive-grid-2">
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)'}}>Estimated Budget</label>
                  <select defaultValue="" style={{padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none', appearance: 'none'}}>
                    <option value="" disabled>Select budget range</option>
                    <option value="under-5k">Under $5k</option>
                    <option value="5k-15k">$5k - $15k</option>
                    <option value="15k-50k">$15k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label style={{fontWeight: '600', color: 'var(--text-primary)'}}>Target Timeline</label>
                  <select defaultValue="" style={{padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none', appearance: 'none'}}>
                    <option value="" disabled>Select timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-3">1-3 Months</option>
                    <option value="3-6">3-6 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <label style={{fontWeight: '600', color: 'var(--text-primary)'}}>Tell us about your project *</label>
                <textarea rows="6" placeholder="What are you trying to build? What problem does it solve? Don't worry about being too technical..." style={{padding: '16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-alt)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical'}} required></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{width: '100%', padding: '16px', fontSize: '1.1rem', marginTop: '10px'}}>Send Project Details</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
