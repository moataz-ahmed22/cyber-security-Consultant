import { Router } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CyberCursor } from './components/CyberCursor';
import { useEffect } from 'react';

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
  useEffect(() => {
    // Handle GitHub Pages SPA routing
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      window.history.replaceState({}, '', redirect);
    }
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      <CyberCursor />
      <Router hook={useHashLocation}>
        <Header />
        <HomePage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
