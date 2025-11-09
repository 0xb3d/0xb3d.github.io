export default function About() {
    const aboutParagraphs = [
        "I'm a fullstack developer specializing in web and mobile app security, as well as network penetration testing.",
        "With a background in Electrical and Electronic Engineering, I design circuits and write embedded software when I'm not ethically breaking into systems.",
        "I also contribute to open-source security tools, write technical blogs, and share insights at security conferences worldwide.",
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
                                       style={{ color: 'var(--primary)' }}></i>
                                    <div className="absolute inset-0 rounded-full border-2 animate-spin-slow"
                                         style={{ borderColor: 'var(--border-primary)', opacity: 0.3 }}></div>
                                </div>
                            </div>

                            <div className="md:w-2/3">
                                {aboutParagraphs.map((text, index) => (
                                    <p key={index} 
                                       className={`text-lg ${index === aboutParagraphs.length - 1 ? 'mb-6' : 'mb-4'}`}
                                       style={{ color: 'var(--text)' }}>
                                        <span style={{ color: 'var(--primary)' }}>$</span> {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" 
                     className="py-16 px-6 border-t transition-colors"
                     style={{ 
                         backgroundColor: 'rgba(0, 0, 0, 0.1)',
                         borderColor: 'var(--border-primary)'
                     }}>
                <div className="container mx-auto max-w-4xl">
                    <div className="">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8"
                            style={{ color: 'var(--text)' }}>
                            <span style={{ color: 'var(--accent)' }}></span> /skillset
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Technical Skills */}
                            <div className="hacker-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center"
                                    style={{ color: 'var(--text)' }}>
                                    <i className="fas fa-terminal mr-2"></i> Technical Skills
                                </h3>
                                <ul className="space-y-3" style={{ color: 'var(--text)' }}>
                                    <li className="flex items-start">
                                        <span className="mr-2" style={{ color: 'var(--accent)' }}>■</span>
                                        <span>Penetration Testing (Web/Network/Mobile)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2" style={{ color: 'var(--accent)' }}>■</span>
                                        <span>Vulnerability Assessment & Management</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Tools & Technologies */}
                            <div className="hacker-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center"
                                    style={{ color: 'var(--text)' }}>
                                    <i className="fas fa-tools mr-2"></i> Tools & Technologies
                                </h3>
                                <ul className="space-y-3" style={{ color: 'var(--text)' }}>
                                    <li className="flex items-start">
                                        <span className="mr-2" style={{ color: 'var(--accent)' }}>■</span>
                                        <span>Burp Suite, Metasploit, Nmap</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2" style={{ color: 'var(--accent)' }}>■</span>
                                        <span>Kali Linux, Parrot OS</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Methodologies */}
                            <div className="hacker-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center"
                                    style={{ color: 'var(--text)' }}>
                                    <i className="fas fa-project-diagram mr-2"></i> Methodologies
                                </h3>
                                <ul className="space-y-3" style={{ color: 'var(--text)' }}>
                                    <li className="flex items-start">
                                        <span className="mr-2" style={{ color: 'var(--accent)' }}>■</span>
                                        <span>OWASP Testing Guide</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2" style={{ color: 'var(--accent)' }}>■</span>
                                        <span>MITRE ATT&CK Framework</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Specializations */}
                            <div className="hacker-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center"
                                    style={{ color: 'var(--text)' }}>
                                    <i className="fas fa-star mr-2"></i> Specializations
                                </h3>
                                <ul className="space-y-3" style={{ color: 'var(--text)' }}>
                                    <li className="flex items-start">
                                        <span className="mr-2" style={{ color: 'var(--accent)' }}>■</span>
                                        <span>Web Application Security</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2" style={{ color: 'var(--accent)' }}>■</span>
                                        <span>API Security Testing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}