// components/BlogPageServer.tsx
import {client} from "@/sanity/lib/client"
import {allPostsQuery} from "@/sanity/lib/queries"
import BlogPage from "@/components/BlogPageClient"

export default async function BlogPageServer({limit}: {limit?: number}) {
  const blogs = await client.fetch(allPostsQuery)

  // optionally limit to 3 for homepage preview
  const sliced = blogs.slice(0, limit)

  return <BlogPage blogs={sliced} />
}
