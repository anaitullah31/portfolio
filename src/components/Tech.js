"use client";
import { motion } from "framer-motion";

export default function Tech() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-xl px-margin-page max-w-7xl mx-auto" id="tech">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center md:mb-lg"
      >
        <span className="font-label-caps text-secondary mb-sm block uppercase">
          The Toolkit
        </span>
        <h2 className="font-h2 text-h2">Technical Arsenal</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 md:gap-sm"
      >
        {/* Frontend */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 lg:col-span-3 glass-card p-md rounded-2xl group hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-sm mb-md">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              developer_board
            </span>
            <h3 className="font-h3 text-h3">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-xs">
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              HTML5
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              CSS3
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              Tailwind CSS
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              JavaScript
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              TypeScript
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              React
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              Next.js
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              Redux.js
            </span>
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 lg:col-span-3 glass-card p-md rounded-2xl group hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-sm mb-md">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              database
            </span>
            <h3 className="font-h3 text-h3">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-xs">
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              Node.js
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              Express.js
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              MongoDB
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              Mongoose
            </span>
            <span className="px-sm py-1 bg-surface-container rounded-full font-label-caps text-[16px]">
              Prisma
            </span>
          </div>
        </motion.div>

        {/* Tools/DevOps */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-4 lg:col-span-6 glass-card p-md rounded-2xl flex flex-col md:flex-row justify-between gap-md"
        >
          <div className="flex items-center gap-sm">
            <span
              className="material-symbols-outlined text-on-surface"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              settings_suggest
            </span>
            <h3 className="font-h3 text-h3">DevOps &amp; Tools</h3>
          </div>
          <div className="flex flex-wrap gap-xs ">
            <span className="px-sm py-1 border border-outline/30 rounded-full font-label-caps text-[16px]">
              Eexpanding knowledge
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
