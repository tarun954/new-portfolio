import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import linkImage from "../assets/linkManager.png";
export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "AI Notes App",
      desc: "AI-powered notes with summarization & authentication.",
    //   image: , // temp reuse
      action: () => alert("Coming Soon 🚀"),
    },
    {
      title: "Link Manager",
      desc: "Save, search and manage links with favorites.",
      image: linkImage, // ✅ correct
      action: () => navigate("/projects/link-manager"),
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
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}