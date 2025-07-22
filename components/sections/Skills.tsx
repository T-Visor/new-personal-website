// components/About.tsx
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

      {/* Staggered Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-bf text-xl">Programming</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-start space-x-5">
              <AiOutlinePython className="size-10" />
              <IoLogoJavascript className="size-10" />
              <SiCplusplus className="size-10" />
              <FaJava className="size-10" />
              <FaGitAlt className="size-10" />
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
            <div className="flex justify-start space-x-5">
              <SiOllama className="size-10" />
              <SiOpenai className="size-10" />
              <SiTensorflow className="size-10" />
              <SiLangchain className="size-10" />
              <SiHuggingface className="size-10" />
              <SiPytorch className="size-10" />
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
            <div className="flex justify-start space-x-5">
              <FaReact className="size-10" />
              <SiFastapi className="size-10" />
              <RiTailwindCssFill className="size-10" />
              <SiShadcnui className="size-10" />
              <FaDocker className="size-10" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
