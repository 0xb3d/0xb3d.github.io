import { defineType, defineField, defineArrayMember } from 'sanity'
import { ImageIcon } from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
            ],
          },
          {
            name: 'inlineLatex',
            type: 'object',
            title: 'Inline Math',
            fields: [
              {
                name: 'body',
                type: 'string',
                title: 'LaTeX expression',
                description: 'e.g. E = mc^2 or \\frac{a}{b}',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineArrayMember({
      type: 'object',
      name: 'latex',
      title: 'LaTeX / Math',
      fields: [
        defineField({
          name: 'body',
          type: 'text',
          title: 'LaTeX Expression',
          description: 'Write raw LaTeX — e.g. \\frac{a}{b}, \\sum_{i=0}^{n}, E = mc^2',
        }),
        defineField({
          name: 'inline',
          type: 'boolean',
          title: 'Inline (vs display block)',
          initialValue: false,
        }),
      ],
      preview: {
        select: { title: 'body' },
        prepare: ({ title }: { title?: string }) => ({
          title: title ?? 'LaTeX block',
        }),
      },
    }),
    defineArrayMember({
      type: 'code',
      title: 'Code Block',
      options: {
        language: 'javascript',
        languageAlternatives: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'Python', value: 'python' },
          { title: 'Bash', value: 'bash' },
          { title: 'Shell', value: 'shell' },
          { title: 'Plain Text', value: 'plaintext' },
          { title: 'JSON', value: 'json' },
          { title: 'SQL', value: 'sql' },
          { title: 'Go', value: 'go' },
          { title: 'Rust', value: 'rust' },
          { title: 'C++', value: 'cpp' },
          { title: 'C', value: 'c' },
          { title: 'Assembly', value: 'x86asm' }
        ],
        withFilename: true,
      },
    }),
    defineArrayMember({ type: 'table' }),
  ],
})
