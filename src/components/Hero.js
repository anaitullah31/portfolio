"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.2,
    })
    .from(".hero-image", {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    }, "-=0.8")
    .from(".hero-element", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.6");

    // Subtle parallax on floating background circles
    gsap.to(".bg-circle-1", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(".bg-circle-2", {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <main id="home" ref={container} className="relative min-h-screen pt-xl hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="bg-circle-1 absolute top-1/4 left-10 w-64 h-64 border border-outline/10 rounded-full pointer-events-none"></div>
      <div className="bg-circle-2 absolute bottom-1/4 right-10 w-96 h-96 border border-outline/10 rounded-full pointer-events-none"></div>
      
      <div className="container-max mx-auto px-margin-page grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
        {/* Left Column */}
        <div className="md:col-span-4 flex flex-col items-start gap-md">
          <div className="space-y-sm">
            <h1 className="font-h1 text-h1 text-on-background leading-[1.1] hero-text">
              Hi, I&apos;m <br />
              <span className="text-primary text-glow">Anait Ullah</span>
            </h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest hero-text">
              Creative Technologist
            </p>
          </div>
          <div className="mt-md hero-element">
            <button className="group flex items-center gap-base bg-primary text-on-primary px-md py-sm rounded-full font-label-caps transition-all hover:pr-lg hover:shadow-[0_0_30px_rgba(255,114,98,0.4)]">
              Hire Me
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="mt-xl flex flex-col gap-sm hero-element">
            <div className="flex gap-md text-on-surface-variant">
              <a className="hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">link</span>
              </a>
            </div>
            <p className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">
              www.julianvance.design
            </p>
          </div>
        </div>
        {/* Central Focal Point */}
        <div className="md:col-span-4 relative flex justify-center hero-image">
          <div className="relative w-full aspect-4/5 max-w-112.5">
            {/* Floating Circles */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full border border-primary/30 z-20"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full glass-card z-20"></div>
            {/* Main Image Container */}
            <div className="w-full h-full rounded-2xl overflow-hidden glass-card relative">
              <Image
                src="/anaitullah.png"
                alt="Anait Ullah"
                width={400}
                height={500}
                className="w-full h-full object-cover dark:grayscale dark:contrast-125"
                priority
              />
              {/* Star Badge Overlay */}
              <div className="absolute top-8 right-8 bg-primary text-on-primary w-16 h-16 rounded-full flex items-center justify-center rotate-12 shadow-xl">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right gap-md hero-element">
          <div className="glass-card p-md rounded-xl max-w-96">
            <span className="font-label-caps text-primary mb-base block uppercase">Expert on...</span>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              Crafting high-end digital experiences at the intersection of aesthetic precision and technical innovation.
            </p>
          </div>
          <div className="mt-md">
            <a className="flex items-center gap-base text-on-background hover:text-primary transition-all group" href="#">
              <span className="font-label-caps text-label-caps uppercase border-b border-outline/50 group-hover:border-primary pb-1">Download CV</span>
              <span className="material-symbols-outlined text-sm">download</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
