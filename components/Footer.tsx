import { RESUME_DATA } from "@/data/resume";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-20 relative z-10 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tighter">{RESUME_DATA.name}</h3>
          <p className="text-sm text-gray-400 mt-1">{RESUME_DATA.title}</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
