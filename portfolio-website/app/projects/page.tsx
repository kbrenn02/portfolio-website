import React from 'react';
import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import chain from '@/src/assets/link.svg';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Projects",
    description: "Some projects I've worked on, using tutorials online to learn new technologies and tools.",
};

const Projects = () => {
  return (
    // combine the back and forth format of the about me page with the links and a tags of the social media page
    // take videos of each of the projects I've done, list out the technologies used in the description
    // include all portfolio projects and famiigo. Always have the most up to date videos here, but keep a history 
    // of the videos/versions of each stage of the projects and have them on github readme files. Send user there
    // if they want more info


    <section className="flex flex-wrap mx-auto w-10/12 space-y-10 px-1 py-4">

        <H1 className="text-center sm:text-start pt-4 block">Projects</H1>

        <div className='block w-full space-y-6'>
            <p className='text-xl'>
                When it comes to software engineering, I am mostly self-taught, 
                with two college classes and a bootcamp under my belt as far as formal training goes. 
                As such, I’m constantly working on new projects to expand the technologies and tools I 
                can proficiently work in and reinforcing what I have already learned.
            </p>
            <p className='text-xl'>
                A lot of my focus has been on full-stack web development in React or Next.js and my strongest 
                language is Python, but I’m always working to strengthen those skills and expand to other technologies 
                across the software landscape.
            </p>
            <p className='text-xl'>
                I will soon be expanding into mobile app development and, if possible, find avenues for robotics 
                programming. Again, I’m taking in as much information and learning as I can from the field of software 
                and all the ways it can be applied.
            </p>
        </div>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                    <H2 className='text-start pb-4'>Project Title #1</H2>
                    <p className='text-start pb-4 text-xl'>Project description</p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Link href='https://github.com'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        /></Link>
                        Source Code
                    </p>
                </div>
                <div>
                    <p className='text-start text-xl'>video of project</p>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                    <H2 className='text-start pb-4'>Project Title #2</H2>
                    <p className='text-start pb-4 text-xl'>Project description</p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Link href='https://github.com'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        /></Link>
                        Source Code
                    </p>
                </div>
                <div>
                    <p className='text-start text-xl'>video of project</p>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                    <H2 className='text-start pb-4'>Project Title #3</H2>
                    <p className='text-start pb-4 text-xl'>Project description</p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Link href='https://github.com'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        /></Link>
                        Source Code
                    </p>
                </div>
                <div>
                    <p className='text-start text-xl'>video of project</p>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                    <H2 className='text-start pb-4'>Project Title #4</H2>
                    <p className='text-start pb-4 text-xl'>Project description</p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Link href='https://github.com'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        /></Link>
                        Source Code
                    </p>
                </div>
                <div>
                    <p className='text-start text-xl'>video of project</p>
                </div>
            </div>
        </section>

  </section>
  )
}

export default Projects