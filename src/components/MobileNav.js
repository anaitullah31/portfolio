"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function MobileNav() {
  const [active, setActive] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { id: "home", icon: "home", href: "#home" },
    { id: "exp", icon: "calendar_month", href: "#exp" }, 
    { id: "projects", icon: "layers", href: "#projects" }, 
    { id: "skills", icon: "search", href: "#skills" }, 
    { id: "contact", icon: "settings", href: "#contact" }, 
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[400px]">
      <div className="bg-surface-container-highest rounded-[2rem] p-2 flex justify-between items-center shadow-2xl border border-outline/20 relative">

        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`relative p-3.5 rounded-[1.25rem] flex items-center justify-center transition-all duration-300 ${
                isActive 
                  ? "bg-primary text-on-primary scale-105 shadow-lg" 
                  : "text-primary hover:bg-primary/10"
              }`}
            >
              <span 
                className="material-symbols-outlined text-[26px] z-10"
                style={{ fontVariationSettings: isActive ? '"FILL" 1' : '"FILL" 0' }}
              >
                {item.icon}
              </span>
            </a>
          );
        })}
        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-3.5 rounded-[1.25rem] flex items-center justify-center transition-all duration-300 text-primary hover:bg-primary/10"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined text-[26px] z-10">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
