"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        client: "Joe",
        company: "Expert Network",
        role: "Founder",
        quote: "We were drowning in operational noise. Socap didn't just advise; they built the machine. They installed a collections system that recovered 30% of our revenue in 60 days. It wasn't consulting; it was a rescue mission.",
        highlight: "Operational & Sales System"
    },
    {
        client: "Chris",
        company: "DMS Energy",
        role: "IT Manager",
        quote: "I've worked with vendors for 20 years. These are the best developers I've ever seen. Speed, precision, and zero fluff. They delivered a complex energy infrastructure platform in weeks, not months.",
        highlight: "Technical Precision"
    },
    {
        client: "Andres",
        company: "La Rosa",
        role: "Founder",
        quote: "I never had cash in my pocket. I was always reinvesting blindly. Socap structured my liquidity. Now I know exactly where every dollar is, and for the first time, I'm taking real profit home.",
        highlight: "Cash Flow Transformation"
    },
    {
        client: "Carlos",
        company: "Fitomedics",
        role: "Founder",
        quote: "Everyone told me the US market was a fortress—too difficult, too expensive. With Socap, it was easy. They engineered the entry strategy, and we broke through. We are now scaling purely on their architecture.",
        highlight: "US Market Entry"
    }
];

export function Testimonials() {
    return (
        <section className="py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-wealth-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-24">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
                        Proven <span className="text-wealth-gold">Results.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl text-lg font-light">
                        We don't sell hours. We sell outcomes. Here is the evidence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-black border border-white/10 p-10 hover:border-wealth-gold/50 transition-colors duration-500 group relative"
                        >
                            <Quote className="absolute top-10 right-10 w-12 h-12 text-zinc-800 group-hover:text-wealth-gold/20 transition-colors" />

                            <div className="mb-8">
                                <span className="inline-block px-3 py-1 bg-wealth-gold/10 text-wealth-gold text-[10px] font-mono font-bold tracking-widest uppercase mb-6">
                                    {t.highlight}
                                </span>
                                <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                                    "{t.quote}"
                                </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                <div>
                                    <p className="text-white font-bold tracking-wide">{t.client}</p>
                                    <p className="text-zinc-500 text-sm font-mono">{t.role}, {t.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
