"use client"

import { Button } from "@/components/ui/button";
import { Sun, Moon, Linkedin, Camera, Github, Mail, GraduationCap, X, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export const ClientWrapperLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const { setTheme, resolvedTheme } = useTheme()

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const toggleHamburgerMenu = () => setHamburgerMenuOpen(!hamburgerMenuOpen);

  return (
    <>
      <header className="flex justify-between py-3 px-5 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">

        {/* Standard desktop layout */}
        <nav className="hidden md:flex justify-center items-center space-x-2 font-medium">
          <a href="#about">
            <Button variant="ghost" className="text-md hover:bg-gray-200 dark:hover:bg-gray-700">
              About
            </Button>
          </a>
          <a href="#skills">
            <Button variant="ghost" className="text-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Skills
            </Button>
          </a>
          <a href="#projects">
            <Button variant="ghost" className="text-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Projects
            </Button>
          </a>
          <a href="#footer">
            <Button variant="ghost" className="text-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Contact
            </Button>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <Button
          variant="ghost"
          onClick={toggleHamburgerMenu}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {hamburgerMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>

        {/* Mobile Dropdown Menu */}
        {hamburgerMenuOpen && (
          <nav className="md:hidden flex flex-col justify-start items-center bg-gray-50 dark:bg-gray-800 px-4 pb-4 text-gray-700 dark:text-gray-200 space-y-2">
            <a href="#about">
              <Button 
                variant="ghost" 
                className="text-md"
                onClick={() => setHamburgerMenuOpen(false)}
              >
                About
              </Button>
            </a>
            <a href="#skills">
              <Button 
                variant="ghost" 
                className="text-md"
                onClick={() => setHamburgerMenuOpen(false)}
              >                
                Skills
              </Button>
            </a>
            <a href="#projects">
              <Button 
                variant="ghost" 
                className="text-md"
                onClick={() => setHamburgerMenuOpen(false)}
              >
                Projects
              </Button>
            </a>
            <a href="#footer">
              <Button 
                variant="ghost" 
                className="text-md"
                onClick={() => setHamburgerMenuOpen(false)}
              >                
                Contact
              </Button>
            </a>
          </nav>
        )}

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
      <footer
        className="flex flex-col items-center justify-center py-6 px-5 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 text-sm font-medium space-y-3 border-gray-200 dark:border-gray-700"
        id="footer"
      >
        <span className="text-lg text-gray-500 dark:text-gray-400 text-center">
          Connect With Me
        </span>

        <div className="flex flex-wrap justify-center space-x-4">
          <a href="mailto:tkimbro.jobs@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button className="hover:bg-gray-200 dark:hover:bg-gray-700" variant="ghost" aria-label="Email">
              <Mail className="size-5" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
          <a href="https://linkedin.com/in/turhan-kim" target="_blank" rel="noopener noreferrer">
            <Button className="hover:bg-gray-200 dark:hover:bg-gray-700" variant="ghost" aria-label="LinkedIn">
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a href="https://github.com/T-Visor" target="_blank" rel="noopener noreferrer">
            <Button className="hover:bg-gray-200 dark:hover:bg-gray-700" variant="ghost" aria-label="GitHub">
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
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