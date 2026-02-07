// import Link from "next/link";

// export default function Footer() {
//     return (
//         <>
//             <footer className="py-3 px-6 border-t transition-colors border-[var(--border-primary)] bg-[var(--background)]"
//             >
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="flex flex-col md:flex-row justify-between items-center">
//                         <div className="mb-4 md:mb-0">
//                             <Link href="#"
//                                 className="text-4xl hover:text-accent transition-colors font-mono"
//                                 style={{
//                                     fontFamily: "'MR Robot', monospace",
//                                     color: 'var(--logo-color)'
//                                 }}>
//                                 GRIMLABS
//                             </Link>
//                             <p className="mt-2 font-mono text-sm text-[var(--muted-foreground)]"
//                             >
//                                 © 2025 GRIMLABS. All rights reserved.
//                             </p>
//                         </div>

//                         <div className="flex space-x-6">
//                             <Link href="#"
//                                 className="transition-colors hover:opacity-80"
//                                 style={{ color: 'var(--muted-foreground)' }}>
//                                 <i className="fab fa-github text-xl"></i>
//                             </Link>
//                             <Link href="#"
//                                 className="transition-colors hover:opacity-80"
//                                 style={{ color: 'var(--muted-foreground)' }}>
//                                 <i className="fab fa-twitter text-xl"></i>
//                             </Link>
//                             <Link href="#"
//                                 className="transition-colors hover:opacity-80"
//                                 style={{ color: 'var(--muted-foreground)' }}>
//                                 <i className="fab fa-linkedin text-xl"></i>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     );
// };

import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="border-t transition-colors"
            style={{
                borderColor: 'var(--border-primary)',
                backgroundColor: 'var(--background)',
            }}
        >
            <div className="container mx-auto max-w-6xl px-6">
                {/* <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-0 mb-6 hover:opacity-80 transition-opacity"
                        >
                            <span className="status-led" />
                            <span
                                className="text-sm tracking-[6px] uppercase font-medium"
                                style={{
                                    fontFamily: "'IBM Plex Mono', monospace",
                                    color: 'var(--foreground)',
                                }}
                            >
                                Grimlabs
                            </span>
                        </Link>
                        <p
                            className="max-w-sm"
                            style={{
                                fontSize: '12px',
                                color: 'var(--muted-foreground)',
                                lineHeight: 1.8,
                                fontWeight: 300,
                                fontFamily: "'IBM Plex Mono', monospace",
                            }}
                        >
                            Security research, embedded systems,
                            and applied computation. Bridging silicon,
                            software, and protocol layers.
                        </p>

                        <div className="pgp-box mt-8 max-w-xs">
                            A1B2 C3D4 E5F6 7890 1234
                            <br />
                            5678 90AB CDEF 1234 5678
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <div
                                    className="text-[9px] tracking-[4px] uppercase mb-4"
                                    style={{ color: 'var(--accent)' }}
                                >
                                    Navigate
                                </div>
                                <div className="flex flex-col gap-3">
                                    {['About', 'Projects', 'Blog'].map((label) => (
                                        <Link
                                            key={label}
                                            href={label === 'About' ? '/#about' : `/${label.toLowerCase()}`}
                                            className="hover-line inline-block text-[11px] tracking-[2px] uppercase transition-colors"
                                            style={{
                                                color: 'var(--muted-foreground)',
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                fontWeight: 300,
                                            }}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div
                                    className="text-[9px] tracking-[4px] uppercase mb-4"
                                    style={{ color: 'var(--accent)' }}
                                >
                                    Connect
                                </div>
                                <div className="flex flex-col gap-3">
                                    {[
                                        { label: 'GitHub', href: 'https://github.com/grimlabs' },
                                        { label: 'Twitter', href: 'https://twitter.com/grimlabs' },
                                        { label: 'LinkedIn', href: '#' },
                                    ].map((social) => (
                                        <Link
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover-line inline-block text-[11px] tracking-[2px] uppercase transition-colors"
                                            style={{
                                                color: 'var(--muted-foreground)',
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                fontWeight: 300,
                                            }}
                                        >
                                            {social.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* ─── Bottom Bar ─── */}
                <div
                    className="py-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2"
                    style={{ borderColor: 'var(--border-primary)' }}
                >
                    <span
                        style={{
                            fontSize: '10px',
                            letterSpacing: '2px',
                            color: 'var(--muted-foreground)',
                            fontFamily: "'IBM Plex Mono', monospace",
                        }}
                    >
                        © 2026 GRIMLABS
                    </span>
                    <span
                        style={{
                            fontSize: '10px',
                            letterSpacing: '2px',
                            color: 'var(--muted-foreground)',
                            fontFamily: "'IBM Plex Mono', monospace",
                        }}
                    >
                        Accra — Internet
                    </span>
                </div>
            </div>
        </footer>
    );
}