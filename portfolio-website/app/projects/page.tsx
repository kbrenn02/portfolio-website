import React from 'react';
import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import kevin from "@/src/assets/K-Headshot.jpg";


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
    <div>Projects</div>
  )
}

export default Projects