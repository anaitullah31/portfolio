"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-xl px-margin-page max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-2 md:order-1 relative"
        >
          <div className="aspect-4/5 glass-card rounded-3xl overflow-hidden transition-transform hover:rotate-0 duration-500">
            <Image
              width={600}
              height={600}
              alt="Workspace showing high-end equipment"
              className="w-full h-full object-cover opacity-80"
              data-alt="monochrome workspace with high-end mechanical keyboard and curved monitor displaying lines of code in a dark room"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBK6k_aOKYajwSKbvvnNf64pJXKLcS8qHP8jLC2e-Hc36e6VtncL3PBw9oHmhjBWGPfY-8oq2q8ctRJTydWn-XyQb8QrOgct0oEwQu2ruv1NtM6dBErUmKTfhcbPBrFV542v7FVXGY0Z1JMabHLUByvxeZxK2Xu_wJxDCcX7cRPAiJHnPGGt6NyyPZXc_YmKBuC7rRWdrqpyuH8Jbm2Ti_lzCPpF_6GxX7T4whrCK6PMdES_pfQinVXUdFMlYYcfcY5orr0AdzwA"
            />
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="order-1 md:order-2"
        >
          <motion.span
            variants={itemVariants}
            className="font-label-caps text-primary mb-sm block"
          >
            01 / PERSPECTIVE
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-h2 text-h2 mb-md">
            Beyond the Code.
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="space-y-sm font-body-md text-on-surface-variant"
          >
            <p>
              I believe that every line of code should serve a purpose and every
              pixel should belong. My approach combines the structural integrity
              of computer science with the emotional resonance of luxury design.
            </p>
            <p>
              With 6+ years of experience in the tech industry, I&apos;ve worked
              with startups and global brands to build platforms that don&apos;t
              just work—they inspire.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-lg grid grid-cols-2 gap-gutter"
          >
            <div>
              <span className="block text-h2 font-h2 text-primary">12+</span>
              <span className="font-label-caps text-tertiary">
                Major Projects
              </span>
            </div>
            <div>
              <span className="block text-h2 font-h2 text-secondary">06</span>
              <span className="font-label-caps text-tertiary">Years Exp.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
