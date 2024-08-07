import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import kevin from "@/src/assets/K-Headshot.png";
import aboutMe from "@/src/assets/K-Headshot2.png";
import coding from "@/src/assets/coding.png";
import {Bot} from "lucide-react";
import TyperwriterEffect from "@/src/components/TypewriterEffect"
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Kevin Brennan - My Portfolio",
};

export default function Home() {
  return (
    <>
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat mx-auto my-auto pt-8 w-10/12 min-h-screen">
      
      <section className="flex justify-center gap-16 pt-24 max-w-screen-md mx-auto">
        <div className="items-center space-y-3">
          <TyperwriterEffect />
        </div>
      </section>
      
      <section>
        <div className="flex justify-center">
            <Image
                src={kevin}
                alt="A photo of me"
                height={350}
                width={350}
                className="aspect-square rounded-full border-2 object-cover shadow-md dark:border-foreground"
            />
        </div>
      </section>

      <section className="flex justify-center space-y-3 mx-auto">
        <div>
          <p className="text-center sm:text-start text-lg">
            I&apos;m a full-stack software engineer and have fun creating cool projects. I love learning new 
            things and solving problems.
          </p>
        </div>
      </section>

    </section>


    <section className="mx-auto my-auto">
      
      <section className="flex flex-col sm:flex-row gap-6 max-w-screen-lg pb-32 mx-auto">
        <div className="relative first-letter:rounded-lg w-9/12 h-96 mx-auto">
            <Link href='/about'>
                <div className="rounded-lg absolute inset-0 flex items-end justify-center">
                    <Image
                        src={aboutMe}
                        alt="Background Image"
                        height={384}
                        className="rounded-lg border-2 object-cover shadow-md dark:border-foreground"
                    />
                </div>
                <div className="rounded-lg absolute inset-0 flex items-end justify-center">
                    <div className="rounded-lg w-[380px] bg-gradient-to-t from-blue-400 to-transparent p-4">
                        <H1 className="text-white text-center">About Me</H1>
                    </div>
                </div>
            </Link>
        </div>
        
        <div className="relative first-letter:rounded-lg w-9/12 h-96 mx-auto">
            <Link href='/projects'>
                <div className="rounded-lg absolute inset-0 flex items-end justify-center">
                    <Image
                        src={coding}
                        alt="Background Image"
                        height={384}
                        className="rounded-lg border-2 object-cover shadow-md dark:border-foreground"
                    />
                </div>
                <div className="rounded-lg absolute inset-0 flex items-end justify-center">
                    <div className="rounded-lg w-[380px] bg-gradient-to-t from-green-400 to-transparent p-4">
                        <H1 className="text-white text-center">My Projects</H1>
                    </div>
                </div>
            </Link>
        </div>
      </section>

      {/* <section className="space-y-3 text-center mx-auto pb-12">
        <H2>Ask the chatbot anything about me</H2>
        <p className="text-lg mx-auto w-9/12">
            Click the little <Bot className="inline pb-1" /> icon in the top bar
            to activate the AI chat. You can ask the chatbot any question about me and it will find the relevant
            infor on this website. The bot can even provide links to pages you&apos;re looking for.
        </p>
      </section> */}

    </section>
    </>
  );
}
