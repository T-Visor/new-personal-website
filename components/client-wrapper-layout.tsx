"use client"

import { Button } from "@/components/ui/button";
import { Sun, Moon, Linkedin, Camera, Github, Mail, GraduationCap } from "lucide-react";
import { useTheme } from "next-themes"

export const ClientWrapperLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const { setTheme, resolvedTheme } = useTheme()

  return (
    <>
      <header className="flex justify-between py-3 px-5 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
        <div className="flex justify-center items-center space-x-2 font-medium">
          <a href="#about">
            <Button variant="ghost" className="text-md hover: hover:bg-gray-200 dark:hover:bg-gray-700">
              About
            </Button>
          </a>
          <a href="#skills">
            <Button variant="ghost" className="text-md hover: hover:bg-gray-200 dark:hover:bg-gray-700">
              Skills
            </Button>
          </a>
          <a href="#projects">
            <Button variant="ghost" className="text-md hover: hover:bg-gray-200 dark:hover:bg-gray-700">
              Projects
            </Button>
          </a>
        </div>
        <Button
          variant="ghost"
          className="hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => {
            resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
          }}
        >
          {resolvedTheme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </Button>
      </header>
      <main>
        {children}
      </main>
      <footer className="flex flex-col items-center justify-center py-6 px-5 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 text-sm font-medium space-y-3">
        <div className="flex space-x-4">
          <a
            href="mailto:tkimbro.jobs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Button variant="ghost">
              <Mail className="size-5" />
            </Button>
          </a>
          <a
            href="https://linkedin.com/in/turhan-kim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Button variant="ghost">
              <Linkedin className="size-5" />
            </Button>
          </a>
          <a
            href="https://github.com/T-Visor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Button variant="ghost">
              <Github className="size-5" />
            </Button>
          </a>
          <a
            href="https://www.researchgate.net/scientific-contributions/Turhan-Kimbrough-2224206212"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate"
          >
            <Button variant="ghost">
              <GraduationCap className="size-5" />
            </Button>
          </a>

        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Turhan Kimbrough. All rights reserved.
        </p>
      </footer>
    </>
  )
}