
export default function About() {
    const aboutParagraphs = [
        "I'm a fullstack developer specializing in web and mobile app security, as well as network penetration testing.",
        "With a background in Electrical and Electronic Engineering, I design circuits and write embedded software when I'm not ethically breaking into systems.",
        "I also contribute to open-source security tools, write technical blogs, and share insights at security conferences worldwide.",
    ];
    return (
        <>
            <section id="about" className="py-16 px-6 bg-black/50 backdrop-blur-sm">
                <div className="container mx-auto max-w-4xl">
                    <div className="terminal-box">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-100 mb-6">
                            <span className="text-accent"></span> /about
                        </h2>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/3 flex justify-center">
                                <div className="w-48 h-48 rounded-full bg-green-900/30 flex items-center justify-center overflow-hidden border-4 border-green-500/50 relative">
                                    <i className="fas fa-user-secret text-6xl text-green-500"></i>
                                    <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-spin-slow"></div>
                                </div>
                            </div>

                            <div className="md:w-2/3">
                                {aboutParagraphs.map((text, index) => (
                                    <p key={index} className={`text-gray-300 ${index === aboutParagraphs.length - 1 ? 'mb-6' : 'mb-4'}`}><span className="text-green-500">$</span> {text}</p>))}

                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1 bg-green-900/30 text-green-500 rounded-full text-sm font-mono border border-green-500/30">OSCP</span>
                                    <span className="px-3 py-1 bg-green-900/30 text-green-500 rounded-full text-sm font-mono border border-green-500/30">CEH</span>
                                    <span className="px-3 py-1 bg-green-900/30 text-green-500 rounded-full text-sm font-mono border border-green-500/30">CISSP</span>
                                    <span className="px-3 py-1 bg-green-900/30 text-green-500 rounded-full text-sm font-mono border border-green-500/30">Burp Suite</span>
                                    <span className="px-3 py-1 bg-green-900/30 text-green-500 rounded-full text-sm font-mono border border-green-500/30">Metasploit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 px-6 border-t border-green-500/30 bg-black/70">
                <div className="container mx-auto max-w-4xl">
                    <div className="terminal-box">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-100 mb-8">
                            <span className="text-accent"></span> /skillset
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Technical Skills */}
                            <div className="hacker-card p-6">
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center">
                                    <i className="fas fa-terminal mr-2"></i> Technical Skills
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Penetration Testing (Web/Network/Mobile)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Vulnerability Assessment & Management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Secure Code Review (SAST/DAST)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Incident Response & Forensics</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Security Architecture Design</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Tools & Technologies */}
                            <div className="hacker-card p-6">
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center">
                                    <i className="fas fa-tools mr-2"></i> Tools & Technologies
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Burp Suite, Metasploit, Nmap</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Kali Linux, Parrot OS</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Wireshark, Tcpdump</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Python, Bash, PowerShell</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Docker, Kubernetes</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Methodologies */}
                            <div className="hacker-card p-6">
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center">
                                    <i className="fas fa-project-diagram mr-2"></i> Methodologies
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>OWASP Testing Guide</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>MITRE ATT&CK Framework</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>NIST Cybersecurity Framework</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>PCI DSS Compliance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Threat Modeling</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Specializations */}
                            <div className="hacker-card p-6">
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center">
                                    <i className="fas fa-star mr-2"></i> Specializations
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Web Application Security</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>API Security Testing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Cloud Security (AWS/Azure/GCP)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Mobile App Security (iOS/Android)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">■</span>
                                        <span>Social Engineering</span>
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