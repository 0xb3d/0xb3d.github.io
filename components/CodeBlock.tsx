'use client'

import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { useEffect, useRef } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = 'plaintext', filename }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      delete codeRef.current.dataset.highlighted
      hljs.highlightElement(codeRef.current)
    }
  }, [code, language])

  return (
    <div className="my-6 not-prose">
      {filename && (
        <div className="bg-gray-800 px-4 py-2 rounded-t-lg text-sm text-gray-300 font-mono border-b border-gray-700">
          {filename}
        </div>
      )}
      <pre className={`!m-0 ${filename ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto`}>
        <code ref={codeRef} className={`language-${language} !block`}>
          {code}
        </code>
      </pre>
    </div>
  )
}