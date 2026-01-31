"use client";

import { motion } from "framer-motion";

export function DataPipeline() {
    return (
        <div className="w-full h-[400px] bg-black relative overflow-hidden border border-white/10 rounded-xl flex items-center justify-center">

            <div className="flex items-center gap-12 relative z-10 w-full max-w-3xl justify-center">

                {/* Input: Chaos */}
                <div className="flex flex-col items-center gap-4">
                    <div className="grid grid-cols-3 gap-2 w-24 h-24">
                        {[...Array(9)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [0.8, 1.2, 0.8],
                                    backgroundColor: ["#333", "#555", "#333"]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                className="bg-zinc-800 rounded-sm"
                            />
                        ))}
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Raw Data</span>
                </div>

                {/* Processor: The Machine */}
                <div className="relative">
                    <div className="w-32 h-32 border border-wealth-gold/30 bg-wealth-gold/5 rounded-lg flex items-center justify-center relative backdrop-blur-sm">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="w-16 h-16 border-t-2 border-r-2 border-wealth-gold rounded-full"
                        />
                        <span className="absolute text-wealth-gold font-bold text-xs">SOCAP <br /> CORE</span>
                    </div>

                    {/* Particles Flowing In */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-x-full -ml-12 pointer-events-none overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                        />
                    </div>

                    {/* Particles Flowing Out */}
                    <div className="absolute top-1/2 right-0 w-full h-[2px] translate-x-full mr-12 pointer-events-none overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full bg-gradient-to-r from-transparent via-wealth-gold to-transparent opacity-100"
                        />
                    </div>
                </div>

                {/* Output: Intelligence */}
                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-24 h-24 border border-wealth-gold bg-wealth-gold/10 rounded-lg flex flex-col items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    >
                        <div className="w-12 h-1 bg-wealth-gold rounded-full" />
                        <div className="w-8 h-1 bg-wealth-gold/50 rounded-full" />
                        <div className="w-10 h-1 bg-wealth-gold/30 rounded-full" />
                    </motion.div>
                    <span className="text-xs font-mono text-wealth-gold uppercase tracking-widest">Intelligence</span>
                </div>

            </div>

        </div>
    );
}
