import './App.css';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import Proposal from './components/Proposal/Proposal';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <main>
        <Bio />
        <Proposal />
        <PhotoGallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
