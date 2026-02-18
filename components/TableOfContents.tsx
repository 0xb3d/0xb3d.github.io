'use client'

import { useState, useEffect, useRef } from "react"

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
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const tocRef = useRef<HTMLUListElement | null>(null)
  const activeLinkRef = useRef<HTMLButtonElement | null>(null)

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
  // useEffect(() => {
  //   if (activeLinkRef.current && tocRef.current) {
  //     activeLinkRef.current.scrollIntoView({
  //       block: 'nearest',
  //       inline: 'nearest',
  //       behavior: 'smooth',
  //     })
  //   }
  // }, [activeId])

  useEffect(() => {
    const container = tocRef.current
    const activeEl = activeLinkRef.current 

    if (!container || !activeEl) return 

    const containerRect = container.getBoundingClientRect()
    const activeRect = activeEl.getBoundingClientRect()

    if (activeRect.top < containerRect.top) {
      container.scrollTop -= (containerRect.bottom) 
    } else if (activeRect.bottom > containerRect.bottom) {
      container.scrollTop += (activeRect.bottom - containerRect.bottom)
    }
  }, [activeId])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
    }
  }

  // Get section number for h2 headings
  const getChapterNumber = (index: number) => {
    let h2Count = 0
    for (let i = 0; i <= index; i++) {
      if (headings[i].level === 'h2') h2Count++
    }
    return h2Count
  }

  return (
    <nav className="relative">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-4 h-px" style={{ background: 'var(--red)' }} />
      <div className="absolute top-0 left-0 h-4 w-px" style={{ background: 'var(--red)' }} />
      <div className="absolute bottom-0 right-0 w-4 h-px" style={{ background: 'var(--red)' }} />
      <div className="absolute bottom-0 right-0 h-4 w-px" style={{ background: 'var(--red)' }} />

      {/* Header */}
      <div className="mb-6">
        <div 
          className="text-[9px] tracking-[4px] uppercase mb-2 flex items-center gap-3"
          style={{ color: 'var(--red)' }}
        >
          <span className="w-3 h-px" style={{ background: 'var(--red)' }} />
          Index
        </div>
        <h4 
          className="text-[12px] tracking-[2px] uppercase"
          style={{ color: 'var(--white-dim)' }}
        >
          Contents
        </h4>
      </div>

      {/* Section list */}
      <ul 
        ref={tocRef} 
        className="space-y-1 max-h-[60vh] overflow-y-auto pr-2"
        style={{ 
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--trace-line) transparent'
        }}
      >
        {headings.map((heading, index) => {
          const { id, text, level } = heading
          const isActive = activeId === id
          const isHovered = hoveredId === id
          const isH2 = level === 'h2'
          const chapterNum = isH2 ? getChapterNumber(index) : null

          return (
            <li
              key={id}
              className="relative"
              style={{
                paddingLeft: level === 'h3' ? '16px' : level === 'h4' ? '28px' : '0',
              }}
            >
              {/* Indent line for sub-items */}
              {(level === 'h3' || level === 'h4') && (
                <div 
                  className="absolute left-1 top-0 bottom-0 w-px"
                  style={{ background: 'var(--trace-line)' }}
                />
              )}

              <button
                ref={isActive ? activeLinkRef : null}
                onClick={() => handleClick(id)}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative w-full text-left py-2 px-3 transition-all duration-300"
                style={{
                  background: isActive 
                    ? 'rgba(196, 30, 30, 0.08)' 
                    : isHovered 
                      ? 'rgba(196, 30, 30, 0.04)' 
                      : 'transparent',
                }}
              >
                {/* Active indicator line */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] transition-all duration-300"
                  style={{ 
                    height: isActive ? '60%' : '0%',
                    background: 'var(--red)',
                    opacity: isActive ? 1 : 0
                  }}
                />

                {/* Chapter number for h2 */}
                {isH2 && chapterNum && (
                  <span 
                    className="text-[9px] tracking-[2px] mr-2 transition-colors duration-300"
                    style={{ 
                      color: isActive || isHovered ? 'var(--red)' : 'var(--trace-line)' 
                    }}
                  >
                    {String(chapterNum).padStart(2, '0')}
                  </span>
                )}

                {/* Sub-item marker */}
                {level === 'h3' && (
                  <span 
                    className="text-[8px] mr-2 transition-colors duration-300"
                    style={{ 
                      color: isActive || isHovered ? 'var(--red)' : 'var(--trace-line)' 
                    }}
                  >
                    →
                  </span>
                )}

                {level === 'h4' && (
                  <span 
                    className="text-[6px] mr-2 transition-colors duration-300"
                    style={{ 
                      color: isActive || isHovered ? 'var(--red)' : 'var(--trace-line)' 
                    }}
                  >
                    ◦
                  </span>
                )}

                {/* Text */}
                <span 
                  className="transition-colors duration-300"
                  style={{
                    color: isActive 
                      ? 'var(--text)' 
                      : isHovered 
                        ? 'var(--text)' 
                        : 'var(--white-dim)',
                    fontSize: isH2 ? '12px' : level === 'h3' ? '11px' : '10px',
                    fontWeight: isActive && isH2 ? 500 : 400,
                    letterSpacing: isH2 ? '0.5px' : '0.3px',
                  }}
                >
                  {text}
                </span>

                {/* Hover underline effect */}
                <div 
                  className="absolute bottom-1 left-3 right-3 h-px transition-transform duration-300 origin-left"
                  style={{ 
                    background: 'var(--red)',
                    transform: isHovered && !isActive ? 'scaleX(1)' : 'scaleX(0)',
                    opacity: 0.5
                  }}
                />
              </button>
            </li>
          )
        })}
      </ul>

      {/* Bottom decoration */}
      <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--trace-line)' }}>
        <div 
          className="text-[8px] tracking-[3px] uppercase flex items-center gap-2"
          style={{ color: 'var(--trace-line)' }}
        >
          <span>{headings.filter(h => h.level === 'h2').length} sections</span>
          <span>•</span>
          <span>{headings.length} items</span>
        </div>
      </div>
    </nav>
  )
}