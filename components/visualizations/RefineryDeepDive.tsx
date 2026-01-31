"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Users,
    Settings,
    FileText,
    CheckCircle2,
    Activity,
    TrendingUp,
    Zap,
    AlertTriangle,
    Database
} from "lucide-react";

export function RefineryDeepDive() {
    const [eventTriggered, setEventTriggered] = useState(false);
    const controls = useAnimation();

    // Sequence for the "Process" (Top Section)
    const processVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.8, duration: 0.8, ease: "easeOut" as const }
        })
    };

    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 2.5, ease: "easeInOut" as const }
        }
    };

    // Trigger the "Cat Cracker" event loop
    useEffect(() => {
        const sequence = async () => {
            // Wait for initial load
            await new Promise(r => setTimeout(r, 4000));

            // Trigger Event
            setEventTriggered(true);

            // Reset after some time to loop? Or just keep it one-shot for impact?
            // Let's loop it for the "live" feel
            setTimeout(() => setEventTriggered(false), 8000);
        };

        const interval = setInterval(() => {
            sequence();
        }, 12000); // Loop every 12 seconds

        sequence(); // discrete start
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden relative grid grid-rows-[auto_1fr] shadow-2xl">
            {/* GLOBAL BACKGROUND INTERFACE */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-wealth-gold to-transparent opacity-50" />

            {/* --- TOP SECTION: THE ENGINEERING LIFECYCLE --- */}
            <div className="p-8 border-b border-white/5 relative bg-zinc-900/20 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-12">
                    <h3 className="text-wealth-gold font-mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Project Lifecycle: Active
                    </h3>
                    <div className="flex gap-4 font-mono text-[10px] text-zinc-500">
                        <span>ENG_TEAM: 30+</span>
                        <span>EST_CAPEX: $900M</span>
                        <span>STATUS: ADJUDICATED</span>
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 px-4 md:px-12">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800 -z-10 hidden md:block">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                            className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent w-1/2"
                        />
                    </div>

                    {/* Nodes */}
                    {[
                        { id: 1, title: "Vendor\nCoordination", icon: Users, color: "text-blue-400", border: "border-blue-500/50" },
                        { id: 2, title: "Technical\nLevantamiento", icon: Settings, color: "text-purple-400", border: "border-purple-500/50" },
                        { id: 3, title: "Detailed\nEngineering", icon: Database, color: "text-cyan-400", border: "border-cyan-500/50" },
                        { id: 4, title: "Financial\nValuation", icon: TrendingUp, color: "text-wealth-gold", border: "border-wealth-gold/50" },
                        { id: 5, title: "Execution\nPlan", icon: CheckCircle2, color: "text-green-400", border: "border-green-500/50" },
                    ].map((node, i) => (
                        <motion.div
                            key={node.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={processVariants}
                            className={`relative z-10 w-32 h-32 flex flex-col items-center justify-center bg-black border ${node.border} rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] group hover:scale-105 transition-transform duration-500`}
                        >
                            <node.icon className={`w-8 h-8 mb-3 ${node.color}`} />
                            <span className="text-[10px] font-bold uppercase text-center text-zinc-300 font-mono leading-tight whitespace-pre-line">
                                {node.title}
                            </span>
                            {/* Pulse effect */}
                            <div className={`absolute inset-0 rounded-xl ${node.border} opacity-0 group-hover:opacity-100 animate-ping duration-1000`} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- BOTTOM SECTION: THE "BRUTAL" MONTE CARLO --- */}
            <div className="relative h-[400px] p-8 overflow-hidden bg-black flex flex-col">
                <div className="flex justify-between items-start z-20">
                    <div>
                        <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">Stochastic Margin Simulation</h3>
                        <h2 className="text-3xl font-black text-white">The "Brutal" Model</h2>
                    </div>

                    {/* Discrete Event Indicator */}
                    <motion.div
                        animate={{ opacity: eventTriggered ? 1 : 0.3, scale: eventTriggered ? 1.1 : 1 }}
                        className="flex items-center gap-3 bg-red-900/20 border border-red-500/50 px-4 py-2 rounded"
                    >
                        <AlertTriangle className={`w-5 h-5 ${eventTriggered ? "text-red-500 animate-pulse" : "text-red-900"}`} />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Discrete Event</span>
                            <span className="text-xs text-white font-mono">CAT CRACKER START-UP</span>
                        </div>
                    </motion.div>
                </div>

                {/* The Graph Area */}
                <div className="absolute inset-0 top-24 bottom-0 left-0 right-0 z-10">
                    {/* Grid Lines */}
                    <div className="w-full h-full border-t border-white/5 relative">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="absolute w-full border-t border-white/5" style={{ top: `${(i + 1) * 20}%` }} />
                        ))}
                    </div>

                    {/* S-Curves Generation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                        {/* Base Scenario Curves (Faint) */}
                        {[...Array(8)].map((_, i) => (
                            <motion.path
                                key={`base-${i}`}
                                d={`M 0 350 C 300 350, 500 ${eventTriggered ? 100 : 250}, 1200 ${eventTriggered ? 50 : 200}`}
                                fill="none"
                                stroke={eventTriggered ? "#D4AF37" : "#3f3f46"}
                                strokeWidth={eventTriggered ? 2 : 1}
                                strokeOpacity={eventTriggered ? 0.8 : 0.2}
                                initial={{ pathLength: 0 }}
                                animate={{
                                    pathLength: 1,
                                    d: `M 0 350 C 300 ${350 - i * 10}, 500 ${eventTriggered ? 100 - i * 20 : 250 - i * 10}, 1200 ${eventTriggered ? 50 - i * 10 : 200 - i * 20}`
                                }}
                                transition={{
                                    duration: 2, // Smooth morphing
                                    ease: "easeInOut"
                                }}
                            />
                        ))}

                        {/* The "Golden Path" - Optimized Scenario */}
                        <motion.path
                            d={`M 0 350 C 300 340, 600 ${eventTriggered ? 80 : 240}, 1200 ${eventTriggered ? 20 : 180}`}
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="4"
                            filter="url(#glow)"
                            initial={{ pathLength: 0 }}
                            animate={{
                                pathLength: 1,
                                d: `M 0 350 C 300 340, 600 ${eventTriggered ? 80 : 240}, 1200 ${eventTriggered ? 20 : 180}`
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />

                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>

                    {/* Event Marker overlay */}
                    {eventTriggered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-[25%] left-[45%] flex flex-col items-center"
                        >
                            <div className="w-12 h-12 bg-red-500 rounded-full blur-2xl absolute opacity-50" />
                            <Zap className="w-8 h-8 text-white fill-yellow-400 relative z-10 animate-bounce" />
                            <span className="mt-2 bg-black/80 px-2 py-1 border border-white/20 text-[10px] uppercase text-white font-mono backdrop-blur-md">
                                IGNITION SEQUENCE
                            </span>
                        </motion.div>
                    )}
                </div>

                {/* Value Counter (Bottom Right) */}
                <div className="absolute bottom-8 right-8 text-right z-20">
                    <span className="block text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">Projected Valuation</span>
                    <motion.div
                        key={eventTriggered ? "high" : "low"}
                        initial={{ opacity: 0.5, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl font-black text-white tracking-tighter"
                    >
                        {eventTriggered ? "$942M" : "$890M"}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
