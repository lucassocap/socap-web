"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, DollarSign, Activity } from "lucide-react";

export function MonteCarloDashboard() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-black border border-white/10 rounded-xl relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />

            {/* Card 1: AR Collapse */}
            <div className="bg-zinc-900/50 p-8 rounded-lg border border-white/5 relative group">
                <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6">Accounts Receivable (Days)</h3>
                <div className="flex items-end gap-8 h-32 relative">
                    {/* 180 Days */}
                    <div className="w-16 h-full bg-zinc-800 rounded-t-sm relative">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-zinc-500 font-mono text-sm">180</span>
                    </div>

                    {/* Arrow */}
                    <div className="mb-8">
                        <TrendingDown className="w-8 h-8 text-wealth-gold" />
                    </div>

                    {/* 90 Days */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "50%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="w-16 h-1/2 bg-wealth-gold rounded-t-sm relative shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-wealth-gold font-bold font-mono text-xl">90</span>
                    </motion.div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-zinc-600 font-mono">VELOCITY INCREASED</div>
            </div>

            {/* Card 2: Cashflow Impact */}
            <div className="bg-zinc-900/50 p-8 rounded-lg border border-white/5 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <DollarSign className="w-32 h-32 text-white" />
                </div>

                <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">Liquidity Released</h3>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-6xl font-black text-white tracking-tighter"
                >
                    $5.0<span className="text-wealth-gold">M</span>
                </motion.div>
                <div className="inline-flex items-center gap-2 mt-4 text-green-500 text-sm font-mono bg-green-500/10 w-fit px-2 py-1 rounded">
                    <TrendingUp className="w-3 h-3" />
                    <span>IMMEDIATE IMPACT</span>
                </div>
            </div>

            {/* Card 3: Monte Carlo Simulation Visual */}
            <div className="col-span-1 md:col-span-2 bg-zinc-900/50 p-8 rounded-lg border border-white/5 h-[300px] relative overflow-hidden flex flex-col">
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Monte Carlo Probability Cloud</h3>
                    <div className="flex items-center gap-2 text-wealth-gold text-xs font-mono">
                        <Activity className="w-3 h-3" />
                        <span>SIMULATION ACTIVE</span>
                    </div>
                </div>

                {/* Simulation Graph */}
                <div className="flex-1 relative w-full h-full flex items-end">
                    {/* Generate 20 random paths */}
                    {[...Array(20)].map((_, i) => (
                        <motion.svg
                            key={i}
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d={`M 0 100 Q 25 ${80 + Math.random() * 20} 50 ${60 + Math.random() * 20} T 100 ${20 + Math.random() * 40}`}
                                fill="none"
                                stroke={i === 19 ? "#D4AF37" : "rgba(255,255,255,0.05)"}
                                strokeWidth={i === 19 ? "0.5" : "0.2"}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, delay: i * 0.05, ease: "linear" }}
                            />
                        </motion.svg>
                    ))}

                    {/* The Optimized Path Highlight */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, delay: 1 }}
                        className="h-[1px] bg-wealth-gold/20 absolute top-1/2 left-0 w-full border-t border-dashed border-wealth-gold/50"
                    />
                    <span className="absolute right-2 top-[45%] text-[10px] text-wealth-gold font-mono bg-black/50 px-1">TARGET</span>
                </div>

            </div>
        </div>
    );
}
