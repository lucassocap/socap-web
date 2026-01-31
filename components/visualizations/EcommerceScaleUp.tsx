"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, TrendingUp, Globe, Truck, ShieldCheck, Scale } from "lucide-react";

export function EcommerceScaleUp() {
    const containerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="w-full h-[400px] bg-zinc-950 border border-white/10 rounded-xl relative overflow-hidden p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Background Network FX */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full opacity-20">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Column 1: The Foundation (Legal/Compliance) */}
            <div className="relative z-10 flex flex-col justify-center gap-6">
                <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest pl-2 border-l-2 border-wealth-gold">Foundation Layer</h3>
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {[
                        { icon: Scale, text: "Legal Structuring", sub: "US Liability Shield" },
                        { icon: ShieldCheck, text: "FDA Clearance", sub: "Regulatory Approval" },
                        { icon: Truck, text: "Supply Chain", sub: "FBA Integration" }
                    ].map((item, i) => (
                        <motion.div key={i} variants={itemVars} className="bg-zinc-900/80 border border-white/10 p-4 rounded flex items-center gap-4 backdrop-blur-sm">
                            <div className="p-2 bg-blue-500/10 rounded-full text-blue-400">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">{item.text}</div>
                                <div className="text-zinc-500 text-[10px] font-mono uppercase">{item.sub}</div>
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Column 2: The Engine (Digital Activity) */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Central Hub Animation */}
                <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                    <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-4 border border-wealth-gold/30 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />

                    <div className="relative z-20 bg-black p-4 rounded-full border border-wealth-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                        <Globe className="w-10 h-10 text-wealth-gold" />
                    </div>

                    {/* Orbiting Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 z-10"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-zinc-900 p-1 rounded-full border border-white/20">
                            <ShoppingCart className="w-4 h-4 text-white" />
                        </div>
                    </motion.div>
                </div>

                <div className="text-center">
                    <h4 className="text-white font-bold tracking-widest uppercase text-sm">Active Markets</h4>
                    <div className="flex gap-2 justify-center mt-2">
                        <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-zinc-300 font-mono">AMAZON_US</span>
                        <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-zinc-300 font-mono">DTC_WEB</span>
                    </div>
                </div>
            </div>

            {/* Column 3: The Result (Growth Curve) */}
            <div className="relative z-10 flex flex-col justify-end pb-4">
                <div className="absolute top-8 right-0 text-right">
                    <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Revenue Velocity</h3>
                    <div className="text-4xl font-black text-white mt-1">$3.0<span className="text-wealth-gold">MM</span></div>
                    <div className="flex items-center justify-end gap-1 text-green-500 text-xs font-mono mt-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>+300% YoY</span>
                    </div>
                </div>

                {/* Graph Area */}
                <div className="h-[200px] w-full relative border-l border-b border-white/10 mt-auto">
                    <motion.svg
                        className="absolute inset-0 overflow-visible"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        {/* Gradient Fill */}
                        <defs>
                            <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        <motion.path
                            d="M 0 100 C 30 100, 40 80, 60 50 S 80 20, 100 0 L 100 100 Z"
                            fill="url(#goldGradient)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        />
                        <motion.path
                            d="M 0 100 C 30 100, 40 80, 60 50 S 80 20, 100 0"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        />
                    </motion.svg>

                    {/* Milestones */}
                    <div className="absolute bottom-0 left-[30%] h-full border-r border-dashed border-white/10" />
                    <div className="absolute bottom-0 left-[60%] h-full border-r border-dashed border-white/10" />

                    <div className="absolute bottom-2 left-[32%] text-[8px] text-zinc-600 font-mono -rotate-90 origin-bottom-left">FDA_CLEAR</div>
                    <div className="absolute bottom-2 left-[62%] text-[8px] text-zinc-600 font-mono -rotate-90 origin-bottom-left">AMZN_LAUNCH</div>
                </div>
            </div>

        </div>
    );
}
