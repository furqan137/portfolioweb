"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const skills = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Flutter", level: 70 },
  { name: "UI/UX Design", level: 80 },
];

const experiences = [
  {
    title: "Freelance Developer",
    company: "Upwork & Fiverr",
    period: "2020 - Present",
    description: "Top-rated freelancer with 100+ successful projects delivered across web and mobile development."
  },
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Lead developer for multiple web applications using React, Node.js, and MongoDB."
  },
  {
    title: "Mobile Developer",
    company: "App Innovations",
    period: "2018 - 2020",
    description: "Developed cross-platform mobile applications using Flutter and Firebase."
  }
];

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Furqan Zafar"
                width={600}
                height={600}
                className="object-cover w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Software Engineer with over 5 years of experience specializing in full-stack development, 
              mobile app creation, and UI/UX design. As a top-rated freelancer on both Upwork and Fiverr, I've successfully 
              delivered over 100 projects for clients worldwide.
            </p>
            <p className="text-muted-foreground mb-6">
              My technical expertise spans the MERN stack, Flutter development for 
              cross-platform mobile applications, and UI/UX design principles. I take pride in delivering 
              high-quality solutions that exceed client expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Work Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}