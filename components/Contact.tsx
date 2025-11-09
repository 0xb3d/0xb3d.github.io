export default function Contact() {
    return (
        <>
            <section id="contact"
                className="py-16 px-6 backdrop-blur-sm transition-colors"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                <div className="container mx-auto max-w-4xl">
                    <div className="terminal-box">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--text)]"
                        >
                            sendmail --contact --secure
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center text-[var(--foreground)]"
                                >
                                    <i className="fas fa-id-card mr-2"></i> Contact Channels
                                </h3>
                                <p className="mb-6 text-[var(--text)]"
                                >
                                    For security-related inquiries, please use PGP encryption. My public key fingerprint is displayed below.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-envelope mr-4 w-6 text-[var(--muted-foreground)]"
                                        ></i>
                                        <div>
                                            <div className="text-[var(--text)] font-bold">Email</div>
                                            <div className="text-[var(--foreground)]">contact@grimlabs.org</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-key mr-4 w-6 text-[var(--muted-foreground)]"
                                        ></i>
                                        <div>
                                            <div className="font-bold text-[var(--text)]">PGP Key</div>
                                            <div className="text-sm text-[var(--muted-foreground)]"
                                            >A1B2 C3D4 E5F6 7890 1234 5678 90AB CDEF 1234 5678</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fab fa-twitter mr-4 w-6 text-[var(--muted-foreground)]"
                                        ></i>
                                        <div>
                                            <div className="font-bold text-[var(--text)]">Twitter</div>
                                            <div className="text-[var(--text)]"
                                            >@grimlabs</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fab fa-github mr-4 w-6 text-[var(--muted-foreground)]"
                                        ></i>
                                        <div>
                                            <div className="font-bold text-[var(--text)]">GitHub</div>
                                            <div className="text-[var(--text)]"
                                            >github.com/grimlabs-org</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-lg font-bold mb-3 text-[var(--text)]"
                                    >Security Disclosure</h4>
                                    <p className="text-sm text-[var(--text)]"
                                    >
                                        To report security vulnerabilities, please use our encrypted communication channel. Never send sensitive information via unencrypted email.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="name"
                                            className="block mb-2 font-bold text-var[(--foreground)]"
                                        >Name</label>
                                        <input type="text" id="name" className="hacker-input w-full rounded-xl" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email"
                                            className="block mb-2 font-bold text-var[(--foreground)]"
                                        >Email</label>
                                        <input type="email" id="email" className="hacker-input w-full rounded-xl" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="subject"
                                            className="block mb-2 font-bold text-[var(--foreground)]"
                                        >Subject</label>
                                        <select id="subject" className="hacker-input w-full rounded-lg">
                                            <option value="general">General Inquiry</option>
                                            <option value="security">Security Issue</option>
                                            <option value="consulting">Consulting Request</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message"
                                            className="block mb-2 font-bold text-[var(--foreground)]"
                                        >Message</label>
                                        <textarea id="message" rows={4} className="hacker-input w-full rounded-lg"></textarea>
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        <input type="checkbox" id="encrypt" className="mr-2" />
                                        <label htmlFor="encrypt"
                                            className="text-sm text-[var(--text)]"
                                        >Encrypt message with PGP</label>
                                    </div>
                                    <button type="submit" className="hacker-btn w-full font-bold">
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