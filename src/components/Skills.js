"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-xl bg-surface-dim px-margin-page" id="skills">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-md">
          <div>
            <span className="font-label-caps text-primary mb-sm block">02 / EXPERTISE</span>
            <h2 className="font-h2 text-h2">Technical Proficiencies</h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-96">
            Quantitative measurement of technical mastery based on real-world project deployment.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div className="space-y-lg">
            <motion.div variants={itemVariants} className="group">
              <div className="flex justify-between font-label-caps mb-2">
                <span>Core Engineering</span>
                <span className="text-primary">95%</span>
              </div>
              <div className="h-px w-full bg-outline/20 relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="absolute h-px bg-primary shadow-[0_0_8px_rgba(255,180,170,0.5)]"
                ></motion.div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="group">
              <div className="flex justify-between font-label-caps mb-2">
                <span>Scalable Architecture</span>
                <span className="text-primary">88%</span>
              </div>
              <div className="h-px w-full bg-outline/20 relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "88%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="absolute h-px bg-primary"
                ></motion.div>
              </div>
            </motion.div>
          </div>
          <div className="space-y-lg">
            <motion.div variants={itemVariants} className="group">
              <div className="flex justify-between font-label-caps mb-2">
                <span>UI/UX Implementation</span>
                <span className="text-secondary">92%</span>
              </div>
              <div className="h-px w-full bg-outline/20 relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  className="absolute h-px bg-secondary-fixed-dim shadow-[0_0_8px_rgba(12,218,246,0.5)]"
                ></motion.div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="group">
              <div className="flex justify-between font-label-caps mb-2">
                <span>Data Strategy</span>
                <span className="text-secondary">80%</span>
              </div>
              <div className="h-px w-full bg-outline/20 relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  className="absolute h-px bg-secondary-fixed-dim"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
