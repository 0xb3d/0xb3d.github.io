'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-green-800 shadow-lg">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            className="text-3xl text-red-500 hover:text-accent transition-colors glitch flex items-center"
                            style={{ fontFamily: "'MR Robot', monospace" }}
                        >
                            <span className="status-led"></span>
                            GRIMLABS
                        </Link>

                        <nav className="hidden md:flex space-x-6">
                            <button
                                onClick={() => router.push("/#about")}
                                className="hover:text-red-400 text-gray-200 hover:text-accent transition-colors hover:underline">
                                <span className="text-accent">[</span>
                                about
                                <span className="text-accent">]</span>
                            </button>

                            {['projects', 'blog'].map((id) => (
                                <button
                                    key={id}
                                    onClick={() => router.push(`/${id}`)}
                                    className="hover:text-red-400 text-gray-200 hover:text-accent transition-colors hover:underline">
                                    <span className="text-accent">[</span>
                                    <Link key={id} href="">{id}</Link>
                                    <span className="text-accent">]</span>
                                </button>
                            ))}
                        </nav>

                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="md:hidden text-green-500 hover:text-accent"
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
                                className="block py-2 text-green-500 hover:text-accent transition-colors border-b border-green-500/30"
                            >
                                <i className="fas fa-user-secret mr-2"></i>About
                            </Link>
                            {/* <Link
                                href="#skills"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 text-green-500 hover:text-accent transition-colors border-b border-green-500/30"
                            >
                                <i className="fas fa-code mr-2"></i>Skills
                            </Link> */}
                            <Link
                                href="/projects"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 text-green-500 hover:text-accent transition-colors border-b border-green-500/30"
                            >
                                <i className="fas fa-project-diagram mr-2"></i>Projects
                            </Link>
                            <Link
                                href="/blog"
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 text-green-500 hover:text-accent transition-colors border-b border-green-500/30"
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