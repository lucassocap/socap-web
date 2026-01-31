"use client";

import { motion } from "framer-motion";

export function StrategyTimeline() {
    const steps = ["Analysis", "Structure", "Execution", "Scale"];

    return (
        <div className="w-full h-[300px] bg-black relative overflow-hidden border border-white/10 rounded-xl flex items-center justify-center p-8">

            <div className="relative w-full max-w-4xl flex justify-between items-center">

                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800 -translate-y-1/2 z-0">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-wealth-gold"
                    />
                </div>

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.5, duration: 0.5 }}
                        className="relative z-10 flex flex-col items-center gap-4 group"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.5 + 0.2, type: "spring" }}
                            className="w-4 h-4 rounded-full bg-black border-2 border-wealth-gold group-hover:scale-150 transition-transform duration-300"
                        />
                        <div className="absolute top-8">
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest group-hover:text-white transition-colors">{step}</span>
                        </div>
                        <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[10px] font-bold text-wealth-gold bg-wealth-gold/10 px-2 py-1 rounded border border-wealth-gold/20">PHASE 0{i + 1}</span>
                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
    );
}
