

export default function Hero() {
    return (
        <>
            <section className="py-20 px-6 border-b border-green-500/30 relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="">
                        <div className="text-green-500 mb-6">
                            <span className="text-accent">$</span> whoami
                        </div>
                        <h1 
                            className="text-4xl md:text-9xl text-red-500 mb-4" 
                            style={{ fontFamily: "'MR Robot', monospace"}}>
                            GRIMLABS
                        </h1>
                        <div className="text-lg md:text-xl mb-8">
                            {/* <span className="text-accent"></span> FullStack Development <span className="text-accent">|</span> Web & Mobile App Security <span className="text-accent">|</span> Network Pentesting */}
                            A solo research lab exploring AI/ML, Cybersecurity, and Embedded systems.
                        </div>
                        {/* <div className="flex items-center text-green-500">
                            <span className="blink">_</span>
                            <span className="ml-2">Initializing system scan...</span>
                        </div> */}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="hacker-card p-4 text-center">
                            <div className="text-green-300 text-3xl text-accent mb-2">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div className="font-bold text-green-500 font-mono">CyberSecurity</div>
                        </div>
                        <div className="hacker-card p-4 text-center">
                            <div className="text-green-300 text-3xl text-accent mb-2">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="font-bold text-green-500 font-mono">Embedded Systems</div>
                        </div>
                        <div className="hacker-card p-4 text-center">
                            <div className="text-green-300 text-3xl text-accent mb-2">
                                <i className="fas fa-bug"></i>
                            </div>
                            <div className="font-bold text-green-500 font-mono">AI & Computational Engineering</div>
                        </div>
                        <div className="hacker-card p-4 text-center">
                            <div className="text-green-300 text-3xl text-accent mb-2">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="font-bold text-green-500 font-mono">Full-Stack Development</div>
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