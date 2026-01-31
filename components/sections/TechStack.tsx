"use client";

import { motion } from "framer-motion";

const technologies = [
    { name: "Google Cloud", color: "#4285F4" }, // Google Blue
    { name: "Odoo", color: "#714B67" },         // Odoo Purple
    { name: "HubSpot", color: "#FF7A59" },      // HubSpot Orange
    { name: "OpenAI", color: "#FFFFFF" },       // White (Dark Mode)
    { name: "AWS", color: "#FF9900" },          // AWS Orange
    { name: "SAP", color: "#008FD3" },          // SAP Blue
    { name: "Salesforce", color: "#00A1E0" },   // Salesforce Blue
    { name: "Microsoft", color: "#F25022" },    // Microsoft Red-ish
    { name: "Oracle", color: "#C74634" },       // Oracle Red
    { name: "Snowflake", color: "#29B5E8" },    // Snowflake Blue
];

export function TechStack() {
    return (
        <section className="border-y border-white/10 bg-black py-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-shrink-0 gap-16 pr-16"
                >
                    {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex items-center gap-4 group cursor-default">
                            <span
                                className="text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-300"
                                style={{ color: tech.color === "#FFFFFF" ? "#E1E1E1" : tech.color }} // Slight adjust for white
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
