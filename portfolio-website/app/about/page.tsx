import React from 'react';
import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import kevin2 from "@/src/assets/K-Headshot2.png";


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
                    You will be unsurprised to learn, due to a similar picture being on the homepage and this one in the about me tab, that this is me!
                </p>
                <p className="hidden md:inline-block text-center text-7xl">
                        👉
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={kevin2}
                alt="A photo of me"
                height={450}
                width={450}
                className="aspect-square rounded-3xl border-2 object-cover shadow-lg dark:border-foreground hover:animate-spin"
              />
            </div>
          </section>

          <section className="max-w-screen-xl mx-auto space-y-3 text-center basis-full">
            <H2 className='text-start'>Who am I?</H2>
            <p className='text-start'>
                My name is Kevin Brennan and I am a full-stack software engineer from San Francisco, California. 
                I was first introduced to programming in college as a one off class, but realized after college 
                that I loved the challenge and problem-solving involved in programming, and the thrill of actually 
                making something work and knowing that it’s helping someone else.
            </p>
            <p className='text-start'>
                When I moved to San Francisco, I dived into the world of programming and learned (and am still learning) 
                as much as I can on the topic, building any and every project that I find interesting.
            </p>
          </section>

          <section className="max-w-screen-xl mx-auto space-y-3 text-center basis-full">
            <H2 className='text-end'>Why am I doing this (programming)?</H2>
            {/* Add a link that, when clicked, sends the user to the projects tab */}
            {/* give some background on why I like coding and am doing it - make it vague so
            if someone from Deloitte finds it, they don't get suspicious */}
            <p className='text-end'>
                Programming, coding, web development - it’s all so exciting to me, and in my learning, 
                I’ve only scratched the surface of what can be done with this skill. I see my friends 
                contributing to advances in AI and robotics and medicine and sustainability, all with software. 
            </p>
            <p className='text-end'>
                I love seeing how people are using software to solve big problems and change the world. 
                And I want to do my part - I want to create something that will help the world :) 
            </p>
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