import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import devassistAI from "../assets/dev-assist.png";

import linkImage from "../assets/linkManager.png";
import aiResumeImage from "../assets/Dashboard.png";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "AI Resume Matcher",
      desc: "AI-powered resume matcher with ATS score, missing skills, job analysis, MongoDB auth, and remote jobs integration.",
      image: aiResumeImage,
      tech: ["React", "Node.js", "MongoDB", "Groq AI"],
      action: () => navigate("/projects/ai-resume-matcher"),
    },
    {
      title: "Link Manager",
      desc: "Save, search, and manage useful links with favorites and database storage.",
      image: linkImage,
      tech: ["React", "Node.js", "Express", "MongoDB"],
      action: () => navigate("/projects/link-manager"),
    },
    {
      title: "DevAssist AI",
      desc: "AI-powered developer assistant that analyzes production logs, detects root causes, suggests fixes, and optimizes messy API responses into clean JSON, TypeScript interfaces, and MongoDB schemas.",
      image: devassistAI,
      tech: [
        "React",
        "Node.js",
        "Express",
        "Groq AI",
        "MongoDB",
        "Vercel",
        "Render",
      ],
      action: () => navigate("/projects/devassist-ai"),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-12"
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}