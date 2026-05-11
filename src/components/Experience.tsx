'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Packforce Pvt Ltd',
    period: 'May 2025 - Present',
    description:
      'Built and maintained a full-stack product from concept to production, handling frontend development with ReactJS, REST APIs with Node.js and ExpressJS, database management with MySQL and MongoDB, and cloud infrastructure on AWS. Developed and shipped new features end-to-end while maintaining existing production systems, leveraging AI-assisted development tools (OpenCode) to accelerate velocity. Managed all Git-based workflows and took full ownership of the product lifecycle from requirements gathering through deployment and ongoing maintenance.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Experience</h2>
          <p className="mb-12 text-muted-foreground">
            My professional journey so far.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-l-2 border-border pl-6"
            >
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-border bg-background" />
              <div className="mb-1 flex items-center gap-3">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">{exp.company}</span>
              </div>
              <p className="mb-2 text-xs text-muted-foreground">{exp.period}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
