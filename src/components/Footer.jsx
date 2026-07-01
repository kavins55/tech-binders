import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/assets/logo.png" alt="Tech Binders Logo" className="logo-img" />
              <span className="logo-tech">TECH</span> <span className="logo-binders">BINDERS</span>
            </Link>
            <p className="footer-tagline">We build custom software, web applications, and digital tools for startups and growing businesses.</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/132823937/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/tech_binders/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="mailto:techbinders7@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>About Us</h4>
            <Link to="/about">Our Story</Link>
            <Link to="/about-us">Culture & Team</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          
          <div className="footer-links">
            <h4>What We Do</h4>
            <Link to="/services">Our Services</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/portfolio">Our Projects</Link>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p><i className="fas fa-map-marker-alt"></i> Trichy, Tamil Nadu</p>
            <p><i className="fas fa-envelope"></i> techbinders7@gmail.com</p>
            <p><i className="fab fa-whatsapp"></i> +91 97908 76317</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tech Binders.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
