import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Technology from './components/Technology';
import Clients from './components/Clients';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-black text-white font-body">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <OurWork />
        <Technology />
        <Clients />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
