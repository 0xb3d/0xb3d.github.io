'use client'

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

interface Heading {
  id: string
  text: string
  level: 'h2' | 'h3' | 'h4'
}

interface TOCProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TOCProps) {
  const [activeId, setActiveId] = useState('')
  const [open, setOpen] = useState(true)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const tocRef = useRef<HTMLUListElement | null>(null)
  const activeLinkRef = useRef<HTMLButtonElement | null>(null)

  // Handle responsive open/close
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setOpen(false)
      else setOpen(true)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Track visible heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  // Auto-scroll the TOC itself when the active heading changes
  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
        behavior: 'smooth',
      })
    }
  }, [activeId])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
    }
  }

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-xl border p-4 backdrop-blur-md shadow-sm transition-colors"
         style={{ 
           borderColor: 'var(--border-primary)',
           backgroundColor: 'var(--card-bg)'
         }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left font-semibold text-lg mb-2 transition-colors"
        style={{ color: 'var(--primary)' }}
      >
        <span>Table of Contents</span>
        {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>

      {open && (
        <ul ref={tocRef} className="space-y-2 text-sm mt-3 max-h-[70vh] overflow-y-auto pr-2">
          {headings.map(({ id, text, level }) => {
            const isActive = activeId === id
            const isHovered = hoveredId === id
            return (
              <li
                key={id}
                className={`
                  ${level === 'h3' ? 'ml-4' : ''}
                  ${level === 'h4' ? 'ml-8' : ''}
                `}
              >
                <button
                  ref={isActive ? activeLinkRef : null}
                  onClick={() => handleClick(id)}
                  onMouseEnter={() => setHoveredId(id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="block w-full text-left transition-colors rounded-md px-1 py-1"
                  style={{
                    color: isActive ? 'var(--text)' : (isHovered ? 'var(--primary)' : 'var(--text)'),
                    backgroundColor: isActive ? 'var(--secondary)' : 'transparent',
                    fontWeight: isActive ? '500' : 'normal'
                  }}
                >
                  {text}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </nav>
  )
}