import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    // Programming Languages
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", category: "Languages" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "Languages" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Languages" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Languages" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Languages" },
    
    // Tools & Technologies
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "Tools" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "Tools" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Tools" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Tools" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "Tools" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", category: "Tools" }
  ]

  const categories = [
    { name: "Programming Languages", color: "from-blue-500 to-indigo-600", bgColor: "from-blue-50 to-indigo-50", borderColor: "border-blue-200", darkBg: "dark:from-blue-900/20 dark:to-indigo-900/20", darkBorder: "dark:border-blue-800" },
    { name: "Tools & Technologies", color: "from-emerald-500 to-teal-600", bgColor: "from-emerald-50 to-teal-50", borderColor: "border-emerald-200", darkBg: "dark:from-emerald-900/20 dark:to-teal-900/20", darkBorder: "dark:border-emerald-800" }
  ]

  const getSkillsByCategory = (categoryName) => {
    return skills.filter(skill => skill.category === categoryName.split(' ')[0] || 
      (categoryName === "Programming Languages" && skill.category === "Languages") ||
      (categoryName === "Tools & Technologies" && skill.category === "Tools"))
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${category.bgColor} ${category.darkBg} border ${category.borderColor} ${category.darkBorder} shadow-lg`}
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {category.name}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {getSkillsByCategory(category.name).map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-dark-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700 group-hover:-translate-y-2 group-hover:scale-105">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-dark-700 group-hover:bg-white dark:group-hover:bg-dark-600 transition-colors duration-300">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🚀</span>
              </div>
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Kubernetes", "AWS", "CI/CD", "Microservices", 
                "React", "Node.js", "MongoDB", "Redis"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
