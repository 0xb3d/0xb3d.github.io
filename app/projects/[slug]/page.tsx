import React from 'react'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { CodeBlock } from '@/components/CodeBlock'

export const revalidate = 120

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
  _id, title, slug, description, icon, tech, tags, github, external, featured, status, startDate, endDate, content,
  images[]{ asset->{ url }, alt, caption }
}`

function getTextFromChildren(children: any): string {
  if (children == null) return ''
  if (typeof children === 'string' || typeof children === 'number') return String(children)
  if (Array.isArray(children)) return children.map(getTextFromChildren).join('')
  if (typeof children === 'object' && 'props' in children) return getTextFromChildren(children.props.children)
  return ''
}

function generateId(children: any) {
  return getTextFromChildren(children).toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').slice(0, 80)
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 id={generateId(children)} className="text-[28px] md:text-[32px] mt-12 mb-6 scroll-mt-24" style={{ color: 'var(--text)' }}>{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 id={generateId(children)} className="text-[24px] mt-10 mb-5 scroll-mt-24 flex items-center gap-4" style={{ color: 'var(--text)' }}>
        <span className="w-8 h-px flex-shrink-0" style={{ background: 'var(--red)' }} />{children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 id={generateId(children)} className="text-[20px] mt-8 mb-4 scroll-mt-24" style={{ color: 'var(--text)' }}>{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 id={generateId(children)} className="text-[10px] tracking-[4px] uppercase mt-6 mb-3 scroll-mt-24" style={{ color: 'var(--red)' }}>{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-6 text-[14px] leading-[1.9]" style={{ color: 'var(--text)' }}>{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-8 pl-6 py-4 italic text-[15px]" style={{ borderLeft: '2px solid var(--red)', color: 'var(--white-dim)' }}>{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => <ul className="mb-6 space-y-2 ml-4" style={{ color: 'var(--text)' }}>{children}</ul>,
    number: ({ children }: { children?: React.ReactNode }) => <ol className="mb-6 space-y-2 ml-4 list-decimal list-inside" style={{ color: 'var(--text)' }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-3 text-[14px] leading-[1.8]">
        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--red)' }} /><span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => <li className="text-[14px] leading-[1.8]">{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => <strong style={{ color: 'var(--text)' }}>{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="px-2 py-1 text-[13px]" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--red)', border: '1px solid var(--trace-line)' }}>{children}</code>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => {
      const href = value?.href || '#'
      const isInternal = href.startsWith('/') || href.startsWith('#')
      return (
        <a href={href} className="hover:text-[var(--red)]" style={{ color: 'var(--text)', textDecoration: 'underline', textDecorationColor: 'var(--trace-line)', textUnderlineOffset: '4px' }}
          {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>
      )
    },
  },
  types: {
    image: ({ value }: { value: { asset?: { url?: string }; alt?: string; caption?: string } }) => {
      if (!value?.asset?.url) return null
      return (
        <figure className="my-10">
          <div className="relative" style={{ border: '1px solid var(--trace-line)' }}>
            <Image src={value.asset.url} alt={value.alt || ''} width={800} height={400} className="w-full" />
            <div className="absolute top-0 left-0 w-4 h-px" style={{ background: 'var(--red)' }} />
            <div className="absolute top-0 left-0 h-4 w-px" style={{ background: 'var(--red)' }} />
            <div className="absolute bottom-0 right-0 w-4 h-px" style={{ background: 'var(--red)' }} />
            <div className="absolute bottom-0 right-0 h-4 w-px" style={{ background: 'var(--red)' }} />
          </div>
          {(value.alt || value.caption) && <figcaption className="mt-3 text-[10px] tracking-[2px] uppercase text-center" style={{ color: 'var(--white-dim)' }}>{value.caption || value.alt}</figcaption>}
        </figure>
      )
    },
    code: ({ value }: { value: { code: string; language?: string; filename?: string } }) => (
      <div className="my-8"><CodeBlock code={value.code} language={value.language} filename={value.filename} /></div>
    ),
  },
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

function getStatusDisplay(status: string): { label: string; color: string } {
  const map: Record<string, { label: string; color: string }> = {
    'in-progress': { label: 'In Progress', color: 'var(--red)' },
    'completed': { label: 'Completed', color: 'var(--text)' },
    'archived': { label: 'Archived', color: 'var(--white-dim)' },
    'planning': { label: 'Planning', color: 'var(--white-dim)' },
  }
  return map[status] || { label: status, color: 'var(--white-dim)' }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await client.fetch(projectBySlugQuery, { slug })

  if (!project) {
    return (
      <article className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[32px] mb-4" style={{ color: 'var(--text)' }}>Project not found</h1>
          <Link href="/projects" className="text-[11px] tracking-[3px] uppercase hover:text-[var(--red)]" style={{ color: 'var(--white-dim)' }}>← Back to projects</Link>
        </div>
      </article>
    )
  }

  const statusDisplay = getStatusDisplay(project.status)
  const hasContent = project.content?.length > 0
  const hasImages = project.images?.length > 0

  return (
    <article className="min-h-screen relative">
      {/* Header */}
      <header className="relative py-20 px-10" style={{ borderBottom: '1px solid var(--trace-line)' }}>
        <div className="max-w-[900px] mx-auto">
          {/* Back */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-[10px] tracking-[3px] uppercase mb-12 hover:text-[var(--text)]" style={{ color: 'var(--white-dim)' }}>
            <span>←</span><span>Back to projects</span>
          </Link>

          {/* Status + Dates */}
          <div className="text-[10px] tracking-[3px] uppercase mb-6" style={{ color: 'var(--white-dim)' }}>
            <span style={{ color: statusDisplay.color }}>{statusDisplay.label}</span>
            {project.startDate && <> — {formatDate(project.startDate)}{project.endDate ? ` → ${formatDate(project.endDate)}` : ' → Present'}</>}
          </div>

          {/* Icon + Title */}
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 flex items-center justify-center flex-shrink-0" style={{ border: '1px solid var(--trace-line)', background: 'var(--card-bg)' }}>
              <i className={`${project.icon} text-2xl`} style={{ color: 'var(--white-dim)' }} />
            </div>
            <h1 className="text-[clamp(28px,5vw,48px)] leading-[1.1] tracking-[-1px]" style={{ color: 'var(--text)' }}>{project.title}</h1>
          </div>

          {/* Description */}
          <p className="text-[14px] leading-[1.9] max-w-[700px] mb-8" style={{ color: 'var(--white-dim)' }}>{project.description}</p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech?.map((tech: string, i: number) => (
              <span key={i} className="text-[9px] tracking-[2px] uppercase px-3 py-1.5" style={{ color: 'var(--white-dim)', border: '1px solid var(--trace-line)' }}>{tech}</span>
            ))}
          </div>

          {/* Tags */}
          {project.tags?.length > 0 && (
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] tracking-[2px] uppercase" style={{ color: 'var(--trace-line)' }}>Tags:</span>
              {project.tags.map((tag: string, i: number) => <span key={i} className="text-[10px]" style={{ color: 'var(--white-dim)' }}>#{tag}</span>)}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[11px] tracking-[3px] uppercase hover:text-[var(--text)]" style={{ color: 'var(--white-dim)' }}>
                <i className="fab fa-github text-base" /><span>View Source</span><span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
            {project.external && (
              <a href={project.external} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[11px] tracking-[3px] uppercase hover:text-[var(--red)]" style={{ color: 'var(--white-dim)' }}>
                <span>Live Demo</span><span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            )}
          </div>

          {/* Red line */}
          <div className="w-16 h-px mt-10" style={{ background: 'var(--red)' }} />
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[900px] mx-auto py-16 px-10">
        {/* Gallery */}
        {hasImages && (
          <section className="mb-16">
            <h2 className="text-[10px] tracking-[4px] uppercase mb-6 flex items-center gap-4" style={{ color: 'var(--red)' }}>
              <span className="w-8 h-px" style={{ background: 'var(--red)' }} />Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image: any, i: number) => (
                <figure key={i}>
                  <div className="relative" style={{ border: '1px solid var(--trace-line)' }}>
                    <Image src={image.asset.url} alt={image.alt || `${project.title} ${i + 1}`} width={600} height={400} className="w-full" />
                    <div className="absolute top-0 left-0 w-4 h-px" style={{ background: 'var(--red)' }} />
                    <div className="absolute top-0 left-0 h-4 w-px" style={{ background: 'var(--red)' }} />
                    <div className="absolute bottom-0 right-0 w-4 h-px" style={{ background: 'var(--red)' }} />
                    <div className="absolute bottom-0 right-0 h-4 w-px" style={{ background: 'var(--red)' }} />
                  </div>
                  {image.caption && <figcaption className="mt-2 text-[10px] tracking-[2px] uppercase" style={{ color: 'var(--white-dim)' }}>{image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Details */}
        {hasContent && (
          <section>
            <h2 className="text-[10px] tracking-[4px] uppercase mb-8 flex items-center gap-4" style={{ color: 'var(--red)' }}>
              <span className="w-8 h-px" style={{ background: 'var(--red)' }} />Details
            </h2>
            <PortableText value={project.content} components={components} />
          </section>
        )}

        {/* Empty state */}
        {!hasContent && !hasImages && (
          <div className="text-center py-16" style={{ color: 'var(--white-dim)' }}>
            <p className="text-[14px] mb-4">Detailed writeup coming soon.</p>
            {project.github && (
              <p className="text-[13px]">Check out the <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--red)]">source code on GitHub</a>.</p>
            )}
          </div>
        )}

        {/* End marker */}
        <div className="mt-16 flex items-center gap-4">
          <div className="w-12 h-px" style={{ background: 'var(--red)' }} />
          <span className="text-[10px] tracking-[3px] uppercase" style={{ color: 'var(--white-dim)' }}>End</span>
          <div className="w-12 h-px" style={{ background: 'var(--red)' }} />
        </div>

        {/* Back */}
        <div className="mt-12">
          <Link href="/projects" className="text-[11px] tracking-[3px] uppercase hover:text-[var(--red)]" style={{ color: 'var(--white-dim)' }}>← All projects</Link>
        </div>
      </div>
    </article>
  )
}