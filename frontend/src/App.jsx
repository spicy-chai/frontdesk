import Nav from './components/Nav';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import KnowledgeGraph from './components/KnowledgeGraph';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <PainPoints />
      <Features />
      <KnowledgeGraph />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
