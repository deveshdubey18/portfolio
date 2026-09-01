"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";

export default function ExperienceEducation() {
  const containerRef = useRef(null);
  
  return (
    <section id="experience" ref={containerRef} className="py-32 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Experience */}
          <div>
            <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Career</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">Experience</h3>
            
            <div className="flex flex-col gap-12">
              {RESUME_DATA.experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <div className="text-sm text-gray-500 font-mono mb-2">{exp.date}</div>
                  <h4 className="text-2xl font-bold mb-1">{exp.title}</h4>
                  <div className="text-lg text-primary mb-4">{exp.company}</div>
                  <ul className="flex flex-wrap gap-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="flex flex-col gap-24">
            <div>
              <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Academic</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">Education</h3>
              
              <div className="flex flex-col gap-12">
                {RESUME_DATA.education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative pl-8 border-l border-white/10"
                  >
                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <div className="text-lg text-gray-400 mb-2">{edu.school}</div>
                    {edu.gpa && <div className="text-sm font-mono text-accent">{edu.gpa}</div>}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tighter mb-8">Certifications & Achievements</h3>
              <ul className="flex flex-col gap-4">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass p-4 rounded-xl text-gray-300 text-sm"
                  >
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
