import React from 'react';
import { FaPhone } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500/30">
      {/* Light Theme Animated Background using CSS Animations */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center bg-white/50">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-200/50 rounded-full blur-[100px] animate-pulse pointer-events-none mix-blend-multiply" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-200/40 rounded-full blur-[120px] animate-pulse pointer-events-none mix-blend-multiply" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[100px] animate-pulse pointer-events-none mix-blend-multiply" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        {/* Subtle noise for texture, lowered opacity for light theme */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Resume />
        </main>

        <footer className="py-12 border-t border-slate-200 relative bg-white/60 backdrop-blur-xl">
          <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-4">
            <a href="#" className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600">
              Manoj.
            </a>
            <p className="text-sm font-medium text-slate-500 tracking-wide text-center max-w-md">
              Building intelligent, decentralized architectures for the modern web.
            </p>

            <a href="tel:+919309164804" className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 font-bold transition-colors mt-2">
              <FaPhone className="text-sm" />
              <span>+91 9309164804</span>
            </a>

            <p className="text-xs text-slate-400 mt-4 font-mono">
              © {new Date().getFullYear()} Manoj Thamke.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
