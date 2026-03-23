import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between pt-20">
      <div className="max-w-xl z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-[2px] bg-brand"></div>
          <span className="text-sm tracking-widest text-[#FFF]">Hello</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
        >
          I'm <span className="text-white">Aryan Chaudhary</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-lg mb-10 max-w-md"
        >
          A full stack developer based in India.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            Learn more
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex relative w-1/2 justify-center items-center h-full min-h-[500px]"
      >
        <div className="relative w-80 h-80 bg-gray-800/30 rounded-full flex items-center justify-center backdrop-blur-3xl border border-gray-700/50">
            <User size={120} className="text-gray-500" />
            {/* Decorative particles */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-16 h-16 bg-brand/40 rounded-xl rotate-12 backdrop-blur-sm"
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-5 left-0 w-12 h-12 bg-gray-600/40 rounded-lg -rotate-12 backdrop-blur-sm"
            />
        </div>
      </motion.div>
    </section>
  );
}
