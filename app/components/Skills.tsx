
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
  "Figma"
  ,"Agentic AI "
];

export default function Skills() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="px-4 py-2 bg-white rounded-full shadow text-blue-700 font-semibold text-base border border-blue-100 hover:bg-blue-100 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
