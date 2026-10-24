/* =====================================================
   BIJOY PORTFOLIO — RESEARCH ATLAS
   STEP 1: EDITORIAL HOMEPAGE
   Update profile details and research topics here.
   ===================================================== */

import { useState } from 'react'
import publications from './data/publications'
import projects from './data/projects'
import { education, experience } from './data/experience'
import { activities, memberships } from './data/activities'

import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Mail,
  Network,
} from 'lucide-react'

const researchAreas = [
  {
    id: 'ai',
    number: '01',
    title: 'Artificial Intelligence',
    short: 'AI',
    description:
      'Exploring intelligent systems, machine learning methods, and practical AI applications.',
    position: 'left-[8%] top-[13%]',
  },
  {
    id: 'gan',
    number: '02',
    title: 'Generative Models',
    short: 'GANs',
    description:
      'Research on GAN-based image inpainting and generative approaches to visual reconstruction.',
    position: 'right-[9%] top-[27%]',
  },
  {
    id: 'rag',
    number: '03',
    title: 'Retrieval-Augmented Generation',
    short: 'RAG',
    description:
      'Building research assistants that connect language models with retrieved knowledge.',
    position: 'left-[13%] bottom-[25%]',
  },
  {
    id: 'security',
    number: '04',
    title: 'Phishing Detection',
    short: 'SEC',
    description:
      'Data-driven, multi-signal approaches to identifying potentially malicious URLs.',
    position: 'right-[7%] bottom-[10%]',
  },
]

function AcademicPortfolio() {
  
// Mobile navigation menu state
  const [menuOpen, setMenuOpen] = useState(false)
// EDIT HERE: Your academic profile
  const profile = {
    name: 'Bijoy Kumar Das',
    role: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    institution: 'BMS Institute of Technology and Management',
    location: 'Bengaluru, India',
    email: 'bijoy.kumar2404@gmail.com',
    introduction:
      'I explore how intelligent systems can retrieve knowledge, generate content, and solve real-world problems.',
      
  }
  

  const [activeArea, setActiveArea] = useState('rag')
  const selected = researchAreas.find((area) => area.id === activeArea)

  return (
    <main className="min-h-screen bg-[#F4F1E9] text-[#22251F]">
      {/* Header: update navigation as new sections are added */}
      <header className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-[#22251F]/15 px-6 py-5 md:px-12">
        <a href="#home" className="text-lg font-black tracking-tight">
          <span className="text-[#D94A35]"></span>
          <span className="ml-3 hidden text-xs font-normal tracking-wide text-[#77766E] sm:inline">
            RESEARCH ATLAS
          </span>
        </a>

        

{/* Mobile menu button */}
<div className="relative sm:hidden">
  <button
    type="button"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
    aria-expanded={menuOpen}
    className="flex items-center justify-center rounded-md border border-[#22251F]/20 p-2"
  >
    {menuOpen ? '✕' : '☰'}
  </button>

  {menuOpen && (
    <nav className="absolute right-0 top-12 z-50 flex w-56 flex-col gap-4 rounded-lg border border-[#22251F]/15 bg-[#F4F1E9] p-5 text-sm font-medium shadow-lg">
      <a onClick={() => setMenuOpen(false)} href="#research">Research</a>
      <a onClick={() => setMenuOpen(false)} href="#publications">Writing</a>
      <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
      <a onClick={() => setMenuOpen(false)} href="#experience">Experience</a>
      <a onClick={() => setMenuOpen(false)} href="#academic-journey">Education</a>
      <a onClick={() => setMenuOpen(false)} href="#activities">Academic Activities</a>
      <a onClick={() => setMenuOpen(false)} href="#memberships">Memberships</a>
      <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
    </nav>
  )}
</div>

{/* Desktop navigation */}
<nav className="hidden items-center gap-4 text-xs font-medium sm:flex sm:gap-7 sm:text-sm">
  <a href="#research" className="hover:text-[#D94A35]">Research</a>
  <a href="#publications" className="hover:text-[#D94A35]">Writing</a>
  <a href="#projects" className="hover:text-[#D94A35]">Projects</a>
  <a href="#experience" className="hover:text-[#D94A35]">Experience</a>
  <a href="#academic-journey" className="hover:text-[#D94A35]">Education</a>
  <a href="#activities" className="hover:text-[#D94A35]">Academic Activities</a>
  <a href="#memberships" className="hover:text-[#D94A35]">Memberships</a>
  <a href="#contact" className="hover:text-[#D94A35]">Contact</a>
</nav>


      </header>

      {/* Main editorial introduction */}
      <section
        id="home"
        className="mx-auto grid max-w-[1440px] gap-12 px-6 py-14 md:px-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8"
      >
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#77766E] uppercase">
            <span className="h-px w-8 bg-[#D94A35]" />
            Academic profile
          </p>

          <h1 className="mt-8 text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] font-semibold tracking-[-0.075em]">
            Bijoy Kumar
            <br />
            <span className="text-[#D94A35]">Das</span>
            <span className="text-[#D94A35]">.</span>
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="font-semibold">{profile.role}</span>
            <span className="text-[#B5B0A5]">/</span>
            <span className="text-[#77766E]">{profile.department}</span>
          </div>

          <div className="mt-5 flex items-start gap-5">
        <img
          src="/images/profile.png"
          alt="Portrait of Bijoy Kumar Das"
          className="h-36 w-28 shrink-0 border border-[#D8D3C7] object-cover object-top grayscale"
        />

  <div className="pt-1">
    <p className="text-sm leading-7 text-[#77766E]">
      {profile.institution}
    </p>

    <p className="mt-1 text-sm text-[#77766E]">
      {profile.location}
    </p>
  </div>
</div>

          <p className="mt-8 max-w-lg text-lg leading-8 text-[#55564F] md:text-xl md:leading-9">
            {profile.introduction}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#research"
              className="inline-flex items-center gap-3 bg-[#22251F] px-5 py-3 text-sm text-[#F4F1E9] transition hover:bg-[#D94A35]"
            >
              Explore research
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#publications"
              className="inline-flex items-center gap-3 border border-[#22251F]/25 px-5 py-3 text-sm transition hover:border-[#D94A35] hover:text-[#D94A35]"
            >
              <BookOpen size={16} />
              Publications
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 text-xs text-[#77766E]">
            <GraduationCap size={17} />
            Teaching · Research · Mentorship
          </div>
        </div>

        
{/* Research Atlas: select a node to explore its description */}
<div
  id="research"
  className="relative mx-auto w-full max-w-5xl overflow-hidden border border-[#22251F]/15 bg-[#ECE8DE]"
>
  {/* Header */}
  <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-7 sm:pt-6">
    <div>
      <p className="text-[10px] tracking-[0.2em] text-[#77766E] uppercase">
        Field map / 001
      </p>
      <h2 className="mt-1 text-lg font-semibold">Research connections</h2>
    </div>

    <div className="flex items-center gap-2 pt-1 text-[10px] tracking-wider text-[#77766E] uppercase">
      <Network size={14} />
      <span className="hidden sm:inline">Interactive map</span>
    </div>
  </div>

  {/* Compact map area: reserved space for nodes */}
  <div className="relative mx-4 mt-2 h-[340px] sm:mx-7 sm:h-[370px]">
    <svg
      viewBox="0 0 500 350"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <g fill="none" stroke="#B7B2A6" strokeWidth="1">
        <path d="M85 65 L250 175 L415 95" />
        <path d="M85 65 L120 275 L250 175" />
        <path d="M250 175 L400 305" />
        <path d="M120 275 L400 305" />
        <circle cx="250" cy="175" r="78" strokeDasharray="3 7" />
        <circle cx="250" cy="175" r="122" strokeDasharray="2 9" />
      </g>
      <g fill="#D94A35">
        <circle cx="85" cy="65" r="4" />
        <circle cx="415" cy="95" r="4" />
        <circle cx="120" cy="275" r="4" />
        <circle cx="400" cy="305" r="4" />
      </g>
    </svg>

    {/* Center point */}
    <div className="absolute left-1/2 top-1/2 z-10 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#D94A35]/50 bg-[#F4F1E9] shadow-sm">
      <Network size={20} className="text-[#D94A35]" />
      <span className="mt-1 text-[9px] font-bold tracking-widest">RESEARCH</span>
    </div>

    {/* AI & ML */}
    <button
      onClick={() => setActiveArea('ai')}
      className={`absolute left-[1%] top-[7%] z-20 border px-3 py-2 text-left transition sm:left-[4%] ${
        activeArea === 'ai'
          ? 'border-[#D94A35] bg-[#D94A35] text-white'
          : 'border-[#22251F]/25 bg-[#F4F1E9] hover:border-[#D94A35]'
      }`}
    >
      <span className="block text-[9px] opacity-70">01 / FIELD</span>
      <span className="text-xs font-semibold">AI & ML</span>
    </button>

    {/* GANs */}
    <button
      onClick={() => setActiveArea('gan')}
      className={`absolute right-[1%] top-[15%] z-20 border px-3 py-2 text-left transition sm:right-[4%] ${
        activeArea === 'gan'
          ? 'border-[#D94A35] bg-[#D94A35] text-white'
          : 'border-[#22251F]/25 bg-[#F4F1E9] hover:border-[#D94A35]'
      }`}
    >
      <span className="block text-[9px] opacity-70">02 / FIELD</span>
      <span className="text-xs font-semibold">GANs</span>
    </button>

    {/* RAG & LLMs */}
    <button
      onClick={() => setActiveArea('rag')}
      className={`absolute bottom-[13%] left-[1%] z-20 border px-3 py-2 text-left transition sm:left-[4%] ${
        activeArea === 'rag'
          ? 'border-[#D94A35] bg-[#D94A35] text-white'
          : 'border-[#22251F]/25 bg-[#F4F1E9] hover:border-[#D94A35]'
      }`}
    >
      <span className="block text-[9px] opacity-70">03 / FIELD</span>
      <span className="text-xs font-semibold">RAG & LLMs</span>
    </button>

    {/* Security */}
    <button
      onClick={() => setActiveArea('security')}
      className={`absolute bottom-[5%] right-[1%] z-20 border px-3 py-2 text-left transition sm:right-[4%] ${
        activeArea === 'security'
          ? 'border-[#D94A35] bg-[#D94A35] text-white'
          : 'border-[#22251F]/25 bg-[#F4F1E9] hover:border-[#D94A35]'
      }`}
    >
      <span className="block text-[9px] opacity-70">04 / FIELD</span>
      <span className="text-xs font-semibold">Security</span>
    </button>
  </div>

  {/* Selected topic information: separate from the map */}
  <div className="mx-4 mb-4 border-t border-[#22251F]/20 bg-[#F4F1E9] px-4 py-4 sm:mx-7 sm:mb-6 sm:px-5">
    <p className="text-[10px] tracking-[0.16em] text-[#D94A35] uppercase">
      Selected field / {selected.number}
    </p>
    <h3 className="mt-1 text-base font-semibold">{selected.title}</h3>
    <p className="mt-1 max-w-2xl text-xs leading-5 text-[#66665E]">
      {selected.description}
    </p>
  </div>
</div>

      </section>


{/* RESEARCHER PROFILES */}
<section id="researcher-profiles" className="border-t border-[#22251F]/15">
  <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20">
    <div className="mb-10">
      <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#77766E] uppercase">
        <span className="h-px w-8 bg-[#D94A35]" />
        Academic Identity
      </p>

      <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
        Researcher{" "}
        <span className="text-[#D94A35]">profiles.</span>
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#77766E]">
        Explore my academic profiles, research publications, author records,
        and scholarly contributions.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      <a
        href="https://scholar.google.com/citations?user=SF4U3B4AAAAJ&hl=en"
        target="_blank"
        rel="noreferrer"
        className="group flex min-h-40 flex-col justify-between border border-[#22251F]/15 bg-[#ECE8DE] p-5 transition-colors hover:border-[#D94A35] sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="text-[10px] font-semibold tracking-[0.16em] text-[#77766E] uppercase">
            Profile / 01
          </span>
          <ArrowUpRight
            size={18}
            className="text-[#77766E] transition-colors group-hover:text-[#D94A35]"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Google Scholar</h3>
          <p className="mt-2 text-xs leading-5 text-[#77766E]">
            Publications, citations, and scholarly impact.
          </p>
        </div>
      </a>

      <a
        href="https://orcid.org/0009-0005-6401-5759"
        target="_blank"
        rel="noreferrer"
        className="group flex min-h-40 flex-col justify-between border border-[#22251F]/15 bg-[#ECE8DE] p-5 transition-colors hover:border-[#D94A35] sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="text-[10px] font-semibold tracking-[0.16em] text-[#77766E] uppercase">
            Profile / 02
          </span>
          <ArrowUpRight
            size={18}
            className="text-[#77766E] transition-colors group-hover:text-[#D94A35]"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">ORCID</h3>
          <p className="mt-2 text-xs leading-5 text-[#77766E]">
            Persistent researcher identifier and research record.
          </p>
        </div>
      </a>

      <a
        href="https://www.webofscience.com/wos/author/record/QUU-2586-2026"
        target="_blank"
        rel="noreferrer"
        className="group flex min-h-40 flex-col justify-between border border-[#22251F]/15 bg-[#ECE8DE] p-5 transition-colors hover:border-[#D94A35] sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="text-[10px] font-semibold tracking-[0.16em] text-[#77766E] uppercase">
            Profile / 03
          </span>
          <ArrowUpRight
            size={18}
            className="text-[#77766E] transition-colors group-hover:text-[#D94A35]"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Web of Science</h3>
          <p className="mt-2 text-xs leading-5 text-[#77766E]">
            Researcher profile and scholarly records.
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

      
{/* =====================================================
    PUBLICATIONS — EDITORIAL RESEARCH INDEX
    Records are maintained in src/data/publications.js
    ===================================================== */}

<section
  id="publications"
  className="border-t border-[#22251F]/15"
>
  <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">

    {/* Section heading */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#77766E] uppercase">
          <span className="h-px w-8 bg-[#D94A35]" />
          Scholarly output / Selected work
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          Research &amp; <span className="text-[#D94A35]">writing.</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#77766E]">
          Publications and research contributions spanning generative
          models, retrieval-augmented generation, and intelligent systems.
        </p>
      </div>

      <p className="text-sm text-[#77766E]">
        {String(publications.length).padStart(2, '0')} research records
      </p>
    </div>

    {/* Publication records */}
    <div className="mt-12 border-t border-[#22251F]/20">
      {publications.map((paper, index) => (
        <article
          key={paper.id}
          className="grid gap-4 border-b border-[#22251F]/15 py-8 md:grid-cols-[70px_1fr_160px] md:gap-8 md:py-10"
        >
          {/* Record number */}
          <p className="text-sm font-medium text-[#D94A35]">
            {String(index + 1).padStart(2, '0')}
          </p>

          {/* Publication details */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-semibold tracking-[0.15em] text-[#77766E] uppercase">
                {paper.type}
              </span>

              <span className="text-[#B5B0A5]">/</span>

              <span className="text-[11px] text-[#D94A35]">
                {paper.status}
              </span>
            </div>

            <h3 className="mt-3 max-w-3xl text-xl leading-snug font-semibold sm:text-2xl">
              {paper.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#55564F]">
              {paper.authors.join(', ')}
            </p>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#77766E]">
              {paper.venue}
            </p>

            <p className="mt-1 text-xs text-[#77766E]">
              {paper.publisher}
              {paper.isbn ? ` · ISBN: ${paper.isbn}` : ''}
            </p>

            {/* Display a link only when an official URL is provided */}
            {paper.url && (
              <a
                href={paper.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#D94A35] hover:underline"
              >
                View publication
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>

          {/* Year */}
          <p className="text-sm text-[#77766E] md:text-right">
            {paper.year}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>


<section
  id="projects"
  className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28"
>
  <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#77766E] uppercase">
        <span className="h-px w-8 bg-[#D94A35]" />
        Selected work / 2026
      </p>

      <h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
        Projects<span className="text-[#D94A35]">.</span>
      </h2>
    </div>

    <p className="max-w-md text-sm leading-7 text-[#77766E]">
      Research explorations and technical work across generative AI,
      retrieval systems, cybersecurity, and geospatial intelligence.
    </p>
  </div>

  <div className="grid gap-0 border-t border-[#D8D3C7] md:grid-cols-2">
    {projects.map((project) => (
      <article
        key={project.id}
        className="border-b border-[#D8D3C7] py-7 md:px-6 md:py-9 md:odd:border-r md:odd:pl-0 md:even:pr-0"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs tracking-[0.15em] text-[#D94A35]">
            {project.number} / {project.category}
          </span>

          <span className="text-right text-[10px] tracking-wide text-[#77766E] uppercase">
            {project.status}
          </span>
        </div>

        <h3 className="mt-5 max-w-xl text-2xl leading-tight font-semibold tracking-[-0.035em] md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#55564F]">
          {project.description}
        </p>

        <p className="mt-4 text-xs leading-6 text-[#77766E]">
          <span className="font-semibold text-[#22251F]">Focus: </span>
          {project.focus}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border border-[#D8D3C7] px-2.5 py-1 text-[11px] text-[#55564F]"
            >
              {technology}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition hover:text-[#D94A35]"
          >
            View project
            <ArrowUpRight size={15} />
          </a>
        )}
      </article>
    ))}
  </div>
</section>


      {/* PROFESSIONAL EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-[#22251F]/15"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#77766E] uppercase">
                <span className="h-px w-8 bg-[#D94A35]" />
                Career / Professional Experience
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Professional{" "}
                <span className="text-[#D94A35]">experience.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#77766E]">
              Academic teaching, student mentoring, and departmental
              responsibilities in computer science and engineering.
            </p>
          </div>

          <div className="border-t border-[#22251F]/20">
            {experience.map((item) => (
              <article
                key={item.id}
                className="grid gap-3 border-b border-[#22251F]/15 py-7 md:grid-cols-[180px_1fr] md:gap-8 md:py-8"
              >
                <p className="text-xs leading-6 text-[#77766E]">
                  {item.period}
                </p>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>

                    <span className="text-[10px] font-semibold tracking-[0.12em] text-[#D94A35] uppercase">
                      {item.type}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#55564F]">
                    {item.institution}
                  </p>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#77766E]">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


<section
  id="academic-journey"
  className="border-t border-[#22251F]/15"
>
  <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
    <div className="mb-12">
      <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#77766E] uppercase">
        <span className="h-px w-8 bg-[#D94A35]" />
        Background / Experience
      </p>

      <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
        Academic <span className="text-[#D94A35]">background.</span>
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-7 text-[#77766E]">
        Educational qualifications and academic foundations in computer science and engineering.
      </p>
    </div>

    <div className="max-w-3xl">
      <div>
        <h3 className="mb-6 text-xs font-semibold tracking-[0.18em] text-[#D94A35] uppercase">
          Education
        </h3>

        <div className="border-t border-[#22251F]/20">
          {education.map((item) => (
            <article
              key={item.id}
              className="border-b border-[#22251F]/15 py-7"
            >
              <p className="text-xs text-[#77766E]">{item.period}</p>

              <h4 className="mt-3 text-xl font-semibold tracking-tight">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#55564F]">
                {item.institution}
              </p>

              <p className="mt-2 text-sm text-[#D94A35]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


{/* ACADEMIC ACTIVITIES */}
<section id="activities" className="border-t border-[#22251F]/15">
  <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
    <div className="mb-12">
      <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#77766E] uppercase">
        <span className="h-px w-8 bg-[#D94A35]" />
        Professional Development
      </p>
      <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
        Academic{" "}
        <span className="text-[#D94A35]">activities.</span>
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#77766E]">
        Faculty development, professional memberships, technical workshops,
        and academic contributions.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {/* FACULTY DEVELOPMENT PROGRAMMES */}
      <article className="border-t-2 border-[#D94A35] pt-5">
        <h3 className="text-lg font-semibold">Faculty Development Programmes</h3>
        <p className="mt-1 text-xs text-[#77766E]">
          FDPs and research-oriented training
        </p>
        <div className="mt-5 space-y-5">
          {activities
            .filter((item) => item.category === 'Faculty Development Programme')
            .map((item) => (
              <div key={item.id} className="border-b border-[#22251F]/10 pb-4">
                <h4 className="text-sm font-medium leading-6">{item.title}</h4>
                <p className="mt-2 text-xs leading-5 text-[#77766E]">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs text-[#D94A35]">{item.period}</p>
              </div>
            ))}
        </div>
      </article>


      {/* CONFERENCE PRESENTATIONS */}
      <article className="border-t-2 border-[#D94A35] pt-5">
        <h3 className="text-lg font-semibold">Conference Presentations</h3>
        <p className="mt-1 text-xs text-[#77766E]">
          Research papers and conference contributions
        </p>
        <div className="mt-5 space-y-5">
          {activities
            .filter((item) => item.category === 'Conference Presentation')
            .map((item) => (
              <div key={item.id} className="border-b border-[#22251F]/10 pb-4">
                <h4 className="text-sm font-medium leading-6">{item.title}</h4>
                <p className="mt-2 text-xs leading-5 text-[#77766E]">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs text-[#D94A35]">{item.period}</p>
              </div>
            ))}
        </div>
      </article>

      {/* TECHNICAL WORKSHOPS */}
      <article className="border-t-2 border-[#D94A35] pt-5">
        <h3 className="text-lg font-semibold">Technical Workshops</h3>
        <p className="mt-1 text-xs text-[#77766E]">
          Hands-on technical learning
        </p>
        <div className="mt-5 space-y-5">
          {activities
            .filter((item) => item.category === 'Technical Workshop')
            .map((item) => (
              <div key={item.id} className="border-b border-[#22251F]/10 pb-4">
                <h4 className="text-sm font-medium leading-6">{item.title}</h4>
                <p className="mt-2 text-xs leading-5 text-[#77766E]">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs text-[#D94A35]">{item.period}</p>
              </div>
            ))}
        </div>
      </article>

      {/* OTHER ACADEMIC ACTIVITIES */}
      <article className="border-t-2 border-[#D94A35] pt-5">
        <h3 className="text-lg font-semibold">Other Academic Activities</h3>
        <p className="mt-1 text-xs text-[#77766E]">
          Lecture series and related academic engagements
        </p>
        <div className="mt-5 space-y-5">
          {activities
            .filter((item) => item.category === 'Conference / Lecture Series')
            .map((item) => (
              <div key={item.id} className="border-b border-[#22251F]/10 pb-4">
                <h4 className="text-sm font-medium leading-6">{item.title}</h4>
                <p className="mt-2 text-xs leading-5 text-[#77766E]">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs text-[#D94A35]">{item.period}</p>
              </div>
            ))}
        </div>
      </article>

    </div>
  </div>
</section>


{/* PROFESSIONAL MEMBERSHIPS */}
<section id="memberships" className="border-t border-[#22251F]/15">
  <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">

    <div className="mb-12">
      <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#77766E] uppercase">
        <span className="h-px w-8 bg-[#D94A35]" />
        Professional Affiliations
      </p>

      <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
        Professional{" "}
        <span className="text-[#D94A35]">memberships.</span>
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#77766E]">
        Professional associations and technical communities that support
        continued learning, collaboration, and engagement with the computing
        and engineering community.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-2">
      {memberships.map((item) => (
        <article
          key={item.id}
          className="border border-[#22251F]/15 p-6 transition-colors hover:border-[#D94A35]/60 md:p-8"
        >
          <p className="text-[10px] font-semibold tracking-[0.18em] text-[#D94A35] uppercase">
            Professional Association
          </p>

          <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
            {item.name}
          </h3>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#22251F]/10 pt-4">
            <span className="text-xs text-[#77766E]">Membership since</span>
            <span className="text-sm font-medium">{item.since}</span>
          </div>
        </article>
      ))}
    </div>

  </div>
</section>



{/* Minimal footer with email and LinkedIn */}
<footer
  id="contact"
  className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-[#22251F]/15 px-6 py-6 text-xs text-[#77766E] md:px-12"
>
  <p>© 2026 {profile.name} · Academic Portfolio</p>

  <div className="flex flex-wrap items-center gap-5">
    {/* Email */}
    <a
      href="mailto:bijoy.kumar2404@gmail.com"
      className="inline-flex items-center gap-2 transition-colors hover:text-[#D94A35]"
    >
      <Mail size={15} />
      Email
    </a>

    {/* LinkedIn */}
    
<a
  href="https://www.linkedin.com/in/bijoy-kumar-das-4a1469295/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 transition-colors hover:text-[#D94A35]"
>
  LinkedIn Profile
  <ArrowUpRight size={14} />
</a>


  </div>
</footer>


{/* Back to Top Button */}
<button
  type="button"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  aria-label="Back to top"
  title="Back to top"
  className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#D94A35] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#22251F]"
>
  <ArrowUpRight
    size={22}
    className="-rotate-45"
  />
</button>


    </main>
  )
}

export default AcademicPortfolio
