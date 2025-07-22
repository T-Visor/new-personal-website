import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-4 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Turhan Kimbrough</h1>
      <p className="text-xl max-w-xl mb-6">
        Full-Stack AI Engineer and Photographer.
      </p>
      <Button
        variant="ghost"
        href="#projects"
        className="px-6 py-3 rounded-full font-semibold transition text-md"
      >
        View My Work
        <MoveDown/>
      </Button>
    </section>
  );
}