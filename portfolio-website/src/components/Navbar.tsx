import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    // header itself
    return <header className="sticky top-0 bg-background">
        {/* content of the header, which is centered and that wrap*/}
        {/* With the 'justify between' it means if you have 2 elements, it will put the first element to the left and second to the right */}
        <div className="max-w-3xl mx-auto flex flex-wrap justify-between gap-3 px-3 py-4">
            <nav className="space-x-4 font-medium">
                {/* recommend single page if using free OpenAI account */}
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/social">Social Media</Link>
            </nav>
            <div>
                <ThemeToggle />
            </div>
        </div>
    </header>
}