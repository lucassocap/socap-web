"use client";

import { motion } from "framer-motion";
import { Layers, Search, TrendingUp, DollarSign, Droplets, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function ReserveEvaluation() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const phases = [
        {
            title: "Geophysics",
            subtitle: "Seismic Acquisition",
            icon: Layers,
            metric: "2D/3D Data",
            color: "text-blue-500",
            borderColor: "border-blue-500/50"
        },
        {
            title: "Exploration",
            subtitle: "Wildcat Drilling",
            icon: Search,
            metric: "Risk Analysis",
            color: "text-purple-500",
            borderColor: "border-purple-500/50"
        },
        {
            title: "Appraisal",
            subtitle: "Field Delineation",
            icon: TrendingUp,
            metric: "P1/P2 Reserves",
            color: "text-orange-500",
            borderColor: "border-orange-500/50"
        },
        {
            title: "Investment",
            subtitle: "CAPEX Deployment",
            icon: DollarSign,
            metric: "$60MM Executed",
            color: "text-wealth-gold",
            borderColor: "border-wealth-gold"
        }
    ];

    return (
        <div className="w-full h-[500px] bg-zinc-950 border border-white/10 rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-8">

            {/* Background Minimal Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

            {/* Title */}
            <div className="absolute top-8 left-8">
                <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Reserve Evaluation Protocol</h3>
            </div>

            {/* Central Flow */}
            <div className="flex items-center gap-4 relative z-10 w-full max-w-4xl justify-between px-4">
                {phases.map((phase, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 relative group">
                        {/* Connecting Line */}
                        {i < phases.length - 1 && (
                            <div className={`absolute top-8 left-1/2 w-full h-[2px] bg-zinc-800 -z-10 ${i < step ? "bg-wealth-gold transition-colors duration-1000" : ""}`} style={{ width: "calc(100% + 2rem)" }} />
                        )}

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{
                                scale: i === step ? 1.2 : 1,
                                opacity: i <= step ? 1 : 0.3,
                                borderColor: i === step ? phase.color.replace("text-", "border-") : "border-zinc-800"
                            }}
                            className={`w-16 h-16 rounded-full bg-zinc-900 border-2 flex items-center justify-center relative transition-colors duration-500 ${i <= step ? phase.borderColor : "border-white/10"}`}
                        >
                            <phase.icon className={`w-8 h-8 ${i <= step ? phase.color : "text-zinc-600"}`} />

                            {/* Active Pulse */}
                            {i === step && (
                                <div className={`absolute inset-0 rounded-full border ${phase.color.replace("text-", "border-")} animate-ping opacity-20`} />
                            )}
                        </motion.div>

                        <div className={`text-center transition-opacity duration-500 ${i <= step ? "opacity-100" : "opacity-30"}`}>
                            <div className="text-white font-bold text-sm uppercase tracking-wider">{phase.title}</div>
                            <div className="text-zinc-500 text-xs font-mono mt-1">{phase.subtitle}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dynamic Result Panel */}
            <div className="absolute bottom-0 w-full bg-zinc-900/50 border-t border-white/5 p-8 flex justify-between items-center backdrop-blur-sm">

                <div className="flex items-center gap-6">
                    <div className="text-right">
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Target Production</div>
                        <div className="text-3xl font-black text-white font-mono flex items-baseline gap-2">
                            20,000 <span className="text-sm font-bold text-zinc-500">BPD</span>
                        </div>
                    </div>
                    <div className="h-10 w-[1px] bg-white/10" />
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Appraisal Value</div>
                        <div className="text-3xl font-black text-wealth-gold font-mono flex items-baseline gap-2">
                            $60 <span className="text-sm font-bold text-wealth-gold">MM</span>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    INVESTMENT DECISION: APPROVED
                </div>
            </div>

        </div>
    );
}
