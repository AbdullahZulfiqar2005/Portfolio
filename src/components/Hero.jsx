import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/assets/Abdullah-Zulfiqar-resume.pdf'
    link.download = 'Abdullah-Zulfiqar-Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Subtle animated background */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary-500/20 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-purple-500/25 blur-3xl"
          animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Picture */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl overflow-hidden">
            <img 
              src="/assets/me.png" 
              alt="Abdullah Zulfiqar" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold" style={{display: 'none'}}>
              AZ
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="gradient-text">Abdullah Zulfiqar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto"
        >
          Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I am a Software Engineer from PUCIT and an open-source enthusiast with a passion for systems programming and backend engineering. A daily Arch Linux user, I love solving problems at the kernel level as much as building scalable web and android applications.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <a
            href="https://github.com/AbdullahZulfiqar2005"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
          >
            <Github size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          </a>
          <a
            href="mailto:abdullahzulfiqar580@gmail.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
          >
            <Mail size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-zulfiqar-7a4240287"
            className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
          >
            <Linkedin size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button 
            onClick={handleDownloadResume}
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </button>
          <button 
            onClick={scrollToAbout}
            className="btn-secondary"
          >
            Learn More
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ChevronDown size={24} className="text-gray-600 dark:text-gray-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 