import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

interface ProjectCardProps {
    title: React.ReactNode;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    imageSrc?: string;
}

export function ProjectCard({
    title,
    description,
    technologies,
    githubLink,
    liveLink,
    imageSrc
}: ProjectCardProps) {
    const t = useTranslations('Projects')
    return (
        <Card className="mb-6 overflow-hidden">
            <CardHeader className="pb-2 pt-6">
                <CardTitle className="w-full font-normal">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start">
                    {imageSrc && (
                        <div className="md:col-span-4 relative w-full aspect-video rounded-md overflow-hidden border bg-muted/10 group cursor-pointer">
                            {liveLink ? (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={imageSrc}
                                        alt="Project preview"
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                                        priority
                                    />
                                </a>
                            ) : (
                                <Image
                                    src={imageSrc}
                                    alt="Project preview"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            )}
                        </div>
                    )}
                    {/* Если картинки нет, занимаем все 10 колонок (всю длину) */}
                    <div className={`flex flex-col h-full ${imageSrc ? 'md:col-span-6' : 'md:col-span-10'}`}>
                        <div className="flex-grow">
                            <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        {(liveLink || githubLink) && (
                            <div className="flex gap-6 mt-auto">
                                {liveLink && (
                                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium hover:underline text-primary">
                                        <ExternalLink size={18} /> {t('liveDemo')}
                                    </a>
                                )}
                                {githubLink && (
                                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium hover:underline text-primary">
                                        <Github size={18} /> {t('github')}
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}