import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: 'Password-less Authentication', 
    desc: 'A secure authentication platform that eliminates password fatigue with OTPs, magic links, and biometric flows. Built with PHP, MySQL, Tailwind CSS, and PHPMailer, featuring robust token lifecycle management and session handling.',
    link: 'https://github.com/sahilx3108/Passwordless_authentication'
  },
  { 
    id: 2, 
    title: 'Bookify', 
    desc: 'A full-stack book management app powered by a RESTful API with MERN Stack. Features encrypted JWT sessions, Cloudinary media management, Zod input validation, and bcryptjs password hashing with secure CORS configuration.',
    link: 'https://github.com/sahilx3108/Bookify'
  },
  { 
    id: 3, 
    title: 'Decision Intelligence', 
    desc: 'An AI-powered decision management platform using MERN Stack & Groq SDK. Features interactive AI chat, strategy generation, data visualization with Recharts, and multi-layered authentication via JWT and Passport.js OAuth.',
    link: 'https://github.com/sahilx3108/Decision_Intelligence'
  },
];

export default function Projects() {
  return (
    <section className="py-32" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-semibold mb-12">Featured Works</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="border border-border-subtle hover:border-brand/60 transition-colors duration-500 p-8 flex flex-col min-h-72 bg-bg-card/40 backdrop-blur-sm relative group cursor-pointer"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{p.desc}</p>
            </div>
            <div className="mt-auto pt-6">
               <a 
                 href={p.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-brand/90 hover:bg-brand text-white px-6 py-2 text-sm font-medium rounded transition-colors shadow-lg shadow-brand/10 w-fit inline-block"
               >
                 View on GitHub
               </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
