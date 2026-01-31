"use client";

import { motion } from "framer-motion";
import { Settings, FileText, CheckCircle, Activity, Calculator } from "lucide-react";

export function EngineeringSchematic() {
    const blueprintVars = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: "linear" as const } }
    };

    const nodes = [
        { id: 1, title: "Technical Audit", icon: Settings, x: 20, y: 30, delay: 0 },
        { id: 2, title: "Fin. Modeling", icon: Calculator, x: 50, y: 70, delay: 1 },
        { id: 3, title: "Execution Plan", icon: FileText, x: 80, y: 30, delay: 2 }
    ];

    return (
        <div className="w-full h-[400px] bg-[#0a0a0a] border border-white/10 rounded-xl relative overflow-hidden p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            <h3 className="absolute top-4 left-6 text-blue-500 font-mono text-xs uppercase tracking-widest z-20 border border-blue-500/30 px-2 py-1 bg-blue-500/10">
                Start-up Sequence: Active
            </h3>

            {/* Connecting Lines (The Circuit) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <motion.path
                    d="M 20% 30% L 50% 70% L 80% 30% L 50% 10% Z"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    variants={blueprintVars}
                    initial="hidden"
                    animate="visible"
                />
                {/* Animated Pulses */}
                <circle r="4" fill="#60a5fa">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 20% 30% L 50% 70% L 80% 30% L 50% 10% Z" />
                </circle>
            </svg>

            {/* Nodes */}
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: node.delay, type: "spring" }}
                    className="relative z-20 flex flex-col items-center justify-center p-6 bg-black/80 border border-blue-500/30 rounded-lg backdrop-blur-sm self-center text-center group"
                    style={{ gridColumn: node.id === 2 ? "1 / span 3" : "auto", justifySelf: "center", width: "fit-content" }}
                >
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500 flex items-center justify-center mb-3 group-hover:bg-blue-500/30 transition-colors">
                        <node.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1">{node.title}</h4>
                    <div className="h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
                </motion.div>
            ))}

            {/* Success Adjudication Overlay */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-green-500/10 border border-green-500 text-green-500 px-6 py-3 rounded backdrop-blur-md flex items-center gap-3"
            >
                <CheckCircle className="w-6 h-6 animate-bounce" />
                <span className="font-mono font-bold uppercase tracking-widest text-lg">Adjudicated</span>
            </motion.div>

        </div>
    );
}
