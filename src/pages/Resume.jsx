import { Link } from "react-router-dom";
export default function Resume() {
  const resumeUrl = "https://drive.google.com/file/d/1v1ZDr69eow9DYnvhFRM0xEn0qOlf6U_z/preview";

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
    <Link to="/" className="text-green-400 hover:underline block text-center mt-6">
      ← Back to Home
    </Link>
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-10">
        My Resume
      </h1>

      {/* Glass Card */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                      rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.2)] overflow-hidden">

        {/* Google Drive Preview */}
        <iframe
          src={resumeUrl}
          title="Resume Preview"
          className="w-full h-[80vh]"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-8 flex-wrap">

        {/* Open in Drive */}
        <a
          href="https://drive.google.com/file/d/1v1ZDr69eow9DYnvhFRM0xEn0qOlf6U_z/view"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-green-500 text-black font-semibold rounded-xl 
                     hover:bg-green-400 transition shadow-lg hover:shadow-green-500/30"
        >
          Open Full Screen
        </a>

      </div>
    </div>
  );
}