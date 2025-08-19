"use client"

import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center dark:bg-gray-900"
    >
      <h1 className="text-5xl font-bold mb-4 dark:text-gray-100">
        Turhan Kimbrough
      </h1>
      <p className="text-xl max-w-xl mb-6 dark:text-gray-200">
        <TypeAnimation
          sequence={[
            "Web Development",
            2000,
            "Data Pipelines",
            2000,
            "AI Integration",
            2000,
            "Full-Stack AI Engineer",
            5000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={0}
        />
      </p>
      <a href="#projects">
        <Button
          variant="ghost"
          className="hover:cursor-pointer rounded-full px-6 py-3 text-md font-semibold text-gray-400"
        >
          View My Work
          <MoveDown />
        </Button>
      </a>
    </section>
  );
}