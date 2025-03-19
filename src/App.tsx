import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contactpage from './components/Contact';
import Footer from './components/Footer';
import { Contact } from 'lucide-react';
import NotFound from './components/NotFound';
import Background3D from './components/Background3D';
import HomeBg from './components/HomeBg';
import LoadingAnimation from './LoadingAnimation';
import Spinner from './components/Spinner';
import HeroLoader from './components/HeroLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading
  }, []);

  return (
    <Router basename='/sahal'>
      <div className="min-h-screen transition-colors">
        <Background3D />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {loading ? <Spinner /> : <Hero />}
                <About />
                <Skills />
                <Projects />
                <Contactpage />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;