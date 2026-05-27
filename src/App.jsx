import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Study from './components/Study';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Study />
      </main>
      <Footer />
    </>
  );
}

export default App;
