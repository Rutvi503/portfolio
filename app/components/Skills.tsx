const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "UI/UX Design",
  "Git & GitHub",
  "REST APIs",
  "Figma",
  "Agentic AI ",
];

export default function Skills() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#10141a] to-[#181e29] text-blue-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-300">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="px-4 py-2 bg-[#232a3a] rounded-full shadow text-blue-200 font-semibold text-base border border-blue-700 hover:bg-blue-900 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
