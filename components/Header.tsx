'use client';
import Link from "next/link";
import { useState } from "react";
import { ThemeSwitcher } from "./ui/shadcn-io/theme-switcher";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-40 border-b  shadow-lg transition-colors"
                style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border-primary)'
                }}>
                <div className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            className="font-mono text-2xl hover:text-accent transition-colors glitch flex items-center"
                            style={{
                                fontFamily: "MR Robot, monospace",
                                color: 'var(--logo-color)'
                            }}
                        >
                            <span className="status-led"></span>
                            GRIMLABS
                        </Link>
                        <ThemeSwitcher />
                        <nav className="hidden md:flex space-x-16">
                            <Link
                                href="/#about"
                                className="text-[var(--muted-foreground)] hover:[color:var(--accent)] font-bold transition-colors"
                            >
                                {/* <i className="fas fa-circle-info mr-2"></i> */}
                                About
                            </Link>

                            <Link
                                href="/projects"
                                className="text-[var(--muted-foreground)] hover:[color:var(--accent)] font-bold transition-colors"
                            >
                                {/* <i className="fas fa-folder-open mr-2"></i> */}
                                Projects
                            </Link>

                            <Link
                                href="/blog"
                                className="text-[var(--muted-foreground)] hover:[color:var(--accent)] font-bold transition-colors"
                            >
                                {/* <i className="fas fa-file-code mr-2"></i> */}
                                Blog
                            </Link>
                        </nav>

                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="md:hidden transition-colors text-[var(--foreground)]"

                        >
                            <i className="fas fa-bars text-2xl" />
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {menuOpen && (
                        <div className="md:hidden mt-4 space-y-3">
                            <Link
                                href="/#about"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 transition-colors font-bold text-[var(--muted-foreground)]"
                            >
                                {/* <i className="fas fa-circle-info mr-2"></i> */}
                                About
                            </Link>
                            <Link
                                href="/projects"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 transition-colors font-bold text-[var(--muted-foreground)]"
                            >
                                {/* <i className="fas fa-folder-open mr-2"></i> */}
                                Projects
                            </Link>
                            <Link
                                href="/blog"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 transition-colors font-bold text-[var(--muted-foreground)]"
                            >
                                {/* <i className="fas fa-file-code mr-2"></i> */}
                                Blog
                            </Link>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};