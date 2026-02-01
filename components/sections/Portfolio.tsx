"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/portfolio-data";

export function Portfolio() {
    return (
        <section id="portfolio" className="py-32 bg-zinc-950 relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-[1400px]">

                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
                            The <span className="text-wealth-gold">Work.</span>
                        </h2>
                        <div className="h-1 w-24 bg-wealth-gold mb-6" />
                        <p className="text-xl text-zinc-400 max-w-2xl font-light">
                            We don't do "projects." We do transformations. <br />
                            Here is the evidence of our impact.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {projects.map((project, i) => (
                        <Link href={`/portfolio/${project.slug}`} key={i} className="group relative h-[500px] bg-obsidian overflow-hidden border border-white/5 hover:z-10 transition-all duration-500 cursor-pointer">
                            {/* Image Background - More Color now */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:via-black/80 transition-all duration-500" />

                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <div className="mb-auto transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-wealth-gold/90 backdrop-blur-md border border-wealth-gold/20 text-black shadow-lg">
                                        <project.icon className="w-3 h-3" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{project.category}</span>
                                    </div>
                                </div>

                                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl font-bold text-white mb-3 leading-none group-hover:text-wealth-gold transition-colors">{project.title}</h3>
                                    <h4 className="text-lg font-mono text-zinc-300 mb-6">{project.metric}</h4>
                                    <p className="text-base text-zinc-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-light">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="absolute top-8 right-8">
                                    <ArrowUpRight className="w-8 h-8 text-white group-hover:text-wealth-gold transition-colors transform group-hover:rotate-45" />
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* CTA Card */}
                    <Link href="/contact" className="group relative h-[500px] bg-obsidian flex flex-col items-center justify-center hover:bg-wealth-gold transition-colors cursor-pointer border border-white/5">
                        <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:border-black/20 transition-colors">
                            <ArrowUpRight className="w-10 h-10 text-white group-hover:text-black transition-colors" />
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-2 group-hover:text-black transition-colors">Start Here</h3>
                        <p className="text-zinc-500 text-sm font-mono tracking-widest group-hover:text-black/60 transition-colors">INITIATE PROTOCOL</p>
                    </Link>
                </div>

            </div>
        </section>
    );
}
