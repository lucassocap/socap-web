"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "/images/portfolio/refineria-isla-schottegat.png", // Custom Generated Refineria
        title: "Business \nEvolution.",
        subtitle: "We architect the systems that allow your enterprise to make the next quantum leap.",
        cta: "VIEW EXPERTISE"
    },
    {
        id: 2,
        image: "/images/portfolio/pan-american-hero.png", // Custom Generated Field Operations
        title: "Capital \nDeployment.",
        subtitle: "De-risking major investment campaigns with subsurface technical rigor.",
        cta: "EXPLORE APPRAISAL"
    },
    {
        id: 3,
        image: "/images/portfolio/medialfa-hero.png", // Custom Generated MRI
        title: "Network \nDominance.",
        subtitle: "Scaling from fragmented operations to a coherent franchise empire.",
        cta: "SEE EXPANSION"
    }
];

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-80" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-4xl">
                    <motion.div
                        key={`text-${currentSlide}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-wealth-gold/30 bg-wealth-gold/5 backdrop-blur-sm">
                            <span className="text-wealth-gold text-xs font-mono font-bold tracking-[0.2em] uppercase">
                                Operational Control
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9] uppercase whitespace-pre-line">
                            {slides[currentSlide].title}
                        </h1>

                        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mb-12 font-light border-l-4 border-wealth-gold pl-6">
                            {slides[currentSlide].subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link href="#portfolio">
                                <button className="group relative px-10 py-5 bg-wealth-gold text-obsidian font-bold text-lg tracking-wider overflow-hidden rounded-sm hover:bg-wealth-gold-light transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]">
                                    <span className="relative z-10 flex items-center gap-3">
                                        VIEW EXPERTISE <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </button>
                            </Link>

                            <Link href="/services">
                                <button className="group px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-lg tracking-wider rounded-sm hover:border-white hover:bg-white/5 transition-all flex items-center gap-3">
                                    OUR SERVICES <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-500 rounded-full ${index === currentSlide ? "w-16 bg-wealth-gold" : "w-4 bg-white/20 hover:bg-white/40"}`}
                    />
                ))}
            </div>
        </section>
    );
}
