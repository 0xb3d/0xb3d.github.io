// utils/extractHeadings.ts

interface Heading {
  id: string 
  text: string 
  level: 'h2' | 'h3' | 'h4'
}

export function extractHeadings(body: any[] = []): Heading[] {
  const headings: Heading[] = []

  if (!Array.isArray(body)) return headings

  for (const block of body) {
    if (!block || block._type !== 'block' || typeof block.style !== 'string') continue

    const style = block.style as string
    const level: Heading['level'] | null =
      style === 'h2' ? 'h2' : style === 'h3' ? 'h3' : style === 'h4' ? 'h4' : null

    if (!level) continue

    const text = (Array.isArray(block.children) ? block.children : [])
      .map((c: any) => (typeof c?.text === 'string' ? c.text : ''))
      .join('')

    const id = text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')

    headings.push({ id, text, level })
  }

  return headings
}