import Nav from './components/Nav';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
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
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
