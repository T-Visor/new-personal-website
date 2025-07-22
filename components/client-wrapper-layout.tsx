"use client"

import { Button } from "@/components/ui/button";
import { Sun, Moon, Linkedin, Camera, Github, Mail } from "lucide-react";
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
          <Button variant="ghost" className="text-md">
            About
          </Button>
          <Button variant="ghost" className="text-md">
            Skills
          </Button>
          <Button variant="ghost" className="text-md">
            Projects
          </Button>
        </div>
        <Button
          variant="ghost"
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
      <footer className="flex justify-center py-6 px-5 bg-gray-50 dark:bg-gray-800 text-sm font-medium">
        <div className="flex justify-center items-center">
          <Button variant="ghost">
            <Mail className="size-5"/>
          </Button>
          <Button variant="ghost">
            <Linkedin className="size-5"/>
          </Button>
          <Button variant="ghost">
            <Github className="size-5"/>
          </Button>
          <Button variant="ghost">
            <Camera className="size-5"/>
          </Button>
        </div>
      </footer>
    </>
  )
}