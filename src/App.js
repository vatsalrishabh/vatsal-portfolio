import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Particle from './Components/Particle';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Work from './Components/Work';

function App() {
  return (
    <div className="body">
      <Navbar/>
      <Particle/>
      <About/>
      <Skills/>
      <Project/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
