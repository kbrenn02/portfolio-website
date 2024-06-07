import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return <footer>
    <nav className='max-w-3xl mx-auto flex gap-3 p-3'>
        <Link href="/privacy">Privacy</Link>
    </nav>
  </footer>
}

export default Footer