'use client'

import { motion } from 'framer-motion'

type Skill = {
  name: string
  category: string
}

const skills: Skill[] = [
  { name: 'ReactJS', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'JavaScript (ES6)', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'ExpressJS', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'AWS', category: 'Cloud & Tools' },
  { name: 'Docker', category: 'Cloud & Tools' },
  { name: 'Kubernetes', category: 'Cloud & Tools' },
  { name: 'Git', category: 'Cloud & Tools' },
  { name: 'OpenCode', category: 'Cloud & Tools' },
]

const categories = [...new Set(skills.map((s) => s.category))]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Skills</h2>
          <p className="mb-12 text-muted-foreground">
            Technologies I work with and tools in my stack.
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {category}
              </h3>
              <p className="text-sm leading-relaxed text-foreground">
                {skills.filter((s) => s.category === category).map((s) => s.name).join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
