import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Plus, Trophy, Users, Award } from 'lucide-react'

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-12 border border-primary-200 dark:border-primary-800"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <Briefcase size={32} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Actively Seeking Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm currently looking for internships, freelance projects, and entry-level positions 
                in software development, DevOps, and system administration. I'm passionate about 
                learning and contributing to meaningful projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  Open to Internships
                </span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  Freelance Projects
                </span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  Entry-Level Positions
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hackathon Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center flex items-center justify-center">
              <Trophy size={28} className="mr-3 text-yellow-500" />
              Hackathon Experience
            </h3>
            
            <div className="grid md:grid-cols-1 gap-8">
              {/* Organizing Hackathons */}
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-dark-700">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-4">
                    <Users size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Organizing Events
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Organized PUCIT Hackathon 2024 with 100+ participants</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Coordinated technical workshops and coding competitions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Managed event logistics and participant registration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Led team of 15 volunteers for smooth event execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* What I'm Looking For */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-dark-700">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <Plus size={20} className="mr-2 text-primary-600 dark:text-primary-400" />
                Areas of Interest
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Software Development (C/C++, Python, Java)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>DevOps & Cloud Infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>System Administration & Linux</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Web Development (Full Stack)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Open Source Contributions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-dark-700">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <Calendar size={20} className="mr-2 text-primary-600 dark:text-primary-400" />
                Availability
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Part-time during semester</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Full-time during breaks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Remote work preferred</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Flexible with time zones</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Immediate start available</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in working together? Let's discuss how I can contribute to your team!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/AbdullahZulfiqar2005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <ExternalLink size={20} />
                <span>View GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience 