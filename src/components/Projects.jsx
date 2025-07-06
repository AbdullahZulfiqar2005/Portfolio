import { motion } from 'framer-motion'
import { Github, ExternalLink, Database, Smartphone, Monitor, Globe, Gamepad2 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "NADRA Database System",
      description: "A comprehensive database management system for NADRA records with secure authentication, data validation, and reporting features.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AbdullahZulfiqar2005/nadra-database",
      demo: "#",
      icon: <Database size={24} />,
      category: "Web Development"
    },
    {
      title: "Bus Tracking App",
      description: "Real-time bus tracking application built with Flutter and Firebase, featuring live location updates and route optimization.",
      tech: ["Flutter", "Firebase", "Dart", "Google Maps API"],
      github: "https://github.com/AbdullahZulfiqar2005/bus-tracking-app",
      demo: "#",
      icon: <Smartphone size={24} />,
      category: "Mobile Development"
    },
    {
      title: "Custom Linux Distro",
      description: "Personalized Ubuntu-based Linux distribution with Hyprland window manager, custom scripts, and optimized performance.",
      tech: ["Ubuntu", "Hyprland", "Bash", "Linux", "System Administration"],
      github: "https://github.com/AbdullahZulfiqar2005/custom-linux",
      demo: "#",
      icon: <Monitor size={24} />,
      category: "System Administration"
    },
    {
      title: "Google Homepage Clone",
      description: "A pixel-perfect clone of Google's homepage with responsive design and interactive search functionality.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/AbdullahZulfiqar2005/google-clone",
      demo: "#",
      icon: <Globe size={24} />,
      category: "Web Development"
    },
    {
      title: "Chess Game",
      description: "Interactive chess game with move validation, game state management, and a clean user interface.",
      tech: ["HTML", "CSS", "JavaScript", "Game Logic"],
      github: "https://github.com/AbdullahZulfiqar2005/chess-game",
      demo: "#",
      icon: <Gamepad2 size={24} />,
      category: "Game Development"
    }
  ]

  const categories = ["All", "Web Development", "Mobile Development", "System Administration", "Game Development"]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent projects and technical implementations
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-dark-700"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    {project.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
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
          className="text-center mt-16"
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