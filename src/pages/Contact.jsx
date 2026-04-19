export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">

      <h1 className="text-4xl font-bold text-green-400 mb-4">
        Get In Touch
      </h1>

      <p className="text-gray-400 mb-8 text-center max-w-lg">
        I’m open to opportunities, collaborations, or just a quick chat.
        Feel free to reach out!
      </p>

      <div className="space-y-4 text-center">

        <p className="text-lg">
          📧 Email: <span className="text-green-400">tarunnadu47@email.com</span>
        </p>

        

        <p className="text-lg">
          💻 GitHub:{" "}
          <a
            href="https://github.com/tarun954"
            className="text-green-400 hover:underline"
          >
            https://github.com/tarun954
          </a>
        </p>
      </div>

      {/* 🔥 CTA button */}
      <a
        href="mailto:tarunnadu47@email.com"
        className="mt-8 px-6 py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-400 transition"
      >
        Send Email
      </a>
    </div>
  );
}