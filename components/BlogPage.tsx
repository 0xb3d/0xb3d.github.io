import blogs from "@/data/blog";
import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="space-y-8">
            {blogs.map((blog, index) => (
                <div key={index} className="hacker-card p-6">
                    <div className="flex items-center text-sm text-green-500 mb-3 font-mono">
                        <span>{blog.date}</span>
                        <span className="mx-2 text-gray-400">|</span>
                        <span>{blog.category}</span>
                        <span className="mx-2 text-gray-400">|</span>
                        <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                        <Link href={blog.link} className="hover:text-accent transition-colors">
                            <span className="text-accent"></span> {blog.title}
                        </Link>
                    </h3>
                    <p className="text-gray-300 mb-4">{blog.description}</p>
                    <div className="flex items-center justify-between">
                        <Link href={blog.link} className="text-green-500 hover:text-accent font-mono text-sm">
                            <span className="text-accent">[</span>read_more<span className="text-accent">]</span>
                        </Link>
                        <span className="text-gray-400 text-sm font-mono">
                            {blog.tags.map(tag => `#${tag}`).join(" ")}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}