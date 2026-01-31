"use client";

import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function TermsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-black text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
            <Navbar />

            <section className="relative pt-40 pb-20">
                <div className="container mx-auto px-6 max-w-[1400px] text-center">
                    <span className="text-wealth-gold font-mono text-xs tracking-[0.3em] uppercase mb-8 block">Legal Protocol</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                        Terms of <span className="text-zinc-700">Service.</span>
                    </h1>
                </div>
            </section>

            <section className="pb-40">
                <div className="container mx-auto px-6 max-w-3xl prose prose-invert prose-lg">
                    <p className="lead text-2xl text-zinc-300 font-light">
                        Engagement with Socap Corp implies acceptance of these operational protocols.
                    </p>

                    <h3>1. Scope of Engagement</h3>
                    <p>
                        Socap Corp provides strategic consulting, operational restructuring, and financial advisory services. We are not a bank. We are architects of capital and operation.
                    </p>

                    <h3>2. No Guarantee of Results</h3>
                    <p>
                        Business is risk. While we deploy proven methodologies to mitigate risk and maximize velocity, we do not guarantee specific financial outcomes. Market conditions, client execution, and external factors play a role.
                    </p>

                    <h3>3. Confidentiality</h3>
                    <p>
                        Both parties agree to maintain the confidentiality of proprietary information shared during the course of engagement. Operational blueprints developed by Socap Corp remain the intellectual property of Socap Corp until full contract execution.
                    </p>

                    <h3>4. Payment & Fees</h3>
                    <p>
                        Fee structures are defined in individual Service Agreements. Commencement of work begins upon retainer or deposit as stipulated in the agreement.
                    </p>

                    <h3>5. Termination</h3>
                    <p>
                        Socap Corp reserves the right to terminate engagement with any client that violates ethical standards, fails to meet financial obligations, or misrepresents their business activities.
                    </p>

                    <h3>6. Jurisdiction</h3>
                    <p>
                        These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in the courts of Miami-Dade County.
                    </p>

                    <hr className="border-white/10 my-12" />
                    <p className="text-sm text-zinc-500 font-mono">Last Updated: {new Date().getFullYear()}</p>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
