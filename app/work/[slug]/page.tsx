import { getProject, projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main style={{ minHeight: '100vh', padding: '8rem 3rem 6rem', maxWidth: 960, margin: '0 auto' }}>

      <Link href="/" style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--text-dim)', textDecoration: 'none', display: 'inline-flex',
        alignItems: 'center', gap: '0.5rem', marginBottom: '5rem' }}>
        ← Back
      </Link>

      <p style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
        {project.type}{project.status ? ' — WIP' : ''}
      </p>

      <h1 className="display" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: 0.95,
        letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '1.5rem' }}>
        {project.title}
      </h1>

      <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: '5rem',
        letterSpacing: '0.1em' }}>
        {project.year}{project.location ? ' — ' + project.location : ''}
      </p>

      {project.description && (
        <div style={{ marginBottom: '5rem' }}>
          {project.description.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.9,
              color: 'var(--text)', marginBottom: '1.5rem' }}>
              {para}
            </p>
          ))}
        </div>
      )}

      {project.media.length === 0 && (
        <div style={{ width: '100%', height: 400, background: 'var(--surface)',
          border: '1px solid var(--border)', marginBottom: '5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 13, color: 'var(--text-dim)', letterSpacing: '0.2em',
            textTransform: 'uppercase' }}>Images coming</span>
        </div>
      )}

      {project.media.length > 0 && (
        <div className={`photo-grid photo-grid-${project.columns ?? 2}`}>
          {project.media.map((src, i) => (
            <img key={i} src={src} alt=""
              style={{ width: '100%', height: 'auto', display: 'block' }} />
          ))}
        </div>
      )}

      <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '5rem 0' }} />

      {(() => {
        const idx = projects.findIndex(p => p.slug === project.slug)
        const next = projects[(idx + 1) % projects.length]
        return (
          <Link href={`/work/${next.slug}`} style={{ textDecoration: 'none',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            cursor: 'crosshair' }}>
            <div>
              <p style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--text-dim)', marginBottom: '1rem' }}>Next</p>
              <p className="display" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
                letterSpacing: '-0.02em', color: 'var(--text)' }}>
                {next.title}
              </p>
            </div>
            <span style={{ fontSize: 24, color: 'var(--text-dim)' }}>→</span>
          </Link>
        )
      })()}
    </main>
  )
}
