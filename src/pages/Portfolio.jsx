import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projectsData } from '../data/projectsData';

const Portfolio = () => {
  useEffect(() => {
    document.title = "Our Portfolio | Tech Binders";
  }, []);

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0'}}>
        <div className="container">
          <div className="badge reveal"><span className="badge-dot"></span> Our Work</div>
          <h1 className="hero-title reveal delay-1">Selected <br/> <span className="gradient-text">Projects</span></h1>
          <p className="hero-desc reveal delay-2" style={{maxWidth: '800px'}}>
            Take a look at some of the digital products, websites, and applications we've built for our clients.
          </p>
        </div>
      </section>

      <section className="portfolio-section" style={{padding: '60px 0 100px 0'}}>
        <div className="container">
          <div className="projects-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
            {projectsData.map((project, index) => (
              <Link to={`/portfolio/${project.id}`} key={project.id} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={`project-card glass-card reveal ${index % 3 !== 0 ? `delay-${index % 3}` : ''}`}>
                  <div className="project-image" style={{padding: '0', height: '240px', overflow: 'hidden'}}>
                    <img src={`/assets/project/p${project.id}/${project.images[0]}`} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <div className="project-info" style={{padding: '24px'}}>
                    <h3 style={{marginBottom: '8px', fontSize: '1.2rem'}}>{project.title}</h3>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px'}}>A premium digital solution built by Tech Binders to streamline operations and enhance user engagement.</p>
                    <span className="section-tag">{project.cat}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{textAlign: 'center', marginTop: '80px'}} className="reveal">
            <h3 style={{marginBottom: '24px'}}>Have a project in mind?</h3>
            <Link to="/contact" className="btn-primary">Let's Discuss It</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
