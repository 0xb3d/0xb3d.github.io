'use client';
import Link from "next/link";
import { useState } from "react";
import { ThemeSwitcher } from "./ui/shadcn-io/theme-switcher";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-40 border-b shadow-lg transition-colors" 
                    style={{ 
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--border-primary)'
                    }}>
                <div className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            className="text-3xl hover:text-accent transition-colors glitch flex items-center"
                            style={{ 
                                fontFamily: "'MR Robot', monospace",
                                color: 'var(--accent)'
                            }}
                        >
                            <span className="status-led"></span>
                            GRIMLABS
                        </Link>
                        <ThemeSwitcher/>
                        <nav className="hidden md:flex space-x-6">
                            <Link
                                href="/#about"
                                className="hover:underline transition-colors"
                                style={{ color: 'var(--text)'}}
                            >
                                <span style={{ color: 'var(--text)' }}>[</span>
                                about
                                <span style={{ color: 'var(--text)' }}>]</span>
                            </Link>

                            <Link
                                href="/projects"
                                className="hover:underline transition-colors"
                                style={{ color: 'var(--text)' }}
                            >
                                <span style={{ color: 'var(--text)' }}>[</span>
                                projects
                                <span style={{ color: 'var(--text)' }}>]</span>
                            </Link>
                            
                            <Link
                                href="/blog"
                                className="hover:underline transition-colors"
                                style={{ color: 'var(--text)' }}
                            >
                                <span style={{ color: 'var(--text)' }}>[</span>
                                blog
                                <span style={{ color: 'var(--text)' }}>]</span>
                            </Link>
                        </nav>

                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="md:hidden transition-colors"
                            style={{ color: 'var(--primary)' }}
                        >
                            <i className="fas fa-terminal text-2xl" />
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {menuOpen && (
                        <div className="md:hidden mt-4 space-y-3">
                            <Link
                                href="/#about"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 transition-colors border-b"
                                style={{ 
                                    color: 'var(--primary)',
                                    borderColor: 'var(--border-primary)'
                                }}
                            >
                                <i className="fas fa-user-secret mr-2"></i>About
                            </Link>
                            <Link
                                href="/projects"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 transition-colors border-b"
                                style={{ 
                                    color: 'var(--primary)',
                                    borderColor: 'var(--border-primary)'
                                }}
                            >
                                <i className="fas fa-project-diagram mr-2"></i>Projects
                            </Link>
                            <Link
                                href="/blog"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 transition-colors border-b"
                                style={{ 
                                    color: 'var(--primary)',
                                    borderColor: 'var(--border-primary)'
                                }}
                            >
                                <i className="fas fa-blog mr-2"></i>Blog
                            </Link>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};