import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return <footer className='w-full bg-background '>
    <nav className='max-w-screen-xl font-medium mx-auto flex gap-3 p-3'>
        <Link href="/privacy">Privacy</Link>
    </nav>
  </footer>
}

export default Footer