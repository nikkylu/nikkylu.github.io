'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { projects } from '@/lib/projects'
import { withBasePath } from '@/lib/site'

const projectDrifts = [
  { x: [0, 18, -12, 8, -6, 0], y: [0, -14, 10, -8, 6, 0], duration: 18 },
  { x: [0, -14, 18, -8, 10, 0], y: [0, 12, -16, 8, -6, 0], duration: 22 },
  { x: [0, 12, -16, 6, 14, 0], y: [0, -10, 6, 14, -10, 0], duration: 20 },
  { x: [0, -18, 10, -6, 16, 0], y: [0, 14, -8, 10, -6, 0], duration: 24 },
  { x: [0, 14, -8, 18, -10, 0], y: [0, -12, 16, -6, 8, 0], duration: 19 },
]

const projectPositions = [
  { left: '4%',  top: '5%'  },
  { left: '54%', top: '10%' },
  { left: '18%', top: '42%' },
  { left: '58%', top: '48%' },
  { left: '8%',  top: '72%' },
]

const floatingLinks = [
  {
    label: 'Work',
    href: withBasePath('/#work'),
    style: { left: '14%', top: '28%' },
    drift: { x: [0, 22, -14, 10, -6, 0], y: [0, -18, 14, -10, 8, 0] },
    duration: 17,
  },
  {
    label: 'Music >',
    href: 'https://music.apple.com/us/artist/dissonant-other/1895353245',
    style: { left: '62%', top: '20%' },
    drift: { x: [0, -16, 12, -20, 8, 0], y: [0, 14, -18, 10, -6, 0] },
    duration: 21,
    external: true,
  },
  // {
  //   label: 'Research ↗',
  //   href: 'https://nikkylu.github.io/website',
  //   style: { left: '42%', top: '52%' },
  //   drift: { x: [0, 10, -20, 6, 14, 0], y: [0, -10, 6, 18, -12, 0] },
  //   duration: 25,
  //   external: true,
  // },
  {
    label: 'Writing >',
    href: 'https://nikkylu.substack.com/',
    style: { left: '72%', top: '42%' },
    drift: { x: [0, -10, 16, -8, 4, 0], y: [0, 12, -8, 16, -6, 0] },
    duration: 19,
    external: true,
  },
]

export default function Home() {
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const hue = Math.round((e.clientX / window.innerWidth) * 360)
        const sat = 4 + Math.round((e.clientY / window.innerHeight) * 10)
        const lit = 8 + Math.round((e.clientY / window.innerHeight) * 6)
        document.body.style.background = `hsl(${hue}, ${sat}%, ${lit}%)`
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <main>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex',
        flexDirection: 'column', justifyContent: 'flex-end',
        padding: '3rem 3rem 5rem', overflow: 'hidden' }}>

        {floatingLinks.map(link => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            style={{
              position: 'absolute',
              ...link.style,
              fontSize: 13,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              color: 'var(--text)',
              textDecoration: 'none',
              cursor: 'crosshair',
              zIndex: 2,
            }}
            animate={link.drift}
            transition={{ duration: link.duration, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ opacity: 0.6 }}
          >
            {link.label}
          </motion.a>
        ))}

        {/* <div aria-hidden style={{ position: 'absolute', top: '-0.05em', left: '-0.03em',
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: '25vw', lineHeight: 0.9, color: 'rgba(255,255,255,0.02)',
          userSelect: 'none', pointerEvents: 'none', zIndex: 0 }}>
          dissonant.<br />other
        </div> */}

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display" style={{ fontSize: 'clamp(4.5rem, 13vw, 13rem)',
         marginBottom: '3rem',
            transform: 'scaleY(0.82)', transformOrigin: 'bottom left' }}>
            Nikky Lu
          </h1>
          <p style={{ fontSize: 13, letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--text-dim)' }}>

          </p>
        </div>
      </section>

      {/* Work */}
      <section id="work" style={{ position: 'relative', minHeight: '220vh' }}>
        {projects.map((p, i) => {
          const drift = projectDrifts[i % projectDrifts.length]
          const pos   = projectPositions[i % projectPositions.length]
          return (
            <Link key={p.slug} href={`/work/${p.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                style={{
                  position: 'absolute',
                  ...pos,
                  width: 'clamp(200px, 26vw, 320px)',
                  cursor: 'crosshair',
                }}
                animate={drift}
                transition={{ duration: drift.duration, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ opacity: 0.7 }}
              >
                {p.cover && (
                  <img src={p.cover} alt="" style={{ width: '100%', height: 'auto',
                    display: 'block', filter: 'grayscale(8%)' }} />
                )}
                <div style={{ padding: '1rem 0 0' }}>
                  {p.status && (
                    <p style={{ fontSize: 11, letterSpacing: '0.2em',
                      color: 'var(--text-dim)', marginBottom: '0.5rem' }}>WIP</p>
                  )}
                  <h2 className="display" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.3rem)',
                    lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
                    {p.title}
                  </h2>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)',
                    letterSpacing: '0.1em' }}>{p.year}</p>
                </div>
              </motion.div>
            </Link>
          )
        })}
      </section>

      {/* Bio */}
      <section id="bio" style={{ padding: '10rem 3rem', maxWidth: 760 }}>
        <p style={{ fontSize: 13, letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'var(--text-dim)', marginBottom: '3rem' }}>Bio</p>
        <p style={{ fontSize: '1.05rem', lineHeight: 2, color: 'var(--text-muted)' }}>
          {/* Add bio here */}
        </p>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem', borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
          Nik — 2026
        </span>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {[['GitHub', 'https://github.com/nikkylu'],
            ['Substack', '#'],
            ['Research ↗', 'https://nikkylu.github.io/website']].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--text-dim)', textDecoration: 'none' }}>
              {label}
            </a>
          ))}
        </div>
      </footer>

    </main>
  )
}
