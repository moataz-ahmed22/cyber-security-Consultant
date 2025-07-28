import { Route, Switch, HashRouter } from 'wouter';
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
      <HashRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="min-h-screen flex items-center justify-center text-white">
              <h1 className="text-4xl">Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
