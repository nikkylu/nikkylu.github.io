'use client'
import { useState } from 'react'
import { projects } from '@/lib/projects'
import { withBasePath } from '@/lib/site'

export default function ConceptC() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div style={{ background: '#0a0a08', color: '#e8e4d8',
      fontFamily: "'Space Mono', monospace", cursor: 'crosshair' }}>

      {/* Hero — full viewport, minimal */}
      <section style={{ minHeight: '100vh', display: 'grid',
        gridTemplateRows: '1fr auto 1fr', padding: '3rem' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start' }}>
          <span style={{ fontSize: 9, letterSpacing: '0.2em', color: '#4a4840' }}>NIK</span>
          <span style={{ fontSize: 9, letterSpacing: '0.2em', color: '#4a4840' }}>2026</span>
        </div>

        {/* Title — massive, centered */}
        <h1 style={{ fontFamily: "'IM Fell English', serif",
          fontSize: 'clamp(4rem, 13vw, 13rem)', lineHeight: 0.88,
          fontWeight: 400, textAlign: 'center', letterSpacing: '-0.02em' }}>
          In the<br />
          <em style={{ color: '#c8b87a' }}>actual</em><br />
          world
        </h1>

        <div style={{ display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end' }}>
          <p style={{ fontSize: 9, color: '#4a4840', lineHeight: 2 }}>
            Artist<br />Musician<br />Researcher
          </p>
          <p style={{ fontSize: 9, color: '#4a4840', textAlign: 'right', lineHeight: 2 }}>
            Brown University<br />Providence RI<br />MS CS / AI·ML
          </p>
        </div>
      </section>

      {/* Works — full bleed images with text overlay */}
      <section>
        {projects.map((p, i) => (
          <div key={p.slug}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ position: 'relative', cursor: 'crosshair' }}>

            {p.cover ? (
              <div style={{ position: 'relative' }}>
                <img src={p.cover} alt=""
                  style={{ width: '100%', height: 'auto', display: 'block',
                    filter: hovered === i
                      ? 'grayscale(0%) brightness(0.5)'
                      : 'grayscale(60%) brightness(0.4)',
                    transition: 'filter 0.6s ease' }} />

                {/* Overlay text */}
                <div style={{ position: 'absolute', inset: 0,
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'flex-end', padding: '3rem',
                  background: hovered === i
                    ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)'
                    : 'none',
                  transition: 'background 0.6s ease' }}>
                  <p style={{ fontSize: 9, letterSpacing: '0.2em', color: '#c8b87a',
                    marginBottom: '1rem', opacity: hovered === i ? 1 : 0,
                    transition: 'opacity 0.4s ease' }}>
                    {String(i + 1).padStart(2, '0')} — {p.type.toUpperCase()}
                    {p.status ? ` · ${p.status}` : ''}
                  </p>
                  <h2 style={{ fontFamily: "'IM Fell English', serif",
                    fontSize: 'clamp(2rem, 5vw, 5rem)',
                    lineHeight: 1, fontWeight: 400,
                    opacity: hovered === i ? 1 : 0.15,
                    transition: 'opacity 0.4s ease' }}>
                    {p.title}
                  </h2>
                  <p style={{ fontSize: 10, color: '#7a7869', marginTop: '1rem',
                    opacity: hovered === i ? 1 : 0,
                    transition: 'opacity 0.4s ease 0.1s', maxWidth: 500 }}>
                    {p.tagline}
                  </p>
                </div>
              </div>
            ) : (
              /* No image — text only, full height */
              <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center',
                padding: '4rem 3rem', borderTop: '1px solid rgba(255,255,255,0.06)',
                background: hovered === i ? 'rgba(255,255,255,0.02)' : 'transparent',
                transition: 'background 0.4s' }}>
                <div>
                  <p style={{ fontSize: 9, letterSpacing: '0.2em', color: '#c8b87a',
                    marginBottom: '1.5rem' }}>
                    {String(i + 1).padStart(2, '0')} — {p.type.toUpperCase()}
                    {p.status ? ` · ${p.status}` : ''}
                  </p>
                  <h2 style={{ fontFamily: "'IM Fell English', serif",
                    fontSize: 'clamp(2rem, 5vw, 5rem)', lineHeight: 1, fontWeight: 400 }}>
                    {p.title}
                  </h2>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Footer — sparse */}
      <footer style={{ minHeight: '50vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontFamily: "'IM Fell English', serif", fontStyle: 'italic',
          fontSize: 'clamp(1rem, 3vw, 2rem)', color: '#4a4840', textAlign: 'center',
          lineHeight: 1.8 }}>
          Heat is the ensemble —<br />not the molecule.
        </p>
      </footer>

      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', fontSize: 9,
        color: '#4a4840', background: '#0a0a08', padding: '0.5rem 1rem',
        border: '1px solid rgba(255,255,255,0.08)' }}>
        <a href={withBasePath('/preview/b')} style={{ color: '#4a4840', textDecoration: 'none' }}>← B</a>
        {' '} CONCEPT C
      </div>
    </div>
  )
}
