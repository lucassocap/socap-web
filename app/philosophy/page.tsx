"use client";

import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen flex flex-col bg-black text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
            <Navbar />

            <section className="relative pt-40 pb-32">
                <div className="container mx-auto px-6 max-w-4xl">

                    <span className="text-wealth-gold font-mono text-xs tracking-[0.3em] uppercase mb-8 block">The Manifesto</span>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-20 leading-[0.9] tracking-tighter">
                        Think <br />
                        Different. <br />
                        <span className="text-zinc-600">Act Faster.</span>
                    </h1>

                    <div className="prose prose-xl prose-invert max-w-3xl space-y-12">
                        <p className="text-2xl text-white font-light leading-relaxed">
                            Business is not about money. Money is a byproduct. <strong className="text-wealth-gold">Business is about architecture.</strong>
                        </p>

                        <p className="text-zinc-400">
                            Most consultants look at a company and see a spreadsheet. They see costs. They see revenue. They see numbers.
                        </p>

                        <p className="text-zinc-400">
                            We look at a company and see a machine. A living, breathing system of inputs and outputs. And like any machine, if the design is flawed, the performance suffers.
                        </p>

                        <hr className="border-white/10" />

                        <h3 className="text-3xl font-bold text-white">The American Labyrinth</h3>

                        <p className="text-zinc-400">
                            The United States market is the most lucrative arena on Earth. It is also the most unforgiving. Laws. Taxes. Culture. Compliance. It’s a maze designed to trap the unprepared.
                        </p>

                        <p className="text-zinc-400">
                            Foreign investors come here with dreams. They leave with lawsuits. Why? Because they try to navigate a new world with an old map.
                        </p>

                        <p className="text-2xl text-white font-light">
                            We are the new map.
                        </p>

                        <hr className="border-white/10" />

                        <h3 className="text-3xl font-bold text-white">We Don't "Help". We Build.</h3>

                        <p className="text-zinc-400">
                            "Help" is for charity. We are here to build empires. Whether you are a startup needing a war chest or a legacy corporation needing a heart transplant, our mandate is absolute:
                        </p>

                        <ul className="list-none space-y-6 pl-0">
                            <li className="flex items-baseline gap-4">
                                <span className="text-wealth-gold font-mono">01.</span>
                                <span className="text-white text-xl">Remove the friction.</span>
                            </li>
                            <li className="flex items-baseline gap-4">
                                <span className="text-wealth-gold font-mono">02.</span>
                                <span className="text-white text-xl">Accelerate the velocity.</span>
                            </li>
                            <li className="flex items-baseline gap-4">
                                <span className="text-wealth-gold font-mono">03.</span>
                                <span className="text-white text-xl">Dominance.</span>
                            </li>
                        </ul>

                        <p className="text-zinc-500 italic pt-12">
                            — The Socap Team
                        </p>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
