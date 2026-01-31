"use client";

import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Users, Globe, ShieldCheck, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-black text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                    <span className="text-wealth-gold font-mono text-xs tracking-[0.3em] uppercase mb-8 block">The Architects</span>
                    <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
                        We Design <br />
                        <span className="text-zinc-800">Dominance.</span>
                    </h1>
                    <p className="text-2xl text-zinc-500 max-w-3xl leading-relaxed font-light">
                        We are not a consulting firm. We are a design firm. We just happen to design businesses instead of buildings.
                    </p>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-32 border-y border-white/5 bg-zinc-950">
                <div className="container mx-auto px-6 max-w-[1400px] grid md:grid-cols-2 gap-24 items-start">

                    <div className="space-y-12">
                        <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight">The Origin.</h2>
                        <div className="space-y-8 text-xl text-zinc-400 leading-relaxed font-light">
                            <p>
                                Socap was born from a simple observation: <strong className="text-white font-normal">Most businesses are designed to fail.</strong>
                            </p>
                            <p>
                                They are built on shaky foundations. They are cluttered with inefficiency. They lack a clear aesthetic of operation.
                            </p>
                            <p>
                                We gathered a team of operators—executives, entrepreneurs, financial engineers—who understand that a business is a product. And like any product, it must be designed with intent.
                            </p>
                            <p>
                                We stripped away the corporate jargon. We threw out the standard playbook. We created a new methodology based on velocity, clarity, and impact.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-1">
                        {[
                            { icon: Globe, label: "Global Perspective", sub: "US / EU / LATAM" },
                            { icon: ShieldCheck, label: "Bulletproof Compliance", sub: "Legal Engineering" },
                            { icon: Users, label: "Elite Network", sub: "Access to Power" },
                            { icon: Award, label: "Proven Outcomes", sub: "Track Record" }
                        ].map((item, i) => (
                            <div key={i} className="p-10 border border-white/5 hover:bg-white/[0.02] transition-colors flex items-center gap-8 group">
                                <item.icon className="w-8 h-8 text-zinc-700 group-hover:text-wealth-gold transition-colors" />
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-wealth-gold transition-colors">{item.label}</h3>
                                    <p className="text-sm text-zinc-600 font-mono tracking-widest uppercase">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Philosophy / Vision */}
            <section className="py-40 relative">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-12 leading-tight tracking-tighter">
                        "SIMPLICITY IS THE ULTIMATE SOPHISTICATION."
                    </h2>
                    <p className="text-xl text-zinc-500 font-light">
                        We simplify the complex. We make the impossible accessible. <br />
                        We are Socap.
                    </p>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
