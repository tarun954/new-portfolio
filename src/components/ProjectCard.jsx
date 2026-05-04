import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  desc,
  image,
  tech = [],
  live,
  github,
  action,
}) {
  const handleCardClick = () => {
    if (action) {
      action();
    } else if (live) {
      window.open(live, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      onClick={handleCardClick}
      className="cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 
                 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 
                 hover:border-green-400 hover:shadow-green-500/20"
    >
      <div className="h-72 md:h-80 overflow-hidden bg-black">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-700 hover:scale-110"
        />
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold text-green-400">{title}</h2>

        <p className="text-gray-300 mt-4 text-lg leading-relaxed">{desc}</p>

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {tech.map((item) => (
              <span
                key={item}
                className="bg-green-500/10 text-green-300 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex gap-4 flex-wrap">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-green-300 font-medium hover:text-green-200"
            >
              Live Demo →
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-300 font-medium hover:text-white"
            >
              GitHub →
            </a>
          )}

          {!live && !github && (
            <span className="text-green-300 font-medium">View Project →</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}