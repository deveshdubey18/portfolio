"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import Hero3D from "./canvas/Hero3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <Hero3D />

      {/* Subtle overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 flex">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-sm md:text-base font-mono text-primary mb-4"
          >
            &gt; SELECT * FROM opportunities;
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6">
            Hi, I&apos;m <span className="text-white">{RESUME_DATA.name.split(" ")[0]}</span>.
            <br />
            <span className="text-gray-400 text-4xl md:text-6xl lg:text-7xl block mt-2">
              Data Analyst
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-3xl md:text-5xl lg:text-6xl block mt-2">
              Aspiring Data Scientist
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
            {RESUME_DATA.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/portfolio/resume.pdf"
              download
              className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-16 flex items-center gap-6 text-sm font-mono text-gray-500">
            <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-primary transition-colors">Email</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
