"use client";

import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSlider } from "@/components/sections/HeroSlider";

import { Portfolio } from "@/components/sections/Portfolio";
import { TechStack } from "@/components/sections/TechStack";
import { OurPeople } from "@/components/sections/OurPeople";
import { Testimonials } from "@/components/sections/Testimonials";
import Link from "next/link";
import { Activity, TrendingUp, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-platinum font-sans selection:bg-wealth-gold/30 selection:text-white">
      <Navbar />

      <HeroSlider />



      {/* Intro / Philosophy */}
      <section className="py-32 bg-obsidian-surface border-b border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">
            "We don't just work with leaders. <br /> <span className="text-zinc-500">We forge them."</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-left mt-20">
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-wealth-gold/5 rounded-full flex items-center justify-center group-hover:bg-wealth-gold/20 transition-colors">
                <Activity className="w-8 h-8 text-wealth-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white">Analyze.</h3>
              <p className="text-zinc-400 font-light leading-relaxed">We deep dive into your business mechanics to find hidden strengths and critical friction points.</p>
            </div>
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-wealth-gold/5 rounded-full flex items-center justify-center group-hover:bg-wealth-gold/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-wealth-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white">Optimize.</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Implement cutting-edge processes and technology to maximize efficiency and cash flow.</p>
            </div>
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-wealth-gold/5 rounded-full flex items-center justify-center group-hover:bg-wealth-gold/20 transition-colors">
                <ShieldCheck className="w-8 h-8 text-wealth-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white">Scale.</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Execute aggressive growth strategies with a solid financial foundation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <Portfolio />

      {/* TECH STACK TICKER */}
      <TechStack />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* Our People / Multidisciplinary Intelligence */}
      <OurPeople />

      <section className="py-32 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none tracking-tighter">
            READY TO <span className="text-wealth-gold">EVOLVE?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed font-light">
            Whether you are a startup needing a business plan or a corporation requiring a turnaround, we have the tools.
          </p>
          <Link href="/services" className="text-wealth-gold font-bold tracking-widest hover:text-white transition-colors border-b border-wealth-gold pb-1 text-sm">
            EXPLORE ALL SERVICES
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
