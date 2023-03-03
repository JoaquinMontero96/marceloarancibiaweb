import './App.css';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import Proposal from './components/Proposal/Proposal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <Bio />
        <Proposal />
        <PhotoGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
