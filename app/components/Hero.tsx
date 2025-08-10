
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-white text-center py-16">
      <img
        src="/rutu.jpg"
        alt="Rutvi Rathod profile"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-white object-cover object-center"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Rutvi Rathod</h1>
      <h2 className="text-xl md:text-2xl text-blue-700 font-semibold mb-4">Software Engineer & Frontend Developer</h2>
      <p className="max-w-xl text-gray-600 text-lg md:text-xl mb-6">
        Passionate about building beautiful, performant, and accessible web applications. Experienced in React, Next.js, and modern web technologies.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
        <a
          href="/Rutvi Rathod_Resume.pdf"
          download
          className="inline-block px-6 py-2 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
        >
          Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/rutvi-rathod/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-white text-blue-700 border border-blue-700 rounded-full shadow hover:bg-blue-50 transition font-semibold"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
}
