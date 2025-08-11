export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-[#181e29] to-[#10141a] text-center py-16">
      <img
        src="/rutu.jpg"
        alt="Rutvi Rathod profile"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-[#232a3a] object-cover object-center"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-2">
        Rutvi Rathod
      </h1>
      <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-4">
        Software Engineer & Frontend Developer
      </h2>
      <p className="max-w-xl text-gray-300 text-lg md:text-xl mb-6">
        Passionate about building beautiful, performant, and accessible web
        applications. Experienced in React, Next.js, and modern web
        technologies.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
        <a
          href="/Rutvi Rathod_Resume.pdf"
          download
          className="inline-block px-6 py-2 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition border border-blue-800"
        >
          Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/rutvi-rathod/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-[#232a3a] text-blue-300 border border-blue-700 rounded-full shadow hover:bg-blue-900 transition font-semibold"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
}
