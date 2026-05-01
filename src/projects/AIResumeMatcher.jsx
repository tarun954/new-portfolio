import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aiResumeImage from "../assets/Dashboard.png";
import aiResumeImage1 from "../assets/Login.png";
import aiResumeImage2 from "../assets/Register.png";
import aiResumeImage3 from "../assets/Resume checker.png";
import aiResumeImage4 from "../assets/Jobs list.png";

export default function AIResumeMatcher() {
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
        AI Resume Matcher
      </motion.h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10 leading-relaxed">
        A full-stack AI-powered resume matcher that compares resumes with job
        descriptions and generates ATS-style match scores, strong matches,
        missing skills, improvement suggestions, tailored summaries, and
        interview questions. The app also includes JWT authentication, MongoDB
        storage, and a remote jobs page using public job data.
      </p>

      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12">
        <img
          src={aiResumeImage1}
          alt="AI Resume Matcher"
          className="w-full hover:scale-105 transition duration-500"
        />
      </div>
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12">
        <img
          src={aiResumeImage2}
          alt="AI Resume Matcher"
          className="w-full hover:scale-105 transition duration-500"
        />
      </div>
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12">
        <img
          src={aiResumeImage}
          alt="AI Resume Matcher"
          className="w-full hover:scale-105 transition duration-500"
        />
      </div>
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12">
        <img
          src={aiResumeImage3}
          alt="AI Resume Matcher"
          className="w-full hover:scale-105 transition duration-500"
        />
      </div>
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12">
        <img
          src={aiResumeImage4}
          alt="AI Resume Matcher"
          className="w-full hover:scale-105 transition duration-500"
        />
      </div>

      <div className="mb-10">
        <h2 className="text-2xl text-green-400 mb-4">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Vite",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Groq AI",
            "Axios",
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

      <div className="mb-10">
        <h2 className="text-2xl text-green-400 mb-4">Key Features</h2>

        <ul className="text-gray-300 text-lg leading-8 list-disc pl-6">
          <li>AI resume and job description match analysis</li>
          <li>ATS-style match score generation</li>
          <li>Missing skills and improvement suggestions</li>
          <li>Tailored professional summary generation</li>
          <li>Interview question generation</li>
          <li>Login and registration using JWT authentication</li>
          <li>MongoDB storage for users and saved jobs</li>
          <li>Remote jobs page with public job listing data</li>
        </ul>
      </div>

      <div className="flex gap-6 flex-wrap">
        <a
          href="https://ai-resume-matcher-frontend-phi.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-400 transition"
        >
          🚀 Live Demo
        </a>

        <a
          href="https://github.com/tarun954/ai-resume-matcher-frontend"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-green-400 text-green-400 rounded-xl hover:bg-green-400 hover:text-black transition"
        >
          💻 View Frontend Code
        </a>

        <a
          href="https://github.com/tarun954/ai-resume-matcher"
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