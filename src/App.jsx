import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const navItems = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' }
    ],
    []
  )

  useEffect(() => {
    const sectionIds = navItems.map((i) => i.id)
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (nodes.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id)
      },
      { root: null, rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.1, 0.2, 0.35] }
    )

    nodes.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [navItems])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-dark-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Global background */}
      <div className="pointer-events-none fixed inset-0 opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(56,189,248,0.18)_0%,rgba(0,0,0,0)_60%)] dark:bg-[radial-gradient(60%_50%_at_10%_10%,rgba(56,189,248,0.20)_0%,rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_90%_15%,rgba(168,85,247,0.18)_0%,rgba(0,0,0,0)_60%)] dark:bg-[radial-gradient(55%_45%_at_90%_15%,rgba(168,85,247,0.20)_0%,rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0))] dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      </div>

      {/* Mobile top bar */}
      <nav
        className={`md:hidden fixed top-0 w-full z-50 transition-colors duration-300 ${
          darkMode
            ? 'bg-dark-800/80 backdrop-blur-md border-b border-dark-700'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
        }`}
      >
        <div className="container-custom px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-bold gradient-text">AZ</div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode ? 'text-yellow-300 hover:bg-dark-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode ? 'text-gray-200 hover:bg-dark-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`border-t ${darkMode ? 'border-dark-700' : 'border-gray-200'}`}
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-2 px-3 rounded-lg font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? darkMode
                          ? 'bg-dark-700 text-white'
                          : 'bg-gray-100 text-gray-900'
                        : darkMode
                          ? 'text-gray-300 hover:bg-dark-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Desktop sidebar layout */}
      <div className="relative z-10 md:grid md:grid-cols-[280px_1fr] md:gap-10 md:items-start">
        <aside className="hidden md:block sticky top-0 h-screen px-6 py-10">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200/70 dark:border-dark-700/70 bg-white/70 dark:bg-dark-800/60 backdrop-blur-md p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xl font-bold tracking-tight">Abdullah Zulfiqar</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Software Engineer
                </div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Systems • Backend • Mobile • Web • Open Source
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-xl transition-colors duration-200 ${
                  darkMode ? 'text-yellow-300 hover:bg-dark-700' : 'text-gray-800 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>

            <div className="mt-6 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? darkMode
                          ? 'bg-dark-700 text-white'
                          : 'bg-gray-100 text-gray-900'
                        : darkMode
                          ? 'text-gray-300 hover:bg-dark-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navActiveDot"
                        className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://github.com/AbdullahZulfiqar2005"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl transition-colors duration-200 ${
                  darkMode ? 'text-gray-200 hover:bg-dark-700' : 'text-gray-800 hover:bg-gray-100'
                }`}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-zulfiqar-7a4240287"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl transition-colors duration-200 ${
                  darkMode ? 'text-gray-200 hover:bg-dark-700' : 'text-gray-800 hover:bg-gray-100'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:abdullahzulfiqar580@gmail.com"
                className={`p-2 rounded-xl transition-colors duration-200 ${
                  darkMode ? 'text-gray-200 hover:bg-dark-700' : 'text-gray-800 hover:bg-gray-100'
                }`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </aside>

        <main className="pt-16 md:pt-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-colors duration-200 z-50 ${
          darkMode
            ? 'bg-dark-700 hover:bg-dark-600 text-white border border-dark-600'
            : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-200'
        }`}
      >
        <ChevronDown className="rotate-180" size={20} />
      </motion.button>
    </div>
  )
}

export default App
