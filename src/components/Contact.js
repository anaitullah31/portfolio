"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="px-[5vw] py-xl bg-surface-container-lowest" id="contact">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card rounded-2xl p-lg grid grid-cols-1 md:grid-cols-2 gap-xl max-w-7xl mx-auto"
      >
        <div>
          <motion.h2 variants={itemVariants} className="font-h2 text-h2 text-white mb-md">
            Let's craft something <span className="text-primary-container">legendary</span>.
          </motion.h2>
          <motion.p variants={itemVariants} className="font-body-lg text-body-lg text-zinc-400 mb-lg">
            Open for freelance opportunities and full-time creative collaborations. Reach out to discuss your next big idea.
          </motion.p>
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-4 text-white">
              <span className="material-symbols-outlined text-primary-container">mail</span>
              <span className="font-body-md text-body-md">anaitullah198@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <span className="material-symbols-outlined text-primary-container">location_on</span>
              <span className="font-body-md text-body-md">Kuala Lumpur, Malaysia</span>
            </div>
          </motion.div>
        </div>
        <div className="space-y-gutter">
          <motion.div variants={itemVariants} className="border-b border-zinc-800 pb-2 relative group">
            <label className="font-label-caps text-label-caps text-zinc-500 block mb-2 transition-colors group-focus-within:text-primary-container">FULL NAME</label>
            <input className="bg-transparent border-none w-full text-white font-body-md focus:ring-0 outline-none placeholder:text-zinc-700" placeholder="John Doe" type="text" />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-container transition-all duration-300 group-focus-within:w-full"></div>
          </motion.div>
          <motion.div variants={itemVariants} className="border-b border-zinc-800 pb-2 relative group">
            <label className="font-label-caps text-label-caps text-zinc-500 block mb-2 transition-colors group-focus-within:text-primary-container">EMAIL ADDRESS</label>
            <input className="bg-transparent border-none w-full text-white font-body-md focus:ring-0 outline-none placeholder:text-zinc-700" placeholder="john@example.com" type="email" />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-container transition-all duration-300 group-focus-within:w-full"></div>
          </motion.div>
          <motion.div variants={itemVariants} className="border-b border-zinc-800 pb-2 relative group">
            <label className="font-label-caps text-label-caps text-zinc-500 block mb-2 transition-colors group-focus-within:text-primary-container">MESSAGE</label>
            <textarea className="bg-transparent border-none w-full text-white font-body-md focus:ring-0 outline-none placeholder:text-zinc-700 resize-none" placeholder="Tell me about your project..." rows={3}></textarea>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-container transition-all duration-300 group-focus-within:w-full"></div>
          </motion.div>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary-container text-white py-4 rounded-xl font-label-caps text-label-caps group flex items-center justify-center gap-2 overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              SEND MESSAGE
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
