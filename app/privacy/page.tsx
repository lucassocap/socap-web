"use client";

import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen flex flex-col bg-black text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
            <Navbar />

            <section className="relative pt-40 pb-20">
                <div className="container mx-auto px-6 max-w-[1400px] text-center">
                    <span className="text-wealth-gold font-mono text-xs tracking-[0.3em] uppercase mb-8 block">Legal Protocol</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                        Privacy <span className="text-zinc-700">Policy.</span>
                    </h1>
                </div>
            </section>

            <section className="pb-40">
                <div className="container mx-auto px-6 max-w-3xl prose prose-invert prose-lg">
                    <p className="lead text-2xl text-zinc-300 font-light">
                        Your privacy is a strategic asset. We protect it with the same rigor we apply to our operations.
                    </p>

                    <h3>1. Data Collection</h3>
                    <p>
                        We collect information necessary to execute business protocols. This includes contact details, company information, and financial data required for preliminary analysis. We do not harvest data for the sake of hoarding it.
                    </p>

                    <h3>2. Usage of Information</h3>
                    <p>
                        Information is used exclusively for:
                    </p>
                    <ul>
                        <li>assessing operational feasibility.</li>
                        <li>structuring financial instruments.</li>
                        <li>establishing communication channels.</li>
                    </ul>
                    <p>
                        We are not in the business of selling data. We are in the business of structuring deals.
                    </p>

                    <h3>3. Security Protocols</h3>
                    <p>
                        We employ industry-standard encryption and security measures. However, the nature of digital communication means no transmission is absolute. We advise discretion when transmitting highly sensitive intelligence via open channels.
                    </p>

                    <h3>4. Third-Party Disclosures</h3>
                    <p>
                        We do not share your data with third parties unless required for the specific execution of a requested service (e.g., banking partners, legal counsel) or compelled by law.
                    </p>

                    <h3>5. Contact</h3>
                    <p>
                        For inquiries regarding data retention or deletion, contact our compliance officer at info@socapcorp.com.
                    </p>

                    <hr className="border-white/10 my-12" />
                    <p className="text-sm text-zinc-500 font-mono">Last Updated: {new Date().getFullYear()}</p>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
