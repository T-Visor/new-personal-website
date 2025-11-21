"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { FadeInViewPage } from "@/components/motion-animations";

const Home = () => {
  return (
    <FadeInViewPage>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </FadeInViewPage>
  );
}
export default Home;