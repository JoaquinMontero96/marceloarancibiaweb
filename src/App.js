import './App.css';
import Bio from './components/Bio/Bio';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <Bio />
      </main>
    </div>
  );
}

export default App;
