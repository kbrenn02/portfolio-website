import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import github from '@/src/assets/github.svg';
import linkedin from '@/src/assets/linkedin.svg';
import instagram from '@/src/assets/instagram.svg';
import gmail from '@/src/assets/gmail.svg'

const Footer = () => {
  return (
    <footer className='w-max-screen-lg bg-background mx-auto flex flex-wrap justify-between gap-20 pb-8'>
        {/* 
        --- Unsure if this is necessary for me ---
        <nav className='font-medium flex p-3'>
            <Link href="/privacy">Privacy</Link>
        </nav> 
        */}
        <div className="flex items-center gap-10 bg-white px-4 py-2 rounded-full text-2xl">
            <Link href="https://github.com/kbrenn02">
                <Image 
                    src={github}
                    alt="Github logo"
                    className='w-10 h-10'
                />
            </Link>
            <Link href="https://www.linkedin.com/in/brennan-kevin/">
                <Image 
                    src={linkedin}
                    alt="LinkedIn logo"
                    className='w-10 h-10'
                />
            </Link>
            <Link href="https://www.instagram.com/kev_brennan_/">
                <Image 
                    src={instagram}
                    alt="Instagram logo"
                    className='w-10 h-10'
                />
            </Link>
            <Link href="mailto:kevinmbrennan08@gmail.com">
                <Image 
                    src={gmail}
                    alt="Gmail logo"
                    className='w-10 h-10'
                />
            </Link>
        </div>
    </footer>
  )
}

export default Footer