import { ProjectCard } from "@/components/ProjectCard"
import { useTranslations } from "next-intl"
const projects = [
    { id: "fuehrerschein", key: "fuehrerschein" },
    { id: "ai-mobile-assistant", key: "aiMobileAssistant" },
    { id: "deutsch-lernen", key: "germanTutor" },
    { id: "interview-quizzes", key: "interviewQuizzes" },
    { id: "jobhunter", key: "jobHunter" },
    { id: "foreteller", key: "foreteller" },
    { id: "career-coach", key: "careerCoach" },
    { id: "bizlingo", key: "bizLingo" },
    { id: "itemflow", key: "itemFlow" },
    { id: "nasa", key: "nasa" },
] as const;

export default function ProjectsPage() {
    const t = useTranslations('Projects');

    return (
        <main className="flex flex-col flex-grow">
            <div className="px-4 pt-1 pb-4 md:px-8 md:pt-4 md:pb-8 max-w-6xl mx-auto w-full">
                <nav className="flex flex-wrap gap-2 mb-6">
                    {projects.map(({ id, key }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="px-3 py-1.5 text-sm font-medium rounded-full border border-border bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                            {t(`${key}.title`).split('–')[0].split('—')[0].trim()}
                        </a>
                    ))}
                </nav>
                <ProjectCard
                    id="fuehrerschein"
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('fuehrerschein.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('fuehrerschein.date')}</span>
                        </div>
                    }
                    description={t('fuehrerschein.desc')}
                    technologies={["React", "Vite", "JavaScript", "CSS", "Python", "i18n"]}
                    githubLink="https://github.com/vralchenko/fuehrerschein-schweiz"
                    liveLink="https://fuehrerschein-schweiz.vercel.app/"
                    imageSrcs={["/fuehrerschein1.png", "/fuehrerschein2.png", "/fuehrerschein3.png"]}
                />
                <ProjectCard
                    id="ai-mobile-assistant"
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('aiMobileAssistant.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('aiMobileAssistant.date')}</span>
                        </div>
                    }
                    description={t('aiMobileAssistant.desc')}
                    technologies={["Kotlin", "Jetpack Compose", "Material 3", "Retrofit", "Groq API", "Llama 4 Scout", "Coil", "SpeechRecognizer"]}
                    downloadLink="/AIMobileAssistant-1.3-release.apk"
                    imageSrcs={["/ai1.jpg", "/ai2.jpg", "/ai3.jpg"]}
                />
                <ProjectCard
                    id="deutsch-lernen"
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('germanTutor.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('germanTutor.date')}</span>
                        </div>
                    }
                    description={t('germanTutor.desc')}
                    technologies={["Kotlin", "Jetpack Compose", "Material 3", "Room", "Hilt", "Ktor", "Groq API", "Gemini", "OpenAI", "FSRS v5", "ExoPlayer", "Google Play Billing"]}
                    playStoreLink="https://play.google.com/apps/testing/com.germantutor"
                    imageSrcs={["/deutsch1.jpg", "/deutsch2.jpg", "/deutsch3.jpg", "/deutsch4.jpg", "/deutsch5.jpg", "/deutsch6.jpg"]}
                />
                <ProjectCard
                    id="interview-quizzes"
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('interviewQuizzes.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('interviewQuizzes.date')}</span>
                        </div>
                    }
                    description={t('interviewQuizzes.desc')}
                    technologies={["JavaScript", "HTML", "CSS", "GitHub Pages", "i18n"]}
                    githubLink="https://github.com/vralchenko/interview-quizzes"
                    liveLink="https://vralchenko.github.io/interview-quizzes/"
                    imageSrc="/interview-quiz.png"
                />
                <ProjectCard
                    id="jobhunter"
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">{t('jobHunter.title')}</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">{t('jobHunter.date')}</span>
                        </div>
                    }
                    description={t('jobHunter.desc')}
                    technologies={["React", "TypeScript", "Vite", "Vercel Serverless", "Cheerio", "jsPDF", "i18n"]}
                    liveLink="https://myjobhunter.vercel.app"
                    imageSrc="/jobhunter.png"
                />
                <ProjectCard
                    id="foreteller"
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
                    presentationLink="https://myportfoliopresentation.vercel.app/#foreteller"
                    imageSrc="/foreteller.jpg"
                />
                <ProjectCard
                    id="career-coach"
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
                    presentationLink="https://myportfoliopresentation.vercel.app/#career"
                    imageSrc="/ai-career-coach.png"
                />

                <ProjectCard
                    id="bizlingo"
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
                    presentationLink="https://myportfoliopresentation.vercel.app/#bizlingo"
                    imageSrc="/biz-lingo-ai.png"
                />

                <ProjectCard
                    id="itemflow"
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
                    id="nasa"
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
