import { ProjectCard } from "@/components/ProjectCard"

export default function ProjectsPage() {
    return (
        <main className="p-4 md:p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">My Projects</h1>

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
                imageSrc="/item-flow-screenshot.jpg"
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