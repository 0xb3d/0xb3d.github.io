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
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Get line count for line numbers
  const lineCount = code.split('\n').length

  // Language display names and classification
  const getLanguageInfo = (lang: string): { label: string; category: string } => {
    const info: { [key: string]: { label: string; category: string } } = {
      javascript: { label: 'JavaScript', category: 'SCRIPT' },
      typescript: { label: 'TypeScript', category: 'SCRIPT' },
      python: { label: 'Python', category: 'SCRIPT' },
      java: { label: 'Java', category: 'COMPILED' },
      c: { label: 'C', category: 'COMPILED' },
      cpp: { label: 'C++', category: 'COMPILED' },
      rust: { label: 'Rust', category: 'COMPILED' },
      go: { label: 'Go', category: 'COMPILED' },
      php: { label: 'PHP', category: 'SCRIPT' },
      ruby: { label: 'Ruby', category: 'SCRIPT' },
      swift: { label: 'Swift', category: 'COMPILED' },
      kotlin: { label: 'Kotlin', category: 'COMPILED' },
      html: { label: 'HTML', category: 'MARKUP' },
      css: { label: 'CSS', category: 'STYLE' },
      scss: { label: 'SCSS', category: 'STYLE' },
      bash: { label: 'Bash', category: 'SHELL' },
      shell: { label: 'Shell', category: 'SHELL' },
      zsh: { label: 'Zsh', category: 'SHELL' },
      powershell: { label: 'PowerShell', category: 'SHELL' },
      json: { label: 'JSON', category: 'DATA' },
      yaml: { label: 'YAML', category: 'DATA' },
      xml: { label: 'XML', category: 'DATA' },
      toml: { label: 'TOML', category: 'DATA' },
      markdown: { label: 'Markdown', category: 'MARKUP' },
      sql: { label: 'SQL', category: 'QUERY' },
      graphql: { label: 'GraphQL', category: 'QUERY' },
      dockerfile: { label: 'Dockerfile', category: 'CONFIG' },
      nginx: { label: 'Nginx', category: 'CONFIG' },
      solidity: { label: 'Solidity', category: 'CONTRACT' },
      assembly: { label: 'Assembly', category: 'LOW-LEVEL' },
      asm: { label: 'Assembly', category: 'LOW-LEVEL' },
      x86asm: { label: 'x86 ASM', category: 'LOW-LEVEL' },
      plaintext: { label: 'Plain Text', category: 'TEXT' },
    }
    return info[lang.toLowerCase()] || { label: lang.toUpperCase(), category: 'CODE' }
  }

  const langInfo = getLanguageInfo(language)

  // Ensure component is mounted (avoid hydration mismatch)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Dynamically load highlight.js theme based on current theme
  useEffect(() => {
    if (!mounted) return

    const existingStyles = document.querySelectorAll('link[data-hljs-theme]')
    existingStyles.forEach(style => style.remove())

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.setAttribute('data-hljs-theme', 'true')

    // Theme options that fit the Renaissance/technical aesthetic:
    // Dark: 'tokyo-night-dark', 'nord', 'github-dark-dimmed', 'ir-black', 'hybrid'
    // Light: 'github', 'stackoverflow-light', 'vs', 'xcode'
    
    if (resolvedTheme === 'dark') {
      // tokyo-night-dark has muted colors that work well with the red accents
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css'
    } else {
      // github light is clean and readable
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css'
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
    return null
  }

  return (
    <div className="my-8 not-prose relative group">
      {/* Override any conflicting hljs background styles */}
      <style jsx global>{`
        .hljs {
          background: transparent !important;
          padding: 0 !important;
        }
        pre code.hljs {
          background: transparent !important;
        }
      `}</style>
      {/* ─── Corner Accents ─── */}
      <div className="absolute top-0 left-0 w-4 h-px" style={{ background: 'var(--red)' }} />
      <div className="absolute top-0 left-0 h-4 w-px" style={{ background: 'var(--red)' }} />
      <div className="absolute bottom-0 right-0 w-4 h-px" style={{ background: 'var(--red)' }} />
      <div className="absolute bottom-0 right-0 h-4 w-px" style={{ background: 'var(--red)' }} />

      {/* ─── Header Bar ─── */}
      <div 
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: 'var(--card-bg)',
          borderBottom: '1px solid var(--trace-line)',
        }}
      >
        {/* Left: Language info */}
        <div className="flex items-center gap-4">
          {/* Category badge */}
          <span 
            className="text-[8px] tracking-[2px] uppercase px-2 py-1"
            style={{ 
              color: 'var(--red)',
              border: '1px solid var(--red)',
              opacity: 0.8
            }}
          >
            {langInfo.category}
          </span>
          
          {/* Language name */}
          <span 
            className="text-[11px] tracking-[1px]"
            style={{ color: 'var(--text)' }}
          >
            {langInfo.label}
          </span>

          {/* Filename if provided */}
          {filename && (
            <>
              <span style={{ color: 'var(--trace-line)' }}>—</span>
              <span 
                className="text-[11px] tracking-[0.5px]"
                style={{ color: 'var(--white-dim)' }}
              >
                {filename}
              </span>
            </>
          )}
        </div>

        {/* Right: Meta + Copy */}
        <div className="flex items-center gap-4">
          {/* Line count */}
          <span 
            className="text-[9px] tracking-[2px] uppercase hidden sm:block"
            style={{ color: 'var(--trace-line)' }}
          >
            {lineCount} {lineCount === 1 ? 'line' : 'lines'}
          </span>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-[2px] uppercase transition-all duration-300 hover:bg-[rgba(196,30,30,0.1)]"
            style={{ 
              color: copied ? 'var(--red)' : 'var(--white-dim)',
              border: '1px solid var(--trace-line)',
            }}
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            {copied ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copied</span>
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ─── Code Area ─── */}
      <div 
        className="relative"
        style={{
          background: 'var(--card-bg)',
        }}
      >
        {/* Line numbers gutter */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-12 select-none pointer-events-none hidden sm:flex flex-col py-4 text-right pr-3"
          style={{ 
            borderRight: '1px solid var(--trace-line)',
            background: 'var(--card-bg)'
          }}
        >
          {Array.from({ length: lineCount }, (_, i) => (
            <span 
              key={i} 
              className="text-[10px] leading-[1.7] font-mono"
              style={{ color: 'var(--trace-line)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          ))}
        </div>

        {/* Code content */}
        <pre 
          className="!m-0 overflow-x-auto text-[13px] leading-[1.7] py-4 sm:pl-16 pl-4 pr-4"
          style={{
            background: 'transparent',
          }}
        >
          <code 
            ref={codeRef} 
            className={`language-${language} hljs`}
            style={{ 
              fontFamily: 'var(--font-jetbrains), "JetBrains Mono", Consolas, Monaco, monospace',
              background: 'transparent',
              padding: 0,
            }}
          >
            {code}
          </code>
        </pre>

        {/* Decorative measurement tick on right */}
        <div 
          className="absolute right-2 top-4 bottom-4 w-px hidden lg:block"
          style={{ background: 'var(--trace-line)', opacity: 0.3 }}
        />
        <div 
          className="absolute right-1 top-4 w-2 h-px hidden lg:block"
          style={{ background: 'var(--trace-line)', opacity: 0.3 }}
        />
        <div 
          className="absolute right-1 bottom-4 w-2 h-px hidden lg:block"
          style={{ background: 'var(--trace-line)', opacity: 0.3 }}
        />
      </div>

      {/* ─── Footer Bar ─── */}
      <div 
        className="flex items-center justify-between px-4 py-2"
        style={{
          background: 'var(--card-bg)',
          borderTop: '1px solid var(--trace-line)',
        }}
      >
        {/* Decorative hash */}
        <span 
          className="text-[8px] tracking-[3px] uppercase"
          style={{ color: 'var(--trace-line)' }}
        >
          {`// ${language.toUpperCase()}`}
        </span>

        {/* Encoding indicator */}
        <span 
          className="text-[8px] tracking-[2px] uppercase"
          style={{ color: 'var(--trace-line)' }}
        >
          UTF-8
        </span>
      </div>

      {/* ─── Outer Border ─── */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ border: '1px solid var(--trace-line)' }}
      />
    </div>
  )
}