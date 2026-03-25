import { motion } from 'framer-motion';

const certifications = [
  {
    year: "Nov '25",
    title: "Privacy and Security on Social Media",
    issuer: "NPTEL",
  },
  {
    year: "Nov '24",
    title: "Digital Systems: From Logic Gates to Processors",
    issuer: "Coursera",
  },
  {
    year: "Nov '24",
    title: "Peer-to-Peer Protocols and Local Area Networks",
    issuer: "Coursera",
  },
  {
    year: "Sep '24",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
  },
  {
    year: "Sep '24",
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera",
  }
];

export default function Certifications() {
  return (
    <section className="py-32" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-semibold">Certifications</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-12 border-l border-border-subtle ml-3 md:ml-auto pl-8 relative">
        {certifications.map((item, i) => (
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
            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
            <div className="text-gray-400">{item.issuer}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
