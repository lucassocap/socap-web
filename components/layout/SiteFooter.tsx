"use client";

import Link from "next/link";
import { Twitter, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-wealth-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-8 group flex items-center gap-3">
                            <div className="relative w-16 h-16 transition-opacity duration-300 hover:opacity-80">
                                <img
                                    src="/images/socap-logo-white.png"
                                    alt="SOCAP"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-mono text-3xl font-black tracking-tighter text-white group-hover:text-wealth-gold transition-colors duration-500">
                                SOCAP<span className="text-wealth-gold group-hover:text-white transition-colors duration-500"> CORP</span>
                            </span>
                        </Link>
                        <p className="text-zinc-500 max-w-sm text-lg leading-relaxed font-light mb-8">
                            We design dominance. Operational architecture and financial engineering for the ambitious.
                        </p>
                        <Link href="/contact">
                            <button className="flex items-center gap-2 text-white font-bold text-sm tracking-widest hover:text-wealth-gold transition-colors group">
                                INITIATE PROTOCOL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>

                    <div>
                        <h4 className="text-white font-mono text-xs font-bold mb-8 tracking-[0.2em] uppercase text-zinc-600">Intelligence</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-zinc-500 hover:text-white transition-colors text-sm tracking-wide">Manifesto</Link></li>
                            <li><Link href="/services" className="text-zinc-500 hover:text-white transition-colors text-sm tracking-wide">Capabilities</Link></li>
                            <li><Link href="/portfolio/refineria-di-korsou" className="text-zinc-500 hover:text-white transition-colors text-sm tracking-wide">Case Studies</Link></li>
                            <li><Link href="/faq" className="text-zinc-500 hover:text-white transition-colors text-sm tracking-wide">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-mono text-xs font-bold mb-8 tracking-[0.2em] uppercase text-zinc-600">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-zinc-500 text-sm">
                                <MapPin className="w-4 h-4 text-wealth-gold" />
                                <span className="text-zinc-400">Weston, FL</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-500 text-sm">
                                <span className="w-4 h-4 flex items-center justify-center text-wealth-gold font-bold text-xs">P.</span>
                                <span className="text-zinc-400">844.466.2665</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors cursor-pointer text-sm">
                                <Mail className="w-4 h-4 text-wealth-gold" />
                                <span className="text-zinc-400">info@socapcorp.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
                    <p>&copy; {new Date().getFullYear()} Socap Corp. Structure & Systems.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
