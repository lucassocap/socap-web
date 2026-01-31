"use client";

import { motion } from "framer-motion";
import { Utensils, Clock, DollarSign, TrendingUp, XCircle, CheckCircle2, RefreshCw, ChefHat, Wallet } from "lucide-react";
import { useState, useEffect } from "react";

export function HospitalityCashFlow() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 4000); // 4 seconds per step
        return () => clearInterval(timer);
    }, []);

    const steps = [
        {
            title: "THE CHAOS",
            subtitle: "Silent killers of profit.",
            color: "text-red-500",
            content: (
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center justify-between bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                            <Clock className="w-6 h-6 text-red-500" />
                            <div>
                                <div className="font-bold text-red-500">Uncontrolled Overtime</div>
                                <div className="text-xs text-red-300">Labor costs &gt; 35%</div>
                            </div>
                        </div>
                        <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex items-center justify-between bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                            <Utensils className="w-6 h-6 text-red-500" />
                            <div>
                                <div className="font-bold text-red-500">Inventory Waste</div>
                                <div className="text-xs text-red-300">Spoilage & Theft</div>
                            </div>
                        </div>
                        <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                </div>
            )
        },
        {
            title: "THE INTERVENTION",
            subtitle: "Installing the operating system.",
            color: "text-blue-400",
            content: (
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center justify-between bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center font-bold text-white text-xs">TOAST</div>
                            <div>
                                <div className="font-bold text-white">POS Architecture</div>
                                <div className="text-xs text-zinc-400">Centralized Data & Control</div>
                            </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex items-center justify-between bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                            <ChefHat className="w-6 h-6 text-blue-400" />
                            <div>
                                <div className="font-bold text-white">Menu Engineering</div>
                                <div className="text-xs text-zinc-400">High Margin Focus</div>
                            </div>
                        </div>
                        <RefreshCw className="w-5 h-5 text-blue-500 animate-spin-slow" />
                    </div>
                </div>
            )
        },
        {
            title: "THE OPTIMIZATION",
            subtitle: "Converting waste into equity.",
            color: "text-green-400",
            content: (
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center justify-between p-4">
                        <div className="text-sm text-zinc-400">Inventory Costs</div>
                        <div className="flex items-center gap-2">
                            <span className="text-red-500 line-through">High</span>
                            <ArrowRightIcon />
                            <span className="text-green-400 font-bold">Optimized</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-900/10 border border-green-500/20 rounded-lg">
                        <div className="text-sm text-zinc-400">Overtime Spend</div>
                        <div className="text-green-400 font-bold font-mono">-$300,000 / yr</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-900/10 border border-green-500/20 rounded-lg">
                        <div className="text-sm text-zinc-400">Food Waste</div>
                        <div className="text-green-400 font-bold font-mono">-$300,000 / yr</div>
                    </div>
                </div>
            )
        },
        {
            title: "THE RESULT",
            subtitle: "Liquidity for expansion.",
            color: "text-wealth-gold",
            content: (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                    <div className="relative">
                        <Wallet className="w-16 h-16 text-wealth-gold mb-2" />
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 1 }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -top-2 -right-2 text-green-500 font-bold text-xl"
                        >
                            $
                        </motion.div>
                    </div>

                    <h2 className="text-4xl font-black text-white">$600,000+</h2>
                    <div className="text-sm font-mono text-wealth-gold uppercase tracking-widest">Annual Cash Recovered</div>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-xs text-zinc-400 mt-4">
                        Creating scalability for franchises.
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="w-full h-[500px] bg-zinc-950 border border-white/10 rounded-xl relative overflow-hidden flex flex-col md:flex-row">

            {/* Left Panel: Steps Indicator */}
            <div className="w-full md:w-1/3 bg-zinc-900/50 p-8 flex flex-col justify-center space-y-6 border-b md:border-b-0 md:border-r border-white/5">
                {steps.map((s, i) => (
                    <div
                        key={i}
                        className={`transition-all duration-500 cursor-pointer group ${i === step ? "opacity-100 translate-x-2" : "opacity-30 hover:opacity-70"}`}
                        onClick={() => setStep(i)}
                    >
                        <div className={`text-xs font-mono uppercase tracking-widest mb-1 ${s.color}`}>
                            Step 0{i + 1}
                        </div>
                        <div className="text-lg font-bold text-white">{s.title}</div>
                        {i === step && (
                            <motion.div
                                layoutId="active-indicator"
                                className="text-sm text-zinc-400 mt-1"
                            >
                                {s.subtitle}
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            {/* Right Panel: Active Visualization */}
            <div className="w-full md:w-2/3 p-8 md:p-12 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />

                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md relative z-10"
                >
                    {steps[step].content}
                </motion.div>
            </div>

        </div>
    );
}

function ArrowRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
}
