import {
    Card,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
    title: string
    subtitle: string
    description: string
    technologies: string[]
    githubLink?: string
    liveLink?: string
    imageSrc?: string
}

export function ProjectCard({
                                title,
                                subtitle,
                                description,
                                technologies,
                                githubLink,
                                liveLink,
                                imageSrc,
                            }: ProjectCardProps) {
    return (
        // ИЗМЕНЕНИЕ: Добавлен p-4 для общей серой рамки
        <Card className="flex flex-col md:flex-row mb-6 p-4 hover:shadow-lg transition-shadow duration-300">

            {imageSrc && (
                // ИЗМЕНЕНИЕ: md:w-2/5 p-0 relative aspect-[16/10] (удален pl-4)
                <div className="md:w-2/5 p-0 relative aspect-[16/10] overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={`Screenshot of ${title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain w-full h-full"
                    />
                </div>
            )}

            {/* ИЗМЕНЕНИЕ: Убран p-6 из CardContent, чтобы избежать двойных отступов */}
            <CardContent className={`flex flex-col justify-between ${imageSrc ? 'md:w-3/5' : 'md:w-full'}`}>
                <div className="mb-4">
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                        <span className="text-sm text-muted-foreground">{subtitle}</span>
                    </div>

                    <p className="mt-3 text-muted-foreground">{description}</p>
                </div>

                <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {liveLink && (
                            <Link href={liveLink} target="_blank" passHref className="text-sm font-semibold hover:text-primary transition-colors">
                                <div className="flex items-center gap-1">
                                    Live Demo <ExternalLink className="w-4 h-4" />
                                </div>
                            </Link>
                        )}
                        {githubLink && (
                            <Link href={githubLink} target="_blank" passHref className="text-sm font-semibold hover:text-primary transition-colors">
                                <div className="flex items-center gap-1">
                                    GitHub <ExternalLink className="w-4 h-4" />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}