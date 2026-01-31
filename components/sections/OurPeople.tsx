"use client";

import Image from "next/image";

const team = [
    {
        name: "Field Operations",
        role: "Physical Intelligence",
        desc: "We smell the crude. We walk the rig floor. Decades of kinetic experience in the world's most demanding environments.",
        image: "/images/team/field-ops.png"
    },
    {
        name: "Financial Architecture",
        role: "Capital Engineering",
        desc: "We value the asset. We stress-test the model. Every operational decision is backed by forensic financial rigor.",
        image: "/images/team/finance-architect.png"
    },
    {
        name: "Systems Integration",
        role: "Digital Backbone",
        desc: "We build the nervous system. From ERPs to IoT sensors, we architect the code that controls the chaos.",
        image: "/images/team/systems-architect.png"
    },
    {
        name: "Synthetic Workforce",
        role: "Autonomous Agents",
        desc: "We deploy the agents. 24/7 autonomous execution that scales human capability to infinite velocity.",
        image: "/images/team/ai-agent.png"
    }
];

export function OurPeople() {
    return (
        <section className="py-32 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6">

                <div className="max-w-4xl mb-24">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                        Multidisciplinary <span className="text-wealth-gold">Intelligence.</span>
                    </h2>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed border-l-4 border-wealth-gold pl-6">
                        We are not consultants. We are operators. A convergence of heavy industry experts, financial architects, and next-gen AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {team.map((member, index) => (
                        <div key={index} className="group relative aspect-[3/4] overflow-hidden bg-black border border-white/10 hover:border-wealth-gold/50 transition-all duration-500">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-xs font-mono text-wealth-gold uppercase tracking-widest mb-2">{member.role}</div>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-none">{member.name}</h3>
                                <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed font-light">
                                    {member.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
