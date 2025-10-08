import { client } from '@/sanity/lib/client'
import { postBySlugQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { CodeBlock } from '@/components/CodeBlock'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 leading-7">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-4">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
      <a href={value?.href} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: { asset: { url: string }; alt?: string } }) => (
      <div className="my-6">
        <Image
          src={value.asset.url}
          alt={value.alt || ''}
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>
    ),
    code: ({ value }: { value: { code: string; language?: string; filename?: string } }) => (
      <CodeBlock code={value.code} language={value.language} filename={value.filename} />
    )
  },
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await client.fetch(postBySlugQuery, { slug })

  if (!post) return <p>Post not found</p>

  return (
    <article className="min-h-screen bg-black/70  ">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-2">
          {post.author && `by ${post.author}`} • {post.date} • {post.readTime}
        </p>
        {post.tags?.length > 0 && (
          <div className="mt-4">
            <strong>Tags:</strong> {post.tags.join(', ')}
          </div>
        )}
        {post.mainImage?.asset?.url && (
          <div className="mb-6">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        )}

        <div className="mt-8">
          <PortableText value={post.body} components={components} />
        </div>
      </div >
    </article>
  )
}