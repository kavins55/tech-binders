import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/assets/logo.png" alt="Tech Binders Logo" className="logo-img" />
          <span className="logo-tech">TECH</span> <span className="logo-binders">BINDERS</span>
        </Link>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/">Home</NavLink>
          <div className="nav-dropdown">
            <NavLink to="/services" className="dropdown-toggle">Services <i className="fas fa-chevron-down" style={{fontSize: '0.7rem', marginLeft: '4px'}}></i></NavLink>
            <div className="dropdown-menu">
              <Link to="/services">All Services</Link>
              <Link to="/services#website-development">Website Development</Link>
              <Link to="/services#mobile-app-development">Mobile App Development</Link>
              <Link to="/services#ui-ux-design">UI/UX Design</Link>
              <Link to="/services#logo-design">Logo Design</Link>
              <Link to="/services#poster-design">Poster & Graphic Design</Link>
              <Link to="/services#video-editing">Video Editing</Link>
              <Link to="/services#ai-automation">AI & Business Automation</Link>
              <Link to="/services#hosting">Hosting</Link>
            </div>
          </div>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/portfolio">Projects</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <Link to="/quote" className="btn-primary nav-btn">Get a Quote</Link>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
