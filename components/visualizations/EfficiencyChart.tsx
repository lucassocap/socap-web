"use client";

import { motion } from "framer-motion";

export function EfficiencyChart() {
    return (
        <div className="w-full h-[400px] bg-black relative overflow-hidden border border-white/10 rounded-xl p-8 flex flex-col justify-end">
            <h3 className="text-white text-sm font-bold uppercase mb-8 absolute top-8 left-8">Performance Delta</h3>

            <div className="flex items-end justify-center gap-16 h-[250px] w-full max-w-2xl mx-auto border-b border-white/10 pb-4 relative">

                {/* Grid Lines */}
                <div className="absolute inset-0 border-l border-white/5 pointer-events-none" />

                {/* Before */}
                <div className="flex flex-col items-center gap-4 w-24">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "40%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full bg-zinc-800 rounded-t-sm relative group"
                    >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-zinc-500 font-mono text-xs">40%</span>
                    </motion.div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest text-center">Baseline<br />Efficiency</span>
                </div>

                {/* After */}
                <div className="flex flex-col items-center gap-4 w-24">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "95%" }}
                        transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
                        className="w-full bg-wealth-gold rounded-t-sm relative shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-wealth-gold font-bold font-mono text-xs">95%</span>

                        {/* Pulsing Highlight */}
                        <motion.div
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-white mix-blend-overlay"
                        />
                    </motion.div>
                    <span className="text-xs font-mono text-white uppercase tracking-widest text-center">Socap<br />Optimized</span>
                </div>

            </div>
        </div>
    );
}
