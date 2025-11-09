import React from 'react'
import { client } from '@/sanity/lib/client'
import { postBySlugQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import { 
  PortableText, PortableTextComponents } from '@portabletext/react'
import { CodeBlock } from '@/components/CodeBlock'
import { extractHeadings } from '@/utils/extractHeadings'
import { TableOfContents } from '@/components/TableOfContents'

interface BlogPostPageProps {
  params: { slug: string }
}

/**
 * Small helper to extract plain text from React children and generate a slug-like id.
 * Keeps IDs stable if block value has a _key it will be used instead.
 */
function getTextFromChildren(children: any): string {
  if (children == null) return ''
  if (typeof children === 'string' || typeof children === 'number') return String(children)
  if (Array.isArray(children)) return children.map(getTextFromChildren).join('')
  if (typeof children === 'object' && 'props' in children) return getTextFromChildren(children.props.children)
  return ''
}

function generateId(children: any) {
  const text = getTextFromChildren(children)
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // remove punctuation
    .replace(/\s+/g, '-') // space -> dash
    .slice(0, 80) // limit length
}

const components: PortableTextComponents = {
  block: {
    // heading renderers create an id for linking / TOC
    h1: ({ children }: { children?: React.ReactNode }) => {
      const id = `${generateId(children)}`
      return (
        <h1 id={id}
          className="text-4xl font-bold mt-8 mb-4 scroll-mt-24"
          style={{ color: 'var(--text)' }}>
          {children}
        </h1>
      )
    },
    h2: ({ children }: { children?: React.ReactNode }) => {
      const id = `${generateId(children)}`
      return (
        <h2 id={id}
          className="text-3xl font-bold mt-8 mb-4 scroll-mt-24"
          style={{ color: 'var(--text)' }}>
          {children}
        </h2>
      )
    },
    h3: ({ children }: { children?: React.ReactNode }) => {
      const id = `${generateId(children)}`
      return (
        <h3 id={id}
          className="text-2xl font-bold mt-6 mb-3 scroll-mt-24"
          style={{ color: 'var(--text)' }}>
          {children}
        </h3>
      )
    },
    h4: ({ children }: { children?: React.ReactNode }) => {
      const id = `${generateId(children)}`
      return (
        <h4 id={id}
          className="text-xl font-bold mt-6 mb-3 scroll-mt-24"
          style={{ color: 'var(--text)' }}>
          {children}
        </h4>
      )
    },
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 leading-7" style={{ color: 'var(--text)' }}>{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 pl-4 italic my-4"
        style={{ borderColor: 'var(--border-primary)' }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-2"
        style={{ color: 'var(--text)' }}>
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2"
        style={{ color: 'var(--text)' }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) =>
      <li className="ml-4">{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) =>
      <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) =>
      <strong className="font-bold">{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) =>
      <em className="italic">{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="px-1.5 py-0.5 rounded text-xs font-mono"
        style={{
          backgroundColor: 'var(--card-bg)',
          color: 'var(--primary)',
          border: '1px solid var(--border-primary)'
        }}>
        {children}
      </code>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => {
      const href = value?.href || '#'
      const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
      return (
        <a
          href={href}
          className="hover:underline"
          style={{ color: 'var(--primary)' }}
          {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }: { value: { asset?: { url?: string }; alt?: string } }) => {
      if (!value?.asset?.url) return null
      return (
        <div className="my-6">
          <Image
            src={value.asset.url}
            alt={value.alt || ''}
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
      )
    },
    code: ({ value }: { value: { code: string; language?: string; filename?: string } }) => (
      <CodeBlock code={value.code} language={value.language} filename={value.filename} />
    ),
  },
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const post = await client.fetch(postBySlugQuery, { slug })

  if (!post) {
    return (
      <article className="min-h-screen transition-colors"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <div className="max-w-4xl mx-auto py-12 px-6 font-bold text-3xl"
          style={{ color: 'var(--text)' }}>
          Post not found
        </div>
      </article>
    )
  }

  const body = post.body ?? []
  const headings = extractHeadings(body) // expected shape: [{id, title, level}, ...]
  const showTOC = headings.length >= 3

  return (
    <article className="min-h-screen transition-colors"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Grid: main content + optional TOC on xl+ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-x-8">
          <main>
            <h1 className="text-5xl font-bold mb-4"
              style={{ color: 'var(--text)' }}>
              {post.title}
            </h1>
            <p className="text-lg mb-2"
              style={{ color: 'var(--muted-foreground)' }}>
              {post.author && `by ${post.author}`} • {post.date ? new Date(post.date).toDateString() : ''} • {post.readTime}
            </p>

            {post.tags?.length > 0 && (
              <div className="mt-4" style={{ color: 'var(--text)' }}>
                <strong>Tags:</strong> {post.tags.join(', ')}
              </div>
            )}

            {post.mainImage?.asset?.url && (
              <div className="mb-6">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  width={1200}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            )}
            <hr
              style={{
                border: 'none',
                borderTop: '1px solid var(--muted-foreground)',
                margin: '1rem 0'
              }}
            />
            <div className="mt-8 text-base prose prose-invert max-w-none">
              <PortableText value={body} components={components} />
            </div>
          </main>

          {showTOC && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          )}
        </div>

        {/* Collapsible TOC on mobile */}
        {showTOC && (
          <div className="lg:hidden mt-12 border-t pt-4"
            style={{ borderColor: 'var(--border-primary)' }}>
            <details className="group">
              <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center"
                style={{ color: 'var(--text)' }}>
                Table of Contents
                <span className="transition-transform group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-3">
                <TableOfContents headings={headings} />
              </div>
            </details>
          </div>
        )}
      </div>
    </article>
  )
}