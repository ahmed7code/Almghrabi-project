import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Work from './components/Work';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'
import { motion } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({x: -100, y: -100});

useEffect(() => { 
  const handleMouseMove = (event) => {
    setMousePosition({x: event.clientX, y: event.clientY});
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove)
}, []);

  return (
    <div className='bg-zinc-900 text-white min-h-screen relative overflow-x-hidden selection:bg-emerald-700/80 selection:text-white font-ubuntu'>
      <motion.div className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-700/80 pointer-events-none z-50 flex items-center justify-center" animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16}}
      transition={{type: 'spring', stiffness: 300, damping: 28, mass: 0.5}}>

        <div className='w-2 h-2 rounded-full bg-emerald-700/80 shadow-[0_0_10px_2px_rgba(16,185,129,0.5)]' />

      </motion.div>
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App