"use client";

import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { TrendingUp, Activity, Layers, Target, Database, DollarSign, Briefcase, FileText, Cpu } from "lucide-react";

import { services } from "@/lib/services-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-black text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
            <Navbar />

            <section className="relative pt-40 pb-20">
                <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                    <span className="text-wealth-gold font-mono text-xs tracking-[0.3em] uppercase mb-8 block">The Toolkit</span>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                        Instruments of <br />
                        <span className="text-zinc-700">Construction.</span>
                    </h1>
                </div>
            </section>

            <div className="grid md:grid-cols-3 border-t border-white/5">
                {services.map((item, i) => (
                    <Link href={`/services/${item.slug}`} key={i} className="group relative h-[600px] border-b border-r border-white/5 overflow-hidden block">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <div className="mb-auto">
                                <div className="w-16 h-16 rounded-full bg-wealth-gold/10 backdrop-blur-md flex items-center justify-center border border-wealth-gold/20 mb-6 group-hover:bg-wealth-gold/20 transition-colors">
                                    <item.icon className="w-8 h-8 text-wealth-gold" />
                                </div>
                            </div>

                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-4xl font-black text-white mb-2 leading-none uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-xs font-mono text-wealth-gold mb-6 uppercase tracking-widest">{item.subtitle}</p>
                                <p className="text-zinc-400 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity mb-6">
                                    {item.desc}
                                </p>
                                <div className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest border-b border-wealth-gold pb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Deep Dive <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <SiteFooter />
        </main>
    );
}
