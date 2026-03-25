import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const education = [
  { year: "Aug '23 - Present", degree: "B.Tech Computer Science and Engineering (CGPA: 7.3)", institution: "Lovely Professional University, Phagwara" },
  { year: "Mar '21 - May '22", degree: "Intermediate PCM (75%)", institution: "MD International School, Baghpat" },
  { year: "Mar '19 - May '20", degree: "Matriculation (87%)", institution: "Christu Jyoti Convent School, Baghpat" },
];

const experience = [
  { year: "Jun '25 - Jul '25", role: "Full Stack Development using MERN", company: "Cipher Schools (Edtech Company)" },
];

export default function Resume() {
  return (
    <section className="py-32" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center flex flex-col items-center gap-6"
      >
        <h2 className="text-3xl font-semibold">Resume & Education</h2>
        <a 
          href="/CV.jpg" 
          download="Aryan_Chaudhary_CV.jpg"
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-brand/90 hover:bg-brand text-white px-6 py-2.5 text-sm font-medium rounded transition-colors shadow-lg shadow-brand/20"
        >
          <Download size={18} />
          <span>Download CV</span>
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Experience Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-brand flex items-center gap-3">
             <div className="w-8 h-[1px] bg-brand"></div>
             Experience
          </h3>
          <div className="space-y-12 border-l border-border-subtle ml-3 pl-8 relative">
            {experience.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute w-3 h-3 bg-brand rounded-full -left-[38px] top-1.5 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                <div className="text-sm text-brand font-mono mb-2">{item.year}</div>
                <h4 className="text-xl font-bold mb-1">{item.role}</h4>
                <div className="text-gray-400">{item.company}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-brand flex items-center gap-3">
             <div className="w-8 h-[1px] bg-brand"></div>
             Education
          </h3>
          <div className="space-y-12 border-l border-border-subtle ml-3 pl-8 relative">
            {education.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute w-3 h-3 bg-brand rounded-full -left-[38px] top-1.5 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                <div className="text-sm text-brand font-mono mb-2">{item.year}</div>
                <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                <div className="text-gray-400">{item.institution}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
