import { ProjectCard } from "@/components/ProjectCard"

export default function ProjectsPage() {
    return (
        <main className="px-4 pt-1 pb-4 md:px-8 md:pt-4 md:pb-8 max-w-6xl mx-auto">

            <ProjectCard
                title="AI Career Coach – Intelligent Resume & Job Analyzer"
                subtitle="Dec 2025"
                description="An AI-powered tool for deep resume-to-job matching analysis. It leverages local LLMs via Ollama to generate critical reports and interview preparation roadmaps using CLS, TRS, and HGLS methodologies. Features include automated job scraping with Puppeteer and high-performance PDF parsing."
                technologies={[
                    "Next.js",
                    "Ollama",
                    "Puppeteer",
                    "TypeScript",
                    "Tailwind CSS",
                    "PDF-Parse",
                    "Node.js",
                    "Render"
                ]}
                githubLink="https://github.com/vralchenko/ai-career-coach"
                liveLink="https://ai-career-coach-qv8h.onrender.com"
                imageSrc="/ai-career-coach.png"
            />

            <ProjectCard
                title="Item Flow – Full-Stack TypeScript Application"
                subtitle="Oct 2025"
                description="A comprehensive full-stack project demonstrating modern development practices from conception to deployment. Includes a complete codebase migration from JavaScript to TypeScript, responsive design using Material-UI's sx prop, and integration with Cloudinary for scalable image storage. Successfully deployed using a modern CI/CD pipeline (Vercel & Render)."
                technologies={[
                    "Node.js",
                    "TypeScript",
                    "React.js",
                    "Material-UI",
                    "Cloudinary",
                    "Vercel",
                    "Render",
                    "GitHub Actions",
                ]}
                githubLink="https://github.com/vralchenko/ItemFlow"
                liveLink="https://item-flow-rho.vercel.app"
                imageSrc="/item-flow.jpg"
            />

            <ProjectCard
                title="NASA Space Apps Challenge Participant"
                subtitle="Oct 2025"
                description="Collaborated in an international team during a 48-hour hackathon to solve a real-world challenge presented by NASA. Contributed to the development of a meaningful project prototype by blending technology, science, and space-related data."
                technologies={["Node.js", "React", "Data Visualization", "Teamwork"]}
            />

        </main>
    )
}