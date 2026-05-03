"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-xl px-margin-page max-w-7xl mx-auto" id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-end mb-lg"
      >
        <div>
          <span className="font-label-caps text-primary mb-sm block">04 / WORK</span>
          <h2 className="font-h2 text-2xl md:text-h2">Selected Works</h2>
        </div>
        <button className="font-label-caps text-secondary flex items-center gap-2 group hover:gap-4 transition-all">
          All Projects
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </motion.div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
      >
        {/* Project Card 1 */}
        <motion.div variants={projectVariants} className="group relative">
          <div className="aspect-video glass-card rounded-2xl overflow-hidden mb-md">
            <img
              alt="Financial Dashboard UI"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-alt="ultra-minimalist fintech dashboard UI with glassmorphic cards and subtle neon blue data visualizations on a dark background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP368lwbhilq977ehC3YkVNAE3Qr41Xn6ZocyLDMC7kEAnsBsa1LPASCiU_XHGOv7WgBhre1Gu1geXdRV890dby5QhJ1EhpmPbGVXteztUNzsieekrb_rB6-X9yH0r_t7gwz8hmvqsG4k0PeBbVU6JsjkqpW-Ter-54YUsBs8GBP-kIzoG38unqfSkXftJGrACKnWGRjDcjyfeuP-CAojTiVc7rTRiYwIeFQY3wC6Hpxx6l2ecO1XDKuFWR6WIxQU7mTbDnewtEA"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-h3 text-h3 mb-2">Lumina Financial</h3>
              <p className="font-body-md text-on-surface-variant mb-md max-w-[24rem]">
                High-performance trading dashboard with real-time data streaming and glassmorphic UI elements.
              </p>
              <div className="flex gap-xs">
                <span className="font-label-caps text-[10px] bg-white/5 px-2 py-1 rounded">React</span>
                <span className="font-label-caps text-[10px] bg-white/5 px-2 py-1 rounded">WebSockets</span>
              </div>
            </div>
            <div className="flex gap-sm">
              <a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">launch</span>
              </a>
              <a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">code</span>
              </a>
            </div>
          </div>
        </motion.div>
        {/* Project Card 2 */}
        <motion.div variants={projectVariants} className="group relative">
          <div className="aspect-video glass-card rounded-2xl overflow-hidden mb-md">
            <img
              alt="Smart Home Interface"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-alt="abstract architectural 3D render of a smart home interface with neon coral accents and futuristic data nodes"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVvSJVCFAg1Kwzs-SsyenDVg0AEwmopgBzvEWGDuTE_A2r06UpawsjlTyH-e6Z-V2fofrQ__eeF6pT58s8hX19iJL2O3Dec9M3_n35saGXZ_2nTr4G5sy5M2Wt4RvOgzOHTZzsluQCWMG_iP52sgdvhPU4qJHTbzvlaxGLFrCBeKj67RXVCtkcP_XANNCHBD7rlx8Y4UHBwGSzEDSS7iLx0x8FQCfLaf2JaPumVvhGezK5icE8zKf2cfQMrlHsJRLmOf4rcSHMRg"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-h3 text-h3 mb-2">Aether OS</h3>
              <p className="font-body-md text-on-surface-variant mb-md max-w-[24rem]">
                Next-gen operating system concept for smart environments, focusing on spatial audio and gestural control.
              </p>
              <div className="flex gap-xs">
                <span className="font-label-caps text-[10px] bg-white/5 px-2 py-1 rounded">TypeScript</span>
                <span className="font-label-caps text-[10px] bg-white/5 px-2 py-1 rounded">Next.js</span>
              </div>
            </div>
            <div className="flex gap-sm">
              <a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">launch</span>
              </a>
              <a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
