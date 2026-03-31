'use client'

interface TableRow {
  _key: string
  cells?: string[]
}

interface TableBlockProps {
  value: {
    rows?: TableRow[]
  }
}

export function TableBlock({ value }: TableBlockProps) {
  const rows = value?.rows ?? []
  if (rows.length === 0) return null

  const [headerRow, ...bodyRows] = rows
  const dataRows = (headerRow?.cells?.length ?? 0) > 0 ? bodyRows : rows
  const hasHeader = (headerRow?.cells?.length ?? 0) > 0 && bodyRows.length > 0
  const totalRows = hasHeader ? bodyRows.length : rows.length

  return (
    <div className="my-6 relative" style={{ fontFamily: 'var(--font-jetbrains, monospace)' }}>
      {/* Corner ticks */}
      {(['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'] as const).map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-4 h-4 z-10 pointer-events-none`}>
          <div className={`absolute ${pos} w-full h-px`} style={{ background: 'var(--accent)' }} />
          <div className={`absolute ${pos} h-full w-px`} style={{ background: 'var(--accent)' }} />
        </div>
      ))}

      {/* Outer border */}
      <div className="absolute inset-0 pointer-events-none" style={{ border: '1px solid var(--trace-line)' }} />

      {/* Header bar */}
      <div
        className="flex items-center gap-3 px-4 py-2"
        style={{
          background: 'var(--card-bg)',
          borderBottom: '1px solid var(--trace-line)',
        }}
      >
        <div
          className="px-2 py-px text-[9px] tracking-[2px] uppercase"
          style={{
            color: 'var(--accent)',
            border: '1px solid var(--accent)',
          }}
        >
          TABLE
        </div>
        {hasHeader && (
          <span className="text-[11px] tracking-[1px] uppercase" style={{ color: 'var(--trace-line)' }}>
            {headerRow.cells?.join('  ·  ')}
          </span>
        )}
      </div>

      {/* Scrollable table */}
      <div style={{ overflowX: 'auto' }}>
        <table className="w-full border-collapse" style={{ minWidth: '100%' }}>
          {hasHeader && (
            <thead>
              <tr style={{ background: 'var(--card-bg)' }}>
                {headerRow.cells?.map((cell, ci) => (
                  <th
                    key={ci}
                    className="text-left text-[11px] tracking-[2px] uppercase font-semibold"
                    style={{
                      padding: '10px 16px',
                      color: 'var(--accent)',
                      borderBottom: '1px solid var(--trace-line)',
                      borderRight: ci < (headerRow.cells?.length ?? 0) - 1 ? '1px solid var(--trace-line)' : undefined,
                    }}
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {(hasHeader ? bodyRows : rows).map((row, ri) => (
              <tr
                key={row._key}
                style={{
                  background: ri % 2 === 1 ? 'var(--card-bg)' : undefined,
                  borderBottom: ri < (hasHeader ? bodyRows : rows).length - 1 ? '1px solid var(--trace-line)' : undefined,
                }}
              >
                {row.cells?.map((cell, ci) => (
                  <td
                    key={ci}
                    className="text-[13px] md:text-[14px]"
                    style={{
                      padding: '10px 16px',
                      color: 'var(--text)',
                      lineHeight: '1.6',
                      borderRight: ci < (row.cells?.length ?? 0) - 1 ? '1px solid var(--trace-line)' : undefined,
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer bar */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{
          background: 'var(--card-bg)',
          borderTop: '1px solid var(--trace-line)',
        }}
      >
        <span className="text-[10px] tracking-[1px]" style={{ color: 'var(--trace-line)' }}>
          // {totalRows} row{totalRows !== 1 ? 's' : ''}
          {hasHeader ? `, ${headerRow.cells?.length ?? 0} col${(headerRow.cells?.length ?? 0) !== 1 ? 's' : ''}` : ''}
        </span>
      </div>
    </div>
  )
}
