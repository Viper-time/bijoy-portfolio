
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

function ParticleNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationId
    let particles = []
    let width = 0
    let height = 0

    const mouse = { x: -1000, y: -1000, active: false }
    const particleCount = window.innerWidth < 768 ? 45 : 85

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      width = rect.width
      height = rect.height

      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.7 + 0.7,
      }))
    }

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
      mouse.active = true
    }

    function handleMouseLeave() {
      mouse.active = false
      mouse.x = -1000
      mouse.y = -1000
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150 && distance > 0) {
            const force = (150 - distance) / 150
            p.x += (dx / distance) * force * 1.5
            p.y += (dy / distance) * force * 1.5
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(103, 232, 249, 0.8)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 125) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${
              (1 - distance / 125) * 0.24
            })`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resizeCanvas()
    draw()

    window.addEventListener('resize', resizeCanvas)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-auto absolute inset-0 h-full w-full"
    />
  )
}


function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F4F1E9] text-[#22251F]">
      
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-12">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight"
        >
          Bijoy<span className="text-[#D94A35]">.</span>
        </Link>

        <div className="flex items-center gap-3 text-[11px] text-[#77766E] sm:gap-5 sm:text-xs md:gap-8 md:text-sm">
          <Link
            to="/academic-portfolio"
            className="transition-colors hover:text-[#D94A35]"
          >
            Academic Portfolio
          </Link>
          <Link
            to="/beyond-academia"
            className="transition-colors hover:text-[#D94A35]"
          >
            Beyond Academia
          </Link>
          <Link
            to="/blog"
            className="transition-colors hover:text-[#D94A35]"
          >
            Blog
          </Link>
          
        </div>
      
      </nav>
      <div aria-hidden="true" className="mx-4 border-t border-[#22251F]/15 sm:mx-6 md:mx-12" />

      <section className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-4 pb-14 pt-8 sm:gap-12 sm:px-6 sm:pb-20 sm:pt-10 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:pb-28 md:pt-16">
        <div className="order-2 md:order-1 animate-editorial">
          <div className="mb-6 flex items-center gap-3 sm:mb-7">
            <span className="h-px w-10 bg-[#D94A35]" />
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#77766E] sm:text-xs sm:tracking-[0.22em]">
               Researcher · Educator · Explorer
            </p>
          </div>

          <h1 className="max-w-3xl break-words text-4xl font-semibold leading-[1.08] tracking-[-0.045em] min-[390px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            Hello, I'm
            <span className="mt-2 block">Bijoy Kumar Das<span className="text-[#D94A35]">.</span></span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#77766E] sm:mt-8 sm:text-lg sm:leading-8">
            An academic by profession, a researcher by curiosity, and a
            technology enthusiast always looking to learn something new.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#77766E]">
            Assistant Professor in Computer Science and Engineering at BMS
            Institute of Technology and Management, Bengaluru. My interests
            span artificial intelligence, research, teaching, and ideas that
            connect technology with the real world.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <Link
              to="/academic-portfolio"
              className="group inline-flex max-w-full items-center justify-center gap-2 bg-[#D94A35] px-4 py-3 text-center text-xs font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#22251F] sm:gap-3 sm:px-6 sm:py-4 sm:text-sm"
            >
              Explore my academic work
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href="mailto:bijoy.kumar2404@gmail.com"
              className="border border-[#22251F]/20 px-4 py-3 text-xs transition-colors hover:border-[#D94A35] hover:text-[#D94A35] sm:px-6 sm:py-4 sm:text-sm"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs text-[#77766E] sm:mt-12">
            <span className="h-2 w-2 rounded-full bg-[#D94A35]" />
            Based in Bengaluru, India
          </div>
        </div>

        <div className="order-1 md:order-2 animate-editorial animate-editorial-delay-2">
          <div className="relative mx-auto w-full max-w-md md:ml-auto">
            <div className="absolute right-0 top-0 h-full w-full border border-[#D94A35]/60 sm:-right-5 sm:-top-5 animate-portrait-frame" />

            <div className="relative aspect-[4/5] overflow-hidden bg-[#E5E0D5]">
              <img
                src="/images/profile.png"
                alt="Portrait of Bijoy Kumar Das"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#22251F]/75 to-transparent px-6 pb-6 pt-20">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Computer Science & Engineering
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Research. Teach. Explore.
                </p>
              </div>
            </div>

            <p className="mt-5 text-right text-xs tracking-wide text-[#77766E]">
              A little about the person behind the research.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#22251F]/15">
        <div className="mx-auto grid w-full max-w-[1440px] gap-4 px-4 py-5 sm:grid-cols-3 sm:gap-5 sm:px-6 sm:py-6 md:gap-8 md:px-12">
          <Link
            to="/academic-portfolio"
            className="group min-w-0 border border-[#22251F]/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D94A35] hover:bg-[#EAE5DA] sm:p-5 md:p-7"
          >
            <p className="text-xs tracking-[0.18em] text-[#D94A35]">01 / ACADEMICS</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <h2 className="min-w-0 text-lg font-medium sm:text-lg md:text-xl">Academic Portfolio</h2>
              <ArrowUpRight size={19} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <p className="mt-3 text-sm leading-6 text-[#77766E]">
              Publications, projects, teaching, and academic milestones.
            </p>
          </Link>

          <Link
            to="/beyond-academia"
            className="group min-w-0 border border-[#22251F]/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D94A35] hover:bg-[#EAE5DA] sm:p-5 md:p-7"
          >
            <p className="text-xs tracking-[0.18em] text-[#D94A35]">02 / PERSONAL</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <h2 className="min-w-0 text-lg font-medium sm:text-lg md:text-xl">Beyond Academia</h2>
              <ArrowUpRight size={19} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <p className="mt-3 text-sm leading-6 text-[#77766E]">
              Interests, experiences, and the things that inspire me.
            </p>
          </Link>

          <Link
            to="/blog"
            className="group min-w-0 border border-[#22251F]/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D94A35] hover:bg-[#EAE5DA] sm:p-5 md:p-7"
          >
            <p className="text-xs tracking-[0.18em] text-[#D94A35]">03 / WRITING</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <h2 className="min-w-0 text-lg font-medium sm:text-lg md:text-xl">Blog & Ideas</h2>
              <ArrowUpRight size={19} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <p className="mt-3 text-sm leading-6 text-[#77766E]">
              Technical explorations, reflections, and thoughts worth sharing.
            </p>
          </Link>
        </div>
      </section>

      
<footer className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-[#77766E] sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-7 md:px-12">
  <p>© 2026 Bijoy Kumar Das</p>

  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
    <a
      href="https://www.linkedin.com/in/bijoy-kumar-das-4a1469295/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-[#D94A35]"
    >
      LinkedIn Profile ↗
    </a>

    <a
      href="mailto:bijoy.kumar2404@gmail.com"
      className="transition-colors hover:text-[#D94A35]"
    >
      bijoy.kumar2404@gmail.com
    </a>
  </div>
</footer>

    </main>
  )
}


export default LandingPage
