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
import { SiOpenai } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { SiPytorch } from "react-icons/si";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-16 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-bf text-xl">Programming</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-6 justify-start">
              <div className="flex flex-col items-center">
                <AiOutlinePython className="size-10" />
                <span className="mt-2 text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <IoLogoJavascript className="size-10" />
                <span className="mt-2 text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiCplusplus className="size-10" />
                <span className="mt-2 text-sm">C++</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="size-10" />
                <span className="mt-2 text-sm">Java</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGitAlt className="size-10" />
                <span className="mt-2 text-sm">Git</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-bf text-xl">Generative AI</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-6 justify-start">
              <div className="flex flex-col items-center">
                <SiOllama className="size-10" />
                <span className="mt-2 text-sm">Ollama</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTensorflow className="size-10" />
                <span className="mt-2 text-sm">TensorFlow</span>
              </div>
              <div className="flex flex-col items-center">
                <SiLangchain className="size-10" />
                <span className="mt-2 text-sm">LangChain</span>
              </div>
              <div className="flex flex-col items-center">
                <SiHuggingface className="size-10" />
                <span className="mt-2 text-sm">Hugging Face</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPytorch className="size-10" />
                <span className="mt-2 text-sm">PyTorch</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-bf text-xl">Web Technologies</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-6 justify-start">
              <div className="flex flex-col items-center">
                <FaReact className="size-10" />
                <span className="mt-2 text-sm">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiFastapi className="size-10" />
                <span className="mt-2 text-sm">FastAPI</span>
              </div>
              <div className="flex flex-col items-center">
                <RiTailwindCssFill className="size-10" />
                <span className="mt-2 text-sm">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <SiShadcnui className="size-10" />
                <span className="mt-2 text-sm">shadcn/ui</span>
              </div>
              <div className="flex flex-col items-center">
                <FaDocker className="size-10" />
                <span className="mt-2 text-sm">Docker</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
