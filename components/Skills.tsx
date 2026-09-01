"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Database, LineChart, Code, Brain, Wrench, Settings2 } from "lucide-react";

const SKILL_CATEGORIES = [
  { title: "Programming", items: RESUME_DATA.skills.programming, icon: <Code size={24} /> },
  { title: "Databases", items: RESUME_DATA.skills.databases, icon: <Database size={24} /> },
  { title: "Machine Learning", items: RESUME_DATA.skills.machineLearning, icon: <Brain size={24} /> },
  { title: "Data Analytics", items: RESUME_DATA.skills.dataAnalysis, icon: <Settings2 size={24} /> },
  { title: "Visualization", items: RESUME_DATA.skills.visualization, icon: <LineChart size={24} /> },
  { title: "Tools", items: RESUME_DATA.skills.tools, icon: <Wrench size={24} /> }
];

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id="skills" ref={containerRef} className="py-32 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest text-center">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center">
            Technical Arsenal
          </h3>
          <p className="text-gray-400 mt-6 max-w-2xl text-center">
            A comprehensive overview of the tools, languages, and frameworks I use to transform raw data into measurable business value.
          </p>
        </div>

        <motion.div style={{ opacity, scale }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl flex flex-col h-full border border-white/5 hover:border-primary/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-8 text-white">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold">
                  {category.title}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
