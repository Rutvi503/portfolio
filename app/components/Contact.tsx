export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#10141a] to-[#181e29] text-blue-100">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-300">Contact</h2>
        <p className="text-lg mb-6 text-blue-200">
          Interested in working together or want to connect? Feel free to reach
          out!
        </p>
        <a
          href="mailto:rutvirathod@email.com"
          className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition font-semibold border border-blue-900"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
