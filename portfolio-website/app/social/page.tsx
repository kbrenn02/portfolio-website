import React from 'react'
import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import kevin from "@/src/assets/K-Headshot.jpg";


export const metadata: Metadata = {
    title: "Social Media",
    description: "My social media outlets and how to keep in touch.",
};

const Social = () => {
  return (
    <section className="flex flex-wrap mx-auto w-9/12 space-y-8 px-1 py-4">
{/* This whole page may be overkill and I can just have the logos in the footer with links to it (kinda like this idea
    I'm just not an influencer so this is overkill
) */}
          <H1 className="text-center sm:text-start">Social Media</H1>

          <section className="w-full grid grid-cols-1 items-center gap-12 sm:grid-cols-2 pb-4"></section>
          <ul>
            <li>
                <a href='linkedin.com'>
                LinkedIn
                </a>
            </li>
            <li>
                <a href='github.com'>
                GitHub
                </a>
            </li>
            <li>
                <a href='instragram.com'>
                Instagram
                {/* Not my real one, my travel one */}
                </a>
            </li>
            <li>
                <a href=''>
                Blog
                {/* maybe have a separate tab for blog posts on this website. 
                IDK, this is feeling like scope creep */}
                </a>
            </li>
          </ul>

    </section>
  )
}

export default Social