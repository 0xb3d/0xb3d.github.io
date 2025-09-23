import Link from "next/link";

export default function ProjectsPage() {
    return (
        <>
            {/* Header section  */}
            {/* <Header/> */}
            <section id="projects" className="py-16 px-6 bg-black/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                            <span className="text-accent"></span> ls -la /projects/
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Project 1 */}
                            <div className="hacker-card group">
                                <div className="h-48 bg-green-900/20 flex items-center justify-center relative overflow-hidden border-b border-green-500/30">
                                    <i className="fas fa-shield-alt text-6xl text-green-500 group-hover:text-accent transition-colors"></i>
                                    <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">SecureAuth Framework</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">Python</span>
                                        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">Django</span>
                                        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">WebAuthn</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Advanced authentication framework implementing FIDO2, biometric verification, and hardware token support with zero-trust architecture.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <Link href="#" className="text-green-500 hover:text-accent font-mono text-sm">
                                            <span className="text-accent">[</span>view_details<span className="text-accent">]</span>
                                        </Link>
                                        <div className="flex space-x-3">
                                            <Link href="#" className="text-gray-400 hover:text-green-500">
                                                <i className="fab fa-github"></i>
                                            </Link>
                                            <Link href="#" className="text-gray-400 hover:text-green-500">
                                                <i className="fas fa-external-link-alt"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="hacker-card group">
                                <div className="h-48 bg-green-900/20 flex items-center justify-center relative overflow-hidden border-b border-green-500/30">
                                    <i className="fas fa-bug text-6xl text-green-500 group-hover:text-accent transition-colors"></i>
                                    <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">VulnScan Pro</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">Go</span>
                                        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">React</span>
                                        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">OWASP</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Enterprise-grade vulnerability scanner with automated detection for 1000+ vulnerabilities including business logic flaws and API security issues.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <Link href="#" className="text-green-500 hover:text-accent font-mono text-sm">
                                            <span className="text-accent">[</span>view_details<span className="text-accent">]</span>
                                        </Link>
                                        <div className="flex space-x-3">
                                            <Link href="#" className="text-gray-400 hover:text-green-500">
                                                <i className="fab fa-github"></i>
                                            </Link>
                                            <Link href="#" className="text-gray-400 hover:text-green-500">
                                                <i className="fas fa-external-link-alt"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="hacker-card group">
                                <div className="h-48 bg-green-900/20 flex items-center justify-center relative overflow-hidden border-b border-green-500/30">
                                    <i className="fas fa-lock text-6xl text-green-500 group-hover:text-accent transition-colors"></i>
                                    <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">CryptoVault X</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">Rust</span>
                                        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">WASM</span>
                                        <span className="px-2 py-1 bg-green-900/30 text-green-500 rounded text-xs font-mono">AES-256</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Military-grade encrypted storage solution with client-side encryption, secure file sharing, and blockchain-based integrity verification.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <Link href="#" className="text-green-500 hover:text-accent font-mono text-sm">
                                            <span className="text-accent">[</span>view_details<span className="text-accent">]</span>
                                        </Link>
                                        <div className="flex space-x-3">
                                            <Link href="#" className="text-gray-400 hover:text-green-500">
                                                <i className="fab fa-github"></i>
                                            </Link>
                                            <Link href="#" className="text-gray-400 hover:text-green-500">
                                                <i className="fas fa-external-link-alt"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};