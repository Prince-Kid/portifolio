
import './App.css';
import Navbar from './components/Nav-bar/navbar';
import Skills from './components/Skills/skills';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Project from './components/projects/project';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <About/>
     <Skills />
     <Project />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
