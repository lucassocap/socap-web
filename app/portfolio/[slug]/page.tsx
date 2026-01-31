import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { projects } from "@/lib/portfolio-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

// Visualizations
import { InfrastructureMap } from "@/components/visualizations/InfrastructureMap";
import { DataPipeline } from "@/components/visualizations/DataPipeline";
import { EfficiencyChart } from "@/components/visualizations/EfficiencyChart";
import { StrategyTimeline } from "@/components/visualizations/StrategyTimeline";
import { MonteCarloDashboard } from "@/components/visualizations/MonteCarloDashboard";
import { RefineryDeepDive } from "@/components/visualizations/RefineryDeepDive";
import { EcommerceScaleUp } from "@/components/visualizations/EcommerceScaleUp";
import { DrillingCommand } from "@/components/visualizations/DrillingCommand";
import { TransportationStats } from "@/components/visualizations/TransportationStats";
import { HospitalityCashFlow } from "@/components/visualizations/HospitalityCashFlow";
import { MedicalExpansion } from "@/components/visualizations/MedicalExpansion";
import { ReserveEvaluation } from "@/components/visualizations/ReserveEvaluation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

function getVisualization(slug: string) {
    switch (slug) {
        case "refineria-di-korsou":
            return <RefineryDeepDive />;
        case "pan-american-energy":
            return <ReserveEvaluation />;
        case "expert-network":
            return <MonteCarloDashboard />;
        case "drilling-analytics":
            return <DrillingCommand />;
        case "medialfa":
            return <MedicalExpansion />;
        case "fito-medics":
            return <EcommerceScaleUp />;
        case "fito-medics":
            return <EcommerceScaleUp />;
        case "re-transportation":
            return <TransportationStats />;
        case "la-rosa-dr-limon":
            return <HospitalityCashFlow />;
        default:
            return null;
    }
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const Visualization = getVisualization(slug);

    return (
        <main className="min-h-screen flex flex-col bg-black text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[80vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                    <Link href="/#portfolio" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4" /> Back to Intelligence
                    </Link>

                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-wealth-gold/10 border border-wealth-gold/20 backdrop-blur-md rounded-full w-fit mb-6">
                        <project.icon className="w-4 h-4 text-wealth-gold" />
                        <span className="text-xs font-bold text-wealth-gold uppercase tracking-[0.2em]">{project.category}</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
                        {project.title}
                    </h1>
                    <p className="text-2xl md:text-4xl font-mono text-zinc-400">
                        {project.metric}
                    </p>
                </div>
            </section>

            {/* Deep Dive Content */}
            <section className="py-32 border-b border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">

                    {/* Render Visualization if available */}
                    {Visualization && (
                        <div className="mb-24">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Protocol Visualization</h2>
                                <div className="h-[1px] flex-1 bg-white/10 ml-4" />
                            </div>
                            {Visualization}
                        </div>
                    )}

                    <div className="grid md:grid-cols-[1fr_2fr] gap-20">

                        {/* Sidebar / Context */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">Protocol Type</h3>
                                <p className="text-xl text-white font-bold">{project.category}</p>
                            </div>
                            <div>
                                <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">Impact Metric</h3>
                                <p className="text-xl text-wealth-gold font-bold font-mono">{project.metric}</p>
                            </div>

                            {project.specs && (
                                <div>
                                    <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">System Manifest</h3>
                                    <ul className="space-y-3">
                                        {project.specs.map((spec, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-mono">
                                                <div className="w-1.5 h-1.5 rounded-sm bg-wealth-gold mt-1.5 flex-shrink-0" />
                                                <span>{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                                <h3 className="text-white font-bold mb-2">Deploy similar capability.</h3>
                                <Link href="/contact" className="text-wealth-gold text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                    Initiate <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>

                        {/* Narrative */}
                        <div className="space-y-16">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">The Challenge.</h2>
                                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                                    {project.content.challenge}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">The Architecture.</h2>
                                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                                    {project.content.solution}
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-10 rounded-none relative overflow-hidden group hover:border-wealth-gold/50 transition-colors">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <project.icon className="w-32 h-32 text-wealth-gold" />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6 relative z-10">The Result.</h2>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-8 h-8 text-wealth-gold flex-shrink-0 mt-1" />
                                    <p className="text-2xl text-white leading-relaxed font-medium relative z-10">
                                        {project.content.result}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Next Step */}
            <section className="py-32 relative bg-zinc-950 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-black text-white mb-8 uppercase">Ready to replicate this result?</h2>
                    <Link href="/contact">
                        <button className="group relative px-12 py-6 bg-wealth-gold text-obsidian font-black text-xl tracking-widest overflow-hidden hover:bg-white transition-all shadow-2xl">
                            <span className="relative z-10 flex items-center gap-3">
                                INITIATE SIMILAR PROTOCOL <ArrowRight className="w-6 h-6" />
                            </span>
                        </button>
                    </Link>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
