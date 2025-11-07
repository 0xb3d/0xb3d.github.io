'use client'

import hljs from 'highlight.js'
import 'highlight.js/styles/sunburst.css'

// for different hightlight themes
{/*
    github-dark.css 
    vs2015.css
    atom-one-dark.css 
    monokai-sublime.css 
    nord.css 
    tokyo-night-dark.css 
    night-owl.css   
    ir-black.css
*/}

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
        <div className="bg-[#0f0e0e] px-2 py-1 rounded-t-lg text-xs text-gray-300 font-mono border-b border-gray-600">
          {filename}
        </div>
      )}
      <pre className={`!m-0 ${filename ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto text-sm`}>
        <code ref={codeRef} className={`language-${language} !block`}>
          {code}
        </code>
      </pre>
    </div>
  )
}