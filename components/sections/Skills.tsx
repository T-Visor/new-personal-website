"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FaGitAlt, FaReact, FaDocker, FaJava } from "react-icons/fa";
import { SiCplusplus, SiFastapi, SiShadcnui, SiOllama, SiTensorflow, SiLangchain, SiHuggingface, SiPytorch } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlinePython } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { JSX } from "react";
import FadeInView from "@/components/FadeInView";

type SkillIcon = {
  Icon: IconType;
  caption: string;
};

type SkillCard = {
  title: string;
  icons: SkillIcon[];
};

type SkillCardProps = {
  title: string;
  icons: SkillIcon[];
};

const skillsData: SkillCard[] = [
  {
    title: "Programming",
    icons: [
      {
        Icon: AiOutlinePython,
        caption: "Python"
      },
      {
        Icon: IoLogoJavascript,
        caption: "JavaScript"
      },
      {
        Icon: SiCplusplus,
        caption: "C++"
      },
      {
        Icon: FaJava,
        caption: "Java"
      },
      {
        Icon: FaGitAlt,
        caption: "Git"
      },
    ]
  },
  {
    title: "Generative AI",
    icons: [
      {
        Icon: SiOllama,
        caption: "Ollama"
      },
      {
        Icon: SiHuggingface,
        caption: "Hugging Face"
      },
      {
        Icon: SiLangchain,
        caption: "LangChain"
      },
      {
        Icon: SiTensorflow,
        caption: "TensorFlow"
      },
      {
        Icon: SiPytorch,
        caption: "PyTorch"
      },
    ]
  },
  {
    title: "Web Development",
    icons: [
      {
        Icon: FaReact,
        caption: "React"
      },
      {
        Icon: SiFastapi,
        caption: "FastAPI"
      },
      {
        Icon: RiTailwindCssFill,
        caption: "Tailwind CSS"
      },
      {
        Icon: SiShadcnui,
        caption: "Shadcn/UI"
      },
      {
        Icon: FaDocker,
        caption: "Docker"
      }
    ]
  },
]

const SkillCard = ({ title, icons }: SkillCardProps): JSX.Element => (
  <Card className="dark:bg-gray-800 dark:text-gray-200">
    <CardHeader>
      <CardTitle className="text-center md:text-start">
        <h2 className="text-bf text-xl">{title}</h2>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {icons.map(({ Icon, caption }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon className="size-10" />
            <span className="mt-2 text-sm">{caption}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const Skills = (): JSX.Element => {
  return (
    <section
      id="skills"
      className="
        min-h-fit sm:min-h-screen 
        flex flex-col justify-center items-center 
        px-5 py-16
        bg-white dark:bg-gray-900 
        text-gray-900 dark:text-gray-100 
      "
    >
      <h2 className="text-4xl font-semibold mb-10">
        Skills
      </h2>

      <FadeInView
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
      >
        {skillsData.map(({ title, icons }) => (
          <SkillCard
            key={title}
            title={title}
            icons={icons}
          />
        ))}
      </FadeInView>
    </section>
  );
}