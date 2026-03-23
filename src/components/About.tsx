import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 min-h-screen flex items-center" id="about">
      <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
        {/* Image on left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/5 relative flex justify-center"
        >
          <div className="aspect-[3/4] bg-bg-card rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 w-full max-w-sm">
             <img 
               src="" 
               alt="Aryan" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 bg-brand/10 mix-blend-overlay"></div>
          </div>
          
          {/* Decorative cube */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute top-10 -left-6 md:-left-12 w-12 h-12 bg-brand rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.6)] flex items-center justify-center opacity-80 backdrop-blur"
          />
        </motion.div>

        {/* Text on right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5"
        >
          <h2 className="text-2xl font-semibold mb-6">About me</h2>
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 leading-tight">
            I will <span className="text-brand">Design & Develop</span> the best websites
          </h3>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a passionate software engineer with a keen eye for aesthetics. I blend technical expertise with creative problem-solving to build digital experiences that leave a lasting impression.
            </p>
            <p>
              Whether it's interactive front-end development, seamless animations, or robust back-end architecture, I ensure every pixel serves a purpose and every line of code is optimized for peak performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
