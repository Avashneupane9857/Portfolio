import { useEffect, useState, type ReactNode } from 'react'

type Tab = 'work' | 'info'

interface Project {
  name: string
  meta: string
  outcome: string
  url: string
  host: string
  image: string
}

interface Experience {
  company: string
  url?: string
  role: string
  period: string
  summary: string
}

const projects: Project[] = [
  {
    name: 'Blanxer Enterprise',
    meta: "Blanxer, '26",
    outcome: 'Leading enterprise rollouts of POS, inventory, and operations for large clothing brands.',
    url: 'https://www.blanxer.com/',
    host: 'blanxer.com',
    image: '/work/blanxer.jpg',
  },
  {
    name: 'Sambad',
    meta: "Blanxer, '26",
    outcome: 'One AI-powered inbox for every customer conversation.',
    url: 'https://sambad.io/',
    host: 'sambad.io',
    image: '/work/sambad.jpg',
  },
  {
    name: 'Poultry360',
    meta: "Co-founder, '25",
    outcome: "Connecting Nepal's poultry chain, from farms to feed mills.",
    url: 'https://www.poultry360.org/',
    host: 'poultry360.org',
    image: '/work/poultry360.jpg',
  },
]

const experience: Experience[] = [
  {
    company: 'Blanxer Technology',
    url: 'https://www.blanxer.com/',
    role: 'Product Manager & Enterprise Lead',
    period: 'June 2026 - Present',
    summary:
      'Lead enterprise plans and own custom client requirements end to end. Closed deals with large clothing manufacturers and an Australia-based ramp distributor, and delivered POS, inventory, and operations systems for them.',
  },
  {
    company: 'NRI Infra Tech (BazarMela)',
    url: 'https://www.nriinfratech.com/',
    role: 'Full-Stack Developer',
    period: 'March 2026 - June 2026',
    summary:
      'Shipped end-to-end features on a live marketplace, including real-time systems, third-party integrations, and role-based access.',
  },
  {
    company: 'Poultry360',
    url: 'https://www.poultry360.org/',
    role: 'Co-Founder',
    period: 'September 2025 - Present',
    summary:
      "A platform connecting Nepal's poultry ecosystem: farms, hatcheries, feed mills, and veterinarians. Designed on-site with farmers and live with 3 business users.",
  },
  {
    company: '100xNepal',
    url: 'https://100xnepal.com/',
    role: 'Operations Lead',
    period: 'August 2025 - January 2026',
    summary:
      'Ran a national 24-hour hackathon end to end: planning, sponsorships, logistics, and partnerships.',
  },
  {
    company: 'SajiloDev',
    role: 'Fullstack Developer',
    period: 'October 2023 - June 2025',
    summary: 'Built and deployed production applications with React, Next.js, and Express.',
  },
]

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'NestJS',
  'Express',
  'Docker',
  'AWS',
  'Figma',
  'Jira',
  'Linear',
  'Notion',
]

const contact = [
  { label: 'GitHub', href: 'https://github.com/Avashneupane9857' },
  { label: 'Email', href: 'mailto:reevasnp123@gmail.com' },
  { label: 'Resume', href: '/resume.pdf' },
]

const muted = 'text-neutral-500 dark:text-neutral-400'

const linkClass =
  'underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:decoration-neutral-700 dark:hover:decoration-neutral-100'

const getTab = (): Tab => (window.location.hash === '#info' ? 'info' : 'work')

function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 9 9 3M4 3h5v5" />
    </svg>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // storage unavailable; the choice still applies for this visit
    }
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
      className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-100"
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  )
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[22px] border border-neutral-200 bg-white/70 p-1.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-white/5 dark:bg-neutral-900">
        {children}
      </div>
    </div>
  )
}

function BrowserBar({ host }: { host?: string }) {
  return (
    <div className="relative flex h-9 items-center gap-1.5 border-b border-neutral-200 bg-gradient-to-b from-neutral-100 to-neutral-50 px-4 dark:border-white/5 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      {host && <span className="absolute left-1/2 -translate-x-1/2 text-xs text-neutral-500 dark:text-neutral-300">{host}</span>}
    </div>
  )
}

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block" data-reveal>
      <Frame>
        <div className="bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)]">
          <div className="flex items-start justify-between gap-6 px-6 pt-7 sm:px-10 sm:pt-9">
            <div>
              <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{project.name}</h3>
              <p className="mt-2 leading-snug sm:text-lg">
                <span className="font-medium">{project.meta}</span> <span className={muted}>— {project.outcome}</span>
              </p>
            </div>
            <span className="mt-1 shrink-0 text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white">
              <ArrowRight />
            </span>
          </div>
          <div className="mt-10 px-5 sm:mt-14 sm:px-14">
            <div className="overflow-hidden rounded-t-xl border border-b-0 border-neutral-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)] dark:border-white/10 dark:shadow-[0_-10px_50px_-15px_rgba(0,0,0,0.8)]">
              <BrowserBar host={project.host} />
              <img
                src={project.image}
                alt={`${project.name} website`}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </Frame>
    </a>
  )
}

function Nav({ tab }: { tab: Tab }) {
  const pill = (id: Tab, label: string) => (
    <a
      href={`#${id}`}
      aria-current={tab === id ? 'page' : undefined}
      className={`rounded-full px-5 py-2 text-sm transition-colors ${
        tab === id
          ? 'bg-white text-neutral-900 shadow-sm dark:bg-white/10 dark:text-white'
          : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
      }`}
    >
      {label}
    </a>
  )

  return (
    <header className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-y-4 px-6 py-6 sm:grid-cols-[1fr_auto_1fr]">
      <div>
        <p className="font-medium tracking-tight">Avash Neupane</p>
        <p className={`text-xs ${muted}`}>Product Engineer</p>
      </div>
      <nav className="order-last col-span-2 flex justify-self-center rounded-full border border-neutral-200 bg-neutral-100 p-1 sm:order-none sm:col-span-1 dark:border-white/10 dark:bg-white/[0.04]">
        {pill('work', 'Work')}
        {pill('info', 'Info')}
      </nav>
      <div className="flex items-center gap-5 justify-self-end text-sm">
        <a
          href="https://github.com/Avashneupane9857"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1 hover:opacity-70 sm:inline-flex"
        >
          GitHub <ArrowUpRight />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:opacity-70">
          Resume <ArrowUpRight />
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}

function Work() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 sm:pt-10">
        <div data-reveal>
          <Frame>
            <BrowserBar />
            <div className="bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.03),transparent_60%)] px-6 py-16 sm:px-16 sm:py-28 dark:bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_60%)]">
              <h1 className="text-[2.75rem] font-medium leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-[5.5rem] dark:drop-shadow-[0_0_24px_rgba(255,255,255,0.22)]">
                I build products,
                <br />
                systems &amp;{' '}
                <span className="bg-gradient-to-b from-neutral-900 to-neutral-400 bg-clip-text pr-2 font-serif font-normal italic tracking-normal text-transparent dark:from-white dark:to-neutral-500">
                  deals.
                </span>
              </h1>
              <div className="mt-12 text-lg font-medium leading-snug tracking-tight sm:ml-auto sm:mt-16 sm:max-w-lg sm:text-xl">
                <p>Product Engineer at Blanxer. Based in Nepal.</p>
                <p className={muted}>Co-founder of Poultry360.</p>
              </div>
            </div>
          </Frame>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-4 sm:mt-32 sm:px-6">
        <h2 className={`mb-8 px-2 text-sm ${muted}`}>Selected Work '26</h2>
        <div className="space-y-10 sm:space-y-14">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

function InfoSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-14" data-reveal>
      <h2 className={`mb-5 text-sm ${muted}`}>{title}</h2>
      {children}
    </section>
  )
}

function Info() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-10 sm:pt-16">
      <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl" data-reveal>
        I build products end to end, from talking to customers to{' '}
        <span className="font-serif font-normal italic">shipping the code.</span>
      </p>
      <p className={`mt-6 leading-relaxed ${muted}`} data-reveal>
        Right now I lead enterprise plans at Blanxer, turning custom client requirements into working systems, and I'm
        co-founding Poultry360.
      </p>

      <InfoSection title="Experience">
        <ul className="space-y-8">
          {experience.map((item) => (
            <li key={item.company}>
              <p className="font-medium">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
                <span className={`font-normal ${muted}`}> · {item.role}</span>
              </p>
              <p className={`mt-0.5 text-sm tabular-nums ${muted}`}>{item.period}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">{item.summary}</p>
            </li>
          ))}
        </ul>
      </InfoSection>

      <InfoSection title="Stack">
        <p className="leading-relaxed">{stack.join(' · ')}</p>
      </InfoSection>

      <InfoSection title="Education">
        <p className="font-medium">
          Jain University<span className={`font-normal ${muted}`}> · B.Tech, Computer Science</span>
        </p>
        <p className={`mt-0.5 text-sm tabular-nums ${muted}`}>2022 - 2026</p>
      </InfoSection>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex gap-20 text-sm">
          <div>
            <p className={`mb-4 text-[11px] uppercase tracking-[0.15em] ${muted}`}>Main</p>
            <ul className="space-y-3">
              <li>
                <a href="#work" className="hover:opacity-70">
                  Work
                </a>
              </li>
              <li>
                <a href="#info" className="hover:opacity-70">
                  Info
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className={`mb-4 text-[11px] uppercase tracking-[0.15em] ${muted}`}>Contact</p>
            <ul className="space-y-3">
              {contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:opacity-70"
                  >
                    {link.label} <ArrowUpRight />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={`mt-14 text-sm ${muted}`}>© {new Date().getFullYear()} Avash Neupane.</p>
      </div>
    </footer>
  )
}

function useReveal(tab: Tab) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [tab])
}

function App() {
  const [tab, setTab] = useState<Tab>(getTab)

  useEffect(() => {
    const onHashChange = () => {
      setTab(getTab())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useReveal(tab)

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,0,0,0.05),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.08),transparent)]">
      <button
        type="button"
        onClick={() => document.getElementById('main-content')?.focus()}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded focus:bg-neutral-900 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </button>
      <Nav tab={tab} />
      <main id="main-content" tabIndex={-1} className="outline-none">
        {tab === 'work' ? <Work /> : <Info />}
      </main>
      <Footer />
    </div>
  )
}

export default App
