import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const texts = [
    "Initializing...",
    "Compiling ideas...",
    "Deploying creativity...",
    "Building the future...",
    "Full Stack Mode ON ⚡",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex justify-between items-center p-6 bg-black border-b border-gray-800">
      
      {/* 🔥 CRAZY LOGO */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider">
        <span className="logo-glitch text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          &lt;Tharun.dev/&gt;
         </span>
        </h1>

        {/* 🔥 Animated status text */}
        <span className="text-xs text-green-400 font-mono animate-pulse">
          {texts[index]}
        </span>
      </div>

      {/* NAV LINKS */}
      <div className="space-x-8 text-lg">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/resume" className="hover:text-blue-400 transition">Resume</Link>
        <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>
    </nav>
  );
}