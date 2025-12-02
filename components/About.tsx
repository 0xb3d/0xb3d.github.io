export default function About() {
    const aboutParagraphs = [
        "I'm a fullstack developer specializing in web and mobile app security, as well as network penetration testing.",
        "With a background in Electrical and Electronic Engineering, I design circuits and write embedded software when I'm not ethically breaking into systems.",
        "I also contribute to open-source security tools and write technical blogs.",
    ];
    return (
        <>
            <section id="about"
                className="py-16 px-6 backdrop-blur-sm transition-colors"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                <div className="container mx-auto max-w-4xl">
                    <div className="">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6"
                            style={{ color: 'var(--text)' }}>
                            <span style={{ color: 'var(--accent)' }}></span> /about
                        </h2>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/3 flex justify-center">
                                <div className="w-48 h-48 rounded-full flex items-center justify-center overflow-hidden border-4 relative"
                                    style={{
                                        backgroundColor: 'var(--card-bg)',
                                        borderColor: 'var(--border-primary)'
                                    }}>
                                    <i className="fas fa-user-secret text-6xl"
                                        style={{ color: 'var(--foreground)' }}></i>
                                    <div className="absolute inset-0 rounded-full border-2 animate-spin-slow"
                                        style={{ borderColor: 'var(--border-primary)', opacity: 0.3 }}></div>
                                </div>
                            </div>

                            <div className="md:w-2/3">
                                {aboutParagraphs.map((text, index) => (
                                    <p key={index}
                                        className={`text-lg italic ${index === aboutParagraphs.length - 1 ? 'mb-6' : 'mb-4'}`}
                                        style={{ color: 'var(--foreground)' }}>
                                        <span style={{ color: 'var(--muted-foreground)' }}>$</span> {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills"
                className="py-16 px-6 border-t border-b transition-colors"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    borderColor: 'var(--border-primary)'
                }}>
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8"
                        style={{ color: 'var(--text)' }}>
                        <span style={{ color: 'var(--accent)' }}></span> /skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Security */}
                        <div className="hacker-card p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center"
                                style={{ color: 'var(--text)' }}>
                                <i className="fas fa-shield-alt mr-2"></i> Security
                            </h3>
                            <ul className="space-y-3" style={{ color: 'var(--text)' }}>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Web application pentesting</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Network security assessment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Vulnerability research</span>
                                </li>
                            </ul>
                        </div>

                        {/* Development */}
                        <div className="hacker-card p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center"
                                style={{ color: 'var(--text)' }}>
                                <i className="fas fa-code mr-2"></i> Development
                            </h3>
                            <ul className="space-y-3" style={{ color: 'var(--text)' }}>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Full-stack web development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>API design & implementation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Cloud infrastructure</span>
                                </li>
                            </ul>
                        </div>

                        {/* AI/ML */}
                        <div className="hacker-card p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center"
                                style={{ color: 'var(--text)' }}>
                                <i className="fas fa-brain mr-2"></i> AI/ML
                            </h3>
                            <ul className="space-y-3" style={{ color: 'var(--text)' }}>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Model development & training</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>ML system deployment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Data pipeline engineering</span>
                                </li>
                            </ul>
                        </div>

                        {/* Embedded */}
                        <div className="hacker-card p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 flex items-center"
                                style={{ color: 'var(--text)' }}>
                                <i className="fas fa-microchip mr-2"></i> Embedded
                            </h3>
                            <ul className="space-y-3" style={{ color: 'var(--text)' }}>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Firmware development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Hardware security</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2" style={{ color: 'var(--muted-foreground)' }}>■</span>
                                    <span>Low-level systems programming</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}