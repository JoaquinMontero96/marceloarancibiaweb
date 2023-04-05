import './App.css';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import Proposal from './components/Proposal/Proposal';
import Loader from './components/Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000)
    return () => clearTimeout(timer);
  }, [])
  
  return (
    <div className="App">
      {isLoading ? <Loader /> : <>
      <Menu />
      <Hero />
      <main>
        <Bio />
        <Proposal />
        <PhotoGallery />
        <Contact />
      </main>
      <Footer />
      </>}
    </div>
  );
}

export default App;
