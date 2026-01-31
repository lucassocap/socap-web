import {
    Droplets,
    Layers,
    Network,
    Cpu,
    Database,
    Globe,
    Truck,
    Utensils,
    Activity,
    LucideIcon
} from "lucide-react";

export interface Project {
    slug: string;
    title: string;
    category: string;
    metric: string;
    desc: string;
    icon: LucideIcon;
    image: string;
    content: {
        challenge: string;
        solution: string;
        result: string;
    };
    specs?: string[]; // System Manifest
}

export const projects: Project[] = [
    {
        slug: "refineria-di-korsou",
        category: "Infrastructure & Financial Engineering",
        title: "Refineria Isla (Curacao)",
        metric: "335,000 BPD Capacity Audit",
        desc: "We led the technical and financial bid for the 335k bpd Refineria Isla in Schottegat Harbor. Coordinated 30+ engineers for a full technical audit and defined the restart execution plan.",
        icon: Droplets,
        image: "/images/portfolio/refineria-isla-schottegat.png",
        content: {
            challenge: "Winning the operation of the massive 335,000 BPD Refineria Isla in Curacao's Schottegat Harbor required supreme technical command. The facility, owned by RdK, was dormant and required a comprehensive technical audit to define the restart parameters.",
            solution: "We executed a massive technical lift. We coordinated 30+ specialized engineers to audit every unit of the Schottegat complex. We developed the complete execution plan for the start-up, encompassing technical refurbishment, supply chain logistics, and a rigorous financial model to stress-test margins.",
            result: "The technical audit became the benchmark. We delivered a defensive, high-precision operational roadmap that quantified the exact investment needed to bring the 335k BPD capacity back online, positioning the consortium as the only technically viable operator."
        },
        specs: [
            "RdK Vendor Ecosystem Orchestration",
            "Schottegat Harbor Logistics Protocol",
            "Refinery Start-up Execution Plan",
            "Detailed Technical Audit & Assessment",
            "Dynamic Financial Modeling (Stress Testing)",
            "335k BPD Production Curve Analysis"
        ]
    },
    {
        slug: "pan-american-energy",
        category: "Exploration Strategy",
        title: "Pan-American Energy",
        metric: "$60MM Investment Deployment",
        desc: "From Geophysics to Production. We led the evaluation of 20,000 BPD assets, structuring the technical case for a $60 Million USD capital deployment.",
        icon: Layers,
        image: "/images/portfolio/pan-american-hero.png", // Custom Generated Field Operations
        content: {
            challenge: "The client needed to sanction a major capital project in a complex play. The decision required a flawless link between subsurface seismic data and economic reality. The target: De-risk a $60 Million USD investment campaign to capture 10,000 - 20,000 BPD of production.",
            solution: "We implemented a classic 'Exploration to Appraisal' workflow. We interpreted 2D/3D seismic data to identify prospects. We designed the exploration drilling campaign and modeled the reservoir parameters. This technical rigor formed the basis of the Final Investment Decision (FID).",
            result: "The investment was approved. By proving the subsurface case, we unlocked $60MM in CAPEX. The campaign successfully delineated the field, meeting the 10,000 - 20,000 BPD production corridor and securing the asset's long-term value."
        },
        specs: [
            "Seismic Acquisition & Processing",
            "Exploration Drilling Campaign",
            "Field Appraisal & Delineation",
            "$60MM CAPEX Execution Plan",
            "Petroleum Economics (FID)"
        ]
    },
    {
        slug: "expert-network",
        category: "Operational Architecture",
        title: "Expert Network",
        metric: "$5MM Cashflow Released",
        desc: "A $60MM/year restoration giant. We redefined the chaotic, integrated ERP/CRM, and deployed Monte Carlo models to predict cash. Impact: AR slashed from 180 to 90 days.",
        icon: Network,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", // Modern Team Collaboration
        content: {
            challenge: "A $60MM annual revenue restoration company was drowning in its own volume. Accounts Receivable (AR) from insurance carriers averaged 180 days, locking up massive capital. Sales were growing, but operations were breaking under a 25% surge in leads. The business was blind.",
            solution: "We architected a total digital transformation. We implemented a custom ERP and CRM ecosystem to automate operations. Crucially, we deployed a Monte Carlo simulation model (KPIs) to predict cash flow variability and optimize decision-making under uncertainty.",
            result: "The results were binary. AR collapsed from 180 days to 90 days, instantly releasing $5 Million USD in working capital. Lead processing capacity increased by 25% with zero client churn. We didn't just fix it; we installed a new brain."
        },
        specs: [
            "Custom CRM & ERP Ecosystem",
            "Accounts Receivable (AR) Command",
            "Cash Flow Optimization Engines",
            "Workflow Automation Logic",
            "Scenario Simulation (Risk/Reward)"
        ]
    },
    {
        slug: "drilling-analytics",
        category: "Industrial IoT & FinTech",
        title: "MS Energy (Patterson)",
        metric: "100+ Directional Rigs",
        desc: "Rhino Tech Advisory. We designed the offline-first telemetry system for 100+ active rigs, automating EOW reports to accelerate billing cycles.",
        icon: Database,
        image: "/images/portfolio/drilling-rig-hero.png", // Custom Generated Patterson Style Rig
        content: {
            challenge: "MS Energy 3DM (acquired by Patterson) needed to manage 100+ directional drilling assets. The critical bottleneck: Rigs operated offline in remote fields, delaying 'End of Well' (EOW) reports and stalling billing for weeks. Operations and Finance were disconnected.",
            solution: "Advising via Rhino Tech, we architected an 'Offline-First' remote operations module. Rigs sync data packages when connection is available. We built integrated modules for Finance, Timesheets, and Analytics that auto-generate EOW reports the moment a well is capped.",
            result: "Velocity unleashed. EOW reports went from weeks to seconds. The system now controls 100+ active rigs, synchronizing field telemetry with HQ financials to accelerate cash flow and operational visibility."
        },
        specs: [
            "Offline-First Remote Sync Protocol",
            "Multi-Rig Fleet Management",
            "Crew & Personnel Management",
            "Integrated Invoicing Process",
            "Automated EOW (End of Well) Reporting"
        ]
    },
    {
        slug: "medialfa",
        category: "Franchise Expansion & Valuation",
        title: "Medialfa",
        metric: "4x Network Growth (LatAm)",
        desc: "From a local provider to a LatAm powerhouse. We implemented the ERP, valued the business, and engineered the franchise model for 30+ MRI locations.",
        icon: Activity,
        image: "/images/portfolio/medialfa-hero.png", // Custom Generated Low Field MRI
        content: {
            challenge: "Medialfa had the technology (MRI/CT) but lacked the scale. Operating 30+ diverse locations across Latin America created operational blindness. They needed a unified franchise model and a valuations framework to structure their massive 4x growth trajectory.",
            solution: "We deployed a centralized ERP to control operations across all 30+ units. We built a robust Business Valuation Model to standardize the franchise offering. We structured the entire expansion protocol, turning disparate clinics into a coherent, scalable network.",
            result: "The network expanded 4x in record time. The valuation model allowed for precise capital raising and franchisee onboarding. We didn't just manage machines; we engineered a medical empire."
        },
        specs: [
            "Franchise Expansion Model (4x Growth)",
            "Business Valuation Protocol",
            "Multi-Unit ERP Implementation",
            "Operational Control Dashboard",
            "Medical Imaging Fleet Management"
        ]
    },
    {
        slug: "fito-medics",
        category: "Market Expansion & Digital Architecture",
        title: "Fito Medics",
        metric: "$3MM Revenue (US Market)",
        desc: "From local entity to US Digital Brand. We structured the US legal entity, secured FDA compliance, and deployed an Amazon FBA dominance strategy.",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop", // Pharma Production/Supplements
        content: {
            challenge: "The goal was ambitious: Penetrate the US market from scratch. This required navigating a labyrinth of cross-border legal structuring, strict FDA regulatory compliance, and building a supply chain capable of sustaining high-velocity sales on Amazon.",
            solution: "We executed a comprehensive 3-Year Strategic Plan. We established the US legal entity, managed full FDA registration, and engineered a high-performance Amazon FBA logistics network. We built a 'Digital Command Center' to track sales KPIs in real-time.",
            result: "Market entry successful. The brand now generates $3 Million USD annually in the US. We didn't just export a product; we built a self-sustaining digital enterprise with a fully integrated legal and logistical backbone."
        },
        specs: [
            "US Corporate Structuring",
            "FDA Regulatory Clearance Protocol",
            "Amazon FBA Logistics Network",
            "Omnichannel Digital Strategy",
            "Real-time Sales KPI Dashboard"
        ]
    },
    {
        slug: "re-transportation",
        category: "Operational Restructuring",
        title: "R&E Transportation",
        metric: "$3M ➔ $10M Valuation",
        desc: "Value isn't created; it's engineered. We audited fuel, integrated ERPs, and optimized routes to triple the company's valuation.",
        icon: Truck,
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
        content: {
            challenge: "R&E Transportation was stuck at a $3M valuation. Fuel theft and inefficiency were bleeding $400k annually. Disconnected systems meant dispatchers were guessing, not optimizing. The company was surviving, not scaling.",
            solution: "We implemented a total operational overhaul. We deployed a custom ERP to centralize fleet management. We audited fuel consumption patterns, identifying and stopping $400k in leakage. We implemented route optimization algorithms to minimize idle time and maximize load factors.",
            result: "The impact was multiplicative. By recapturing $400k in pure profit and demonstrating scalable systems, we increased the company's valuation from $3 Million to $10 Million USD. Operational rigor became financial equity."
        },
        specs: [
            "Fleet Management ERP Implementation",
            "Fuel Consumption Audit ($400k Savings)",
            "Algorithmic Route Optimization",
            "Idle Time Reduction Protocol",
            "Valuation Engineering ($3M -> $10M)"
        ]
    },
    {
        slug: "la-rosa-dr-limon",
        category: "Turnaround Strategy",
        title: "La Rosa & Dr. Limon",
        metric: "$600k+ Annual Savings",
        desc: "The hospitality sector is unforgiving. We brought order to chaos: Toast POS implementation, labor optimization, and detailed menu engineering.",
        icon: Utensils,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        content: {
            challenge: "La Rosa and Dr. Limon were successful brands bleeding cash. Despite high revenue, overtime costs were uncontrolled, inventory waste was rampant, and disparate systems made decision-making impossible. They needed a 'Steve Jobs' level of operational simplicty.",
            solution: "We executed a ruthless operational turnaround. We implemented the Toast POS architecture to centralize data. We optimized labor scheduling to slash overtime ($300k+ savings) and engineered a 'Just-in-Time' inventory protocol ($300k+ savings). We even reformulated the menu to maximize high-margin items.",
            result: "Cash flow didn't just improve; it exploded. We recovered over $600,000 USD in annual wasted capital. This new liquidity allowed the owners to secure financing and fund their own expansion. From struggling to survive to franchise-ready dominance."
        },
        specs: [
            "Toast POS Ecosystem Architecture",
            "Labor & Overtime Optimization Protocol",
            "Inventory Just-in-Time Logic",
            "Menu Engineering (Margin Maximization)",
            "Debt Restructuring & Financing",
            "Small Business Turnaround Model"
        ]
    }
];
