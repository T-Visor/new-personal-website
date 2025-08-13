"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { FadeInView } from "@/components/motion-animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type ProjectInfo = {
  title: string,
  description: string,
  image: string,
  github: string,
  publication: string
};

type ProjectShowcaseItemProps = {
  project: ProjectInfo;
  index: number;
}

const projects: ProjectInfo[] = [
  {
    title: "Note-a-log",
    description:
      "An AI-powered note-taking app which helps you stay organized. Note-a-log analyzes note contents and automatically suggests the most appropriate existing folders, or recommends creating new folders when your notes don't fit existing categories.",
    image: "/note-a-log-screenshot.png",
    github: "",
    publication: "",
  },
  {
    title: "Natural Language Housing Search",
    description:
      "A Zillow-style hobby project that leverages generative AI to power natural language search, enabling users to explore homes for sale through a seamless, intuitive interface.",
    image: "/housing-search-screenshot.png",
    github: "https://github.com/T-Visor/natural-language-housing-search",
    publication: "",
  },
  {
    title: "Deep CAPTCHA Recognition",
    description:
      "Developed a comprehensive framework for training and fine-tuning convolutional neural network (CNN) models to recognize text-based CAPTCHA images.",
    image: "/crabi-preprocessing-example.png",
    github: "https://github.com/T-Visor/decruehd-framework",
    publication: "https://ieeexplore.ieee.org/document/9798233",
  },
];

const ProjectShowcaseItem = ({
  project,
  index
}: ProjectShowcaseItemProps) => {
  return (
    <div
      className={`
        flex flex-col md:flex-row items-center 
        pt-10 gap-10 border-t md:border-0 md:pb-0
        ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} 
        dark:border-gray-600
      `}
    >
      {/* Info container */}
      <div className="flex-1 flex flex-col w-full text-center md:text-left">
        {/* Project title */}
        <h2 className="text-3xl font-semibold py-3 text-gray-800 dark:text-gray-200">
          {project.title}
        </h2>

        {/* Project description */}
        <p className="text-xl py-3 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        {/* Screenshot - only visible on mobile inside info block */}
        <div className="my-4 md:hidden flex justify-center">
          <Image
            className="border-1 border-gray-400 dark:border-gray-700 shadow-lg rounded-sm"
            src={project.image}
            width={500}
            height={500}
            alt={`screenshot of ${project.title}`}
          />
        </div>

        {/* GitHub and publication links */}
        <div className="flex justify-center md:justify-start items-center space-x-3 mt-2">
          {project.github && (
            <div className="py-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="text-xl flex items-center">
                  <GithubIcon className="size-5" />
                  GitHub
                </Button>
              </a>
            </div>
          )}
          {project.publication && (
            <a
              href={project.publication}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="text-xl flex items-center">
                Publication
              </Button>
            </a>
          )}
        </div>
      </div>
      {/* Screenshot - only visible on desktop (moved outside info block) */}
      <div className="flex-1 justify-center hidden md:flex">
        <Image
          className="border-1 border-gray-400 dark:border-gray-700 shadow-lg rounded-sm"
          src={project.image}
          width={500}
          height={500}
          alt={`screenshot of ${project.title}`}
        />
      </div>
    </div>
  );
}

export const Projects = () => {
  return (
    <section
      id="projects"
      className="
        min-h-screen flex flex-col justify-center items-center 
        pb-20 px-5 
        bg-white dark:bg-gray-900
      "
    >
      {/* Section title */}
      <div className="text-4xl font-semibold mb-10 pt-8 text-gray-900 dark:text-gray-100">
        <h2>Projects</h2>
      </div>

      {/* Project showcase items */}
      <FadeInView
        className="flex flex-col gap-20 max-w-5xl w-full"
      >
        {projects.map((project, index) => (
          <ProjectShowcaseItem
            key={index}
            project={project}
            index={index}
          />
        ))}
      </FadeInView>
    </section>
  );
};