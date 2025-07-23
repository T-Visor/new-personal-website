import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

const projectData = [
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
  // Add more project objects here...
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-5 dark:bg-gray-900 pb-20"
    >
      <div className="text-4xl font-bold mb-10 pt-8">
        <h2>Projects</h2>
      </div>

      <div className="flex flex-col gap-20 max-w-5xl w-full">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10 border-t dark:border-gray-600 pt-10 sm:border-0 sm:pb-0`}
          >
            {/* Text Section */}
            <div className="flex-1 text-gray-600 dark:text-gray-300 text-center md:text-left">
              <h2 className="text-3xl font-semibold py-3 text-gray-700 dark:text-gray-200">
                {project.title}
              </h2>
              <p className="text-xl py-3">{project.description}</p>
              <div className="flex justify-center md:justify-start items-center space-x-3">
                {project.github && <div className="py-3">
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
                </div>}
                {project.publication &&
                  <a
                    href={project.publication}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="text-xl flex items-center">
                      Publication
                    </Button>
                  </a>
                }
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <Image
                className="dark:border-gray-700 shadow-lg"
                src={project.image}
                width={800}
                height={800}
                alt={`screenshot of ${project.title}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};