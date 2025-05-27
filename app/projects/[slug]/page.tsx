import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/#projects">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-lg mb-4">{project.fullDescription || project.description}</p>

          {project.features && (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {project.challenges && (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-4">Challenges & Solutions</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {project.screenshots && (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex gap-4 mt-8">
          {project.demoLink && (
            <Button asChild>
              <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
              </Link>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="outline" asChild>
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}