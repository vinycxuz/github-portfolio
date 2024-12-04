import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution for cat's toys with Next.js, Node.js, and MongoDB",
        tech: "Next.js",
        link: "#",
    },
    {
        title: "AI List",
        description: "A consolidated list of AI resources and tools for developers, designers, and data scientists",
        tech: "React",
        link: "https://github.com/vinycxuz/listTools",
    },
]

const techColors = {
    "React": "bg-blue-500",
    "React Native": "bg-green-500",
    "Next.js": "bg-purple-500",
    "Python": "bg-yellow-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4 mt-3">
                Projetos Pessoais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}