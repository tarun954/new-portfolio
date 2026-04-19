import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      {/* 🔥 Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-20 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* 🔥 Name */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight"
      >
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
          Tharun
        </span>
      </motion.h1>

      {/* 🔥 Typing Animation */}
      <TypeAnimation
        sequence={[
          "Full Stack Developer 💻",
          1500,
          "Software Engineer ⚙️",
          1500,
          "Designing Scalable Systems 🏗️",
          1500,
          "Building REST APIs & Microservices 🔗",
          1500,
          "Optimizing Performance & Debugging 🚀",
          1500,
          "Crafting Clean & Maintainable Code ✨",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl mt-6 text-green-400 font-mono"
      />

      {/* 🔥 Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed"
      >
        I’m a Full Stack Developer and Software Engineer who builds scalable,
        high-performance applications. I work across frontend and backend,
        design system architecture, develop APIs, optimize performance, and
        solve complex problems to deliver reliable and efficient software.
      </motion.p>

      {/* 🔥 CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mt-8 flex gap-6"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-400 transition"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border border-green-400 rounded-xl hover:bg-green-400 hover:text-black transition"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
}