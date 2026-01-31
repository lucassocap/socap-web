"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity, AlertCircle, Users } from "lucide-react";

export function RefineryModel() {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-black border border-white/10 rounded-xl relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />

            {/* Card 1: The Scale */}
            <div className="col-span-1 bg-zinc-900/50 p-6 rounded-lg border border-white/5 flex flex-col justify-between">
                <div>
                    <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">Scope Scope</h3>
                    <div className="text-4xl font-black text-white">180,000 <span className="text-sm font-mono text-zinc-400 font-normal">BOPD</span></div>
                </div>

                <div className="mt-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Users className="w-5 h-5 text-wealth-gold" />
                        <span className="text-white font-bold">30+ Engineers</span>
                    </div>
                    <p className="text-xs text-zinc-500 font-mono">Simultaneous physical assessment</p>
                </div>
            </div>

            {/* Card 2: Financial Valuation */}
            <div className="col-span-1 bg-zinc-900/50 p-6 rounded-lg border border-white/5 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-wealth-gold/10 rounded-full blur-xl" />

                <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">Investment Definition</h3>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="text-5xl font-black text-wealth-gold tracking-tighter"
                >
                    $900M
                </motion.div>
                <div className="inline-flex items-center gap-2 mt-4 text-zinc-400 text-xs font-mono">
                    <Activity className="w-3 h-3 text-wealth-gold" />
                    <span>CAPEX + OPEX MODEL</span>
                </div>
            </div>

            {/* Card 3: The "Brutal" Monte Carlo S-Curves */}
            <div className="col-span-1 lg:col-span-3 h-[300px] bg-zinc-900/50 rounded-lg border border-white/5 p-6 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6 relative z-10">
                    <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Stochastic Margin Simulation (S-Curves)</h3>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-wealth-gold" />
                            <span className="text-[10px] text-zinc-400 uppercase">Continuous</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="text-[10px] text-zinc-400 uppercase">Discrete Events</span>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-full pb-8">
                    {/* S-Curves Generation */}
                    {[...Array(5)].map((_, i) => (
                        <motion.svg
                            key={i}
                            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
                            viewBox="0 0 100 50"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d={`M 0 50 C 40 50, 60 0, 100 ${10 + i * 5}`}
                                fill="none"
                                stroke="#D4AF37"
                                strokeWidth="0.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 3, delay: i * 0.5, ease: "easeInOut" }}
                            />
                        </motion.svg>
                    ))}

                    {/* The "Master" Curve */}
                    <motion.svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 50"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M 0 50 C 40 50, 60 0, 100 15"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                        />
                    </motion.svg>

                    {/* Discrete Events (Risk Spikes) */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 1, 0, 0] }}
                            transition={{ duration: 4, delay: 2 + i * 1.5, repeat: Infinity }}
                            className="absolute w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                            style={{
                                left: `${30 + i * 20}%`,
                                top: `${40 - i * 10}%`
                            }}
                        >
                            <AlertCircle className="absolute -top-6 -left-2 w-6 h-6 text-red-500 opacity-50" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
