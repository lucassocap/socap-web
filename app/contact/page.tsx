"use client";

import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-obsidian text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
            <Navbar />

            <section className="relative pt-32 pb-24 flex-1 flex flex-col items-center justify-center">
                {/* Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-obsidian-surface via-obsidian to-black z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wealth-gold/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10 w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                            Secure <span className="text-wealth-gold">Channels</span>.
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Ready to deploy capital? Or need to restructure for war?
                            Initialize the protocol below. Direct line to our senior partners.
                        </p>
                    </div>

                    <ContactForm />

                    <div className="mt-12 text-center text-zinc-600 font-mono text-xs tracking-widest">
                        <p>HQ: MIAMI, FL // GLOBAL OPERATIONS</p>
                        <p>E: CAPITAL@SOCAPCORP.COM</p>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
