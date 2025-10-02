const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", level: 90, color: "from-gray-500 to-gray-700" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
      {
        name: "JavaScript (ES6+)",
        level: 95,
        color: "from-yellow-500 to-orange-500",
      },
      { name: "HTML5 & CSS3", level: 90, color: "from-orange-500 to-red-500" },
      { name: "Tailwind CSS", level: 88, color: "from-cyan-400 to-blue-500" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 80, color: "from-green-500 to-green-700" },
      { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
      { name: "FastAPI", level: 82, color: "from-teal-500 to-cyan-500" },
      { name: "PostgreSQL", level: 75, color: "from-blue-700 to-blue-900" },
      { name: "Git & GitHub", level: 90, color: "from-gray-600 to-gray-800" },
      { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" },
    ],
  },
  {
    title: "Design & AI",
    skills: [
      { name: "UI/UX Design", level: 85, color: "from-pink-500 to-purple-500" },
      { name: "Figma", level: 88, color: "from-purple-500 to-pink-500" },
      { name: "Agentic AI", level: 80, color: "from-indigo-500 to-purple-500" },
      {
        name: "Machine Learning",
        level: 70,
        color: "from-orange-500 to-red-500",
      },
      { name: "REST APIs", level: 85, color: "from-green-400 to-green-600" },
      { name: "AWS", level: 75, color: "from-orange-400 to-orange-600" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">
                        {skill.name}
                      </h4>
                      <span className="text-sm text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "LangChain",
              "OpenAI",
              "Redis",
              "Azure Cloud",
              "Machine Learning",
              "Facial Recognition",
              "QR Code Generation",
              "Real-time Analytics",
              "Load Balancing",
              "Microservices",
              "JWT Authentication",
              "OAuth2",
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
