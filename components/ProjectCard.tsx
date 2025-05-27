"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  technologies: string[];
  className?: string;
  slug: string;
}

export function ProjectCard({
  title,
  description,
  image,
  demoLink,
  githubLink,
  technologies,
  className,
  slug,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className={cn("overflow-hidden h-full", className)}>
        <Link href={`/projects/${slug}`}>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </Link>
        <CardContent className="p-6">
          <Link href={`/projects/${slug}`}>
            <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </Link>
            )}
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
              >
                <Github className="h-4 w-4" /> Source Code
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}