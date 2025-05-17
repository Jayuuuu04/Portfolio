"use client"

import { useState, useRef, useEffect } from "react"
import { skills } from "@/lib/data"
import * as LucideIcons from "lucide-react"
import { motion, useInView } from "framer-motion"

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Set the first category as active when the component mounts
  useEffect(() => {
    if (skills.length > 0) {
      setActiveCategory(skills[0].category)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden skills-pattern">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[20%] h-[20%] rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[20%] h-[20%] rounded-full bg-secondary/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Modern heading with horizontal line */}
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center"
          >
            <div className="h-px w-12 bg-secondary/50 mr-6 hidden md:block"></div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
              Technology Stack
            </h2>
            <div className="h-px w-12 bg-secondary/50 ml-6 hidden md:block"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-secondary/80 md:text-xl/relaxed"
          >
            Specialized tools and technologies I use to build robust backend solutions
          </motion.p>
        </div>

        {/* Category tabs - horizontal scrolling on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex overflow-x-auto pb-4 mb-12 hide-scrollbar"
        >
          <div className="flex space-x-4 mx-auto">
            {skills.map((category, index) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.category
                    ? "bg-secondary text-primary shadow-lg"
                    : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {getIconForCategory(category.category)}
                  <span>{category.category}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Modern flowing skill visualization */}
        <div className="relative">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0 }}
              animate={activeCategory === category.category ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`${activeCategory === category.category ? "block" : "hidden"}`}
            >
              {/* Flowing skill layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((skill, index) => {
                  // @ts-ignore - Dynamically access Lucide icons
                  const Icon = LucideIcons[skill.icon] || LucideIcons.Code

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <div className="relative">
                        {/* Skill visualization with progress bar */}
                        <div className="flex flex-col items-center p-6 bg-secondary/10 backdrop-blur-sm rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 h-full">
                          {/* Icon with glowing effect */}
                          <div className="relative mb-4">
                            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-md transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-secondary/20 rounded-full mb-2 group-hover:bg-secondary/30 transition-colors duration-300">
                              <Icon className="h-8 w-8 text-secondary" />
                            </div>
                          </div>

                          {/* Skill name */}
                          <h3 className="text-secondary font-medium text-lg mb-2 text-center">{skill.name}</h3>

                          {/* Skill description */}
                          <p className="text-secondary/70 text-sm text-center">{getSkillDescription(skill.name)}</p>

                          {/* Skill proficiency indicator */}
                          <div className="w-full mt-4 bg-secondary/10 rounded-full h-1.5">
                            <div
                              className="bg-secondary h-1.5 rounded-full transition-all duration-1000"
                              style={{ width: `${getSkillProficiency(skill.name)}%` }}
                            ></div>
                          </div>
                          <div className="mt-2 text-xs text-secondary/60">
                            {getProficiencyLabel(getSkillProficiency(skill.name))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper function to get an icon for each category
function getIconForCategory(category: string) {
  switch (category) {
    case "Programming Languages":
      return <LucideIcons.Code2 className="h-4 w-4" />
    case "Frameworks & Libraries":
      return <LucideIcons.Library className="h-4 w-4" />
    case "Databases":
      return <LucideIcons.Database className="h-4 w-4" />
    case "DevOps & Cloud":
      return <LucideIcons.Cloud className="h-4 w-4" />
    case "Tools & Others":
      return <LucideIcons.Wrench className="h-4 w-4" />
    default:
      return <LucideIcons.Star className="h-4 w-4" />
  }
}

// Helper function to get a description for each skill
function getSkillDescription(skill: string): string {
  const descriptions: Record<string, string> = {
    JavaScript: "Building interactive web applications",
    TypeScript: "Type-safe JavaScript development",
    Python: "Backend development and data processing",
    Java: "Enterprise application development",
    Go: "High-performance microservices",
    "Node.js": "Server-side JavaScript runtime",
    "Express.js": "Web application framework for Node.js",
    Django: "High-level Python web framework",
    Flask: "Lightweight Python web framework",
    "Spring Boot": "Java-based enterprise framework",
    PostgreSQL: "Advanced open source database",
    MongoDB: "NoSQL document database",
    MySQL: "Popular relational database",
    Redis: "In-memory data structure store",
    Elasticsearch: "Search and analytics engine",
    Docker: "Container platform",
    Kubernetes: "Container orchestration",
    AWS: "Cloud computing services",
    GCP: "Google's cloud platform",
    "CI/CD": "Continuous integration/deployment",
    Git: "Version control system",
    "RESTful APIs": "API architectural style",
    GraphQL: "API query language",
    Microservices: "Distributed system architecture",
    "System Design": "Designing scalable systems",
  }

  return descriptions[skill] || `Expert in ${skill}`
}

// Helper function to get a proficiency level for each skill (0-100)
function getSkillProficiency(skill: string): number {
  const proficiencies: Record<string, number> = {
    JavaScript: 90,
    TypeScript: 85,
    Python: 95,
    Java: 80,
    Go: 75,
    "Node.js": 92,
    "Express.js": 90,
    Django: 88,
    Flask: 85,
    "Spring Boot": 78,
    PostgreSQL: 92,
    MongoDB: 88,
    MySQL: 90,
    Redis: 85,
    Elasticsearch: 80,
    Docker: 90,
    Kubernetes: 85,
    AWS: 88,
    GCP: 82,
    "CI/CD": 90,
    Git: 95,
    "RESTful APIs": 95,
    GraphQL: 85,
    Microservices: 90,
    "System Design": 88,
  }

  return proficiencies[skill] || 80 // Default to 80% if not specified
}

// Helper function to get a label for proficiency level
function getProficiencyLabel(proficiency: number): string {
  if (proficiency >= 90) return "Expert"
  if (proficiency >= 80) return "Advanced"
  if (proficiency >= 70) return "Proficient"
  if (proficiency >= 50) return "Intermediate"
  return "Beginner"
}
