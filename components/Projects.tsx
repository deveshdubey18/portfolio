"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Database, Network, Activity, Smartphone, LayoutDashboard, Brain } from "lucide-react";

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section id="projects" ref={containerRef} className="py-32 relative z-10 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 mb-24">
        <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Case Studies</h2>
        <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter">5 Featured Projects</h3>
      </div>

      <div className="flex flex-col gap-32 md:gap-40 container mx-auto px-6">
        {RESUME_DATA.projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
        
        {/* Explore More on GitHub */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto py-20 border-t border-white/10 mt-10"
        >
          <h4 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-widest">More Projects</h4>
          <p className="text-2xl md:text-3xl font-bold tracking-tighter mb-10 text-white">
            Explore more of my work, experiments, and projects on GitHub.
          </p>
          <a
            href="https://github.com/deveshdubey18?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-lg"
          >
            Explore all projects on GitHub <FaArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof RESUME_DATA.projects[0], index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full"
    >
      {/* Left side: Project visual */}
      <div className="w-full lg:w-[45%] order-first">
        <ProjectVisual id={project.id} />
      </div>

      {/* Right side: Content */}
      <div className="w-full lg:w-[55%] flex flex-col items-start order-last">
        <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-4">
          <span className="text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">0{index + 1}</span>
          {project.category}
        </div>
        
        <h4 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 relative z-10 text-white">
          {project.title}
        </h4>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs font-mono px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-400 leading-relaxed mb-10 text-lg">
          {project.description}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 w-full">
          {project.metrics.map((metric, i) => {
            const hasNumber = /[\d.%]+/.test(metric);
            const value = hasNumber ? metric.match(/[\d.%]+/)?.[0] || "" : metric;
            const label = hasNumber ? metric.replace(/[\d.%]+/, "").trim() : "";
            
            return (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-white font-bold text-xl md:text-2xl">{value}</span>
                {label && (
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 border border-white/20 transition-all text-sm uppercase tracking-widest"
          >
            <FaGithub size={18} />
            View Repository
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectVisual({ id }: { id: string }) {
  // Common visual container
  const baseClasses = "aspect-square w-full rounded-3xl overflow-hidden relative group flex items-center justify-center p-8 bg-black/50 border border-white/10";
  
  if (id === "aeroxdb") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 w-full h-full border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400"><Database size={20} /></div>
            <div className="h-10 w-10 rounded bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400"><Database size={20} /></div>
            <div className="h-10 w-10 rounded bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400"><Database size={20} /></div>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <Network size={64} className="text-gray-500/30 group-hover:text-primary/50 transition-colors duration-500" />
          </div>
          <div className="w-full h-24 bg-white/5 rounded-xl border border-white/10 flex items-end p-2 gap-2">
            {[40, 70, 45, 90, 60, 85].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: "0%" }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="flex-1 bg-gradient-to-t from-primary/50 to-accent/50 rounded-sm" 
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (id === "heartdisease") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-purple-900/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
          <div className="p-6 rounded-full bg-red-500/10 border border-red-500/30">
            <Activity size={48} className="text-red-400 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="flex items-center gap-2 w-full justify-center">
            <div className="h-1 w-12 bg-white/10" />
            <div className="h-3 w-3 rounded-full bg-white/30" />
            <div className="h-1 w-12 bg-white/10" />
            <div className="px-3 py-1 bg-white/10 rounded text-xs font-mono">XGBoost</div>
            <div className="h-1 w-12 bg-white/10" />
            <div className="h-3 w-3 rounded-full bg-primary/50" />
            <div className="h-1 w-12 bg-white/10" />
          </div>
          <div className="text-center font-mono text-sm text-gray-400">
            <span className="text-green-400">97.73%</span> Testing Accuracy
          </div>
        </div>
      </div>
    );
  }

  if (id === "candidateselection") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 w-full h-full border border-white/10 rounded-2xl overflow-hidden flex">
          <div className="w-1/3 bg-white/5 border-r border-white/10 p-4 flex flex-col gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-full h-8 rounded bg-white/10" />
            ))}
          </div>
          <div className="w-2/3 p-6 flex flex-col items-center justify-center gap-6">
            <Brain size={48} className="text-green-400/50 group-hover:text-green-400 transition-colors duration-500" />
            <div className="w-full flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-green-500 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="text-xs font-mono text-gray-500">Predictive Scoring Active</div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "calcount") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-yellow-900/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="w-48 h-full max-h-[80%] border-4 border-white/20 rounded-[2rem] bg-black p-2 flex flex-col gap-4 relative overflow-hidden group-hover:border-white/40 transition-colors duration-500">
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-2" />
            <div className="mt-4 flex-grow px-2 flex flex-col gap-3">
              <div className="w-full aspect-square rounded-full border-[6px] border-white/10 border-l-orange-500 flex items-center justify-center">
                <span className="font-mono text-xs text-gray-400">kcal</span>
              </div>
              <div className="w-full h-12 bg-white/10 rounded-xl" />
              <div className="w-full h-12 bg-white/10 rounded-xl" />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/20">
              <Smartphone size={24} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "gymmanagement") {
    return (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 w-full h-full border border-white/10 rounded-2xl bg-black/80 flex flex-col overflow-hidden">
          <div className="h-10 w-full bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/50" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
            <div className="h-3 w-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-grow p-4 flex gap-4">
            <div className="w-1/4 bg-white/5 rounded-lg flex flex-col p-2 gap-2">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-6 w-full bg-white/10 rounded" />)}
            </div>
            <div className="w-3/4 flex flex-col gap-4">
              <div className="h-24 w-full bg-white/5 rounded-lg flex items-center justify-center text-white/20">
                <LayoutDashboard size={32} />
              </div>
              <div className="flex-grow bg-white/5 rounded-lg border border-white/5" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div className={baseClasses}>
      <div className="text-6xl font-mono text-white/20 group-hover:scale-110 transition-transform duration-700 font-bold mb-4">
        {id.toUpperCase()}
      </div>
    </div>
  );
}
