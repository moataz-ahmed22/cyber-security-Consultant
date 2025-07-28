import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CyberCursor } from './components/CyberCursor';

// Main page component that contains all sections
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <CyberCursor />
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
