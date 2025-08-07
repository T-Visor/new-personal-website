"use client"

import { Button } from "@/components/ui/button";
import { Sun, Moon, Linkedin, Github, Mail, X, Menu, Images } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const navbarButtonsData = [
  {
    href: "#about",
    label: "About"
  },
  {
    href: "#skills",
    label: "Skills"
  },
  {
    href: "#projects",
    label: "Projects"
  },
  {
    href: "#footer",
    label: "Contact"
  },
]

const footerButtonsData = [
  {
    Icon: Mail,
    href: "mailto:tkimbro.jobs@gmail.com",
    screenReaderLabel: "Email"
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com/in/turhan-kim",
    screenReaderLabel: "LinkedIn"
  },
  {
    Icon: Github,
    href: "https://github.com/T-Visor",
    screenReaderLabel: "GitHub"
  },
]

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
      <header
        className="
          flex justify-between 
          py-3 px-5 
          bg-gray-50 text-gray-700 
          dark:bg-gray-800 dark:text-gray-200
        "
      >
        {/* Desktop navigation bar */}
        <nav
          className="
            hidden 
            md:flex justify-center items-center space-x-2 font-medium
          "
        >
          {navbarButtonsData.map(({ href, label }) => (
            <a key={label} href={href}>
              <Button
                variant="ghost"
                className="text-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {label}
              </Button>
            </a>
          ))}

          {/* Vertical splitter */}
          <div className="h-5 border-l border-gray-400" />
          
          {/* Link to Photography page */}
          <a>
            <Button
              variant="ghost"
              className="text-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Photography
            </Button>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <Button
          variant="ghost"
          onClick={toggleHamburgerMenu}
          className="
            md:hidden 
            text-gray-700 dark:text-gray-200
          "
        >
          {hamburgerMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>

        {/* Mobile Dropdown Menu */}
        {hamburgerMenuOpen && (
          <nav
            className="
              md:hidden 
              flex flex-col justify-start items-center 
              px-4 pb-4 space-y-2
              bg-gray-50 dark:bg-gray-800 
              text-gray-700 dark:text-gray-200 
            "
          >
            {navbarButtonsData.map(({ href, label }) => (
              <a key={label} href={href}>
                <Button
                  variant="ghost"
                  className="text-md"
                  onClick={() => setHamburgerMenuOpen(false)}
                >
                  {label}
                </Button>
              </a>
            ))}
          </nav>
        )}

        {/* Dark/Light Mode Toggle */}
        <div className="flex justify-center gap-2">
          {/* Camera icon for mobile */}
          <Button
            variant="ghost"
            className="md:hidden hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Images className="size-5" />
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => {
              resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </Button>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer
        className="
          flex flex-col items-center justify-center space-y-3
          py-6 px-5
          text-sm font-medium
          bg-gray-50 dark:bg-gray-800 
          border-gray-200 dark:border-gray-700
          text-gray-700 dark:text-gray-200
        "
        id="footer"
      >
        {/* Footer title */}
        <span className="text-center text-lg text-gray-500 dark:text-gray-400">
          Connect With Me
        </span>

        {/* Footer links */}
        <div className="flex flex-wrap justify-center space-x-4">
          {footerButtonsData.map(({ Icon, href, screenReaderLabel }) => (
            <a
              key={screenReaderLabel}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="hover:bg-gray-200 dark:hover:bg-gray-700"
                variant="ghost"
                aria-label={screenReaderLabel}
              >
                <Icon className="size-5" />
                <span className="sr-only">{screenReaderLabel}</span>
              </Button>
            </a>))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Turhan Kimbrough. All rights reserved.
        </p>
      </footer>
    </>
  )
}