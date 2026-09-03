"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="contact" ref={containerRef} className="py-32 relative z-10 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-white">
            Let&apos;s build something meaningful with data.
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center text-lg"
            >
              Let&apos;s Connect <ArrowRight size={20} />
            </a>
            <a
              href="/portfolio/resume.pdf"
              download
              className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto justify-center text-lg"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-mono text-gray-500 uppercase">Email</span>
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-gray-300 hover:text-white transition-colors">{RESUME_DATA.contact.email}</a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-mono text-gray-500 uppercase">Phone</span>
              <span className="text-gray-300">{RESUME_DATA.contact.phone}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-mono text-gray-500 uppercase">GitHub</span>
              <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">@deveshdubey18</a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-mono text-gray-500 uppercase">LinkedIn</span>
              <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">Connect</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
