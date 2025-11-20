import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Github, Mail } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const noiseBg =
  "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAAAAAAAAAABMTExERERmZmZVNjOnAAAACHRSTlMAMwAXYHGlwqBO5wAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABVSURBVDjLxZMxCgAgDAM1/v9DnSyouNglH7hC0jal0U0xc3H/9hH1U49sR2t18R7RWh28R7RWh2xH1E89sh2t1cV7RGt18R7RWh2yHVE/9ch2tFYX7xG7FzN5Bw2/ygAAAABJRU5ErkJggg==')"

interface ProjectItemProps {
  title: string
  stack: string[]
  desc: string
  link: string
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !cursorRef.current) return

    const cursor = cursorRef.current

    const moveCursor = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    }

    const hoverTargets = document.querySelectorAll<HTMLElement>(
      'a, button, .hover-target',
    )

    const hoverEffect = () => {
      cursor.classList.add('scale-[4]', 'bg-white', 'mix-blend-exclusion')
    }

    const removeHoverEffect = () => {
      cursor.classList.remove('scale-[4]', 'bg-white', 'mix-blend-exclusion')
    }

    window.addEventListener('mousemove', moveCursor)
    hoverTargets.forEach((element) => {
      element.addEventListener('mouseenter', hoverEffect)
      element.addEventListener('mouseleave', removeHoverEffect)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      hoverTargets.forEach((element) => {
        element.removeEventListener('mouseenter', hoverEffect)
        element.removeEventListener('mouseleave', removeHoverEffect)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 border border-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out mix-blend-difference"
    />
  )
}

function Navbar() {
  return (
    <nav className="fixed w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <a href="#" className="font-mono text-sm hover-target tracking-widest">
        [AVASH_N]
      </a>
      <div className="flex gap-4 md:gap-8">
        <a
          href="#work"
          className="font-mono text-xs md:text-sm hover-target hover:line-through decoration-white"
        >
          WORK
        </a>
        <a
          href="#stack"
          className="font-mono text-xs md:text-sm hover-target hover:line-through decoration-white"
        >
          STACK
        </a>
        <a
          href="#contact"
          className="font-mono text-xs md:text-sm hover-target hover:line-through decoration-white"
        >
          CONTACT
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  const containerRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.to('.reveal-text', {
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 relative bg-[#050505]"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full z-10 text-[#f0f0f0]">
        <div className="overflow-hidden mb-4">
          <p className="font-mono text-gray-500 reveal-text translate-y-full">
            FULL STACK & DEVOPS ENGINEER
          </p>
        </div>

        <h1 className="text-[12vw] leading-[0.9] font-bold tracking-tighter uppercase mix-blend-difference">
          <div className="overflow-hidden">
            <span className="block translate-y-full reveal-text">Avash</span>
          </div>
          <div className="overflow-hidden">
            <span
              className="block translate-y-full reveal-text text-transparent"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
            >
              Neupane
            </span>
          </div>
        </h1>

        <div className="mt-12 max-w-xl overflow-hidden">
          <p className="font-sans text-xl md:text-2xl leading-relaxed text-gray-300 reveal-text translate-y-full">
            Architecting scalable infrastructure and building intuitive
            interfaces. Simplifying complexity through code.
          </p>
        </div>

        <div className="mt-16 flex gap-6 overflow-hidden">
          <a
            href="https://github.com/Avashneupane9857"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-target border border-white/20 px-8 py-4 font-mono text-sm hover:bg-white hover:text-black transition-colors duration-300 reveal-text translate-y-full inline-flex items-center gap-2"
          >
            <Github size={16} /> GITHUB_Profile
          </a>
          <a
            href="mailto:reevasnp123@gmail.com"
            className="hover-target border border-white/20 px-8 py-4 font-mono text-sm hover:bg-white hover:text-black transition-colors duration-300 reveal-text translate-y-full inline-flex items-center gap-2"
          >
            <Mail size={16} /> EMAIL_Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 font-mono text-xs animate-bounce text-gray-500">
        (SCROLL)
      </div>
    </section>
  )
}

function TechStack() {
  const stackLabel =
    'TypeScript • Go • React • AWS • Kubernetes • Docker • Terraform • Next.js • Jenkins • Express • TailwindCSS • '

  return (
    <section id="stack" className="py-24 border-t border-white/10 bg-black overflow-hidden">
      <div className="border-y border-white/10 py-8 whitespace-nowrap flex">
        <div className="marquee inline-block">
          <span className="font-sans text-6xl md:text-8xl font-bold text-white/50 uppercase mr-12">
            {stackLabel}
          </span>
        </div>
        <div className="marquee inline-block" aria-hidden="true">
          <span className="font-sans text-6xl md:text-8xl font-bold text-white/50 uppercase mr-12">
            {stackLabel}
          </span>
        </div>
      </div>
    </section>
  )
}

function ProjectItem({ title, stack, desc, link }: ProjectItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-white/10 py-12 hover-target relative transition-all duration-500 hover:pl-8"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 z-10 relative">
        <h3
          className="text-4xl md:text-6xl font-bold text-white group-hover:text-transparent transition-colors"
          style={{ WebkitTextStroke: '1px transparent' }}
        >
          <span className="group-hover:hidden">{title}</span>
          <span
            className="hidden group-hover:block"
            style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
          >
            {title}
          </span>
        </h3>
        <div className="flex gap-4 font-mono text-xs text-gray-500 uppercase">
          {stack.map((tech) => (
            <span key={`${title}-${tech}`}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 max-w-xl text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 h-0 group-hover:h-auto overflow-hidden">
        {desc}
      </div>
    </a>
  )
}

function Work() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const projects: ProjectItemProps[] = [
    {
      title: 'Cloud Infrastructure',
      stack: ['Terraform', 'AWS', 'K8s'],
      desc: 'Automated provisioning of scalable cloud environments using Infrastructure as Code principles.',
      link: 'https://github.com/Avashneupane9857',
    },
    {
      title: 'Microservices API',
      stack: ['Go', 'Docker', 'gRPC'],
      desc: 'High-performance backend services containerized for efficiency and scalability.',
      link: 'https://github.com/Avashneupane9857',
    },
    {
      title: 'Full Stack Dashboard',
      stack: ['React', 'Next.js', 'Tailwind'],
      desc: 'Interactive data visualization platform with modern UI/UX patterns.',
      link: 'https://github.com/Avashneupane9857',
    },
  ]

  return (
    <section id="work" className="py-32 px-6 bg-[#050505]">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20 border-b border-white/20 pb-6">
          <h2 className="text-4xl font-bold text-white">SELECTED WORK</h2>
          <span className="font-mono text-sm text-gray-500">[01 - 03]</span>
        </div>
        <div className="space-y-0">
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TerminalSection() {
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const interval = window.setInterval(() => setCursorVisible((visible) => !visible), 500)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="max-w-4xl mx-auto font-mono text-sm md:text-base">
        <div className="bg-black border border-white/20 rounded-lg p-6 shadow-2xl">
          <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              <span className="text-white">➜</span> <span className="text-white">whoami</span>
            </p>
            <p className="pl-4">
              "Avash Neupane" <br />
              Based in the matrix. Passionate about bridging the gap between development and operations.
            </p>

            <p>
              <span className="text-white">➜</span> <span className="text-white">ls skills/devops</span>
            </p>
            <p className="pl-4 text-white">
              [ 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS_EC2', 'AWS_S3', 'CI/CD' ]
            </p>

            <p>
              <span className="text-white">➜</span> <span className="text-white">ls skills/web</span>
            </p>
            <p className="pl-4 text-white">[ 'TypeScript', 'React.js', 'Next.js', 'Express', 'GoLang' ]</p>

            <p>
              <span className="text-white">➜</span>
              <span className={`ml-2 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden bg-[#050505]"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <p className="font-mono text-sm mb-8 uppercase tracking-widest text-gray-400 z-10">Start a project</p>

      <a
        href="mailto:reevasnp123@gmail.com"
        className="hover-target text-[8vw] md:text-[6vw] font-bold leading-none text-[#f0f0f0] hover:scale-110 transition-transform duration-500 text-center mix-blend-difference z-10"
      >
        reevasnp123
        <br />
        @gmail.com
      </a>

      <div className="absolute bottom-10 w-full flex justify-between px-6 font-mono text-xs uppercase text-gray-500 z-10">
        <span>© 2024 Avash Neupane</span>
        <span>Github: @Avashneupane9857</span>
      </div>
    </section>
  )
}

function App() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="cursor-none bg-[#050505] min-h-screen selection:bg-white selection:text-black">
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-[0.05]"
        style={{ backgroundImage: noiseBg }}
      ></div>

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <Work />
        <TerminalSection />
      </main>

      <Contact />
    </div>
  )
}

export default App

