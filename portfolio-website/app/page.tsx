import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import kevin from "@/src/assets/K-Headshot.png";
import {Bot} from "lucide-react";
import TyperwriterEffect from "@/src/components/TypewriterEffect"

export const metadata: Metadata = {
  title: "Kevin Brennan - My Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat mx-auto my-auto py-8 w-10/12 min-h-screen">
      <section className="flex justify-center gap-16 pt-24 max-w-screen-md mx-auto">
        <div className="items-center space-y-3">
          <TyperwriterEffect />
{/* Fill this out more using info I include on my github page */}
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
      <section className="grid grid-cols-2 gap-10">
        <div className="bg-red-500 rounded-lg"></div>
        <div className="bg-blue-500 rounded-lg"></div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything about me</H2>
        <p className="text-lg">
            Click the little <Bot className="inline pb-1" /> icon in the top bar
            to activate the AI chat. You can ask the chatbot any question about me and it will find the relevant
            infor on this website. The bot can even provide links to pages you&apos;re looking for.
        </p>
      </section>
    </section>
  );
}
