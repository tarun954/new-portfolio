import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import linkImage from "../assets/linkManager.png";
export default function LinkManager() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-16">

      {/* Back */}
      <Link to="/" className="text-green-400 hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-green-400 mb-6"
      >
        Link Manager App
      </motion.h1>

      {/* Description */}
      <p className="text-gray-400 max-w-3xl text-lg mb-10">
        A full-stack application to save, search, and manage useful links.
        Includes favorites, clean UI, and backend API with database storage.
      </p>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12">
      <img
  src={linkImage}
  alt="Link Manager"
  className="w-full hover:scale-105 transition duration-500"
/>
      </div>

      {/* Tech */}
      <div className="mb-10">
        <h2 className="text-2xl text-green-400 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="bg-green-500/10 text-green-300 px-4 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 flex-wrap">
        <a
          href="https://link-manager-app-frontend-9vivh83af-tarun954s-projects.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-400 transition"
        >
          🚀 Live Demo
        </a>

        <a
          href="https://github.com/tarun954/link-manager-app-frontend"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-green-400 text-green-400 rounded-xl hover:bg-green-400 hover:text-black transition"
        >
          💻 View Frontend Code
        </a>
        <a
          href="https://github.com/tarun954/link-manager-app-backend"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-green-400 text-green-400 rounded-xl hover:bg-green-400 hover:text-black transition"
        >
          💻 View Backend Code
        </a>
      </div>
    </div>
  );
}