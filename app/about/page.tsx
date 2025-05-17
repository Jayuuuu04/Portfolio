import type { Metadata } from "next"
import Image from "next/image"
import { personalInfo } from "@/lib/data"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { CertificationsSection } from "@/components/certifications-section"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my experience, skills, and background",
}

export default function AboutPage() {
  return (
    <div>
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="sticky top-24 space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={personalInfo.profileImage || "/placeholder.svg"}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
                <p className="text-muted-foreground">{personalInfo.title}</p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center text-sm">
                  <span className="font-medium mr-2">Location:</span>
                  <span className="text-muted-foreground">{personalInfo.location}</span>
                </p>
                <p className="flex items-center text-sm">
                  <span className="font-medium mr-2">Email:</span>
                  <span className="text-muted-foreground">{personalInfo.email}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">About Me</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>{personalInfo.bio}</p>
                <p>
                  I'm passionate about building robust, scalable backend systems that power modern applications. My
                  expertise spans across various technologies and frameworks, with a focus on creating efficient,
                  maintainable, and secure solutions.
                </p>
                <p>
                  Throughout my career, I've worked on a diverse range of projects, from high-traffic APIs to complex
                  data processing systems. I enjoy tackling challenging problems and continuously learning new
                  technologies to stay at the forefront of backend development.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Work Objective</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  My goal is to leverage my technical expertise to build scalable, efficient backend systems that solve
                  real-world problems. I aim to contribute to projects that challenge me technically while making a
                  positive impact through technology.
                </p>
                <p>
                  I'm particularly interested in distributed systems, cloud architecture, and performance optimization.
                  I believe in writing clean, maintainable code and implementing best practices for long-term success.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
    </div>
  )
}
