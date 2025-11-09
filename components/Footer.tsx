import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="py-8 px-6 border-t transition-colors" 
                    style={{ 
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--border-primary)'
                    }}>
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <Link href="#" 
                                  className="text-4xl hover:text-accent transition-colors font-mono" 
                                  style={{ 
                                      fontFamily: "'MR Robot', monospace",
                                      color: 'var(--accent)'
                                  }}>
                                GRIMLABS
                            </Link>
                            <p className="mt-2 font-mono text-sm" 
                               style={{ color: 'var(--muted-foreground)' }}>
                                © 2025 GRIMLABS. All rights reserved.
                            </p>
                        </div>

                        <div className="flex space-x-6">
                            <Link href="#" 
                                  className="transition-colors hover:opacity-80"
                                  style={{ color: 'var(--muted-foreground)' }}>
                                <i className="fab fa-github text-xl"></i>
                            </Link>
                            <Link href="#" 
                                  className="transition-colors hover:opacity-80"
                                  style={{ color: 'var(--muted-foreground)' }}>
                                <i className="fab fa-twitter text-xl"></i>
                            </Link>
                            <Link href="#" 
                                  className="transition-colors hover:opacity-80"
                                  style={{ color: 'var(--muted-foreground)' }}>
                                <i className="fab fa-linkedin text-xl"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};