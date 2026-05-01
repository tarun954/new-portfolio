import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LinkManager from "./projects/LinkManager";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import AIResumeMatcher from "./projects/AIResumeMatcher";
export default function App() {
  return (
    <>
      <Navbar />   {/* ✅ ONLY HERE */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/link-manager" element={<LinkManager />} />
        <Route path="/projects/ai-resume-matcher" element={<AIResumeMatcher />} />
      </Routes>
    </>
  );
}


