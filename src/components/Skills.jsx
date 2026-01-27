import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Languages',
    subtitle: 'Day‑to‑day programming and problem solving.',
    type: 'logos',
    skills: [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' }
    ]
  },
  {
    title: 'Backend & Systems',
    subtitle: 'Where I push for depth and reliability.',
    type: 'logos',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'Linux (Arch)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Docker (basic)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ]
  },
  {
    title: 'Mobile & Frontend',
    subtitle: 'Interfaces when the problem needs a clear surface.',
    type: 'logos',
    skills: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'React (basic)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
    ]
  },
  {
    title: 'Core CS',
    subtitle: 'Foundations that shape how I design systems.',
    type: 'list',
    items: [
      'Data Structures & Algorithms',
      'Object‑Oriented Programming',
      'Databases (MySQL, Oracle)',
      'Computer Networks (Kurose)',
      'Cyber Security basics'
    ]
  },
  {
    title: 'Tools',
    subtitle: 'Everyday tooling for building and shipping.',
    type: 'logos',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' }
    ]
  },
  {
    title: 'Learning & Research',
    subtitle: 'Deliberate long‑term directions.',
    type: 'list',
    items: [
      'AI / Machine Learning (academic, research‑oriented)',
      'Distributed systems and reliability',
      'Foundations for computational physics'
    ]
  }
]

const cardVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  inView: { opacity: 1, y: 0, scale: 1 }
}

const Skills = () => {
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
            Skills &amp; <span className="gradient-text">Tooling</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A broader view of the stack I&apos;m comfortable with&mdash;from low‑level systems to user‑facing apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative rounded-2xl border border-gray-200/80 dark:border-dark-700/80 bg-white/95 dark:bg-dark-800/95 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-gradient-to-br from-primary-500 via-purple-500 to-sky-500 transition-opacity duration-300 pointer-events-none" />
              <div className="p-6 relative z-10">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {group.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {group.subtitle}
                </p>

                {group.type === 'logos' && (
                  <div className="grid grid-cols-3 gap-3">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.06, rotate: 0.5 }}
                        className="flex flex-col items-center justify-center rounded-xl bg-gray-50 dark:bg-dark-700/80 px-2 py-3"
                      >
                        <div className="w-9 h-9 mb-2 flex items-center justify-center">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="max-w-full max-h-full"
                          />
                        </div>
                        <span className="text-[11px] font-medium text-gray-700 dark:text-gray-200 text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {group.type === 'list' && (
                  <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
