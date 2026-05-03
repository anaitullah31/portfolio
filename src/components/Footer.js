"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socials = [
    { name: "LinkedIn", url: "linkedin.com/in/anaitullah" },
    { name: "GitHub", url: "https://github.com/anaitullah31" },
    { name: "Dribbble", url: "https://dribbble.com/anaitullah" },
    { name: "Discord", url: "https://discord.com/users/anaitullah" },
  ];

  return (
    <footer className="w-full py-12 px-8 border-t border-white/5 bg-[#050505]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="font-sans text-xs tracking-widest uppercase text-gray-500"
        >
          © 2024 DIGITAL CRAFTSMANSHIP. ALL RIGHTS RESERVED.
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-8">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "var(--color-primary-container)" }}
              className="font-sans text-xs tracking-widest uppercase text-gray-500 transition-colors"
            >
              {social.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </footer>
  );
}
