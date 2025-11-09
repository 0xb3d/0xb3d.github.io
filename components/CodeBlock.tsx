'use client'

import hljs from 'highlight.js'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = 'plaintext', filename }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted (avoid hydration mismatch)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Dynamically load highlight.js theme based on current theme
  useEffect(() => {
    if (!mounted) return

    // Remove existing highlight.js stylesheets
    const existingStyles = document.querySelectorAll('link[data-hljs-theme]')
    existingStyles.forEach(style => style.remove())

    // Create and append new stylesheet
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.setAttribute('data-hljs-theme', 'true')

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
    // Choose theme based on current mode
    if (resolvedTheme === 'dark') {
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css'
    } else {
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/panda-syntax-light.min.css'
    }

    document.head.appendChild(link)

    return () => {
      link.remove()
    }
  }, [resolvedTheme, mounted])

  // Highlight code when it changes
  useEffect(() => {
    if (codeRef.current && mounted) {
      delete codeRef.current.dataset.highlighted
      hljs.highlightElement(codeRef.current)
    }
  }, [code, language, mounted])

  if (!mounted) {
    return null // Avoid hydration mismatch
  }

  return (
    <div className="my-6 not-prose">
      {filename && (
        <div className="px-2 py-1 rounded-t-lg text-xs font-mono border-b transition-colors"
          style={{
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text)',
            border: '0.1px solid var(--border-primary)'
          }}>
          {filename}
        </div>
      )}
      <pre className={`!m-0 ${filename ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto text-sm`}
        style={{
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--border-primary)'
        }}>
        <code ref={codeRef} className={`language-${language} !block`}>
          {code}
        </code>
      </pre>
    </div>
  )
}