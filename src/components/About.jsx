import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const About = () => {
  const highlights = [
    "Backend development with Node.js and Python",
    "Web development with React and Next.js",
    "Mobile development",
    "Linux customization and system administration",
    "System Programming and low-level development",
    "Freelancing preparation and client communication", 
    "Active open source contributor"
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
              Computer Science Student & Tech Enthusiast
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate Computer Science student at PUCIT, currently in my 5th semester. 
                My journey in technology started with a curiosity about how systems work, which 
                led me to explore system programming, DevOps practices, and Linux administration.
              </p>
              
              <p>
                I believe in the power of open source and actively contribute to projects that 
                align with my interests. My goal is to become a Google Summer of Code contributor 
                and work on impactful projects that solve real-world problems.
              </p>
              
              <p>
                When I'm not coding, you'll find me customizing my Linux setup, exploring new 
                technologies, or solving algorithmic challenges on LeetCode to sharpen my 
                problem-solving skills.
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
              className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-dark-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  200+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  LeetCode Problems
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  5th
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Semester
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