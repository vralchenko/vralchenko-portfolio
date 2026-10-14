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
import LinkedInQR from "@/components/LinkedInQR"
import {
    SiAmazon, SiAngular, SiApachekafka, SiClaude, SiCloudflarepages, SiConfluence, SiDocker, SiDotnet, SiFlutter, SiGithub, SiGithubactions, SiGitlab, SiGooglegemini, SiJira, SiKotlin, SiKubernetes, SiMysql, SiNatsdotio, SiNextdotjs, SiNodedotjs, SiOpenai, SiOracle, SiPostgresql, SiPostman, SiPython, SiRabbitmq, SiReact, SiRider, SiSharp, SiSwagger, SiTerraform, SiTypescript, SiVuedotjs,
} from "react-icons/si"
import { VscAzure } from "react-icons/vsc"
import { LuGraduationCap } from "react-icons/lu";
import { getTranslations, setRequestLocale } from "next-intl/server"

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Home');

    return (
        <main className="px-4 md:px-8 flex-grow flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 flex-grow py-2">

                <Card className="md:col-span-4">
                    <CardHeader className="pb-0 pt-3">
                        <CardTitle className="text-3xl">{t('whoAmI')}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-1">
                        <p className="text-lg text-muted-foreground leading-snug">
                            {t.rich('whoAmIContent', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2 md:row-span-4 flex flex-col md:min-h-0">
                    <CardHeader className="pb-0 pt-3">
                        <CardTitle className="text-3xl">{t('experience')}</CardTitle>
                    </CardHeader>
                    <CardContent className="md:overflow-y-auto pt-1 flex-grow space-y-3 pr-2 scrollbar-thin">
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">{t('exp.senQA')}</h3>
                            <p className="text-base text-muted-foreground">{t('exp.selfEmployed')}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">{t('exp.senSoftware')}</h3>
                            <p className="text-base text-muted-foreground">{t('exp.bystronic')}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">{t('exp.senFullstack')}</h3>
                            <p className="text-base text-muted-foreground">{t('exp.uuu')}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">{t('exp.software')}</h3>
                            <p className="text-base text-muted-foreground">{t('exp.axxos')}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">{t('exp.webSoftware')}</h3>
                            <p className="text-base text-muted-foreground">{t('exp.vocab')}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">{t('exp.webDev')}</h3>
                            <p className="text-base text-muted-foreground">{t('exp.svitla')}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">{t('exp.senCSharp')}</h3>
                            <p className="text-base text-muted-foreground">{t('exp.volia')}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">{t('exp.midDotNet')}</h3>
                            <p className="text-base text-muted-foreground">{t('exp.infopulse')}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg leading-tight uppercase">{t('exp.oneC')}</h3>
                            <p className="text-base text-muted-foreground">{t('exp.atl')}</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="md:col-span-2 md:row-span-3 flex flex-col md:grid md:grid-rows-[1fr_56px] gap-3">
                    <Card className="md:overflow-hidden flex flex-col">
                        <CardHeader className="py-2">
                            <CardTitle className="text-3xl">{t('myTechStack')}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 flex-grow">
                            <TooltipProvider>
                                <div className="grid grid-cols-6 sm:grid-cols-8 gap-3">
                                    <Tooltip><TooltipTrigger aria-label="Claude"><SiClaude className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Claude</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="OpenAI"><SiOpenai className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>OpenAI</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Gemini"><SiGooglegemini className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Gemini</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="C#"><SiSharp className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>C#</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label=".NET"><SiDotnet className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>.NET</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="AWS"><SiAmazon className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>AWS</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Azure"><VscAzure className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Azure</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Terraform"><SiTerraform className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Terraform</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Docker"><SiDocker className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Docker</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Kubernetes"><SiKubernetes className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Kubernetes</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Apache Kafka"><SiApachekafka className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Kafka</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="RabbitMQ"><SiRabbitmq className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>RabbitMQ</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="NATS"><SiNatsdotio className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>NATS</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="PostgreSQL"><SiPostgresql className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>PostgreSQL</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="MySQL"><SiMysql className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>SQL (MS SQL)</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Oracle"><SiOracle className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Oracle</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Python"><SiPython className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Python</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="TypeScript"><SiTypescript className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>TypeScript</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Node.js"><SiNodedotjs className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Node.js</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="React"><SiReact className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>React</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Next.js"><SiNextdotjs className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Next.js</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Angular"><SiAngular className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Angular</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Vue.js"><SiVuedotjs className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Vue.js</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Kotlin"><SiKotlin className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Kotlin</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Flutter"><SiFlutter className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Flutter</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="GitHub Actions"><SiGithubactions className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>GitHub Actions</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="GitLab"><SiGitlab className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>GitLab CI</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="GitHub"><SiGithub className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>GitHub</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Cloudflare Pages"><SiCloudflarepages className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Cloudflare</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Postman"><SiPostman className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Postman</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Swagger"><SiSwagger className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Swagger / OpenAPI</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Rider"><SiRider className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Rider</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Jira"><SiJira className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Jira</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger aria-label="Confluence"><SiConfluence className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>Confluence</p></TooltipContent></Tooltip>
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
                                            <p className="font-bold">{t('masterDegree')}</p>
                                            <p>{t('university')}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip><TooltipTrigger><Flag code="GB" className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>{t('languages.en')}</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger><Flag code="DE" className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>{t('languages.de')}</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger><Flag code="UA" className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>{t('languages.uk')}</p></TooltipContent></Tooltip>
                                    <Tooltip><TooltipTrigger><Flag code="RU" className="w-8 h-8" /></TooltipTrigger><TooltipContent><p>{t('languages.ru')}</p></TooltipContent></Tooltip>
                                </div>
                            </TooltipProvider>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-2 md:row-span-3 flex flex-col md:grid md:grid-rows-[1fr_56px] gap-3">
                    <Card className="flex flex-col items-center justify-center md:overflow-hidden">
                        <CardContent className="p-4 flex flex-col items-center justify-start flex-grow pt-8">
                            <div className="flex items-center gap-6">
                                <div className="relative w-36 h-36 sm:w-48 sm:h-48 shrink-0">
                                    <Image
                                        src="/avatar.jpg"
                                        alt="Viktor Ralchenko"
                                        fill
                                        className="rounded-full shadow-xl border-4 border-muted object-cover"
                                    />
                                </div>
                                <LinkedInQR size={100} />
                            </div>
                            <CardTitle className="text-center text-4xl uppercase tracking-tight mt-4">
                                Viktor Ralchenko
                            </CardTitle>
                        </CardContent>
                    </Card>

                    <Card className="flex items-center justify-center h-full p-2">
                        <CardTitle className="text-xl text-center uppercase tracking-tighter leading-tight">
                            {t('role')}
                        </CardTitle>
                    </Card>
                </div>

            </div>

        </main>
    )
}