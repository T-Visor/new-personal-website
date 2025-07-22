import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center dark:bg-gray-900"
    >
      <h1 className="text-5xl font-bold mb-4 dark:text-gray-100">Turhan Kimbrough</h1>
      <p className="text-xl max-w-xl mb-6 dark:text-gray-200">
        Full-Stack AI Engineer
      </p>
      <Button
        variant="ghost"
        href="#projects"
        className="px-6 py-3 rounded-full font-semibold transition text-md dark:text-gray-400"
      >
        View My Work
        <MoveDown/>
      </Button>
    </section>
  );
}