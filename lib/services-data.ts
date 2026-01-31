import { TrendingUp, Activity, Layers, Target, Database, DollarSign, Briefcase, FileText, Cpu, ShieldCheck } from "lucide-react";

export const services = [
    {
        slug: "business-valuation",
        icon: DollarSign,
        title: "Business Valuation",
        subtitle: "The Truth",
        desc: "Price is what you pay. Value is what you get. We determine the exact, defendable value of your enterprise.",
        // Original Unsplash
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
        content: {
            philosophy: "Valuation is an engineering problem. Most founders leave millions on the table because they cannot defend their numbers in front of a sophisticated buyer.",
            method: "We rebuild your P&L from the bottom up. We stress-test every assumption to find the true floor and ceiling of your asset.",
            result: "A board-defensible valuation that stands up to institutional due diligence. We don't just find the number; we make it real."
        },
        relatedProjects: ["refineria-di-korsou"]
    },
    {
        slug: "process-improvement",
        icon: Activity,
        title: "Process Improvement",
        subtitle: "Frictionless Motion",
        desc: "We remove the noise. We optimize your workflows until the business runs on autopilot.",
        // Original Unsplash
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        content: {
            philosophy: "Friction kills scale. Every manual handover, every redundant check, every delay is a tax on your capital.",
            method: "We map the physics of your operations. We identify bottlenecks using data. Then we re-engineer the workflow to flow without resistance.",
            result: "Maximum throughput. Minimum waste. An operation that scales linearly with capital, not exponentially with headcount."
        },
        relatedProjects: ["drilling-analytics", "expert-network", "la-rosa-dr-limon"]
    },
    {
        slug: "restructuring",
        icon: Layers,
        title: "Restructuring",
        subtitle: "Reinvention",
        desc: "Clear the dead wood. We restructure personnel, finance, and operations to save the ship.",
        // Original Unsplash
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        content: {
            philosophy: "Survival requires ruthlessness. When a business is bleeding, you don't use a band-aid; you perform surgery.",
            method: "We analyze the org structure with zero sentimentality. We cut non-performing assets, renegotiate debt, and align the workforce with the new reality.",
            result: "A lean organization ready to attack the market. Debt load reduced, cash flow positive, and culture reset."
        },
        relatedProjects: ["refineria-di-korsou", "expert-network"]
    },
    {
        slug: "sales-planning",
        icon: Target,
        title: "Sales Planning",
        subtitle: "Revenue Architecture",
        desc: "Hope isn't a strategy. We build the sales machine: territories, quotas, and commissions.",
        // Original Unsplash
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        content: {
            philosophy: "Sales is math. If you cannot predict your revenue, you cannot invest in your growth.",
            method: "We build the Revenue Engine. We define the territories, set the quotas based on market data, and design commission structures that drive hunter behavior.",
            result: "Predictable revenue. A sales team that operates with military precision and incentives that align perfectly with profit."
        },
        relatedProjects: ["medialfa", "expert-network", "la-rosa-dr-limon"]
    },
    {
        slug: "tech-solutions",
        icon: Cpu,
        title: "AI & Tech Solutions",
        subtitle: "Synthetic Workforce",
        desc: "We don't just build software. We deploy autonomous agents that do the work of entire departments. Speed is the only currency.",
        // Original Unsplash
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        content: {
            philosophy: "The age of slow software is over. If your technology doesn't think, it's obsolete.",
            method: "We engineer Military-Grade AI Agents. We automate complex decision-making loops, customer interactions, and financial modeling.",
            result: "A synthetic workforce that never sleeps, never complains, and scales infinitely at near-zero marginal cost."
        },
        relatedProjects: ["fito-medics", "drilling-analytics", "medialfa"]
    },
    {
        slug: "cash-flow",
        icon: TrendingUp,
        title: "Cash Flow",
        subtitle: "Oxygen",
        desc: "Cash is king. We manage your liquidity so you never run out of air.",
        // Original Unsplash
        image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop",
        content: {
            philosophy: "A business can survive without profit for a long time, but it dies without cash in a day.",
            method: "We implement rigorous cash management. 13-week cash flow forecasts, working capital optimization, and credit facility management.",
            result: "Sleep at night. You will know exactly how much runway you have and exactly when the next tranche of capital is landing."
        },
        relatedProjects: ["expert-network", "re-transportation", "la-rosa-dr-limon"]
    }
];
