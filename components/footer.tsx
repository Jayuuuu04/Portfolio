import Link from "next/link"
import { personalInfo, navLinks } from "@/lib/data"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-secondary">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">About</h3>
            <p className="text-secondary/80">{personalInfo.bio.substring(0, 100)}...</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-secondary/80 hover:text-secondary transition-colors relative inline-block
                    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/80 hover:text-secondary transition-colors p-2 rounded-full hover:bg-secondary/10"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/80 hover:text-secondary transition-colors p-2 rounded-full hover:bg-secondary/10"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/80 hover:text-secondary transition-colors p-2 rounded-full hover:bg-secondary/10"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary/20 text-center text-sm text-secondary/70">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
