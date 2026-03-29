import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Github } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

const noiseBg =
  "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAAAAAAAAAABMTExERERmZmZVNjOnAAAACHRSTlMAMwAXYHGlwqBO5wAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABVSURBVDjLxZMxCgAgDAM1/v9DnSyouNglH7hC0jal0U0xc3H/9hH1U49sR2t18R7RWh28R7RWh2xH1E89sh2t1cV7RGt18R7RWh2yHVE/9ch2tFYX7xG7FzN5Bw2/ygAAAABJRU5ErkJggg==')"

interface ProjectItemProps {
  title: string
  stack: string[]
  desc: string
  /** If set, shown as the only navigable link inside the expanded description */
  externalHref?: string
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
    <nav className="fixed w-full z-40 px-6 py-6 mix-blend-difference text-white">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <a href="#" className="font-mono text-sm hover-target tracking-widest">
          [AVASH_N]
        </a>
        <div className="flex gap-4 md:gap-8">
          <a
            href="#experience"
            className="font-mono text-xs md:text-sm hover-target hover:line-through decoration-white"
          >
            EXPERIENCE
          </a>
          <a
            href="#skills"
            className="font-mono text-xs md:text-sm hover-target hover:line-through decoration-white"
          >
            SKILLS
          </a>
          <a
            href="#contact"
            className="font-mono text-xs md:text-sm hover-target hover:line-through decoration-white"
          >
            CONTACT
          </a>
        </div>
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

      gsap.to('.text-typewriter', {
        text: "Detail-oriented software engineer with full-stack experience, strong communication skills, and a proven ability to understand requirements and deliver reliable solutions through structured problem-solving.",
        duration: 3,
        delay: 2.5,
        ease: 'none'
      })

      gsap.to('.cursor-blink', {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.4,
        ease: 'power2.inOut',
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
        <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-gray-500">
          <div className="overflow-hidden">
            <span className="reveal-text translate-y-full inline-block">UI/UX</span>
          </div>
          <div className="overflow-hidden">
            <span className="reveal-text translate-y-full inline-block">-&gt;</span>
          </div>
          <div className="overflow-hidden">
            <span className="reveal-text translate-y-full inline-block">Full Stack</span>
          </div>
          <div className="overflow-hidden">
            <span className="reveal-text translate-y-full inline-block">-&gt;</span>
          </div>
          <div className="overflow-hidden">
            <span className="reveal-text translate-y-full inline-block">DevOps</span>
          </div>
          <div className="overflow-hidden">
            <span className="reveal-text translate-y-full inline-block">-&gt;</span>
          </div>
          <div className="overflow-hidden">
            <span className="reveal-text translate-y-full inline-block">?</span>
          </div>
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

        <div className="mt-12 max-w-3xl overflow-hidden relative">
          <p className="font-mono text-lg   md:text-xl leading-relaxed text-gray-300 relative">
            <span className="opacity-0">
              Detail-oriented software engineer with full-stack experience, strong communication skills, and a proven ability to understand requirements and deliver reliable solutions through structured problem-solving.
            </span>
            <span className="absolute top-0 left-0 w-full h-full">
              <span className="text-typewriter"></span>
              <span className="cursor-blink font-bold ml-1 text-white">_</span>
            </span>
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
    ' Building meaningful solutions that make an impact • '

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

function ProjectItem({ title, stack, desc, externalHref }: ProjectItemProps) {
  const [expanded, setExpanded] = useState(false)

  const rowClass =
    'group block border-b border-white/10 py-12 hover-target relative transition-all duration-500 hover:pl-8'

  const stopLinkToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation()
  }

  const content = (
    <>
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 z-10 relative">
        <h3
          className="text-4xl md:text-6xl font-bold text-white group-hover:text-transparent transition-colors group-data-[expanded=true]:max-md:text-transparent"
          style={{ WebkitTextStroke: '1px transparent' }}
        >
          <span className="group-hover:hidden group-data-[expanded=true]:max-md:hidden">{title}</span>
          <span
            className="hidden group-hover:block group-data-[expanded=true]:max-md:block"
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
      <div className="mt-4 max-w-xl text-gray-400 transition-all duration-500 overflow-hidden whitespace-pre-wrap h-0 opacity-0 group-hover:opacity-100 group-hover:h-auto group-data-[expanded=true]:max-md:opacity-100 group-data-[expanded=true]:max-md:h-auto">
        {desc}
        {externalHref ? (
          <>
            {'\n\nCheck-Out: '}
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-2 hover:text-gray-200 hover-target"
              onClick={stopLinkToggle}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') stopLinkToggle(e)
              }}
            >
              {externalHref}
            </a>
          </>
        ) : null}
      </div>
    </>
  )

  return (
    <div
      tabIndex={0}
      data-expanded={expanded}
      aria-expanded={expanded}
      className={`${rowClass} cursor-pointer`}
      onClick={() => setExpanded((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setExpanded((v) => !v)
        }
      }}
    >
      {content}
    </div>
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
      title: 'Fullstack Developer, SajiloDev',
      stack: ['Oct 2023 — Jun 2025'],
      desc: '• Built and deployed production-ready applications using React, Next.js, Express\n• Improved team efficiency through automation and structured development workflows.\n• Collaborated with clients and teams to gather requirements and deliver reliable solutions.',
    },
    {
      title: 'Operations Lead, 100xNepal',
      stack: ['Aug 2025 — Jan 2026'],
      desc: '• Managed a national-level 24-hour hackathon end-to-end, handling planning, sponsorships, logistics, and coordination.\n• Built partnerships with developers, institutions, and industry stakeholders to expand community reach.\n• Contributed to product strategy and technical decision-making for upcoming projects.',
    },
    {
      title: 'Co-Founder, Poultry360',
      stack: ['Sept 2025 — Present'],
      desc: 'Building a unified platform to digitize and manage Nepal’s poultry ecosystem, connecting Layer & Broiler Farms, Hatcheries, Feed dealers, Feed Mills Company, and Veterinarians.',
      externalHref: 'https://www.poultry360.app',
    },
  ]



  return (
    <section id="experience" className="py-32 px-6 bg-[#050505]">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20 border-b border-white/20 pb-6">
          <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
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
    <section id="skills" className="py-20 px-6 bg-white/5">
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
              <span className="text-white">➜</span> <span className="text-white">ls skills/business</span>
            </p>
            <p className="pl-4 text-white">
              [ 'Operations_Management', 'Sales_Strategy', 'Client_Relationships', 'Business_Development' ]
            </p>

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

      <p className="font-mono text-sm mb-8 uppercase tracking-widest text-gray-400 z-10">REACH OUT TO ME </p>

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

