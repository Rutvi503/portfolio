const projects = [
  {
    title: "Attendance System Using Face Recognition",
    date: "Dec 2023 - June 2024",
    tech: ["Python", "Django", "FastAPI", "PostgreSQL", "AWS"],
    icon: "🧑‍💼",
    highlights: [
      "Innovative face recognition-based attendance system for real-time, multi-location tracking.",
      "FastAPI-powered APIs for high-performance facial recognition and seamless data handling.",
      "Secure user authentication, face enrollment, and device integration.",
      "Scalable architecture using PostgreSQL and AWS for large-scale operations.",
      "Impact: Automated, accurate attendance tracking that reduces manual errors and administrative workload.",
    ],
  },
  {
    title: "Wedding App",
    date: "June 2024 - Sep 2024",
    tech: ["React", "Node.js", "HTML", "CSS", "AWS", "Docker"],
    icon: "💍",
    highlights: [
      "Responsive web app for wedding planning: guest list, event scheduling, dynamic itineraries.",
      "Photo/video gallery with upload, organization, and advanced media features (download, rotate, zoom, share, favorite).",
      "Secure RESTful APIs and user authentication.",
      "Deployed on AWS with Docker for scalability and reliability.",
      "Impact: Intuitive, feature-rich platform that simplifies event and media management for users.",
    ],
  },
  {
    title: "Scalable User Management & Data Processing System",
    date: "Sep 2024 - Nov 2024",
    tech: ["Python", "FastAPI", "Azure Cloud", "SQL", "Machine Learning"],
    icon: "📊",
    highlights: [
      "Enterprise-grade platform for user management and large-scale data processing.",
      "JWT/OAuth2 authentication, RBAC, MFA, and secure RESTful APIs.",
      "Dynamic data pipelines for ingestion, transformation, and real-time analytics.",
      "Basic ML models for classification and predictive analytics.",
      "Azure Cloud deployment with Functions, SQL DB, caching, and load balancing.",
      "Impact: Robust, scalable, and secure solution for complex enterprise operations.",
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#181e29] to-[#10141a] text-blue-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-300 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-1 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-[#232a3a] to-[#181e29] rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:scale-[1.025] transition-transform border border-blue-900"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl">{project.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-100">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs text-blue-400 font-mono whitespace-nowrap">
                  {project.date}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs font-mono shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside text-blue-200 mb-2 space-y-1 text-sm md:text-base">
                {project.highlights.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
