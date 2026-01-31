import { services } from "@/lib/services-data";
import { projects } from "@/lib/portfolio-data";
import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    // Find related portfolio projects
    const relatedProjects = projects.filter((p) => service.relatedProjects.includes(p.slug));

    return (
        <main className="min-h-screen flex flex-col bg-obsidian text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
            <Navbar />

            {/* Hero Header */}
            <section className="relative h-[60vh] w-full overflow-hidden flex items-end pb-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="relative z-10 container mx-auto px-6">
                    <Link href="/services" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors w-fit text-sm font-mono uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Back to Services
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-wealth-gold/10 flex items-center justify-center border border-wealth-gold/20 backdrop-blur-md">
                            <service.icon className="w-6 h-6 text-wealth-gold" />
                        </div>
                        <span className="text-wealth-gold font-mono text-sm tracking-[0.3em] uppercase">Service Pillar</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                        {service.title}
                    </h1>
                    <p className="text-2xl text-zinc-400 font-light mt-6 max-w-2xl border-l-4 border-wealth-gold pl-6">
                        {service.desc}
                    </p>
                </div>
            </section>

            {/* The Deep Dive - Steve Jobs Style 3-Col */}
            <section className="py-32 border-b border-white/5 bg-zinc-950">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-16">
                        {/* Philosophy */}
                        <div className="space-y-6">
                            <h3 className="text-wealth-gold font-mono text-xs uppercase tracking-[0.2em] mb-2">01. The Philosophy</h3>
                            <h2 className="text-3xl font-bold text-white leading-tight">Why it matters.</h2>
                            <p className="text-zinc-400 leading-relaxed font-light text-lg">
                                {service.content.philosophy}
                            </p>
                        </div>

                        {/* Method */}
                        <div className="space-y-6">
                            <h3 className="text-wealth-gold font-mono text-xs uppercase tracking-[0.2em] mb-2">02. The Method</h3>
                            <h2 className="text-3xl font-bold text-white leading-tight">How we execute.</h2>
                            <p className="text-zinc-400 leading-relaxed font-light text-lg">
                                {service.content.method}
                            </p>
                        </div>

                        {/* Result */}
                        <div className="space-y-6">
                            <h3 className="text-wealth-gold font-mono text-xs uppercase tracking-[0.2em] mb-2">03. The Result</h3>
                            <h2 className="text-3xl font-bold text-white leading-tight">What you get.</h2>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-lg">
                                <p className="text-white leading-relaxed font-medium text-lg">
                                    "{service.content.result}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Executed Protocols - Linked Projects */}
            <section className="py-32 bg-black">
                <div className="container mx-auto px-6">
                    <div className="flex items-end justify-between mb-20">
                        <div>
                            <span className="text-wealth-gold font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Proof of Concept</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                                Executed <span className="text-zinc-700">Protocols.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedProjects.map((project, i) => (
                            <Link href={`/portfolio/${project.slug}`} key={i} className="group relative block aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/10 hover:border-wealth-gold/50 transition-colors">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="text-xs font-mono text-wealth-gold uppercase tracking-widest mb-2">{project.category}</div>
                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                                        <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6 line-clamp-2">
                                            {project.desc}
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest border-b border-wealth-gold pb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            View Protocol <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {relatedProjects.length === 0 && (
                        <div className="p-12 border border-dashed border-white/10 rounded-lg text-center">
                            <p className="text-zinc-500 font-mono">Protocols classified or indexed under cross-functional categories.</p>
                        </div>
                    )}
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
