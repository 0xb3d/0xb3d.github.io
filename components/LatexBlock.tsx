'use client'

import katex from 'katex'
import 'katex/dist/katex.min.css'

interface LatexBlockProps {
  body: string
  inline?: boolean
}

export function LatexBlock({ body, inline = false }: LatexBlockProps) {
  if (!body) return null

  let html = ''
  let error = false

  try {
    html = katex.renderToString(body, {
      displayMode: !inline,
      throwOnError: true,
      strict: false,
    })
  } catch {
    error = true
  }

  if (error) {
    return inline ? (
      <code
        className="px-2 py-1 text-[13px]"
        style={{
          color: 'var(--red)',
          border: '1px solid var(--red)',
          background: 'var(--card-bg)',
          opacity: 0.8,
        }}
        title="LaTeX render error — check expression syntax"
      >
        {body}
      </code>
    ) : (
      <div
        className="my-6 px-4 py-3 text-[12px] tracking-[1px]"
        style={{
          border: '1px solid var(--red)',
          color: 'var(--red)',
          background: 'var(--card-bg)',
        }}
      >
        <span className="uppercase tracking-[2px] text-[9px] mr-3 opacity-60">LaTeX error</span>
        <code>{body}</code>
      </div>
    )
  }

  if (inline) {
    return (
      <span
        className="inline-block align-middle"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return (
    <div
      className="my-8 overflow-x-auto text-center py-4"
      style={{ borderLeft: '2px solid var(--trace-line)' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
