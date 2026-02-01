"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Philosophy", href: "/philosophy" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "FAQ", href: "/faq" },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                    isScrolled
                        ? "bg-black/90 backdrop-blur-md py-4 border-white/5"
                        : "bg-transparent py-8 border-transparent"
                )}
            >
                <div className="container mx-auto px-6 max-w-[1400px] flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group relative z-[70] flex items-center gap-3">
                        <div className="relative w-10 h-10 transition-opacity duration-300 hover:opacity-80">
                            <img
                                src="/images/socap-logo-white.png"
                                alt="SOCAP"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="font-mono text-xl font-black tracking-tighter text-white group-hover:text-wealth-gold transition-colors duration-500">
                            SOCAP<span className="text-wealth-gold group-hover:text-white transition-colors duration-500"> CORP</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-bold tracking-[0.2em] text-white hover:text-wealth-gold transition-colors uppercase"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="/contact">
                            <button className="group relative px-6 py-2 bg-wealth-gold text-black text-sm font-black tracking-widest hover:bg-white transition-all duration-300">
                                <span className="relative flex items-center gap-2">
                                    INITIATE <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden z-[70] text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden",
                    isMobileMenuOpen
                        ? "translate-y-0 opacity-100 visible"
                        : "-translate-y-full opacity-0 invisible"
                )}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="text-3xl font-black text-white hover:text-wealth-gold transition-colors tracking-tighter"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.label.toUpperCase()}
                    </Link>
                ))}
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="text-wealth-gold text-xl font-bold tracking-widest border-b border-wealth-gold pb-1">INITIATE PROTOCOL</span>
                </Link>
            </div>
        </>
    );
}
