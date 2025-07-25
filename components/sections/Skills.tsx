import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiOllama } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { SiPytorch } from "react-icons/si";

const skillsData = [
  {
    title: "Programming",
    icons: [
      {
        name: AiOutlinePython,
        caption: "Python"
      },
      {
        name: IoLogoJavascript,
        caption: "JavaScript"
      },
      {
        name: SiCplusplus,
        caption: "C++"
      },
      {
        name: FaJava,
        caption: "Java"
      },
      {
        name: FaGitAlt,
        caption: "Git"
      },
    ]
  },
  {
    title: "Generative AI",
    icons: [
      {
        name: SiOllama,
        caption: "Ollama"
      },
      {
        name: SiHuggingface,
        caption: "Hugging Face"
      },
      {
        name: SiLangchain,
        caption: "LangChain"
      },
      {
        name: SiTensorflow,
        caption: "TensorFlow"
      },
      {
        name: SiPytorch,
        caption: "PyTorch"
      },
    ]
  },
  {
    title: "Web Development",
    icons: [
      {
        name: FaReact,
        caption: "React"
      },
      {
        name: SiFastapi,
        caption: "FastAPI"
      },
      {
        name: RiTailwindCssFill,
        caption: "Tailwind CSS"
      },
      {
        name: SiShadcnui,
        caption: "Shadcn/UI"
      },
      {
        name: FaDocker,
        caption: "Docker"
      }
    ]
  },
]

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-fit sm:min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 flex flex-col justify-center items-center px-5"
    >
      <h2 className="text-4xl font-semibold mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {skillsData.map((skillCard, cardIndex) => {
          return (
            <Card
              key={cardIndex}
              className="dark:bg-gray-800 dark:text-gray-200">
              <CardHeader>
                <CardTitle className="text-center md:text-start">
                  <h2 className="text-bf text-xl">
                    {skillCard.title}
                  </h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  {skillCard.icons.map((icon, iconIndex) => {
                    const Icon = icon.name;
                    return (
                      <div
                        key={iconIndex}
                        className="flex flex-wrap gap-6 justify-center md:justify-start"
                      >
                        <div className="flex flex-col items-center">
                          <Icon className="size-10" />
                          <span className="mt-2 text-sm">
                            {icon.caption}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  );
}