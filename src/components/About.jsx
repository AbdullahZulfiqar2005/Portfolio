import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const About = () => {
  const highlights = [
    'Backend engineering with Node.js and Express',
    'Systems programming concepts in C and C++',
    'Linux (Arch + Hyprland), tooling, and daily‑driver workflows',
    'Database design, SQL queries, and data‑heavy applications',
    'Networking, operating systems, and how things work under the hood',
    'Academic exploration of AI / ML with a research‑oriented mindset',
    'Consistent contributions to real open‑source projects'
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Software engineer with a systems bias
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I&apos;m Abdullah, a BS Computer Science student at PUCIT (University of the Punjab),
                working across backend services, mobile, and web while keeping a strong focus on systems
                programming and Linux. I spend a lot of time understanding how operating systems,
                networks, and runtimes behave rather than treating them as black boxes.
              </p>

              <p>
                I actively contribute to open source and have multiple merged contributions in projects
                like OWASP ZAP (PRs #7013, #7058) and Haiku OS (tickets 19898, 19914). These
                contributions keep me close to real‑world codebases and long‑lived systems.
              </p>
              
              <p>
                Long term, I want to grow into a highly independent researcher‑engineer working in
                computational physics and systems research, while maintaining strong practical skills
                for production engineering. I prefer depth, clarity, and designs that age well over
                buzzwords and short‑term trends.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              What I'm Working On
            </h4>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle 
                    size={20} 
                    className="text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" 
                  />
                  <span className="text-gray-600 dark:text-gray-300">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-dark-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  Bachelors in Computer Science
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  PUCIT &mdash; University of the Punjab
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  Open Source Contributor
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  OWASP ZAP • Haiku OS • CERN ROOT
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 