import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Add your screenshots here
import devassist1 from "../assets/devassist-1.png";
import devassist2 from "../assets/devassist-2.png";
import devassist3 from "../assets/devassist-3.png";
import devassist4 from "../assets/devassist-4.png";

export default function DevAssistAI() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
      <Link to="/" className="text-green-400 hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-green-400 mb-6"
      >
        DevAssist AI
      </motion.h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10 leading-relaxed">
        DevAssist AI is a full-stack AI-powered developer assistant that helps
        engineers analyze production logs and optimize messy API responses into
        structured, developer-friendly outputs. The system detects root causes,
        classifies severity, suggests fixes, and generates clean JSON,
        TypeScript interfaces, and MongoDB schemas. It also includes export
        features, history tracking, and a modern dashboard UI.
      </p>

      {/* Screenshots */}
      {[devassist1, devassist2, devassist3, devassist4].map((img, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12"
        >
          <img
            src={img}
            alt="DevAssist AI"
            className="w-full hover:scale-105 transition duration-500"
          />
        </div>
      ))}

      {/* Tech Stack */}
      <div className="mb-10">
        <h2 className="text-2xl text-green-400 mb-4">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Vite",
            "Node.js",
            "Express",
            "MongoDB",
            "Groq AI",
            "Axios",
            "Tailwind CSS",
            "Render",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-green-500/10 text-green-300 px-4 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl text-green-400 mb-4">Key Features</h2>

        <ul className="text-gray-300 text-lg leading-8 list-disc pl-6">
          <li>AI-powered production log analysis</li>
          <li>Root cause detection and severity classification</li>
          <li>Suggested fixes and code improvement recommendations</li>
          <li>API response optimization and cleanup</li>
          <li>TypeScript interface generation</li>
          <li>MongoDB schema suggestions</li>
          <li>Export reports (PDF, DOCX, TXT, JSON)</li>
          <li>Analysis history stored in MongoDB</li>
          <li>Modern dashboard UI with real-time results</li>
        </ul>
      </div>

      {/* Links */}
      <div className="flex gap-6 flex-wrap">
        <a
          href="Yhttps://devassist-ai-frontend.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-400 transition"
        >
          🚀 Live Demo
        </a>

        <a
          href="https://github.com/tarun954/devassist-ai-frontend"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-green-400 text-green-400 rounded-xl hover:bg-green-400 hover:text-black transition"
        >
          💻 View Frontend Code
        </a>

        <a
          href="https://github.com/tarun954/devassist-ai-backend"
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