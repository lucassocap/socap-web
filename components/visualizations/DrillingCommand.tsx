"use client";

import { motion } from "framer-motion";
import { Wifi, WifiOff, FileText, Server, ArrowRight, Zap, CloudLightning, Users, DollarSign, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function DrillingCommand() {
    const [isOnline, setIsOnline] = useState(false);
    const [dataPackets, setDataPackets] = useState<number>(0);
    const [eowGenerated, setEowGenerated] = useState(false);
    const [invoiceSent, setInvoiceSent] = useState(false);

    useEffect(() => {
        // Simulate Offline Build up
        const buildUp = setInterval(() => {
            if (!isOnline && !eowGenerated) {
                setDataPackets(prev => Math.min(prev + 10, 100));
            }
        }, 500);

        // Sequence loop
        const sequence = async () => {
            // 1. Start Offline
            setIsOnline(false);
            setEowGenerated(false);
            setInvoiceSent(false);
            setDataPackets(0);

            // 2. Wait for data build up (4s)
            await new Promise(r => setTimeout(r, 4000));

            // 3. Connect
            setIsOnline(true);

            // 4. Data Transfer (Animated via CSS/State)
            await new Promise(r => setTimeout(r, 2000));
            setDataPackets(0); // Drained

            // 5. Generate EOW
            setEowGenerated(true);
            await new Promise(r => setTimeout(r, 1000));

            // 6. Invoice
            setInvoiceSent(true);

            // 7. Reset loop
            await new Promise(r => setTimeout(r, 4000));
            setIsOnline(false);
            setEowGenerated(false);
            setInvoiceSent(false);
        };

        const loop = setInterval(sequence, 13000);
        sequence();

        return () => {
            clearInterval(buildUp);
            clearInterval(loop);
        };
    }, []);

    return (
        <div className="w-full h-[500px] bg-zinc-950 border border-white/10 rounded-xl relative overflow-hidden p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Connection Status Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 border border-white/10 px-4 py-1 rounded-full backdrop-blur-md z-20">
                {isOnline ? (
                    <>
                        <Wifi className="w-4 h-4 text-green-500 animate-pulse" />
                        <span className="text-[10px] items-center font-mono text-green-500 uppercase tracking-widest">SAT_LINK: ONLINE</span>
                    </>
                ) : (
                    <>
                        <WifiOff className="w-4 h-4 text-red-500" />
                        <span className="text-[10px] items-center font-mono text-zinc-500 uppercase tracking-widest">SAT_LINK: OFFLINE</span>
                    </>
                )}
            </div>

            {/* TOP ROW: FLOW */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-3 gap-4 h-[250px]">
                {/* 1. FIELD OPS */}
                <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-lg flex flex-col justify-between relative">
                    <div>
                        <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-1">Field Assets</h3>
                        <h2 className="text-lg font-bold text-white">Rig #042</h2>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-zinc-400 bg-white/5 p-2 rounded">
                            <span className="flex items-center gap-2"><CloudLightning className="w-3 h-3" /> Telemetry</span>
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <div className="flex items-center justify-between text-xs text-zinc-400 bg-white/5 p-2 rounded">
                            <span className="flex items-center gap-2"><Users className="w-3 h-3" /> Crew Hours</span>
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        </div>
                    </div>

                    <div className="mt-4 w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-wealth-gold"
                            animate={{ width: `${dataPackets}%` }}
                        />
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono text-right mt-1">BUFFER: {dataPackets}%</div>
                </div>

                {/* 2. SYNC BRIDGE */}
                <div className="flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-[2px] w-full bg-zinc-800" />
                    </div>
                    <div className="relative z-10 bg-zinc-950 p-2 rounded-full border border-zinc-800">
                        {isOnline ? (
                            <ArrowRight className="w-6 h-6 text-green-500 animate-pulse" />
                        ) : (
                            <WifiOff className="w-6 h-6 text-zinc-600" />
                        )}
                    </div>
                    <div className="mt-2 bg-black px-2 py-0.5 rounded text-[10px] font-mono text-zinc-500">
                        {isOnline ? "SYNCING..." : "QUEUED"}
                    </div>
                </div>

                {/* 3. FINANCE CORE */}
                <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-lg flex flex-col justify-between">
                    <div className="text-right">
                        <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-1">HQ Finance</h3>
                        <h2 className="text-lg font-bold text-white">Billing Core</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className={`flex items-center justify-between p-2 rounded border transition-all duration-500 ${eowGenerated ? "bg-green-500/10 border-green-500/50" : "bg-zinc-800/50 border-transparent opacity-50"}`}>
                            <div className="flex items-center gap-2">
                                <FileText className={`w-4 h-4 ${eowGenerated ? "text-green-500" : "text-zinc-500"}`} />
                                <span className="text-xs font-bold text-white">EOW Report</span>
                            </div>
                            {eowGenerated && <span className="text-[10px] text-green-400 font-mono">READY</span>}
                        </div>

                        <div className={`flex items-center justify-between p-2 rounded border transition-all duration-500 delay-200 ${invoiceSent ? "bg-wealth-gold/10 border-wealth-gold/50" : "bg-zinc-800/50 border-transparent opacity-50"}`}>
                            <div className="flex items-center gap-2">
                                <DollarSign className={`w-4 h-4 ${invoiceSent ? "text-wealth-gold" : "text-zinc-500"}`} />
                                <span className="text-xs font-bold text-white">Invoice #9921</span>
                            </div>
                            {invoiceSent && <span className="text-[10px] text-wealth-gold font-mono">SENT</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW: METRICS IMPACT */}
            <div className="col-span-1 md:col-span-2 bg-zinc-900 border border-white/5 rounded-lg p-6 flex justify-between items-end relative overflow-hidden">

                {/* Label */}
                <div className="absolute top-4 left-4 z-10">
                    <h3 className="text-zinc-400 font-bold text-sm flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Billing Cycle Velocity
                    </h3>
                </div>

                {/* Legacy Bar */}
                <div className="w-[45%] flex flex-col gap-2 group">
                    <div className="flex justify-between text-xs text-zinc-500 mb-1">
                        <span>Legacy Process</span>
                        <span className="text-red-400 font-mono">~30 Days</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-red-500/50" />
                    </div>
                    <p className="text-[10px] text-zinc-600 leading-tight">Manual collection, paper logs, Excel aggregation delays.</p>
                </div>

                {/* Divider */}
                <div className="w-[1px] h-12 bg-zinc-800" />

                {/* System Bar */}
                <div className="w-[45%] flex flex-col gap-2">
                    <div className="flex justify-between text-xs text-white mb-1">
                        <span className="font-bold">MS Energy System</span>
                        <span className="text-green-400 font-mono font-bold">~2 Hours</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "5%" }} // 2 hours is tiny compared to 30 days
                            transition={{ duration: 1 }}
                            className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                        />
                    </div>
                    <p className="text-[10px] text-zinc-500 leading-tight">Automated EOW generation triggered by field sync.</p>
                </div>
            </div>

        </div>
    );
}
