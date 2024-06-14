import React from 'react';
import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";

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


    <section className="flex flex-wrap mx-auto w-10/12 space-y-8 px-1 py-4">

        <H1 className="text-center sm:text-start pt-4 block">Projects</H1>

        <div className='block w-full'>
            <p className="text-start inline-block mr-10 text-lg">
                Info about why I make projects
            </p>
        </div>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                    <H2 className='text-start pb-4'>Project Title #1</H2>
                    <p className='text-start pb-4'>Project description</p>
                    <p className='text-start pb-4'>Link to GitHub project</p>
                </div>
                <div>
                    <p className='text-start'>video of project</p>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                    <H2 className='text-start pb-4'>Project Title #2</H2>
                    <p className='text-start pb-4'>Project description</p>
                    <p className='text-start pb-4'>Link to GitHub project</p>
                </div>
                <div>
                    <p className='text-start'>video of project</p>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                    <H2 className='text-start pb-4'>Project Title #3</H2>
                    <p className='text-start pb-4'>Project description</p>
                    <p className='text-start pb-4'>Link to GitHub project</p>
                </div>
                <div>
                    <p className='text-start'>video of project</p>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                    <H2 className='text-start pb-4'>Project Title #4</H2>
                    <p className='text-start pb-4'>Project description</p>
                    <p className='text-start pb-4'>Link to GitHub project</p>
                </div>
                <div>
                    <p className='text-start'>video of project</p>
                </div>
            </div>
        </section>

  </section>
  )
}

export default Projects