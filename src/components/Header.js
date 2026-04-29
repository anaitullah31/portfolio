"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Skills", href: "#skills" },
    { name: "Exp", href: "#exp" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md shadow-2xl"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto font-sans tracking-tight">
        <div className="text-xl font-bold tracking-tighter text-on-background uppercase">
          <Image
            src="/logo.png"
            alt="logo"
            width={45}
            height={45}
            className="w-full h-full object-cover dark:grayscale dark:contrast-125"
            priority
          />
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-on-surface-variant hover:text-on-surface transition-colors group py-1"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-container transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 rounded-full border border-outline/20 flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-[18px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-caps hover:opacity-80 transition-all duration-300 scale-95 active:scale-90 flex items-center gap-2 group">
            Let's Chat
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
