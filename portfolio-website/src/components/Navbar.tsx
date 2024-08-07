import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
// import AIChatButton from "./AIChatButton"

export default function Navbar() {
    // header itself
    return <header className="sticky top-0 bg-background border-solid border-2 border-blue-100 rounded-b-lg z-50">
        {/* content of the header, which is centered and that wrap*/}
        {/* With the 'justify between' it means if you have 2 elements, it will put the first element to the left and second to the right */}
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-4 px-3 py-4">
            <nav className="space-x-8 font-medium text-lg">
                {/* recommend single page if using free OpenAI account */}
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/projects">Projects</Link>
            </nav>
            <div className="flex items-center gap-6 text-lg">
                {/* The AI Chat Button will open the chatbox */}
                {/* <AIChatButton /> */}
                <ThemeToggle />
            </div>
        </div>
    </header>
}