import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Download, Presentation, Store } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

interface ProjectCardProps {
    id?: string;
    title: React.ReactNode;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    downloadLink?: string;
    playStoreLink?: string;
    presentationLink?: string;
    imageSrc?: string;
    imageSrcs?: string[];
    imageLayout?: "horizontal" | "vertical";
}

export function ProjectCard({
    id,
    title,
    description,
    technologies,
    githubLink,
    liveLink,
    downloadLink,
    playStoreLink,
    presentationLink,
    imageSrc,
    imageSrcs,
    imageLayout = "horizontal"
}: ProjectCardProps) {
    const images = imageSrcs || (imageSrc ? [imageSrc] : []);
    const imageLink = liveLink || playStoreLink || downloadLink;
    const t = useTranslations('Projects')
    return (
        <Card id={id} className="mb-6 overflow-hidden scroll-mt-4">
            <CardHeader className="pb-2 pt-6">
                <CardTitle className="w-full font-normal">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start">
                    {images.length > 0 && (
                        <div className={`${images.length === 1 || imageLayout === 'vertical' ? 'md:col-span-4' : images.length > 3 ? 'md:col-span-6' : 'md:col-span-5'} ${imageLayout === 'vertical' ? 'flex flex-col gap-2' : images.length > 3 ? 'grid grid-cols-3 gap-2' : 'flex gap-2'}`}>
                            {images.map((src, i) => (
                                <div key={src} className={`relative ${images.length === 1 || imageLayout === 'vertical' ? 'w-full aspect-video' : images.length > 3 ? 'aspect-[9/16]' : 'flex-1 aspect-[9/16]'} rounded-md overflow-hidden border bg-muted/10 group cursor-pointer`}>
                                    {imageLink ? (
                                        <a href={imageLink} {...(downloadLink && !liveLink && !playStoreLink ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}>
                                            <Image
                                                src={src}
                                                alt={`Project preview ${i + 1}`}
                                                fill
                                                className="object-contain transition-transform duration-500 group-hover:scale-110"
                                                priority
                                            />
                                        </a>
                                    ) : (
                                        <Image
                                            src={src}
                                            alt={`Project preview ${i + 1}`}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className={`flex flex-col h-full ${images.length === 0 ? 'md:col-span-10' : images.length === 1 || imageLayout === 'vertical' ? 'md:col-span-6' : images.length > 3 ? 'md:col-span-4' : 'md:col-span-5'}`}>
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
                        {(liveLink || githubLink || downloadLink || playStoreLink || presentationLink) && (
                            <div className="flex flex-wrap gap-6 mt-auto">
                                {liveLink && (
                                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium hover:underline text-primary">
                                        <ExternalLink size={18} /> {t('liveDemo')}
                                    </a>
                                )}
                                {playStoreLink && (
                                    <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium hover:underline text-primary">
                                        <Store size={18} /> {t('googlePlay')}
                                    </a>
                                )}
                                {downloadLink && (
                                    <a href={downloadLink} download className="flex items-center gap-2 text-base font-medium hover:underline text-primary">
                                        <Download size={18} /> {t('downloadApk')}
                                    </a>
                                )}
                                {presentationLink && (
                                    <a href={presentationLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium hover:underline text-primary">
                                        <Presentation size={18} /> {t('presentation')}
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