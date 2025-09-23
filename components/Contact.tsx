
export default function Contact() {
    return (
        <>
            <section id="contact" className="py-16 px-6 bg-black/50 backdrop-blur-sm">
                <div className="container mx-auto max-w-4xl">
                    <div className="terminal-box">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-100 mb-8">
                            <span className="text-accent"></span> sendmail --contact --secure
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center">
                                    <i className="fas fa-id-card mr-2"></i> Contact Channels
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    For security-related inquiries, please use PGP encryption. My public key fingerprint is displayed below.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-envelope text-green-500 mr-4 w-6"></i>
                                        <div>
                                            <div className="text-gray-300">Email</div>
                                            <div className="text-green-500 font-mono">contact@obsec.example</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-key text-green-500 mr-4 w-6"></i>
                                        <div>
                                            <div className="text-gray-300">PGP Key</div>
                                            <div className="text-green-500 font-mono text-sm">A1B2 C3D4 E5F6 7890 1234 5678 90AB CDEF 1234 5678</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fab fa-twitter text-green-500 mr-4 w-6"></i>
                                        <div>
                                            <div className="text-gray-300">Twitter</div>
                                            <div className="text-green-500 font-mono">@obsec_research</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fab fa-github text-green-500 mr-4 w-6"></i>
                                        <div>
                                            <div className="text-gray-300">GitHub</div>
                                            <div className="text-green-500 font-mono">github.com/obsec</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-lg font-bold text-accent mb-3">Security Disclosure</h4>
                                    <p className="text-gray-300 text-sm">
                                        To report security vulnerabilities, please use our encrypted communication channel. Never send sensitive information via unencrypted email.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-300 mb-2 font-mono">$ name</label>
                                        <input type="text" id="name" className="hacker-input w-full" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-300 mb-2 font-mono">$ email</label>
                                        <input type="email" id="email" className="hacker-input w-full" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="subject" className="block text-gray-300 mb-2 font-mono">$ subject</label>
                                        <select id="subject" className="hacker-input w-full">
                                            <option value="general">General Inquiry</option>
                                            <option value="security">Security Issue</option>
                                            <option value="consulting">Consulting Request</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="block text-gray-300 mb-2 font-mono">$ message</label>
                                        <textarea id="message" rows={4} className="hacker-input w-full"></textarea>
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        <input type="checkbox" id="encrypt" className="mr-2" />
                                        <label htmlFor="encrypt" className="text-gray-300 text-sm">Encrypt message with PGP</label>
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