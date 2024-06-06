import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "@/src/components/ui/H1";
import { H2 } from "@/src/components/ui/H2";
import kevin from "@/src/assets/K-Headshot.jpg";
import {Bot} from "lucide-react"

export const metadata: Metadata = {
  title: "Kevin Brennan - My Portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I&apos;m Kevin</H1>
          <p className="text-center sm:text-start">
            I&apos;m am full-stack developer in training and am expanding my
            portfolio by creating cool projects.
          </p>
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
      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything about me</H2>
        <p>
            Click the little <Bot className="inline pb-1" /> icon in the top bar
            to activate the AI chat. You can ask the chatbot any question about me and it will find the relevant
            infor on this website. The bot can even provide links to pages you&apos;re looking for.
        </p>
      </section>
    </section>
  );
}
