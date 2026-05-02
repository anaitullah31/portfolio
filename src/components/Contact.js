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
    <section className="px-[5vw] md:py-xl bg-surface-container-lowest" id="contact">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card rounded-2xl p-8 md:p-lg grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-xl max-w-7xl mx-auto"
      >
        <div>
          <motion.h2 variants={itemVariants} className="font-h2 text-h2 text-zinc-900 dark:text-white mb-md">
            Let&apos;s craft something <span className="text-primary">legendary</span>.
          </motion.h2>
          <motion.p variants={itemVariants} className="font-body-lg text-body-lg text-zinc-600 dark:text-zinc-400 mb-lg">
            Open for freelance opportunities and full-time creative collaborations. Reach out to discuss your next big idea.
          </motion.p>
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-4 text-zinc-900 dark:text-white">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="font-body-md text-body-md">anaitullah198@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-900 dark:text-white">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="font-body-md text-body-md">Kuala Lumpur, Malaysia</span>
            </div>
          </motion.div>
        </div>
        <div className="space-y-gutter">
          <motion.div variants={itemVariants} className="border-b border-zinc-300 dark:border-zinc-800 pb-2 relative group">
            <label className="font-label-caps text-label-caps text-zinc-500 block mb-2 transition-colors group-focus-within:text-primary">FULL NAME</label>
            <input className="bg-transparent border-none w-full text-zinc-900 dark:text-white font-body-md focus:ring-0 outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700" placeholder="John Doe" type="text" />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-focus-within:w-full"></div>
          </motion.div>
          <motion.div variants={itemVariants} className="border-b border-zinc-300 dark:border-zinc-800 pb-2 relative group">
            <label className="font-label-caps text-label-caps text-zinc-500 block mb-2 transition-colors group-focus-within:text-primary">EMAIL ADDRESS</label>
            <input className="bg-transparent border-none w-full text-zinc-900 dark:text-white font-body-md focus:ring-0 outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700" placeholder="john@example.com" type="email" />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-focus-within:w-full"></div>
          </motion.div>
          <motion.div variants={itemVariants} className="border-b border-zinc-300 dark:border-zinc-800 pb-2 relative group">
            <label className="font-label-caps text-label-caps text-zinc-500 block mb-2 transition-colors group-focus-within:text-primary">MESSAGE</label>
            <textarea className="bg-transparent border-none w-full text-zinc-900 dark:text-white font-body-md focus:ring-0 outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700 resize-none" placeholder="Tell me about your project..." rows={3}></textarea>
            <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-focus-within:w-full"></div>
          </motion.div>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-caps text-label-caps group flex items-center justify-center gap-2 overflow-hidden relative"
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
