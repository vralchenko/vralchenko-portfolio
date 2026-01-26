import { ProjectCard } from "@/components/ProjectCard"

export default function ProjectsPage() {
    return (
        <main className="flex flex-col flex-grow overflow-hidden">
            <div className="px-4 pt-1 pb-4 md:px-8 md:pt-4 md:pb-8 max-w-6xl mx-auto w-full overflow-y-auto scrollbar-thin">
                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">Foreteller – Cosmic Wisdom</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">Jan 2026</span>
                        </div>
                    }
                    description="A mystical web application dedicated to cosmic wisdom available in 6 languages. Features include Universal Wisdom (Zodiac, Chinese Horoscope), interactive Pythagoras Square, and AI-powered character analysis using Llama-4 via Groq API. Users can generate high-quality PDF reports and enjoy a responsive 'Cosmic Glass' design."
                    technologies={["React", "TypeScript", "Vite", "Material UI", "Node.js", "Express", "Groq API", "jsPDF"]}
                    githubLink="https://github.com/vralchenko/Foreteller"
                    liveLink="https://foreteller.vercel.app/"
                    imageSrc="/foreteller.jpg"
                />
                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">BizLingo AI – Browser-Based Language Learning</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">Jan 2026</span>
                        </div>
                    }
                    description="An interactive web application for mastering Business English and German. It uses WebLLM to run AI models directly in your browser, providing intelligent feedback on translations without sending any data to a server, ensuring total privacy."
                    technologies={["Flutter", "WebLLM", "Dart", "In-Browser AI", "LLM", "GitHub Pages"]}
                    githubLink="https://github.com/vralchenko/BizLingo"
                    liveLink="https://vralchenko.github.io/BizLingo/"
                    imageSrc="/biz-lingo-ai.png"
                />

                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">AI Career Coach – Intelligent Resume & Job Analyzer</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">Dec 2025</span>
                        </div>
                    }
                    description="An AI-powered tool for deep resume-to-job matching analysis. It leverages local LLMs via Ollama to generate critical reports and interview preparation roadmaps using CLS, TRS, and HGLS methodologies."
                    technologies={["Next.js", "Ollama", "Puppeteer", "TypeScript", "Tailwind CSS", "PDF-Parse", "Node.js", "Render"]}
                    githubLink="https://github.com/vralchenko/ai-career-coach"
                    liveLink="https://ai-career-coach-qv8h.onrender.com"
                    imageSrc="/ai-career-coach.png"
                />

                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">Item Flow – Full-Stack TypeScript Application</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">Oct 2025</span>
                        </div>
                    }
                    description="A comprehensive full-stack project demonstrating modern development practices from conception to deployment. Includes a complete codebase migration from JavaScript to TypeScript, responsive design using Material-UI's sx prop, and integration with Cloudinary for scalable image storage."
                    technologies={["Node.js", "TypeScript", "React.js", "Material-UI", "Cloudinary", "Vercel", "Render", "GitHub Actions"]}
                    githubLink="https://github.com/vralchenko/ItemFlow"
                    liveLink="https://item-flow-rho.vercel.app"
                    imageSrc="/item-flow.jpg"
                />

                <ProjectCard
                    title={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold tracking-tight">NASA Space Apps Challenge Participant</span>
                            <span className="text-muted-foreground text-sm font-medium whitespace-nowrap ml-4 uppercase">Oct 2025</span>
                        </div>
                    }
                    description="Collaborated in an international team during a 48-hour hackathon to solve a real-world challenge presented by NASA. Contributed to the development of a meaningful project prototype by blending technology, science, and space-related data."
                    technologies={["Node.js", "React", "Data Visualization", "Teamwork"]}
                />
            </div>
        </main>
    )
}