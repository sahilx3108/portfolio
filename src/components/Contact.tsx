import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 min-h-[80vh] flex items-center" id="contact">
      <div className="flex flex-col lg:flex-row gap-16 w-full max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-3xl">👋</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-400 mb-12 max-w-md leading-relaxed">
            I'm currently looking for SDE opportunities at product-based companies. Whether you'd like to discuss a project, a role, or just want to connect — feel free to reach out!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-brand" size={20} />
              <span className="text-gray-300">Sahilx3108@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-brand" size={20} />
              <span className="text-gray-300">+91 7668671987</span>
            </div>
            <div className="flex flex-start gap-4">
              <MapPin className="text-brand mt-1" size={20} />
              <span className="text-gray-300">Ambala Cantt, Haryana, India</span>
            </div>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-brand p-8 md:p-12 rounded-lg relative overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.15)]">
            <div className="absolute inset-0 bg-black/10"></div>
            <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Your Phone Number" 
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Type Your Message..." 
                  rows={3}
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>
              <div className="text-right pt-4">
                <button type="submit" className="bg-bg-dark text-white px-8 py-3 rounded text-sm font-medium hover:bg-black transition-colors">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
