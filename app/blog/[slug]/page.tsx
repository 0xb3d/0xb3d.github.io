// app/blog/[slug]/page.tsx
import {client} from '@/sanity/lib/client'
import {postBySlugQuery} from '@/sanity/lib/queries'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = await client.fetch(postBySlugQuery, { slug })

  if (!post) return <p>Post not found</p>

  return (
    <article className="min-h-screen max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-2">
        {post.author && `by ${post.author}`} • {post.date} • {post.readTime}
      </p>
      <p className="text-gray-300 mb-6">{post.description}</p>
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
      <div className="prose prose-invert">
        <PortableText value={post.body} />
      </div>
      {post.tags?.length > 0 && (
        <div className="mt-6">
          <strong>Tags:</strong> {post.tags.join(', ')}
        </div>
      )}
    </article>
  )
}
