"use client";

import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "Why Socap?",
        a: "Because you don't have time for average. Most firms sell you hours. We sell outcomes. We don't care about the process as much as we care about the victory. We are operators, not observers."
    },
    {
        q: "Small Business or Enterprise?",
        a: "Irrelevant. We look at ambition, not headcount. A startup with a world-changing idea is more interesting to us than a stagnant Fortune 500. If you are ready to move fast, we are ready to drive."
    },
    {
        q: "What is your technology stack?",
        a: "Whatever works. We are agnostic. If a spreadsheet solves the problem, we use a spreadsheet. If you need a custom AI neural network, we build that. We don't force-feed you software; we solve the bottleneck."
    },
    {
        q: "Can you guarantee capital?",
        a: "We guarantee preparedness. We build the structure, the plan, and the narrative that makes capital inevitable. Banks lend to certainty. We manufacture certainty."
    },
    {
        q: "How do we start?",
        a: "Initiate the protocol. Send us a message. If the fit is right, we move immediately. We don't do long courtships."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen flex flex-col bg-black text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
            <Navbar />

            <section className="relative pt-40 pb-20">
                <div className="container mx-auto px-6 max-w-[1400px] text-center">
                    <span className="text-wealth-gold font-mono text-xs tracking-[0.3em] uppercase mb-8 block">Interrogatory</span>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                        Direct <span className="text-zinc-700">Answers.</span>
                    </h1>
                    <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light">
                        No corporate fluff. Just the truth.
                    </p>
                </div>
            </section>

            <section className="pb-40">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="group border-b border-white/10 bg-transparent hover:bg-white/[0.02] transition-colors">
                                <button
                                    className="w-full flex items-center justify-between py-8 text-left"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                >
                                    <span className={cn("text-2xl font-bold transition-colors", openIndex === i ? "text-white" : "text-zinc-500 group-hover:text-white")}>{faq.q}</span>
                                    {openIndex === i ? <Minus className="text-wealth-gold" /> : <Plus className="text-zinc-700 group-hover:text-white transition-colors" />}
                                </button>

                                <div className={cn(
                                    "overflow-hidden transition-all duration-500 ease-in-out",
                                    openIndex === i ? "max-h-56 opacity-100 mb-8" : "max-h-0 opacity-0"
                                )}>
                                    <div className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
