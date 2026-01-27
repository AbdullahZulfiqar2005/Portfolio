import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, GitBranch, Database, Cpu } from 'lucide-react'

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
            Work, open source, and hands‑on engineering across the stack.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 p-6"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    BS Computer Science
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    PUCIT &mdash; University of the Punjab, Lahore
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={16} />
                <span>Ongoing</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Focused on operating systems, computer networks, databases, and information security.</li>
              <li>Projects emphasize database design, queries, and reliable backend behaviour.</li>
            </ul>
          </motion.div>

          {/* Freelance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 p-6"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Freelance Software Developer
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Security‑adjacent tooling + backend modules
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={16} />
                <span>Present</span>
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div className="rounded-lg bg-gray-50 dark:bg-dark-700/60 p-4 border border-gray-200/70 dark:border-dark-600/60">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">
                    Android reverse engineering (authorized)
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    Decompiled an Android application to trace an integrity check triggered during app startup, and
                    mapped the control flow to the relevant classes and methods.
                  </li>
                  <li>
                    Produced a test build with patched logic to disable the integrity gate for research / QA and
                    re‑signed the APK for controlled distribution.
                  </li>
                  <li>
                    Implemented UI changes by editing resources (layouts, strings, drawables) without access to the
                    original source code.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-gray-50 dark:bg-dark-700/60 p-4 border border-gray-200/70 dark:border-dark-600/60">
                <div className="flex items-center gap-2 mb-2">
                  <Database size={16} className="text-primary-600 dark:text-primary-400" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">
                    FBR digital invoicing module
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    Designed and implemented a Python backend module to generate FBR‑compliant digital invoices,
                    including tax calculation and validation rules.
                  </li>
                  <li>
                    Integrated the module into a MySQL‑backed workflow and automated PDF invoice generation for
                    client operations.
                  </li>
                  <li>
                    Focused on correctness and maintainability: clear data models, predictable formatting, and
                    repeatable generation.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Open Source & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 p-6"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <GitBranch size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Open Source &amp; Community
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Real contributions to long‑lived projects.
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/AbdullahZulfiqar2005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                <ExternalLink size={16} />
                <span>GitHub profile</span>
              </a>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Active GitHub contributor with a focus on tooling, backend logic, and systems behaviour.</li>
              <li>
                Merged pull requests in <span className="font-medium">OWASP ZAP</span> (PRs #7013, #7058),
                working in a large security‑focused Java codebase.
              </li>
              <li>
                Contributions to <span className="font-medium">Haiku OS</span> (tickets 19898, 19914), touching a
                real operating system stack.
              </li>
            </ul>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 p-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Current Direction
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Building depth in systems while staying practical about shipped software.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-white">Short‑ to mid‑term</h4>
                <ul className="space-y-1">
                  <li>Backend engineering roles with a focus on reliability and correctness.</li>
                  <li>Systems‑aware development on Linux, networking, and infrastructure‑heavy projects.</li>
                  <li>Opportunities that value clear thinking over buzzwords.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-white">Long‑term</h4>
                <ul className="space-y-1">
                  <li>Independent researcher‑engineer at the intersection of computing and physics.</li>
                  <li>AI / ML work grounded in strong mathematical and systems foundations.</li>
                  <li>Contributing to open, long‑lived infrastructure and research tools.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Location / Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 p-6 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <MapPin size={18} className="text-primary-600 dark:text-primary-400" />
              <span>Lahore, Pakistan &mdash; open to remote opportunities.</span>
            </div>
            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Contact for software engineering roles
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience 