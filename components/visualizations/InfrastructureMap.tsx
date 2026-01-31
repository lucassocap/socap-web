"use client";

import { motion } from "framer-motion";

export function InfrastructureMap() {
    return (
        <div className="w-full h-[500px] bg-black relative overflow-hidden border border-white/10 rounded-xl">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="w-32 h-32 rounded-full border-2 border-wealth-gold/50 bg-wealth-gold/10 flex items-center justify-center relative z-10"
                >
                    <div className="w-24 h-24 rounded-full border border-wealth-gold animate-pulse bg-wealth-gold/20 flex items-center justify-center">
                        <span className="text-wealth-gold font-bold text-xs tracking-widest">CORE</span>(Refinery)
                    </div>
                    {/* Spinning Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full w-[140%] h-[140%] -top-[20%] -left-[20%]"
                    />
                </motion.div>
            </div>

            {/* Satellites (Storage Terminals) */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 + 1, duration: 0.5 }}
                    className="absolute w-16 h-16 rounded-full border border-white/30 bg-white/5 flex items-center justify-center"
                    style={{
                        top: `${50 + 35 * Math.sin((i * Math.PI) / 2)}%`,
                        left: `${50 + 35 * Math.cos((i * Math.PI) / 2)}%`,
                        transform: "translate(-50%, -50%)"
                    }}
                >
                    <div className="w-2 h-2 bg-white rounded-full animate-ping absolute" />
                    <span className="text-[10px] text-zinc-400 mt-8 font-mono">NODE_{i + 1}</span>
                </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {[0, 1, 2, 3].map((i) => (
                    <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + 35 * Math.cos((i * Math.PI) / 2)}%`}
                        y2={`${50 + 35 * Math.sin((i * Math.PI) / 2)}%`}
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: i * 0.2 + 0.5, duration: 1 }}
                    />
                ))}
            </svg>

            {/* Overlay Text */}
            <div className="absolute top-4 left-4 p-4 bg-black/80 border border-white/10">
                <h3 className="text-white text-sm font-bold uppercase">Infrastructure Logic</h3>
                <p className="text-zinc-500 text-xs font-mono mt-1">Status: OPERATIONAL</p>
            </div>
        </div>
    );
}
