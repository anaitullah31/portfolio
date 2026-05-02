"use client";
import { motion } from "framer-motion";

export default function Exp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-[5vw] py-xl bg-[#0e0e0e] overflow-hidden" id="exp">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-h2 text-h2 text-white mb-lg"
        >
          Journey &amp; Pedigree
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 relative pl-8"
          >
            {/* Animated border line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-px bg-white/20"
            />

            <motion.h3
              variants={leftItemVariants}
              className="font-h3 text-h3 text-primary-container absolute -left-4 top-0 bg-[#0e0e0e] py-1 px-4 border border-white/10 rounded-full text-sm"
            >
              EDUCATION
            </motion.h3>
            <motion.div variants={leftItemVariants} className="pt-8 space-y-2">
              <span className="font-label-caps text-label-caps text-zinc-500">
                2022 — 2025
              </span>
              <h4 className="font-h3 text-h3 text-white">
                B.Sc. in Computer Science
              </h4>
              <p className="font-body-md text-body-md text-zinc-400">
                Universiti Geomatika Malaysia
              </p>
            </motion.div>
            <motion.div variants={leftItemVariants} className="space-y-2">
              <span className="font-label-caps text-label-caps text-zinc-500">
                2014 — 2018
              </span>
              <h4 className="font-h3 text-h3 text-white">
                Diploma in Computer Science
              </h4>
              <p className="font-body-md text-body-md text-zinc-400">
                Narshingdi Polytechnic Institute
              </p>
            </motion.div>
          </motion.div>
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 relative pl-8"
          >
            {/* Animated border line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute left-0 top-0 w-px bg-white/20"
            />
            <motion.h3
              variants={rightItemVariants}
              className="font-h3 text-h3 text-primary-container absolute -left-4 top-0 bg-[#0e0e0e] py-1 px-4 border border-white/10 rounded-full text-sm"
            >
              EXPERIENCE
            </motion.h3>
            <motion.div variants={rightItemVariants} className="pt-8 space-y-2">
              <span className="font-label-caps text-label-caps text-zinc-500">
                2022 — PRESENT
              </span>
              <h4 className="font-h3 text-h3 text-white">IT Engineer</h4>
              <p className="font-body-md text-body-md text-zinc-400">
                JS Paradigm Sdn Bhd, Kuala Lumpur, Malaysia
              </p>
            </motion.div>
            <motion.div variants={rightItemVariants} className="space-y-2">
              <span className="font-label-caps text-label-caps text-zinc-500">
                2020 — 2022
              </span>
              <h4 className="font-h3 text-h3 text-white">IT Officer</h4>
              <p className="font-body-md text-body-md text-zinc-400">
                NAZ BD Limited, Dhaka, Bangladesh
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
