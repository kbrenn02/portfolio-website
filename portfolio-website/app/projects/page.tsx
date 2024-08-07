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
            <p className='text-xl leading-relaxed'>
                When it comes to software engineering, I am mostly self-taught, 
                with two college classes and a bootcamp under my belt as far as formal training goes. 
                As such, I’m constantly working on new projects to expand the technologies and tools I 
                can proficiently work in and reinforcing what I have already learned.
            </p>
            <p className='text-xl leading-relaxed'>
                A lot of my focus has been on full-stack web development in React or Next.js and my strongest 
                language is Python, but I’m always working to strengthen those skills and expand to other technologies 
                across the software landscape.
            </p>
            <p className='text-xl leading-relaxed'>
                I will soon be expanding into mobile app development and, if possible, find avenues for robotics 
                programming. Again, I’m taking in as much information and learning as I can from the field of software 
                and all the ways it can be applied.
            </p>
        </div>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex flex-col sm:flex-row w-full justify-between'>
                <div className='w-full sm:w-1/2'>
                    <H2 className='text-start pb-4'>Famiigo</H2>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        Client application for an events dashboard. Users are able to log in an find family-friendly 
                        events in a range of categories. New events and locations can be added, with location accuracy 
                        improved by using the Google Maps API and accounts/authentication aided by Clerk. The best part 
                        is that this project has a trove of seed data to give a realistic view of what the application 
                        will look like when it is fully rolled out.
                    </p>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        Technology: Next.JS, Prisma, Postgres, Docker, Tailwind, DaisyUI, Clerk, and Cypress
                    </p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        />
                        Will not be providing source code for client projects.
                    </p>
                </div>
                <div className='w-full sm:w-1/2 mx-auto my-auto pl-4'>
                    <video width={500} controls className='rounded-lg border-2 shadow-md dark:border-foreground'>
                        <source src="/Famiigo.mov" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex flex-col sm:flex-row w-full justify-between'>
                <div className='w-full sm:w-1/2'>
                    <H2 className='text-start pb-4'>Task Manager</H2>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        Have a lot to do and feeling scattered? This personal task manager can be used to track items 
                        that users need to complete. The homepage dashboard presents a concise summary of the status of 
                        all tasks (in a visually appealing donut chart), as well as the most pressing item (the item that 
                        is coming due next). An easy way for any to organize their busy life.
                    </p>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        Technology: Next.JS, Tailwind CSS, Radix UI, MySQL, Prisma
                    </p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Link href='https://github.com/kbrenn02/joy-of-coding-internship-solo-project'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        /></Link>
                        Source Code
                    </p>
                </div>
                <div className='w-full sm:w-1/2 mx-auto my-auto pl-4'>
                    <video width={500} controls className='rounded-lg border-2 shadow-md dark:border-foreground'>
                        <source src="/TaskManager.mov" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex flex-col sm:flex-row w-full justify-between'>
                <div className='w-full sm:w-1/2'>
                    <H2 className='text-start pb-4'>E-Commerce Platform</H2>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        A fully responsive e-commerce platform, this project was built in three distinct parts: frontend, 
                        backend, and admin panel. API connections were built in the backend to create a seemless experience 
                        for administrators to add or remove products. All that is missing a connection to a payments platform 
                        on the checkout page.
                    </p>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        Technology: React JS, MongoDB, Express, NodeJS
                    </p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Link href='https://github.com/kbrenn02/ecommerce-platform'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        /></Link>
                        Source Code
                    </p>
                </div>
                <div className='w-full sm:w-1/2 mx-auto my-auto pl-4'>
                    <video width={500} controls className='rounded-lg border-2 shadow-md dark:border-foreground'>
                        <source src="/ECommerce.mov" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex flex-col sm:flex-row w-full justify-between'>
                <div  className='w-full sm:w-1/2'>
                    <H2 className='text-start pb-4'>Dear Diary - A Django Blog</H2>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        A Django blog that serves more as a community space for people to write articles on topics 
                        they find interesting, and sharing them with anyone who comes across the website. Page protections 
                        allow only users who are signed in to create new articles, but everyone is able to read them. As this 
                        was created using Django, there is a built in admin panel for admins to control users and articles published.
                    </p>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        Technology: Django
                    </p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Link href='https://github.com/kbrenn02/Django-blog'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        /></Link>
                        Source Code
                    </p>
                </div>
                <div className='w-full sm:w-1/2 mx-auto my-auto pl-4'>
                    <video width={500} controls className='rounded-lg border-2 shadow-md dark:border-foreground'>
                        <source src="/DjangoBlog.mov" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex flex-col sm:flex-row w-full justify-between'>
                <div  className='w-full sm:w-1/2'>
                    <H2 className='text-start pb-4'>Stock Price Tracker</H2>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        A simple stock price tracker where the user is able to enter the ticker of the companies they 
                        are interested in tracking and see on a dashboard all the stocks they picked out. Data is updated 
                        every 10 seconds using the yfinance API, and the total stock movement for the day is included on 
                        each stock card. Now with Bitcoin too!
                    </p>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        Technology: Python, Flask, JavaScript, yfinance API
                    </p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Link href='https://github.com/kbrenn02/stock-price-tracker'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        /></Link>
                        Source Code
                    </p>
                </div>
                <div className='w-full sm:w-1/2 mx-auto my-auto pl-4'>
                    <video width={500} controls className='rounded-lg border-2 shadow-md dark:border-foreground'>
                        <source src="/StockPriceTracker.mov" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>

        <section className="max-w-screen-xl mx-auto space-y-3 basis-full py-2">
            <div className='flex flex-col sm:flex-row w-full justify-between'>
                <div  className='w-full sm:w-1/2'>
                    <H2 className='text-start pb-4'>Aora - Video Sharing App</H2>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        A friendly video sharing app built using React Native. It has all the features you would expect
                        of an app store level app, with log in/sign up, a home page showing the latest videos, a search
                        feature, the ability to upload videos from your camera roll, and a profile that tracks all the videos
                        you have uploaded to the site. All data is stored in Appwrite.io, allowing easy scability to multiple
                        users, as well as ease in adding new features, such as Favorite or Hidden categories for videos
                        on one&apos;s profile.
                    </p>
                    <p className='text-start pb-4 text-sm leading-relaxed'>
                        Technology: React Native, NativeWind, Appwrite.io
                    </p>
                    <p className='text-start pb-4 text-xl flex'>
                        <Link href='https://github.com/kbrenn02/reactnative'>
                        <Image
                            src={chain}
                            alt="Github logo"
                            className='mr-2 bg-white rounded-lg'
                        /></Link>
                        Source Code
                    </p>
                </div>
                <div className='w-full sm:w-1/2 mx-auto my-auto sm:pl-4 flex flex-col sm:flex-row'>
                    <div className='mx-auto'>
                        <video width={250} controls className='rounded-lg border-2 shadow-md dark:border-foreground'>
                            <source src="/Aora_Pt.1.mov" type="video/mp4" />
                        </video>
                        <p className='justify-center items-center text-center'>Part 1</p>
                    </div>
                    <div className='mx-auto'>
                        <video width={250} controls className='rounded-lg border-2 shadow-md dark:border-foreground'>
                            <source src="/Aora_Pt.2.mov" type="video/mp4" />
                        </video>
                        <p className='justify-center items-center text-center'>Part 2</p>
                    </div>
                </div>
            </div>
        </section>

  </section>
  )
}

export default Projects