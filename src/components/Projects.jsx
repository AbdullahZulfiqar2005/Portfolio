import { motion } from 'framer-motion'
import { Github, ExternalLink, Database, Smartphone, Monitor, Globe, Gamepad2, MessageSquare, Stethoscope, BarChart3 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Global Chat Application",
      description: "A real-time chat application built on Node.js and Express with MongoDB, with a schema designed around conversation history, indexing, and efficient queries. Uses Firebase authentication for secure user management.",
      tech: ["Node.js", "Express", "MongoDB", "Firebase", "Socket.io"],
      github: "https://github.com/AbdullahZulfiqar2005/Chat-App",
      demo: "https://chat-app-two-plum-14.vercel.app/",
      icon: <MessageSquare size={24} />,
      category: "Web Development",
      inProgress: false
    },
    {
      title: "Bus Tracking System",
      description: "Real-time bus tracking application built with Flutter and Firebase, featuring live location updates and route optimization.",
      tech: ["Flutter", "Firebase", "Dart", "Google Maps API"],
      github: "https://github.com/AbdullahZulfiqar2005/Bus-tracking-system",
      demo: "https://youtu.be/xAUz_XMPrqw",
      icon: <Smartphone size={24} />,
      category: "Mobile Development",
      inProgress: false
    },
    {
      title: "Arch Hyprland Dotfiles",
      description: "Customized Arch Linux with Hyprland window manager and dot files for a seamless and efficient desktop experience, inspired with JaKooLit's Hyprland.",
      tech: ["Arch", "Hyprland", "Bash", "Linux", "Dotfiles"],
      github: "https://github.com/AbdullahZulfiqar2005/custom-linux",
      demo: "https://github.com/AbdullahZulfiqar2005/Arch-Hyprland-Dot-Files/blob/main/images/output.gif",
      icon: <Monitor size={24} />,
      category: "System Administration",
      inProgress: false
    },
    {
      title: "NADRA Database System",
      description: "A database-driven system for managing NADRA-style records. Focused on relational schema design, SQL queries, and role-based access with basic authentication, validation, and reporting.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AbdullahZulfiqar2005/NADRA-Database",
      icon: <Database size={24} />,
      category: "Web Development",
      inProgress: false
    },
    {
      title: "Data Analysis & Visualization",
      description: "A Python-based toolchain for exploring CSV, Excel, and JSON data with a small web UI. Emphasis on data pipelines, transformation, and query-like analysis over interactive visual polish.",
      tech: ["Python", "Flask", "Pandas", "Matplotlib", "Plotly", "JavaScript"],
      github: "https://github.com/AbdullahZulfiqar2005/data-visualization",
      demo: "https://youtu.be/G7XE-2b_-54",
      icon: <BarChart3 size={24} />,
      category: "Web Development",
      inProgress: false
    },
    {
      title: "MedicAI Center",
      description: "A comprehensive healthcare application that helps patients connect with doctors, scan and manage medical records, get AI-powered medical assistance, and voice-based support for better healthcare accessibility.",
      tech: ["React", "Node.js", "MongoDB", "AI/ML", "Voice API"],
      icon: <Stethoscope size={24} />,
      category: "Web Development",
      inProgress: true
    },
    {
      title: "Google Homepage Clone",
      description: "A pixel-perfect clone of Google's homepage with responsive design and interactive search functionality.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/AbdullahZulfiqar2005/google-clone",
      demo: "http://abdullahzulfiqar2005.github.io/Google-Clone",
      icon: <Globe size={24} />,
      category: "Mini-Project",
      inProgress: false
    },
    {
      title: "Chess Game",
      description: "Interactive chess game with move validation, game state management, and a clean user interface.",
      tech: ["HTML", "CSS", "JavaScript", "Game Logic"],
      github: "https://github.com/AbdullahZulfiqar2005/chess-game",
      demo: "http://abdullahzulfiqar2005.github.io/Chess",
      icon: <Gamepad2 size={24} />,
      category: "Mini-Project",
      inProgress: false
    }
  ]

  const categories = ["All", "Web Development", "Mobile Development", "System Administration", "Mini-Project"]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent projects and technical implementations
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-dark-700"
            >
              {/* Project Header */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4 gap-3">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <span className="[&>*]:w-5 [&>*]:h-5 sm:[&>*]:w-6 sm:[&>*]:h-6">{project.icon}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.inProgress && (
                      <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                        In Progress
                      </span>
                    )}
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, techIndex) => {
                    const visibility =
                      techIndex < 4 ? '' : techIndex < 6 ? 'hidden sm:inline-flex' : 'hidden'

                    return (
                    <span
                      key={techIndex}
                      className={`text-[11px] sm:text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full ${visibility}`}
                    >
                      {tech}
                    </span>
                    )
                  })}
                  {project.tech.length > 4 && (
                    <span className="sm:hidden text-[11px] font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded-full">
                      +{project.tech.length - 4}
                    </span>
                  )}
                  {project.tech.length > 6 && (
                    <span className="hidden sm:inline-flex text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded-full">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/AbdullahZulfiqar2005"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 