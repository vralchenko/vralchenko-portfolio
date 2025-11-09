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
    SiSharp,
    SiDotnet,
    SiTypescript,
    SiReact,
    SiAngular,
    SiVuedotjs,
    SiNodedotjs,
    SiPython,
    SiPostgresql,
    SiAmazon,
    SiGit,
    SiDocker,
    SiOracle,
    SiJira,
    SiVsco,
    SiRider,
    SiGithub,
    SiGithubactions,
    SiPostman,
    SiPowers,
    SiCloudinary,
    SiVercel,
    SiMysql,
    SiIntellijidea,
    SiConfluence,
    SiSwagger,
    SiJavascript,
    SiMui,
    SiRender,
    SiSlack,
    SiQase,
    SiJquery,
    SiApachekafka,
    SiRabbitmq,
    SiNatsdotio,
    SiKubernetes,
    SiHtml5,
    SiCss3,
    SiJest,
    SiGitlab
} from "react-icons/si"

export default function Home() {
    return (
        <main className="px-4 pb-4 md:px-8 md:pb-8">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

                <Card className="md:col-span-4">
                    <CardHeader>
                        <CardTitle className="text-3xl">Who am I?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-muted-foreground">
                            Senior Software Developer with 20 years of hands-on experience
                            delivering reliable, scalable, and business-critical solutions.
                            I specialize in backend architecture and microservices using C# and .NET,
                            with experience in frontend development using React, Angular, and Vue.js.
                        </p>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2 md:row-span-4">
                    <CardHeader>
                        <CardTitle className="text-3xl">Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-lg">SENIOR QA AUTOMATION ENGINEER</h3>
                            <p className="text-base text-muted-foreground">Self-employed (Feb 2025 - Present)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">SENIOR SOFTWARE ENGINEER</h3>
                            <p className="text-base text-muted-foreground">Bystronic Group (Oct 2023 - Feb 2025)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">SENIOR FULLSTACK SOFTWARE ENGINEER</h3>
                            <p className="text-base text-muted-foreground">UUUSoftware.com (Apr 2021 - Jul 2023)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">SOFTWARE ENGINEER</h3>
                            <p className="text-base text-muted-foreground">Axxos (Jan 2018 - Mar 2021)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">WEB SOFTWARE ENGINEER</h3>
                            <p className="text-base text-muted-foreground">Vocabnetwork (Apr 2016 - Apr 2020)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">WEB DEVELOPER</h3>
                            <p className="text-base text-muted-foreground">Svitla Systems (Aug 2013 - Dec 2017)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">SENIOR C# AND SQL DEVELOPER</h3>
                            <p className="text-base text-muted-foreground">Volia Software (Feb 2010 - Jul 2013)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">JUNIOR/MIDDLE .NET DEVELOPER</h3>
                            <p className="text-base text-muted-foreground">Infopulse (May 2006 - Jan 2010)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">1C PROGRAMMER</h3>
                            <p className="text-base text-muted-foreground">ATL-TradeLine (Feb 2002 - May 2006)</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2 md:row-span-2">
                    <CardHeader>
                        <CardTitle className="text-3xl">My Tech Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TooltipProvider>
                            <div className="grid grid-cols-8 gap-4">

                                <Tooltip>
                                    <TooltipTrigger><SiSharp className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>C#</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiDotnet className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>.NET</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiTypescript className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>TypeScript</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiJavascript className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>JavaScript</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiReact className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>React</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiAngular className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Angular</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiVuedotjs className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Vue.js</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiNodedotjs className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Node.js</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiMui className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Material-UI</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiDocker className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Docker</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiPython className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Python</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiMysql className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>SQL (MS SQL)</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiPostgresql className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>PostgreSQL</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiOracle className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Oracle</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiAmazon className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>AWS</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiVercel className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Vercel (Azure)</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiRender className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Render</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiCloudinary className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Cloudinary</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiGit className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Git</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiGithub className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>GitHub</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiGithubactions className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>GitHub Actions</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiGitlab className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>TFS/SVN (GitLab)</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiQase className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Qase</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiJira className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Jira</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiConfluence className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Agile (Scrum)</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiSlack className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Slack</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiVsco className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>VS Code</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiRider className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Rider</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiIntellijidea className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>IDE (Visual Studio)</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiPostman className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Postman</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiSwagger className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>REST (Swagger)</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiPowers className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>PowerShell</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiJquery className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>jQuery</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiKubernetes className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Microservices (K8s)</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiApachekafka className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Kafka</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiRabbitmq className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>RabbitMQ</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiNatsdotio className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>NATS</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiHtml5 className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>HTML5</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiCss3 className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>CSS3</p></TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger><SiJest className="w-8 h-8" /></TooltipTrigger>
                                    <TooltipContent><p>Testing (xUnit/NUnit)</p></TooltipContent>
                                </Tooltip>

                            </div>
                        </TooltipProvider>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">
                            BACKEND / FRONTEND / QA
                        </CardTitle>
                    </CardHeader>
                </Card>

                <Card className="md:col-span-2">
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                        <Image
                            src="/avatar.jpg"
                            alt="Viktor Ralchenko"
                            width={100}
                            height={100}
                            className="rounded-full mb-4"
                        />
                        <CardTitle className="text-center text-4xl">
                            VIKTOR RALCHENKO
                        </CardTitle>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardContent className="py-2">
                        <TooltipProvider>
                            <div className="flex flex-row gap-6 justify-around items-center p-2">

                                <Tooltip>
                                    <TooltipTrigger className="flex flex-col items-center gap-1">
                                        <Flag code="GB" className="w-8 h-8" />
                                        <p className="text-muted-foreground text-xs">English</p>
                                    </TooltipTrigger>
                                    <TooltipContent><p>C1 (Professional)</p></TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger className="flex flex-col items-center gap-1">
                                        <Flag code="DE" className="w-8 h-8" />
                                        <p className="text-muted-foreground text-xs">German</p>
                                    </TooltipTrigger>
                                    <TooltipContent><p>B1 (Limited)</p></TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger className="flex flex-col items-center gap-1">
                                        <Flag code="UA" className="w-8 h-8" />
                                        <p className="text-muted-foreground text-xs">Ukrainian</p>
                                    </TooltipTrigger>
                                    <TooltipContent><p>C2 (Native)</p></TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger className="flex flex-col items-center gap-1">
                                        <Flag code="RU" className="w-8 h-8" />
                                        <p className="text-muted-foreground text-xs">Russian</p>
                                    </TooltipTrigger>
                                    <TooltipContent><p>C2 (Fluent)</p></TooltipContent>
                                </Tooltip>

                            </div>
                        </TooltipProvider>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardContent className="p-4 flex items-center justify-center h-full">
                        <p className="text-xl italic text-center">
                            "Passionate about delivering reliable, scalable, and business-critical solutions."
                        </p>
                    </CardContent>
                </Card>

            </div>
        </main>
    )
}