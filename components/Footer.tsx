import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="py-8 px-6 bg-black border-t border-green-500/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <Link href="#" className="text-2xl font-bold text-white hover:text-accent transition-colors font-mono">
                                <span className="text-accent">[</span>obsec<span className="text-accent">]</span>
                            </Link>
                            <p className="text-gray-400 mt-2 font-mono text-sm">/secure by design </p>
                        </div>

                        <div className="flex space-x-6">
                            <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                <i className="fab fa-github text-xl"></i>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                <i className="fab fa-twitter text-xl"></i>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                <i className="fab fa-linkedin text-xl"></i>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                <i className="fas fa-rss text-xl"></i>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                <i className="fab fa-hacker-news text-xl"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm font-mono">
                        <p>Last updated: 2025-07-15 | Secure connection established</p>
                        <p className="mt-2">© 2025 ObSec Research. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </>);
};