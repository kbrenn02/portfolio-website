import Link from "next/link"

export default function Navbar() {
    // header itself
    return <header className="sticky top-0 bg-background">
        {/* content of the header, which is centered and that wrap*/}
        <div className="max-w-3xl mx-auto flex flex-wrap justify-between gap-3 px-3 py-4">
            <nav className="space-x-4 font-medium">
                {/* recommend single page if using free OpenAI account */}
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/social">Social Media</Link>
            </nav>
        </div>
    </header>
}