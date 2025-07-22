import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-5 dark:bg-gray-900"
    >
      <div className="text-4xl font-bold mb-10 p-8">
        <h2> Projects </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl">
        <div className="flex flex-col justify-center items-center text-gray-600 dark:text-gray-300">
          <h2 className="text-3xl font-semibold py-3 text-gray-700 dark:text-gray-200">
            Natural Language Housing Search
          </h2>
          <div className="text-xl py-3 text-gray-600 dark:text-gray-300">
            <p> A Zillow-style hobby project that leverages generative AI to power natural language search, enabling users to explore homes for sale through a seamless, intuitive interface. </p>
          </div>
          <div className="py-3">
            <Button variant="outline" className="text-xl">
              <GithubIcon className="size-5"/>
              View on GitHub 
            </Button>
          </div>
        </div>
        <div className="bg-black dark:bg-white ">
          <Image
            src=""
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
}