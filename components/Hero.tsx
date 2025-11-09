export default function Hero() {
    return (
        <>
            <section className="pt-5 pb-50 px-6 border-b relative min-h-screen flex items-center justify-center overflow-hidden transition-colors"
                style={{ borderColor: 'var(--border-primary)' }}>
                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="">
                        <div className="mb-6 text-[var(--muted-foreground)]">
                            <span style={{ color: 'var(--foreground)' }}>$</span> whoami
                        </div>
                        <h1
                            className="text-[3.5rem] md:text-[6rem] lg:text-[9rem] mb-4"
                            style={{
                                fontFamily: "MR Robot,monospace",
                                color: 'var(--logo-color)'
                            }}>
                            GRIMLABS
                        </h1>
                        <div className="text-base md:text-lg mb-8 text-[var(--text)]"
                        >
                            A solo research lab exploring AI/ML, Cybersecurity, and Embedded systems.
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="hacker-card p-4 rounded-xl text-center">
                            <div className="text-3xl mb-2"
                                style={{ color: 'var(--foreground)' }}>
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div className="font-bold text-base"
                                style={{ color: 'var(--muted-foreground)' }}>
                                CyberSecurity
                            </div>
                        </div>
                        <div className="hacker-card p-4 rounded-xl text-center">
                            <div className="text-3xl mb-2"
                                style={{ color: 'var(--foreground)' }}>
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="font-bold text-base"
                                style={{ color: 'var(--muted-foreground)' }}>
                                Embedded Systems
                            </div>
                        </div>
                        <div className="hacker-card p-4 rounded-xl text-center">
                            <div className="text-3xl mb-2"
                                style={{ color: 'var(--foreground)' }}>
                                <i className="fas fa-bug"></i>
                            </div>
                            <div className="font-bold text-base"
                                style={{ color: 'var(--muted-foreground)' }}>
                                AI & Computational Engineering
                            </div>
                        </div>
                        <div className="hacker-card p-4 rounded-xl text-center">
                            <div className="text-3xl mb-2"
                                style={{ color: 'var(--foreground)' }}>
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="font-bold text-base"
                                style={{ color: 'var(--muted-foreground)' }}>
                                Full-Stack Development
                            </div>
                        </div>
                    </div>
                </div>

                {/* Binary code decorations */}
                <div className="binary-code" style={{ top: '10%', left: '5%' }}>10101010</div>
                <div className="binary-code" style={{ top: '30%', right: '10%' }}>11001100</div>
                <div className="binary-code" style={{ bottom: '20%', left: '15%' }}>11110000</div>
            </section>
        </>
    );
};