
import { motion } from "framer-motion";

const brands = [
    "REFINERIA DI KORSOU",
    "DMS ENERGY",
    "LA ROSA REALTY",
    "FITOMEDICS",
    "EXPERT NETWORK",
    "PAN AMERICAN"
];

export function BrandRibbon() {
    return (
        <section className="py-10 bg-black border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px] flex flex-col items-center gap-10">
                <span className="text-zinc-500 font-mono text-xs font-bold tracking-[0.2em] uppercase shrink-0">
                    WE WORK WITH
                </span>

                <div className="w-full overflow-hidden relative fade-sides">
                    <div className="flex gap-12 items-center animate-scroll whitespace-nowrap">
                        {[...brands, ...brands, ...brands].map((brand, i) => (
                            <span key={i} className="text-xl md:text-2xl font-black text-white/40 uppercase tracking-tighter hover:text-white transition-colors duration-300 cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .fade-sides {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
            `}</style>
        </section>
    );
}
