const projects = [
  {
    title: "AI-Powered Document Q&A System",
    date: "Jun 2025 - Present",
    tech: ["Python", "LangChain", "FastAPI", "OpenAI"],
    icon: "🤖",
    highlights: [
      "AI-driven question-answering platform for querying millions of documents with near-instant responses.",
      "Built with Python, LangChain, FastAPI, and OpenAI for advanced NLP and scalable backend.",
      "Handles large-scale document ingestion and semantic search.",
      "Impact: Enables users to extract insights and answers from massive document collections efficiently.",
    ],
  },
  {
    title: "Business Card",
    date: "Sep 2025 - Oct 2025",
    tech: ["React", "Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    icon: "💼",
    highlights: [
      "Full-stack app with React/Next.js frontend and FastAPI backend.",
      "Features QR code generation, profile management, and real-time contact sharing.",
      "Comprehensive settings: photo uploads, password management, responsive UI.",
      "Custom business card themes, QR code scanning, social media integration, secure authentication.",
      "Impact: Perfect for networking events and professional connections with mobile-first design.",
    ],
  },
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
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm font-mono">{project.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm font-medium border border-gray-500/30">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Project Highlights */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Key Features & Impact
                </h4>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 leading-relaxed"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-500"></div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-60 float"></div>
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full opacity-60 float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-300 font-medium">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>More projects available on GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
