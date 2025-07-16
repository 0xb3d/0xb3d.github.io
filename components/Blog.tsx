import Link from "next/link";

export default function Blog() {
    return (
        <>
            <section id="blog" className="py-16 px-6 border-t border-green-500/30 bg-black/70">
                <div className="container mx-auto max-w-4xl">
                    <div className="terminal-box">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                            <span className="text-accent"></span> cat /var/log/blog/latest
                        </h2>

                        <div className="space-y-8">
                            {/* Article 1 */}
                            <div className="hacker-card p-6">
                                <div className="flex items-center text-sm text-green-500 mb-3 font-mono">
                                    <span>2023-06-15</span>
                                    <span className="mx-2 text-gray-400">|</span>
                                    <span>SECURITY RESEARCH</span>
                                    <span className="mx-2 text-gray-400">|</span>
                                    <span>8 MIN READ</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    <Link href="#" className="hover:text-accent transition-colors">
                                        <span className="text-accent"></span> Exploiting Modern Web APIs: Hidden Vulnerabilities
                                    </Link>
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Deep dive into GraphQL and REST API vulnerabilities that most scanners miss, including batching attacks, parser differentials, and JWT quirks.
                                </p>
                                <div className="flex items-center justify-between">
                                    <Link href="#" className="text-green-500 hover:text-accent font-mono text-sm">
                                        <span className="text-accent">[</span>read_more<span className="text-accent">]</span>
                                    </Link>
                                    <span className="text-gray-400 text-sm font-mono">#api #security #hacking</span>
                                </div>
                            </div>

                            {/* Article 2 */}
                            <div className="hacker-card p-6">
                                <div className="flex items-center text-sm text-green-500 mb-3 font-mono">
                                    <span>2023-05-28</span>
                                    <span className="mx-2 text-gray-400">|</span>
                                    <span>HOW-TO</span>
                                    <span className="mx-2 text-gray-400">|</span>
                                    <span>12 MIN READ</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    <Link href="#" className="hover:text-accent transition-colors">
                                        <span className="text-accent"></span> Building an Undetectable C2 Framework
                                    </Link>
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Technical walkthrough of creating a command and control framework that bypasses modern EDR solutions using process hollowing and DNS tunneling.
                                </p>
                                <div className="flex items-center justify-between">
                                    <Link href="#" className="text-green-500 hover:text-accent font-mono text-sm">
                                        <span className="text-accent">[</span>read_more<span className="text-accent">]</span>
                                    </Link>
                                    <span className="text-gray-400 text-sm font-mono">#redteam #maldev #security</span>
                                </div>
                            </div>

                            {/* Article 3 */}
                            <div className="hacker-card p-6">
                                <div className="flex items-center text-sm text-green-500 mb-3 font-mono">
                                    <span>2023-05-10</span>
                                    <span className="mx-2 text-gray-400">|</span>
                                    <span>TUTORIAL</span>
                                    <span className="mx-2 text-gray-400">|</span>
                                    <span>15 MIN READ</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    <Link href="#" className="hover:text-accent transition-colors">
                                        <span className="text-accent"></span> Hardware Hacking: JTAG & UART Exploitation
                                    </Link>
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Practical guide to identifying and exploiting hardware interfaces to gain root access on embedded devices, with real-world case studies.
                                </p>
                                <div className="flex items-center justify-between">
                                    <Link href="#" className="text-green-500 hover:text-accent font-mono text-sm">
                                        <span className="text-accent">[</span>read_more<span className="text-accent">]</span>
                                    </Link>
                                    <span className="text-gray-400 text-sm font-mono">#hardware #iot #reverse</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/blog" className="hacker-btn font-mono">
                                <i className="fas fa-book-open mr-2"></i>View All Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};