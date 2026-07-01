import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Tech Binders`;
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="page-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh'}}>
        <div style={{textAlign: 'center'}}>
          <h2>Project Not Found</h2>
          <Link to="/portfolio" className="btn-primary" style={{marginTop: '20px'}}>Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="page-header" style={{padding: '120px 0 60px 0'}}>
        <div className="container">
          <Link to="/portfolio" style={{color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block'}}>
            <i className="fas fa-arrow-left"></i> Back to Portfolio
          </Link>
          <div className="badge reveal"><span className="badge-dot"></span> {project.cat}</div>
          <h1 className="hero-title reveal delay-1" style={{fontSize: '3.5rem', marginTop: '20px'}}>{project.title}</h1>
        </div>
      </section>

      <section style={{padding: '20px 0 100px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            {project.images.map((img, idx) => (
              <div key={idx} className={`glass-card reveal ${idx % 3 !== 0 ? `delay-${idx % 3}` : ''}`} style={{padding: '0', overflow: 'hidden', height: 'auto', borderRadius: 'var(--radius-xl)'}}>
                <img 
                  src={`/assets/project/p${project.id}/${img}`} 
                  alt={`${project.title} screenshot ${idx + 1}`} 
                  style={{width: '100%', height: 'auto', display: 'block'}} 
                />
              </div>
            ))}
          </div>
          
          <div style={{textAlign: 'center', marginTop: '80px'}} className="reveal">
            <h3 style={{marginBottom: '24px'}}>Ready to build something similar?</h3>
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
