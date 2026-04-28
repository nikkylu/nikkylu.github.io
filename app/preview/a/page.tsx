'use client'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { withBasePath } from '@/lib/site'

export default function ConceptA() {
  return (
    <div style={{ background: '#0a0a08', minHeight: '100vh', color: '#e8e4d8',
      fontFamily: "'Space Mono', monospace" }}>

      {/* Nav — inline, not fixed */}
      <header style={{ padding: '2rem 2.5rem', display: 'flex',
        justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ fontSize: 11 }}>NIK — 2026</span>
        <span style={{ fontSize: 11, color: '#4a4840' }}>ARTIST · MUSICIAN · RESEARCHER</span>
      </header>

      {/* Hero — typographic score */}
      <section style={{ padding: '6rem 2.5rem 4rem', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: '4rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div>
          <p style={{ fontSize: 9, letterSpacing: '0.3em', color: '#4a4840', marginBottom: '3rem' }}>
            §&nbsp;01 &mdash; POSITION
          </p>
          <h1 style={{ fontFamily: "'IM Fell English', serif", fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            lineHeight: 1.05, fontWeight: 400, marginBottom: '4rem' }}>
            In the actual<br />world and its<br /><em style={{ color: '#c8b87a' }}>nearby</em><br />neighborhoods
          </h1>
          <p style={{ fontSize: 9, color: '#4a4840', lineHeight: 2.2, letterSpacing: '0.05em',
            borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
            Brown University — MS CS (AI/ML)<br />
            Providence, RI — 2026<br />
            16mm · ECN-2 · D-76<br />
            Techno · Electronic · Live
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9 }}>
            <tbody>
              {[
                ['FILM', '16mm / Kodak 7222'],
                ['PROCESS', 'ECN-2 hand development'],
                ['SOUND', 'Modular / DAW'],
                ['RESEARCH', 'ViT · SEM imagery'],
                ['LOCATION', 'Providence RI'],
                ['CLIMBING', 'Mont Blanc (training)'],
              ].map(([k, v]) => (
                <tr key={k} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '0.75rem 0', color: '#4a4840', letterSpacing: '0.15em',
                    width: '40%' }}>{k}</td>
                  <td style={{ padding: '0.75rem 0', color: '#7a7869' }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Works — scored list */}
      <section style={{ padding: '4rem 2.5rem' }}>
        <p style={{ fontSize: 9, letterSpacing: '0.3em', color: '#4a4840', marginBottom: '3rem' }}>
          §&nbsp;02 &mdash; WORKS
        </p>
        {projects.map((p, i) => (
          <div key={p.slug} style={{ display: 'grid', gridTemplateColumns: '3rem 1fr 1fr auto',
            gap: '2rem', alignItems: 'start', padding: '1.5rem 0',
            borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: 9, color: '#4a4840', paddingTop: '0.15rem' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p style={{ fontFamily: "'IM Fell English', serif", fontSize: '1.1rem',
                lineHeight: 1.3, marginBottom: '0.5rem' }}>{p.title}</p>
              <p style={{ fontSize: 9, color: '#7a7869', letterSpacing: '0.1em' }}>
                {p.type.toUpperCase()}{p.status ? ` — ${p.status}` : ''}
              </p>
            </div>
            <p style={{ fontSize: 9, color: '#4a4840', lineHeight: 1.8, paddingTop: '0.1rem' }}>
              {p.tagline}
            </p>
            <span style={{ fontSize: 9, color: '#4a4840', whiteSpace: 'nowrap' }}>{p.year}</span>
          </div>
        ))}
      </section>

      <footer style={{ padding: '2rem 2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#4a4840' }}>
        <span>nikkylu.zl@gmail.com</span>
        <span>github · substack · research</span>
      </footer>

      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', fontSize: 9,
        color: '#4a4840', background: '#0a0a08', padding: '0.5rem 1rem',
        border: '1px solid rgba(255,255,255,0.08)' }}>
        CONCEPT A — <Link href={withBasePath('/preview/b')} style={{ color: '#c8b87a', textDecoration: 'none' }}>B →</Link>
      </div>
    </div>
  )
}
