import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      title: 'Short Description',
    }),
    defineField({
      name: 'readTime',
      type: 'string', // or 'number' if you prefer (e.g. 5 min)
      title: 'Estimated Read Time',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})


// import {DocumentTextIcon} from '@sanity/icons'
// import {defineArrayMember, defineField, defineType} from 'sanity'

// // helper function for word count
// function estimateReadTime(body: any) {
//   if (!body) return null
//   const plainText = body
//     .map((block: any) => {
//       if (block._type !== 'block' || !block.children) return ''
//       return block.children.map((child: any) => child.text).join(' ')
//     })
//     .join(' ')
//   const wordCount = plainText.split(/\s+/).filter(Boolean).length
//   const minutes = Math.ceil(wordCount / 200) // 200 wpm avg
//   return `${minutes} min read`
// }

// export const postType = defineType({
//   name: 'post',
//   title: 'Post',
//   type: 'document',
//   icon: DocumentTextIcon,
//   fields: [
//     defineField({
//       name: 'title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//       },
//     }),
//     defineField({
//       name: 'author',
//       type: 'reference',
//       to: {type: 'author'},
//     }),
//     defineField({
//       name: 'mainImage',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//       fields: [
//         defineField({
//           name: 'alt',
//           type: 'string',
//           title: 'Alternative text',
//         }),
//       ],
//     }),
//     defineField({
//       name: 'categories',
//       type: 'array',
//       of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
//     }),
//     defineField({
//       name: 'publishedAt',
//       type: 'datetime',
//     }),
//     defineField({
//       name: 'description',
//       type: 'text',
//       rows: 3,
//       title: 'Short Description',
//     }),
//     defineField({
//       name: 'tags',
//       type: 'array',
//       of: [{type: 'string'}],
//     }),
//     defineField({
//       name: 'body',
//       type: 'blockContent',
//     }),
//     // virtual field for readTime (not editable, auto-calculated)
//     defineField({
//       name: 'readTime',
//       type: 'string',
//       title: 'Read Time',
//       readOnly: true,
//     }),
//   ],
//   preview: {
//     select: {
//       title: 'title',
//       author: 'author.name',
//       media: 'mainImage',
//       body: 'body',
//     },
//     prepare(selection) {
//       const {author, body} = selection
//       const readTime = estimateReadTime(body)
//       return {
//         ...selection,
//         subtitle: `${author ? `by ${author}` : ''} ${readTime ? ` • ${readTime}` : ''}`,
//       }
//     },
//   },
// })
