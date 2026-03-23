import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white relative font-sans overflow-x-hidden selection:bg-brand/30">
      {/* Background Dot Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(#89898a_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      {/* Decorative Outer Border */}
      <div className="fixed inset-2 md:inset-6 lg:inset-8 border border-border-brand rounded-[2rem] pointer-events-none z-0 shadow-[0_0_60px_rgba(249,115,22,0.03)_inset]"></div>
      
      <Navigation />
      <Sidebar />
      
      <main className="w-full max-w-7xl mx-auto px-6 md:px-32 relative z-10 pb-32 space-y-24">
         <Hero />
         <About />
         <Projects />
         <Skills />
         <Resume />
         <Contact />
      </main>
    </div>
  )
}

export default App;
