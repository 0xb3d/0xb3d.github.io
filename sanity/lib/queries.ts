// sanity/lib/queries.ts
import { groq } from "next-sanity"

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "link": "/blog/" + slug.current,
    "date": publishedAt,
    "category": categories[0]->title,
    readTime,
    description,
    tags,
    "author": author->name,
    "mainImage": mainImage{
      asset->{
        url
      },
      alt
    }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "link": "/" + slug.current,
    "date": publishedAt,
    "category": categories[0]->title,
    readTime,
    description,
    tags,
    "author": author->name,
    "mainImage": mainImage{
    asset->{
    url
    },
    body
    }
  }
`