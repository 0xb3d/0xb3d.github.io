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
    body,
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
    readTime,
    description,
    tags,
    body[]{
      ...,
      _type == "image" => {
        _key,
        _type,
        alt,
        "asset": asset->{
          _id,
          url
        }
      }
    },
    "author": author->name,
    "mainImage": mainImage{
      asset->{
        url
      },
      alt
    }
  }
`


// Project fields matching the original component needs
const projectFields = groq`
  _id,
  title,
  slug,
  description,
  icon,
  tech,
  github,
  external,
  order,
  _createdAt
`

// Get all projects with complete info for the cards
export const allProjectsQuery = groq`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    ${projectFields}
  }
`

// Get single project by slug with basic info
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
  }
`

// Get project slugs for static generation
export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`