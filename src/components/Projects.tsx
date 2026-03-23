import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Solana Wallet Adapter', desc: 'A wallet adapter that lets you connect to cypto wallets' },
  { id: 2, title: 'Curio Library', desc: 'A personalised web based Library that lets you manage your personal e-books' },
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
            className="border border-border-subtle hover:border-brand/60 transition-colors duration-500 p-8 flex flex-col justify-between h-72 bg-bg-card/40 backdrop-blur-sm relative group cursor-pointer"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
            <div className="mt-8">
               <button className="bg-brand/90 hover:bg-brand text-white px-6 py-2 text-sm font-medium rounded transition-colors shadow-lg shadow-brand/10 w-fit">
                 View live
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
