
const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my work and skills.",
    link: "#"
  },
  {
    title: "UI Component Library",
    description:
      "A reusable React component library for rapid UI development, focusing on accessibility and customization.",
    link: "#"
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app to manage daily tasks, featuring drag-and-drop, reminders, and a clean UI.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-blue-50 rounded-xl shadow p-6 flex flex-col justify-between hover:scale-105 transition-transform border border-blue-100"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-700 font-bold hover:underline mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
