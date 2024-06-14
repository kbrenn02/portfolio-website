import React from 'react';
import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import kevin from "@/src/assets/K-Headshot.jpg";


export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Kevin Brennan and his work.",
};


const About = () => {
  return (
        <section className="flex flex-wrap mx-auto w-10/12 space-y-8 px-1 py-4">

          <H1 className="text-center sm:text-start pt-4">About Me</H1>

          <section className="w-11/12 grid grid-cols-1 items-center mx-auto gap-12 sm:grid-cols-2 pb-4">
            <div className="space-y-3">
              <div className='flex'>
                <p className="text-center sm:text-start inline-block mr-10 text-lg">
                    You will be unsurprised to learn, due to the picture being on the homepage and also in the about me tab, that this is me
                </p>
                <p className="hidden md:inline-block text-center text-7xl">
                        👉
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={kevin}
                alt="A photo of me"
                height={300}
                width={300}
                className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
              />
            </div>
          </section>

          <section className="max-w-screen-xl mx-auto space-y-3 text-center basis-full">
            <H2 className='text-start'>Who am I?</H2>
            {/* Use the below info as a template */}
            <p>
                    {/* <p>
                My name is Florian Walther and I am a self-taught software developer
                from Germany. I started programming in 2017, at the age of 26, and
                since then I have created hundreds of tutorials on my YouTube channel{" "}
                <a
                    href="https://www.youtube.com/codinginflow"
                    className="text-primary hover:underline"
                >
                    Coding in Flow
                </a>
                .
                </p>
                <p>
                I&apos;m passionate about building cool apps and websites and I love
                sharing the things I learn with my audience.
                </p> */}
            </p>
          </section>

          <section className="max-w-screen-xl mx-auto space-y-3 text-center basis-full">
            <H2 className='text-end'>Why am I doing this (programming)?</H2>
            {/* Add a link that, when clicked, sends the user to the projects tab */}
            {/* give some background on why I like coding and am doing it - make it vague so
            if someone from Deloitte finds it, they don't get suspicious */}
            <p></p>
          </section>

          <section className="max-w-screen-xl mx-auto space-y-3 text-center basis-full">
            <H2 className='text-start'>Why should you care?</H2>
            {/* Maybe don't have this section, or make it more philantrophic or sarcastic */}
            <p></p>
          </section>

          <section className="max-w-screen-xl mx-auto space-y-3 text-center basis-full">
            <H2 className='text-end'>How do I fill my free time?</H2>
            {/* Friends, dancing, pottery, running, climbing, travelling, cooking, piano, concerts/music. Maybe a separate interests section? */}
            <p></p>
            {/* Photo of me travelling, running, and spending time with friends. pictures should be in a nice grid
            with two stacked and one larger one next to it*/}
            <div className=" justify-center">
              {/* <Image
                src={kevin}
                alt="A photo of me"
                className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
              /> */}
            </div>
          </section>

        </section>
  )
}

export default About