export default function Contact() {
    return (
        <>
            <section id="contact" 
                     className="py-16 px-6 backdrop-blur-sm transition-colors"
                     style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                <div className="container mx-auto max-w-4xl">
                    <div className="terminal-box">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8"
                            style={{ color: 'var(--text)' }}>
                            <span style={{ color: 'var(--accent)' }}></span> sendmail --contact --secure
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center"
                                    style={{ color: 'var(--accent)' }}>
                                    <i className="fas fa-id-card mr-2"></i> Contact Channels
                                </h3>
                                <p className="mb-6"
                                   style={{ color: 'var(--text)' }}>
                                    For security-related inquiries, please use PGP encryption. My public key fingerprint is displayed below.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-envelope mr-4 w-6"
                                           style={{ color: 'var(--primary)' }}></i>
                                        <div>
                                            <div style={{ color: 'var(--text)' }}>Email</div>
                                            <div className="font-mono" 
                                                 style={{ color: 'var(--primary)' }}>contact@grimlabs.org</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-key mr-4 w-6"
                                           style={{ color: 'var(--primary)' }}></i>
                                        <div>
                                            <div style={{ color: 'var(--text)' }}>PGP Key</div>
                                            <div className="font-mono text-sm" 
                                                 style={{ color: 'var(--primary)' }}>A1B2 C3D4 E5F6 7890 1234 5678 90AB CDEF 1234 5678</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fab fa-twitter mr-4 w-6"
                                           style={{ color: 'var(--primary)' }}></i>
                                        <div>
                                            <div style={{ color: 'var(--text)' }}>Twitter</div>
                                            <div className="font-mono" 
                                                 style={{ color: 'var(--primary)' }}>@grimlabs</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fab fa-github mr-4 w-6"
                                           style={{ color: 'var(--primary)' }}></i>
                                        <div>
                                            <div style={{ color: 'var(--text)' }}>GitHub</div>
                                            <div className="font-mono" 
                                                 style={{ color: 'var(--primary)' }}>github.com/grimlabs</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-lg font-bold mb-3"
                                        style={{ color: 'var(--accent)' }}>Security Disclosure</h4>
                                    <p className="text-sm"
                                       style={{ color: 'var(--text)' }}>
                                        To report security vulnerabilities, please use our encrypted communication channel. Never send sensitive information via unencrypted email.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="name" 
                                               className="block mb-2 font-mono"
                                               style={{ color: 'var(--text)' }}>$ name</label>
                                        <input type="text" id="name" className="hacker-input w-full" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" 
                                               className="block mb-2 font-mono"
                                               style={{ color: 'var(--text)' }}>$ email</label>
                                        <input type="email" id="email" className="hacker-input w-full" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="subject" 
                                               className="block mb-2 font-mono"
                                               style={{ color: 'var(--text)' }}>$ subject</label>
                                        <select id="subject" className="hacker-input w-full">
                                            <option value="general">General Inquiry</option>
                                            <option value="security">Security Issue</option>
                                            <option value="consulting">Consulting Request</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" 
                                               className="block mb-2 font-mono"
                                               style={{ color: 'var(--text)' }}>$ message</label>
                                        <textarea id="message" rows={4} className="hacker-input w-full"></textarea>
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        <input type="checkbox" id="encrypt" className="mr-2" />
                                        <label htmlFor="encrypt" 
                                               className="text-sm"
                                               style={{ color: 'var(--text)' }}>Encrypt message with PGP</label>
                                    </div>
                                    <button type="submit" className="hacker-btn w-full font-mono">
                                        <i className="fas fa-paper-plane mr-2"></i>Send Secure Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}