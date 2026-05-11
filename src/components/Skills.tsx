'use client'

import { motion } from 'framer-motion'

type Skill = {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: 'ReactJS', level: 85, category: 'Frontend' },
  { name: 'Next.js', level: 50, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 70, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'ExpressJS', level: 80, category: 'Backend' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'MySQL', level: 70, category: 'Database' },
  { name: 'AWS', level: 65, category: 'Cloud & Tools' },
  { name: 'Docker', level: 40, category: 'Cloud & Tools' },
  { name: 'Kubernetes', level: 30, category: 'Cloud & Tools' },
  { name: 'Git', level: 80, category: 'Cloud & Tools' },
  { name: 'OpenCode', level: 75, category: 'Cloud & Tools' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))]

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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-10"
        >
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
