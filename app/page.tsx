import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Flag from "react-world-flags"
import {
    SiSharp, SiDotnet, SiTypescript, SiReact, SiAngular, SiVuedotjs, SiNodedotjs,
    SiPython, SiPostgresql, SiAmazon, SiGit, SiDocker, SiOracle, SiJira, SiVsco,
    SiRider, SiGithub, SiGithubactions, SiPostman, SiPowers, SiCloudinary,
    SiVercel, SiMysql, SiIntellijidea, SiConfluence, SiSwagger, SiJavascript,
    SiMui, SiRender, SiSlack, SiQase, SiJquery, SiApachekafka, SiRabbitmq,
    SiNatsdotio, SiKubernetes, SiHtml5, SiCss3, SiGitlab, SiFlutter,
} from "react-icons/si"
import { LuGraduationCap } from "react-icons/lu";

export default function Home() {
    return (
        <main className="px-4 md:px-8 flex-grow flex flex-col md:h-[calc(100vh-112px)] md:overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 flex-grow md:overflow-hidden py-2">

                <Card className="md:col-span-4">
                    <CardHeader className="pb-0 pt-3">
                        <CardTitle className="text-3xl">Who am I?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-1">
                        <p className="text-lg text-muted-foreground leading-snug">
                            Senior Software Developer with 20 years of hands-on experience
                            delivering reliable, scalable, and business-critical solutions.
                            I specialize in <strong>microservices and backend architecture</strong> using
                            <strong> C#, .NET, Node.js, SQL, and Message Brokers (Kafka, RabbitMQ)</strong>,
                            with deep expertise in <strong>TypeScript</strong> and <strong>React</strong>.
                            Currently <strong>integrating AI (WebLLM, Ollama)</strong> into my projects using <strong>Flutter</strong>.
                        </p>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2 md:row-span-4 flex flex-col md:min-h-0">
                    <CardHeader className="pb-0 pt-3">
                        <CardTitle className="text-3xl">Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="md:overflow-y-auto pt-1 flex-grow space-y-3 pr-2 scrollbar-thin">
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">SENIOR QA AUTOMATION ENGINEER</h3>
                            <p className="text-base text-muted-foreground">Self-employed (Feb 2025 - Present)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">SENIOR SOFTWARE ENGINEER</h3>
                            <p className="text-base text-muted-foreground">Bystronic Group (Oct 2023 - Feb 2025)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">SENIOR FULLSTACK SOFTWARE ENGINEER</h3>
                            <p className="text-base text-muted-foreground">UUUSoftware.com (Apr 2021 - Jul 2023)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">SOFTWARE ENGINEER</h3>
                            <p className="text-base text-muted-foreground">Axxos (Jan 2018 - Mar 2021)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">WEB SOFTWARE ENGINEER</h3>
                            <p className="text-base text-muted-foreground">Vocabnetwork (Apr 2016 - Apr 2020)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">WEB DEVELOPER</h3>
                            <p className="text-base text-muted-foreground">Svitla Systems (Aug 2013 - Dec 2017)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">SENIOR C# AND SQL DEVELOPER</h3>
                            <p className="text-base text-muted-foreground">Volia Software (Feb 2010 - Jul 2013)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">JUNIOR/MIDDLE .NET DEVELOPER</h3>
                            <p className="text-base text-muted-foreground">Infopulse (May 2006 - Jan 2010)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">1C PROGRAMMER</h3>
                            <p className="text-base text-muted-foreground">ATL-TradeLine (Feb 2002 - May 2006)</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="md:col-span-2 md:row-span-3 flex flex-col md:grid md:grid-rows-[1fr_56px] gap-3">
                    <Card className="md:overflow-hidden flex flex-col">
                        <CardHeader className="py-2">
                            <CardTitle className="text-3xl">My Tech Stack</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 flex-grow">
                            <TooltipProvider>
                                <div className="grid grid-cols-8 gap-3">
                                    <Tooltip><TooltipTrigger aria-label="C#"><SiSharp className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>C#</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label=".NET"><SiDotnet className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>.NET</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="TypeScript"><SiTypescript className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>TypeScript</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="JavaScript"><SiJavascript className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>JavaScript</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="React"><SiReact className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>React</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Angular"><SiAngular className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Angular</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Vue.js"><SiVuedotjs className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Vue.js</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Node.js"><SiNodedotjs className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Node.js</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Material UI"><SiMui className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Material-UI</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Docker"><SiDocker className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Docker</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Python"><SiPython className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Python</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="MySQL"><SiMysql className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>SQL (MS SQL)</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="PostgreSQL"><SiPostgresql className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>PostgreSQL</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Oracle"><SiOracle className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Oracle</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="AWS"><SiAmazon className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>AWS</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Vercel"><SiVercel className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Vercel</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Render"><SiRender className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Render</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Cloudinary"><SiCloudinary className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Cloudinary</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Git"><SiGit className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Git</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="GitHub"><SiGithub className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>GitHub</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="GitHub Actions"><SiGithubactions className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>GitHub Actions</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="GitLab"><SiGitlab className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>GitLab</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Qase"><SiQase className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Qase</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Jira"><SiJira className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Jira</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Confluence"><SiConfluence className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Confluence</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Slack"><SiSlack className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Slack</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="VS Code"><SiVsco className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>VS Code</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Rider"><SiRider className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Rider</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="IntelliJ IDEA"><SiIntellijidea className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>IDE</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Postman"><SiPostman className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Postman</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Swagger"><SiSwagger className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Swagger</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="PowerShell"><SiPowers className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>PowerShell</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="jQuery"><SiJquery className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>jQuery</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Kubernetes"><SiKubernetes className="w-7 h-7" /></TooltipTrigger><TooltipContent><p>Kubernetes</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Apache Kafka"><SiApachekafka className="w-7 h-7" /></TooltipTrigger><TooltipContent><p>Kafka</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="RabbitMQ"><SiRabbitmq className="w-7 h-7" /></TooltipTrigger><TooltipContent><p>RabbitMQ</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="NATS"><SiNatsdotio className="w-7 h-7" /></TooltipTrigger><TooltipContent><p>NATS</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="HTML5"><SiHtml5 className="w-7 h-7" /></TooltipTrigger><TooltipContent><p>HTML5</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="CSS3"><SiCss3 className="w-7 h-7" /></TooltipTrigger><TooltipContent><p>CSS3</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Flutter"><SiFlutter className="w-7 h-7" /></TooltipTrigger><TooltipContent><p>Flutter</p></TooltipContent></Tooltip>
                                </div>
                            </TooltipProvider>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col justify-center h-full">
                        <CardContent className="p-2">
                            <TooltipProvider>
                                <div className="flex flex-row justify-around items-center">
                                    <Tooltip>
                                        <TooltipTrigger className="flex flex-col items-center gap-1">
                                            <LuGraduationCap className="w-8 h-8" />
                                            <p className="text-muted-foreground text-[10px] uppercase text-center">Master</p>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="font-bold">Master's Degree (Diploma with Honor)</p>
                                            <p>National State Polytechnic University</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip><TooltipTrigger><Flag code="GB" className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>English: C1</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger><Flag code="DE" className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>German: B1</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger><Flag code="UA" className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Ukrainian: C2</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger><Flag code="RU" className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Russian: C2</p></TooltipContent></Tooltip>
                                </div>
                            </TooltipProvider>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-2 md:row-span-3 flex flex-col md:grid md:grid-rows-[1fr_56px] gap-3">
                    <Card className="flex flex-col items-center justify-center md:overflow-hidden">
                        <CardContent className="p-4 flex flex-col items-center justify-center flex-grow">
                            <div className="relative w-40 h-40 mb-4">
                                <Image
                                    src="/avatar.jpg"
                                    alt="Viktor Ralchenko"
                                    fill
                                    className="rounded-full shadow-xl border-4 border-muted object-cover"
                                />
                            </div>
                            <CardTitle className="text-center text-4xl uppercase tracking-tight">
                                Viktor Ralchenko
                            </CardTitle>
                        </CardContent>
                    </Card>

                    <Card className="flex items-center justify-center h-full p-2">
                        <CardTitle className="text-xl text-center uppercase tracking-tighter leading-tight">
                            BACKEND / FRONTEND / AI / QA
                        </CardTitle>
                    </Card>
                </div>

            </div>

        </main>
    )
}