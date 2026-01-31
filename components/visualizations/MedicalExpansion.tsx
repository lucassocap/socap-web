"use client";

import { motion } from "framer-motion";
import { Activity, Globe, HeartPulse, Building2, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export function MedicalExpansion() {
    const [locations, setLocations] = useState<number[]>([1]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLocations(prev => {
                if (prev.length < 30) {
                    return [...prev, prev.length + 1];
                }
                return [1]; // Reset
            });
        }, 300); // Fast expansion

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[500px] bg-zinc-950 border border-white/10 rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-8">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Central Hub */}
            <div className="relative z-10 flex flex-col items-center mb-12">
                <div className="w-24 h-24 bg-blue-500/10 rounded-full border border-blue-500 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-blue-500 animate-ping opacity-20" />
                    <Building2 className="w-10 h-10 text-blue-500" />
                </div>
                <div className="mt-4 text-center">
                    <h3 className="text-white font-bold text-xl uppercase tracking-widest">Medialfa HQ</h3>
                    <p className="text-blue-400 font-mono text-sm">Franchise Control Center</p>
                </div>
            </div>

            {/* Expansion Grid */}
            <div className="relative w-full max-w-3xl h-32 flex items-center justify-center flex-wrap gap-4 z-10">
                {locations.map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    />
                ))}
            </div>

            {/* Metrics Panel */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-zinc-900/80 backdrop-blur-md border-t border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Globe className="w-8 h-8 text-zinc-500" />
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest">Network Scale</div>
                        <div className="text-2xl font-bold text-white font-mono">{locations.length > 29 ? "30+" : locations.length} Locations</div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <TrendingUp className="w-8 h-8 text-wealth-gold" />
                    <div>
                        <div className="text-xs text-wealth-gold uppercase tracking-widest">Growth Factor</div>
                        <div className="text-2xl font-bold text-white font-mono">4.0x</div>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 font-mono text-xs">
                        ERP: ACTIVE
                    </div>
                    <div className="px-4 py-2 bg-wealth-gold/10 border border-wealth-gold/30 rounded text-wealth-gold font-mono text-xs">
                        VALUATION: SECURED
                    </div>
                </div>
            </div>

        </div>
    );
}
