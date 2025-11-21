"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FadeInView } from "@/components/motion-animations";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-fit sm:min-h-screen flex flex-col justify-center items-center px-5 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-semibold py-3 text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <FadeInView
            className="text-xl py-5 text-gray-800 dark:text-gray-300 [&_strong]:dark:text-gray-200"
          >
            <p>
              Thanks for stopping by, I'm <strong>Turhan</strong>! <br /><br />

              I'm a <strong>software engineer</strong> who builds <strong>full-stack web applications</strong> and integrates <strong>AI-driven solutions.</strong> <br /><br />

              In my early days, I contributed to <strong>deep learning research</strong> with {" "}
              <a
                href="https://www.researchgate.net/scientific-contributions/Turhan-Kimbrough-2224206212"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                <Button variant="ghost" className="text-xl p-0 !px-1 underline">
                  <strong>4 publications</strong>
                  <ExternalLink className="size-4" />
                </Button>
              </a> {" "}
              in prestigious venues including <strong>IEEE</strong>.<br /><br />
            </p>
          </FadeInView>
        </div>
        <FadeInView 
          className="hidden sm:flex justify-center items-center"
        >
          <Image
            className="rounded-full"
            src="/angie-pic.JPG"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </FadeInView>
      </div>
    </section>
  );
}