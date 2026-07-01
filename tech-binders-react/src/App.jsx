import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import CaseStudies from './pages/CaseStudies';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Quote from './pages/Quote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:id" element={<ProjectDetail />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="quote" element={<Quote />} />
      </Route>
    </Routes>
  );
}

export default App;
