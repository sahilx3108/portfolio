import { motion } from 'framer-motion';
import { Code2, Terminal, Server, Database, Github, Container, Globe, Cpu, MonitorSmartphone, Layout } from 'lucide-react';

const skills = [
  { name: 'C++', icon: <Code2 size={36} strokeWidth={1.5} /> },
  { name: 'Java', icon: <Terminal size={36} strokeWidth={1.5} /> },
  { name: 'React.js', icon: <MonitorSmartphone size={36} strokeWidth={1.5} /> },
  { name: 'Node.js', icon: <Server size={36} strokeWidth={1.5} /> },
  { name: 'Laravel', icon: <Globe size={36} strokeWidth={1.5} /> },
  { name: 'MongoDB', icon: <Database size={36} strokeWidth={1.5} /> },
  { name: 'MySQL', icon: <Database size={36} strokeWidth={1.5} /> },
  { name: 'Docker', icon: <Container size={36} strokeWidth={1.5} /> },
  { name: 'Kubernetes', icon: <Cpu size={36} strokeWidth={1.5} /> },
  { name: 'Git / GitHub', icon: <Github size={36} strokeWidth={1.5} /> },
  { name: 'Linux', icon: <Terminal size={36} strokeWidth={1.5} /> },
  { name: 'HTML / CSS', icon: <Layout size={36} strokeWidth={1.5} /> },
];

export default function Skills() {
  return (
    <section className="py-32 flex flex-col items-center text-center w-full" id="skills">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl font-semibold mb-20"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 max-w-4xl mx-auto w-full">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center gap-5 group cursor-default"
          >
            <div className="w-24 h-24 bg-[#111] border border-border-subtle rounded-2xl flex items-center justify-center group-hover:border-brand/60 group-hover:text-brand group-hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300">
               {skill.icon}
            </div>
            <span className="text-sm text-gray-400 font-medium tracking-wide">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
