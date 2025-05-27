"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/AnimatedText";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <p className="text-lg text-muted-foreground mb-3">Hi, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Furqan Zafar
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
          <span className="mr-2">I'm a</span>
          <AnimatedText
            text={[
              "Software Engineer",
              "Full Stack Developer",
              "Flutter Developer",
              "UI/UX Designer"
            ]}
            className="text-primary font-semibold"
          />
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-xl text-muted-foreground mb-12"
      >
        Specialized in creating beautiful, functional, and user-friendly digital experiences.
        Top-rated freelancer on Upwork and Fiverr with a track record of successful projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 mb-16"
      >
        <Button 
          size="lg" 
          onClick={() => scrollToSection("projects")}
        >
          View My Projects
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDownCircle className="h-10 w-10 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}