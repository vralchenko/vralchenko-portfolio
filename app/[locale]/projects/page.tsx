import { ProjectCard } from "@/components/ProjectCard"
import { useTranslations } from "next-intl"

export default function ProjectsPage() {
    const t = useTranslations('Projects');

    return (
        <main className="flex flex-col flex-grow">
            <div className="px-4 pt-1 pb-4 md:px-8 md:pt-4 md:pb-8 max-w-6xl mx-auto w-full">
                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('germanTutor.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('germanTutor.date')}</span>
                        </div>
                    }
                    description={t('germanTutor.desc')}
                    technologies={["Kotlin", "Jetpack Compose", "Material 3", "Room", "Hilt", "Ktor", "Groq API", "FSRS v5"]}
                    githubLink="https://github.com/vralchenko/GermanTutor"
                    downloadLink="/DeutschLernen-1.1.6-release.apk"
                    imageSrcs={["/germantutor1.jpg", "/germantutor2.jpg", "/germantutor4.jpg"]}
                />
                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('jobHunter.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('jobHunter.date')}</span>
                        </div>
                    }
                    description={t('jobHunter.desc')}
                    technologies={["React", "TypeScript", "Vite", "Vercel Serverless", "Cheerio", "jsPDF", "i18n"]}
                    githubLink="https://github.com/vralchenko/SwissJobHunter"
                    liveLink="https://myjobhunter.vercel.app"
                    imageSrc="/jobhunter.png"
                />
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
                    technologies={["Flutter", "Groq API", "Dart", "Cloud AI", "LLM", "Vercel"]}
                    githubLink="https://github.com/vralchenko/BizLingo"
                    liveLink="https://biz-lingo-chi.vercel.app/"
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
                    technologies={["Next.js", "Groq API", "Puppeteer", "TypeScript", "Tailwind CSS", "PDF-Parse", "Node.js", "Railway"]}
                    githubLink="https://github.com/vralchenko/ai-career-coach"
                    liveLink="https://vralchenko-aicareercoach.hf.space/"
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
                    liveLink="https://vralchenko-itemflow.hf.space/"
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