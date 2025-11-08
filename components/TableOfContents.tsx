// components/TableOfContents.tsx
'use client'

import { useState, useEffect } from "react"

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <h3 className="font-bold mb-4 text-lg">On This Page</h3>
      <ul className="space-y-2 text-sm">
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            className={`
              ${level === 'h3' ? 'ml-4' : ''}
              ${level === 'h4' ? 'ml-8' : ''}
            `}
          >
            <a
              href={`#${id}`}
              className={`
                hover:text-blue-400 transition-colors
                ${activeId === id ? 'text-blue-400 font-medium' : 'text-gray-400'}
              `}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}