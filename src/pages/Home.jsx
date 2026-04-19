import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />

      {/* 🔥 Smooth scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Projects />
      </motion.div>
    </>
  );
}