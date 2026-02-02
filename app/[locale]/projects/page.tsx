import { ProjectCard } from "@/components/ProjectCard"
import { useTranslations } from "next-intl"

export default function ProjectsPage() {
    const t = useTranslations('Projects');

    return (
        <main className="flex flex-col flex-grow overflow-hidden">
            <div className="px-4 pt-1 pb-4 md:px-8 md:pt-4 md:pb-8 max-w-6xl mx-auto w-full overflow-y-auto scrollbar-thin">
                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('foreteller.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('foreteller.date')}</span>
                        </div>
                    }
                    description={t('foreteller.desc')}
                    technologies={["React", "TypeScript", "Vite", "Material UI", "Node.js", "Express", "Groq API", "jsPDF"]}
                    githubLink="https://github.com/vralchenko/Foreteller"
                    liveLink="https://foreteller.vercel.app/"
                    imageSrc="/foreteller.jpg"
                />
                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('bizLingo.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('bizLingo.date')}</span>
                        </div>
                    }
                    description={t('bizLingo.desc')}
                    technologies={["Flutter", "WebLLM", "Dart", "In-Browser AI", "LLM", "GitHub Pages"]}
                    githubLink="https://github.com/vralchenko/BizLingo"
                    liveLink="https://vralchenko.github.io/BizLingo/"
                    imageSrc="/biz-lingo-ai.png"
                />

                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('careerCoach.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('careerCoach.date')}</span>
                        </div>
                    }
                    description={t('careerCoach.desc')}
                    technologies={["Next.js", "Ollama", "Puppeteer", "TypeScript", "Tailwind CSS", "PDF-Parse", "Node.js", "Railway"]}
                    githubLink="https://github.com/vralchenko/ai-career-coach"
                    liveLink="https://ai-career-coach-production-f43f.up.railway.app/"
                    imageSrc="/ai-career-coach.png"
                />

                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('itemFlow.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('itemFlow.date')}</span>
                        </div>
                    }
                    description={t('itemFlow.desc')}
                    technologies={["Node.js", "TypeScript", "React.js", "Material-UI", "Cloudinary", "Vercel", "Render", "GitHub Actions"]}
                    githubLink="https://github.com/vralchenko/ItemFlow"
                    liveLink="https://item-flow-rho.vercel.app"
                    imageSrc="/item-flow.jpg"
                />

                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('nasa.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('nasa.date')}</span>
                        </div>
                    }
                    description={t('nasa.desc')}
                    technologies={["Node.js", "React", "Data Visualization", "Teamwork"]}
                />
            </div>
        </main>
    )
}