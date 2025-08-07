
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-white text-center py-16">
      <img
        src="/globe.svg"
        alt="Profile Graphic"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-white"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Rutvi Rathod</h1>
      <h2 className="text-xl md:text-2xl text-blue-700 font-semibold mb-4">Software Engineer & Frontend Developer</h2>
      <p className="max-w-xl text-gray-600 text-lg md:text-xl mb-6">
        Passionate about building beautiful, performant, and accessible web applications. Experienced in React, Next.js, and modern web technologies.
      </p>
      <a
        href="/Rutvi Rathod_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
      >
        View Resume
      </a>
    </section>
  );
}
