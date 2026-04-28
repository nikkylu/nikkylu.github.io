'use client'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { withBasePath } from '@/lib/site'

export default function ConceptB() {
  return (
    <div style={{ background: '#0a0a08', minHeight: '100vh', color: '#e8e4d8',
      fontFamily: "'Space Mono', monospace", overflowX: 'hidden' }}>

      {/* Hero — collision */}
      <section style={{ position: 'relative', minHeight: '100vh', padding: '2rem' }}>

        {/* Giant background letter */}
        <div style={{ position: 'absolute', top: '-0.15em', left: '-0.05em',
          fontFamily: "'IM Fell English', serif", fontSize: 'clamp(30vw, 40vw, 50vw)',
          lineHeight: 1, color: 'rgba(255,255,255,0.03)', userSelect: 'none',
          pointerEvents: 'none', zIndex: 0 }}>
          N
        </div>

        {/* Nav — scattered */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex',
          justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20vh' }}>
          <span style={{ fontFamily: "'IM Fell English', serif", fontSize: 18 }}>Nik</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
            gap: '0.25rem' }}>
            {['Work', 'Music', 'About', 'Research ↗'].map(l => (
              <a key={l} href="#" style={{ fontSize: 9, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: '#4a4840', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>

        {/* Title — collides with image */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontFamily: "'IM Fell English', serif",
            fontSize: 'clamp(3.5rem, 9vw, 9rem)', lineHeight: 0.9,
            fontWeight: 400, marginBottom: 0 }}>
            In the actual<br />
            world and its
          </h1>

          {/* Cover image — bleeds into title */}
          {projects[1]?.cover && (
            <div style={{ position: 'relative', margin: '-3rem 0 -3rem auto',
              width: '45%', zIndex: -1 }}>
              <img src={projects[1].cover} alt=""
                style={{ width: '100%', height: 'auto', display: 'block',
                  filter: 'grayscale(30%) brightness(0.7)' }} />
            </div>
          )}

          <h1 style={{ fontFamily: "'IM Fell English', serif",
            fontSize: 'clamp(3.5rem, 9vw, 9rem)', lineHeight: 0.9,
            fontWeight: 400, color: '#c8b87a' }}>
            <em>nearby</em><br />neighborhoods
          </h1>
        </div>

        {/* Floating caption */}
        <p style={{ position: 'absolute', bottom: '3rem', right: '2rem',
          fontSize: 9, color: '#4a4840', letterSpacing: '0.15em',
          textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
          Artist · Musician · Researcher · Providence RI · 2026
        </p>
      </section>

      {/* Works — offset grid */}
      <section style={{ padding: '0 2rem 6rem' }}>
        <p style={{ fontSize: 9, letterSpacing: '0.3em', color: '#c8b87a',
          marginBottom: '4rem', marginLeft: '50%' }}>
          — Selected Work
        </p>

        {projects.map((p, i) => (
          <div key={p.slug} style={{
            display: 'grid',
            gridTemplateColumns: i % 2 === 0 ? '5rem 1fr 40%' : '40% 1fr 5rem',
            gap: '2rem', alignItems: 'center', marginBottom: '1px',
            background: 'rgba(255,255,255,0.02)',
            padding: '0',
          }}>
            {i % 2 !== 0 && p.cover && (
              <img src={p.cover} alt=""
                style={{ width: '100%', height: 'auto', display: 'block',
                  filter: 'grayscale(25%)', maxHeight: 300, objectFit: 'cover' }} />
            )}
            {i % 2 !== 0 && !p.cover && <div />}

            <div style={{ padding: '3rem 1rem' }}>
              <p style={{ fontSize: 9, color: '#4a4840', letterSpacing: '0.2em',
                marginBottom: '1rem' }}>
                {String(i + 1).padStart(2, '0')} — {p.type.toUpperCase()}
                {p.status ? ` — ${p.status}` : ''}
              </p>
              <h2 style={{ fontFamily: "'IM Fell English', serif",
                fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', lineHeight: 1.2,
                fontWeight: 400, marginBottom: '1rem' }}>{p.title}</h2>
              <p style={{ fontSize: 9, color: '#7a7869', lineHeight: 1.8 }}>{p.tagline}</p>
            </div>

            {i % 2 === 0 && p.cover && (
              <img src={p.cover} alt=""
                style={{ width: '100%', height: 'auto', display: 'block',
                  filter: 'grayscale(25%)', maxHeight: 300, objectFit: 'cover' }} />
            )}
            {i % 2 === 0 && !p.cover && (
              <div style={{ height: 200, background: 'rgba(255,255,255,0.03)',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 9, color: '#4a4840', letterSpacing: '0.1em' }}>
                  {p.year}
                </span>
              </div>
            )}

            {i % 2 !== 0 && (
              <span style={{ fontSize: 9, color: '#4a4840', writingMode: 'vertical-rl',
                textAlign: 'center' }}>{p.year}</span>
            )}
            {i % 2 === 0 && (
              <span style={{ fontSize: 9, color: '#4a4840', writingMode: 'vertical-rl',
                textAlign: 'center' }}>{p.year}</span>
            )}
          </div>
        ))}
      </section>

      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', fontSize: 9,
        color: '#4a4840', background: '#0a0a08', padding: '0.5rem 1rem',
        border: '1px solid rgba(255,255,255,0.08)' }}>
        <Link href={withBasePath('/preview/a')} style={{ color: '#4a4840', textDecoration: 'none' }}>← A</Link>
        {' '} CONCEPT B {' '}
        <Link href={withBasePath('/preview/c')} style={{ color: '#c8b87a', textDecoration: 'none' }}>C →</Link>
      </div>
    </div>
  )
}
