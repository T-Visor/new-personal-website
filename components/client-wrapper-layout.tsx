"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Sun, Moon, Linkedin, Github, Mail, X, Menu, Images, CodeXml, Home, Code, CodeXmlIcon } from "lucide-react";
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
  const pathName = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

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
          {/* Link to Home page */}
          <Link href="/">
            <Button
              variant="ghost"
              className={`
                ${pathName === "/" ? "" : "text-gray-400 dark:text-gray-500"}
                text-md hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700
              `}
            >
              Portfolio
            </Button>
          </Link>

          {/* Link to Photography page */}
          <Link href="/photography">
            <Button
              variant="ghost"
              className={`
                ${pathName === "/photography" ? "" : "text-gray-400 dark:text-gray-500"}
                text-md hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700
              `}
            >
              Photography
            </Button>
          </Link>
        </nav>

        {/* Mobile navigation bar */}
        <nav
          className="
            md:hidden 
            flex justify-center items-center space-x-2 font-medium
          "
        >
          {/* Link to Photography page */}
          <Link href="/">
            <Button
              variant="ghost"
              className={`
                border-b-2
                ${pathName === "/" ? "rounded-b-none" : "border-transparent"}
                hover:bg-gray-200 dark:hover:bg-gray-700
              `}
            >
              <CodeXml className="size-5" />
            </Button>
          </Link>
          <Link href="/photography">
            <Button
              variant="ghost"
              className={`
                border-b-2
                ${pathName === "/photography" ? "rounded-b-none" : "border-transparent"}
                hover:bg-gray-200 dark:hover:bg-gray-700
              `}
            >
              <Images className="size-5" />
            </Button>
          </Link>
        </nav>
        {/* Dark/Light Mode Toggle */}
        <Button
          variant="ghost"
          className="
            border-b-2 border-transparent md:border-b-0
            hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700
          "
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
                className="hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
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