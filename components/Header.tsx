'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeSwitcher } from './ui/shadcn-io/theme-switcher';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-colors"
            style={{
                // When menu is open, use solid background; otherwise use gradient
                background: menuOpen 
                    ? 'var(--background)' 
                    : 'linear-gradient(180deg, var(--background) 60%, transparent)',
            }}
        >
            {/* Full-width container with generous padding */}
            <div className="w-full px-10 lg:px-16 xl:px-20 py-4">
                <div className="flex justify-between items-center">
                    {/* ─── Logo ─── */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                        <span className="status-led" />
                        <span
                            className="text-[20px] tracking-[4px] uppercase"
                            style={{ color: 'var(--foreground)', fontFamily: 'var(--font-jetbrains)', fontWeight: 700 }}
                        >
                            GRIM LABS
                        </span>
                    </Link>

                    {/* ─── Desktop Nav ─── */}
                    <nav className="hidden md:flex items-center gap-10">
                        {[
                            { href: '/#about', label: 'About' },
                            { href: '/projects', label: 'Projects' },
                            { href: '/blog', label: 'Blog' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover-line text-[14px] tracking-[3px] uppercase transition-colors"
                                style={{
                                    color: 'var(--muted-foreground)',
                                    fontFamily: "var(--font-jetbrains)",
                                    fontWeight: 700,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--foreground)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--muted-foreground)';
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <ThemeSwitcher />
                    </nav>

                    {/* ─── Mobile Controls ─── */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeSwitcher />
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="relative w-6 h-6 flex items-center justify-center transition-colors"
                            style={{ color: 'var(--foreground)' }}
                            aria-label="Toggle menu"
                        >
                            {/* Hamburger / X icon */}
                            <div className="relative w-5 h-4 flex flex-col justify-between">
                                {/* Top line */}
                                <span
                                    className="absolute left-0 block h-[1.5px] w-5 transition-all duration-300 origin-center"
                                    style={{
                                        background: 'var(--foreground)',
                                        top: menuOpen ? '50%' : '0',
                                        transform: menuOpen 
                                            ? 'translateY(-50%) rotate(45deg)' 
                                            : 'translateY(0) rotate(0)',
                                    }}
                                />
                                {/* Middle line */}
                                <span
                                    className="absolute left-0 top-1/2 -translate-y-1/2 block h-[1.5px] w-5 transition-all duration-300"
                                    style={{
                                        background: 'var(--foreground)',
                                        opacity: menuOpen ? 0 : 1,
                                        transform: menuOpen 
                                            ? 'translateY(-50%) scaleX(0)' 
                                            : 'translateY(-50%) scaleX(1)',
                                    }}
                                />
                                {/* Bottom line */}
                                <span
                                    className="absolute left-0 block h-[1.5px] w-5 transition-all duration-300 origin-center"
                                    style={{
                                        background: 'var(--foreground)',
                                        bottom: menuOpen ? '50%' : '0',
                                        top: menuOpen ? '50%' : 'auto',
                                        transform: menuOpen 
                                            ? 'translateY(-50%) rotate(-45deg)' 
                                            : 'translateY(0) rotate(0)',
                                    }}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* ─── Mobile Menu ─── */}
                {menuOpen && (
                    <div
                        className="md:hidden mt-6 pb-4 border-t pt-6 space-y-2"
                        style={{ 
                            borderColor: 'var(--trace-line)',
                            background: 'var(--background)',
                        }}
                    >
                        {[
                            { href: '/#about', label: 'About' },
                            { href: '/projects', label: 'Projects' },
                            { href: '/blog', label: 'Blog' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="block text-[11px] tracking-[3px] uppercase py-2 transition-colors hover:text-[var(--foreground)]"
                                style={{ color: 'var(--white-dim)' }}
                            >
                                <span style={{ color: 'var(--red)', marginRight: '12px' }}>→</span>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}