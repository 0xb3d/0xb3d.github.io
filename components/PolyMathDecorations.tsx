'use client';

import { useEffect, useState } from 'react';

/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATH DECORATIONS — Scattered technical elements
   Chemical structures, physics equations, code snippets, math notation
   
   Props:
   - opacityMultiplier: 0-1 value to scale all opacities (default 1)
   - density: 'low' | 'medium' | 'high' - controls how many elements show
   - fixed: boolean - if true, decorations stay fixed while content scrolls
   ═══════════════════════════════════════════════════════════════════════════ */

interface DecorationProps {
    opacityMultiplier?: number;  // 0 to 1, multiplies all opacities
    density?: 'low' | 'medium' | 'high';
    fixed?: boolean;  // true = fixed background, false = scrolls with content
    className?: string;
}

/* ─── Benzene Ring SVG ─── */
function BenzeneRing({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="120" height="104" viewBox="0 0 60 52" fill="none">
            <path 
                d="M30 2 L52 15 L52 37 L30 50 L8 37 L8 15 Z" 
                stroke="currentColor" 
                strokeWidth="0.8" 
                fill="none"
            />
            <circle cx="30" cy="26" r="10" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <line x1="12" y1="17" x2="12" y2="35" stroke="currentColor" strokeWidth="0.5" />
            <line x1="48" y1="17" x2="48" y2="35" stroke="currentColor" strokeWidth="0.5" />
        </svg>
    );
}

/* ─── Caffeine Molecule SVG ─── */
function CaffeineMolecule({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="160" height="140" viewBox="0 0 80 70" fill="none">
            <path 
                d="M20 35 L30 25 L45 25 L55 35 L55 50 L45 55 L30 55 L20 50 Z" 
                stroke="currentColor" 
                strokeWidth="0.8" 
                fill="none"
            />
            <path d="M45 25 L60 20 L65 35 L55 35" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <path d="M30 25 L30 12 M45 25 L50 12 M55 50 L68 55" stroke="currentColor" strokeWidth="0.6" />
            <path d="M20 35 L8 30 M20 50 L8 58" stroke="currentColor" strokeWidth="0.6" />
            <line x1="26" y1="12" x2="34" y2="12" stroke="currentColor" strokeWidth="0.5" />
            <line x1="4" y1="28" x2="10" y2="32" stroke="currentColor" strokeWidth="0.5" />
            <text x="28" y="8" fill="currentColor" fontSize="5" fontFamily="monospace">O</text>
            <text x="48" y="8" fill="currentColor" fontSize="5" fontFamily="monospace">CH₃</text>
            <text x="68" y="58" fill="currentColor" fontSize="5" fontFamily="monospace">N</text>
            <text x="2" y="24" fill="currentColor" fontSize="5" fontFamily="monospace">O</text>
            <text x="2" y="64" fill="currentColor" fontSize="5" fontFamily="monospace">CH₃</text>
        </svg>
    );
}

/* ─── DNA Helix Segment SVG ─── */
function DNAHelix({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="80" height="160" viewBox="0 0 40 80" fill="none">
            <path d="M10 5 Q25 15 30 25 Q35 35 20 45 Q5 55 10 65 Q15 75 30 80" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <path d="M30 5 Q15 15 10 25 Q5 35 20 45 Q35 55 30 65 Q25 75 10 80" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <line x1="12" y1="15" x2="28" y2="15" stroke="currentColor" strokeWidth="0.5" />
            <line x1="8" y1="30" x2="32" y2="30" stroke="currentColor" strokeWidth="0.5" />
            <line x1="12" y1="45" x2="28" y2="45" stroke="currentColor" strokeWidth="0.5" />
            <line x1="8" y1="60" x2="32" y2="60" stroke="currentColor" strokeWidth="0.5" />
            <text x="18" y="13" fill="currentColor" fontSize="4" fontFamily="monospace">A-T</text>
            <text x="18" y="28" fill="currentColor" fontSize="4" fontFamily="monospace">G-C</text>
            <text x="18" y="43" fill="currentColor" fontSize="4" fontFamily="monospace">T-A</text>
            <text x="18" y="58" fill="currentColor" fontSize="4" fontFamily="monospace">C-G</text>
        </svg>
    );
}

/* ─── Logic Gate SVG ─── */
function LogicGate({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="100" height="70" viewBox="0 0 50 35" fill="none">
            <path d="M5 5 L5 30 L25 30 Q40 30 40 17.5 Q40 5 25 5 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <line x1="0" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="0.8" />
            <line x1="0" y1="23" x2="5" y2="23" stroke="currentColor" strokeWidth="0.8" />
            <line x1="40" y1="17.5" x2="50" y2="17.5" stroke="currentColor" strokeWidth="0.8" />
            <text x="18" y="20" fill="currentColor" fontSize="6" fontFamily="monospace">&amp;</text>
        </svg>
    );
}

/* ─── Transistor Symbol SVG ─── */
function Transistor({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="80" height="100" viewBox="0 0 40 50" fill="none">
            <line x1="5" y1="25" x2="15" y2="25" stroke="currentColor" strokeWidth="0.8" />
            <line x1="15" y1="10" x2="15" y2="40" stroke="currentColor" strokeWidth="1.2" />
            <line x1="15" y1="15" x2="30" y2="5" stroke="currentColor" strokeWidth="0.8" />
            <line x1="30" y1="5" x2="30" y2="0" stroke="currentColor" strokeWidth="0.8" />
            <line x1="15" y1="35" x2="30" y2="45" stroke="currentColor" strokeWidth="0.8" />
            <line x1="30" y1="45" x2="30" y2="50" stroke="currentColor" strokeWidth="0.8" />
            <path d="M22 38 L26 42 L22 42 Z" fill="currentColor" />
            <text x="0" y="28" fill="currentColor" fontSize="5" fontFamily="monospace">B</text>
            <text x="32" y="5" fill="currentColor" fontSize="5" fontFamily="monospace">C</text>
            <text x="32" y="48" fill="currentColor" fontSize="5" fontFamily="monospace">E</text>
        </svg>
    );
}

/* ─── Op-Amp Symbol SVG ─── */
function OpAmp({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="100" height="80" viewBox="0 0 50 40" fill="none">
            <path d="M5 5 L5 35 L45 20 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <line x1="0" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="0.8" />
            <line x1="0" y1="28" x2="5" y2="28" stroke="currentColor" strokeWidth="0.8" />
            <line x1="45" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="0.8" />
            <text x="7" y="14" fill="currentColor" fontSize="6" fontFamily="monospace">−</text>
            <text x="7" y="30" fill="currentColor" fontSize="6" fontFamily="monospace">+</text>
        </svg>
    );
}

/* ─── Capacitor SVG ─── */
function Capacitor({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="60" height="80" viewBox="0 0 30 40" fill="none">
            <line x1="15" y1="0" x2="15" y2="15" stroke="currentColor" strokeWidth="0.8" />
            <line x1="5" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="1" />
            <line x1="5" y1="25" x2="25" y2="25" stroke="currentColor" strokeWidth="1" />
            <line x1="15" y1="25" x2="15" y2="40" stroke="currentColor" strokeWidth="0.8" />
        </svg>
    );
}

/* ─── Resistor SVG ─── */
function Resistor({ className = '' }: { className?: string }) {
    return (
        <svg className={className} width="100" height="40" viewBox="0 0 50 20" fill="none">
            <line x1="0" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="0.8" />
            <path d="M8 10 L11 2 L17 18 L23 2 L29 18 L35 2 L41 18 L44 10" stroke="currentColor" strokeWidth="0.8" fill="none" />
            <line x1="44" y1="10" x2="50" y2="10" stroke="currentColor" strokeWidth="0.8" />
        </svg>
    );
}

/* ─── Main Component ─── */
export default function PolymathDecorations({ 
    opacityMultiplier = 1, 
    density = 'medium', 
    fixed = false,
    className = '' 
}: DecorationProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Clamp opacity multiplier between 0 and 1
    const om = Math.max(0, Math.min(1, opacityMultiplier));
    
    // Helper to apply opacity multiplier
    const op = (baseOpacity: number) => baseOpacity * om;

    // Density controls which elements are shown
    const showLow = true; // Always show
    const showMedium = density === 'medium' || density === 'high';
    const showHigh = density === 'high';

    const positionClass = fixed ? 'fixed' : 'absolute';

    return (
        <div className={`${positionClass} inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
            
            {/* ═══════════════════════════════════════════════════════════════
                LAYER 1: LOW DENSITY — Always visible (core elements)
               ═══════════════════════════════════════════════════════════════ */}
            
            {showLow && (
                <>
                    {/* Chemical structures */}
                    <div className="absolute top-[5%] left-[3%]" style={{ color: 'var(--text)', opacity: op(0.25) }}>
                        <BenzeneRing />
                    </div>
                    
                    <div className="absolute top-[10%] right-[5%] rotate-12" style={{ color: 'var(--text)', opacity: op(0.20) }}>
                        <CaffeineMolecule />
                    </div>

                    {/* Circuit elements */}
                    <div className="absolute top-[30%] left-[5%]" style={{ color: 'var(--red)', opacity: op(0.25) }}>
                        <LogicGate />
                    </div>

                    {/* Key equations */}
                    <div 
                        className="absolute top-[8%] left-[25%] text-[18px] tracking-wide"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.28) }}
                    >
                        ∇ × E = −∂B/∂t
                    </div>
                    
                    <div 
                        className="absolute top-[22%] right-[12%] text-[20px] tracking-wide"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.25) }}
                    >
                        iℏ ∂ψ/∂t = Ĥψ
                    </div>

                    {/* Code snippet */}
                    <pre 
                        className="absolute top-[15%] left-[1%] text-[14px] leading-relaxed -rotate-2"
                        style={{ color: 'var(--text)', fontFamily: 'monospace', opacity: op(0.25) }}
                    >
{`mov rax, [rbp+8]
xor rbx, rbx
push rdi
jmp _start`}
                    </pre>

                    {/* Binary */}
                    <div 
                        className="absolute bottom-[3%] left-[12%] text-[18px] tracking-[3px]"
                        style={{ color: 'var(--red)', fontFamily: 'monospace', opacity: op(0.25) }}
                    >
                        0xDEADBEEF
                    </div>

                    {/* Chemical formula */}
                    <div 
                        className="absolute top-[3%] right-[30%] text-[20px] tracking-wider"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.25) }}
                    >
                        C₆H₁₂O₆
                    </div>
                </>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                LAYER 2: MEDIUM DENSITY — Additional elements
               ═══════════════════════════════════════════════════════════════ */}
            
            {showMedium && (
                <>
                    {/* More chemical structures */}
                    <div className="absolute bottom-[15%] left-[2%] -rotate-6" style={{ color: 'var(--text)', opacity: op(0.18) }}>
                        <DNAHelix />
                    </div>
                    
                    <div className="absolute top-[55%] right-[3%]" style={{ color: 'var(--text)', opacity: op(0.22) }}>
                        <BenzeneRing />
                    </div>

                    {/* More circuit elements */}
                    <div className="absolute bottom-[30%] right-[8%] rotate-12" style={{ color: 'var(--text)', opacity: op(0.20) }}>
                        <Transistor />
                    </div>
                    
                    <div className="absolute top-[70%] left-[10%]" style={{ color: 'var(--text)', opacity: op(0.18) }}>
                        <OpAmp />
                    </div>

                    {/* More equations */}
                    <div 
                        className="absolute bottom-[20%] left-[18%] text-[16px] tracking-wide"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.22) }}
                    >
                        e<sup>iπ</sup> + 1 = 0
                    </div>
                    
                    <div 
                        className="absolute top-[45%] left-[8%] text-[18px] tracking-wide"
                        style={{ color: 'var(--red)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.25) }}
                    >
                        ΔG = ΔH − TΔS
                    </div>
                    
                    <div 
                        className="absolute bottom-[35%] right-[15%] text-[16px] tracking-wide"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.20) }}
                    >
                        F = G(m₁m₂)/r²
                    </div>

                    {/* More code */}
                    <pre 
                        className="absolute bottom-[5%] right-[3%] text-[13px] leading-relaxed rotate-1"
                        style={{ color: 'var(--text)', fontFamily: 'monospace', opacity: op(0.22) }}
                    >
{`template<typename T>
T* alloc(size_t n) {
  return new T[n];
}`}
                    </pre>

                    {/* More chemical formulas */}
                    <div 
                        className="absolute bottom-[12%] right-[25%] text-[18px] tracking-wider"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.22) }}
                    >
                        C₈H₁₀N₄O₂
                    </div>
                    
                    <div 
                        className="absolute top-[50%] right-[2%] text-[16px] tracking-wider"
                        style={{ color: 'var(--red)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.20) }}
                    >
                        ATP → ADP + Pᵢ
                    </div>

                    {/* Binary/hex */}
                    <div 
                        className="absolute top-[2%] left-[50%] text-[16px] tracking-[4px]"
                        style={{ color: 'var(--text)', fontFamily: 'monospace', opacity: op(0.22) }}
                    >
                        01001000 01100101 01101100
                    </div>
                </>
            )}

            {/* ═══════════════════════════════════════════════════════════════
                LAYER 3: HIGH DENSITY — Maximum elements
               ═══════════════════════════════════════════════════════════════ */}
            
            {showHigh && (
                <>
                    {/* Even more circuit elements */}
                    <div className="absolute top-[40%] right-[40%]" style={{ color: 'var(--text)', opacity: op(0.15) }}>
                        <Capacitor />
                    </div>
                    
                    <div className="absolute bottom-[50%] left-[45%]" style={{ color: 'var(--text)', opacity: op(0.12) }}>
                        <Resistor />
                    </div>
                    
                    <div className="absolute top-[80%] right-[45%] rotate-45" style={{ color: 'var(--red)', opacity: op(0.15) }}>
                        <LogicGate />
                    </div>

                    {/* Even more equations */}
                    <div 
                        className="absolute top-[65%] left-[28%] text-[17px] tracking-wide"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.18) }}
                    >
                        ∂²u/∂t² = c²∇²u
                    </div>
                    
                    <div 
                        className="absolute top-[38%] right-[5%] text-[15px] tracking-wide"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.22) }}
                    >
                        S = k<sub>B</sub> ln Ω
                    </div>
                    
                    <div 
                        className="absolute bottom-[8%] left-[40%] text-[16px] tracking-wide"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.20) }}
                    >
                        det(A − λI) = 0
                    </div>
                    
                    <div 
                        className="absolute top-[12%] left-[65%] text-[16px]"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.20) }}
                    >
                        ∫₀^∞ e<sup>−x²</sup> dx = √π/2
                    </div>
                    
                    <div 
                        className="absolute bottom-[40%] left-[3%] text-[18px]"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.22) }}
                    >
                        ∑ᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6
                    </div>
                    
                    <div 
                        className="absolute top-[28%] left-[38%] text-[15px]"
                        style={{ color: 'var(--text)', fontFamily: 'serif', opacity: op(0.18) }}
                    >
                        |A| = ad − bc
                    </div>
                    
                    <div 
                        className="absolute bottom-[60%] left-[60%] text-[16px]"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.20) }}
                    >
                        ∇·F = ∂Fₓ/∂x + ∂Fᵧ/∂y
                    </div>

                    {/* Even more code */}
                    <pre 
                        className="absolute top-[58%] right-[20%] text-[12px] leading-relaxed"
                        style={{ color: 'var(--red)', fontFamily: 'monospace', opacity: op(0.20) }}
                    >
{`#define ROL(x,n) \\
  ((x<<n)|(x>>(32-n)))`}
                    </pre>
                    
                    <pre 
                        className="absolute bottom-[25%] left-[25%] text-[13px] leading-relaxed rotate-1"
                        style={{ color: 'var(--text)', fontFamily: 'monospace', opacity: op(0.22) }}
                    >
{`void* ptr = mmap(
  NULL, 4096,
  PROT_READ|PROT_EXEC,
  MAP_ANON, -1, 0
);`}
                    </pre>
                    
                    <pre 
                        className="absolute top-[75%] right-[35%] text-[12px] leading-relaxed"
                        style={{ color: 'var(--text)', fontFamily: 'monospace', opacity: op(0.18) }}
                    >
{`unsafe {
  ptr::write(dst, src)
}`}
                    </pre>

                    {/* Even more chemical */}
                    <div 
                        className="absolute bottom-[45%] left-[35%] text-[17px] tracking-wider"
                        style={{ color: 'var(--text)', fontFamily: 'serif', fontStyle: 'italic', opacity: op(0.18) }}
                    >
                        2H₂ + O₂ → 2H₂O
                    </div>

                    {/* Even more binary/registers */}
                    <div 
                        className="absolute top-[80%] right-[8%] text-[14px] tracking-[2px]"
                        style={{ color: 'var(--text)', fontFamily: 'monospace', opacity: op(0.18) }}
                    >
                        \x90\x90\x90\xCC
                    </div>
                    
                    <div 
                        className="absolute top-[35%] left-[45%] text-[15px] tracking-[3px]"
                        style={{ color: 'var(--text)', fontFamily: 'monospace', opacity: op(0.15) }}
                    >
                        NOP NOP INT3 RET
                    </div>
                    
                    <div 
                        className="absolute top-[60%] left-[55%] text-[14px] tracking-[2px]"
                        style={{ color: 'var(--text)', fontFamily: 'monospace', opacity: op(0.18) }}
                    >
                        RAX RBX RCX RDX
                    </div>
                    
                    <div 
                        className="absolute bottom-[50%] right-[30%] text-[13px] tracking-[2px]"
                        style={{ color: 'var(--red)', fontFamily: 'monospace', opacity: op(0.15) }}
                    >
                        RSP RBP RSI RDI
                    </div>
                    
                    <div 
                        className="absolute top-[85%] left-[5%] text-[14px] tracking-[2px]"
                        style={{ color: 'var(--text)', fontFamily: 'monospace', opacity: op(0.20) }}
                    >
                        [RIP+0x1337]
                    </div>
                </>
            )}
        </div>
    );
}