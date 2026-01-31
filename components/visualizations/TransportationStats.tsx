"use client";

import { motion } from "framer-motion";
import { Truck, TrendingUp, Droplets, Map, DollarSign, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export function TransportationStats() {
    const [fuelSaved, setFuelSaved] = useState(0);
    const [valuation, setValuation] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setFuelSaved(prev => (prev < 400 ? prev + 5 : 400));
            setValuation(prev => (prev < 10 ? prev + 0.1 : 10));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Operational Rigor */}
            <div className="bg-zinc-900 border border-white/5 p-8 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Truck className="w-48 h-48 text-zinc-500" />
                </div>

                <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-8">Operational Core</h3>

                <div className="space-y-6 relative z-10">
                    {/* Fuel Metric */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                                <Droplets className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <div className="text-sm text-zinc-400">Fuel Leakage Plugged</div>
                                <div className="text-2xl font-bold text-white font-mono">
                                    ${fuelSaved}k <span className="text-xs text-zinc-500">/ yr</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Route Metric */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                <Map className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <div className="text-sm text-zinc-400">Route Efficiency</div>
                                <div className="text-2xl font-bold text-white font-mono">
                                    94% <span className="text-xs text-zinc-500">optimized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Valuation Impact */}
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-wealth-gold/20 p-8 rounded-xl relative overflow-hidden flex flex-col justify-between">
                <div>
                    <h3 className="text-wealth-gold font-mono text-xs uppercase tracking-widest mb-2">Enterprise Value</h3>
                    <p className="text-zinc-500 text-sm">Direct correlation to operational control.</p>
                </div>

                <div className="flex flex-col items-center justify-center py-12">
                    <div className="text-6xl md:text-8xl font-black text-white tracking-tighter flex items-center">
                        <span className="text-4xl text-zinc-600 mr-2">$</span>
                        {valuation.toFixed(1)}
                        <span className="text-4xl text-wealth-gold ml-2">M</span>
                    </div>

                    <div className="w-full bg-zinc-800 h-1 mt-8 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-wealth-gold"
                            initial={{ width: "30%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4, ease: "easeOut" }}
                        />
                    </div>
                    <div className="flex justify-between w-full text-xs font-mono text-zinc-500 mt-2">
                        <span>$3M (Legacy)</span>
                        <span className="text-wealth-gold font-bold">$10M (Optimized)</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-wealth-gold text-xs font-bold uppercase tracking-widest justify-center animate-pulse">
                    <TrendingUp className="w-4 h-4" />
                    Valuation Tripled
                </div>
            </div>
        </div>
    );
}
