"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Code, Server, Database } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle settings
    const particlesArray: Particle[] = []
    const numberOfParticles = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(44, 62, 80, ${Math.random() * 0.2})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    // Connect particles with lines
    function connect() {
      const maxDistance = 150
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(44, 62, 80, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      connect()
      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-secondary">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating elements */}
      <div
        className="absolute top-20 left-[10%] w-16 h-16 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-40 right-[15%] w-20 h-20 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-[20%] w-24 h-24 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating icons */}
      <div className="absolute top-1/4 left-[5%] text-primary/20 animate-float" style={{ animationDelay: "1.5s" }}>
        <Code size={40} />
      </div>
      <div className="absolute bottom-1/3 right-[8%] text-primary/20 animate-float" style={{ animationDelay: "0.5s" }}>
        <Server size={40} />
      </div>
      <div className="absolute top-2/3 left-[15%] text-primary/20 animate-float" style={{ animationDelay: "2.5s" }}>
        <Database size={40} />
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                {personalInfo.name}
              </h1>
              <div className="h-1 w-20 bg-primary rounded"></div>
              <p className="text-xl text-primary/80 font-medium">{personalInfo.title}</p>
              <p className="max-w-[700px] text-primary/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {personalInfo.tagline}
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="/projects">
                <Button className="w-full min-[400px]:w-auto bg-primary text-secondary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-primary text-primary hover:bg-primary/10 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Contact Me
                </Button>
              </Link>
              <Link href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/30 rounded-full animate-pulse-slow"></div>
              <div
                className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-full animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Profile image */}
              <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-primary shadow-2xl z-10">
                <Image
                  src={personalInfo.profileImage || "/placeholder.svg"}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>

              {/* Background shape */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
