"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Send } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid work email." }),
    company: z.string().min(2, { message: "Company name is required." }),
    message: z.string().optional(),
    interest: z.enum(["capital", "consulting", "general"]),
})

type FormValues = z.infer<typeof formSchema>

interface ContactFormProps {
    defaultInterest?: "capital" | "consulting" | "general"
}

export function ContactForm({ defaultInterest = "general" }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
            interest: defaultInterest,
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setIsSubmitting(false)
            setIsSuccess(true)
        } catch (error) {
            console.error('Submission error:', error);
            setIsSubmitting(false)
            alert("There was an error submitting your request. Please try again.");
        }
    }

    if (isSuccess) {
        return (
            <div className="rounded-xl border border-wealth-gold/30 bg-wealth-gold/10 p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wealth-gold/20 mb-4">
                    <Send className="h-6 w-6 text-wealth-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Protocol Initiated.</h3>
                <p className="text-zinc-400">
                    Our capital engineers are analyzing your request. Expect a secure transmission shortly.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm text-wealth-gold hover:text-white hover:underline transition-colors"
                >
                    Submit another dossier
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-obsidian-surface/50 backdrop-blur-md border border-white/10 p-8 rounded-none shadow-2xl">
            <div className="space-y-4">

                {/* Name Field */}
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-zinc-400 tracking-wider uppercase">
                        Full Name
                    </label>
                    <input
                        {...form.register("name")}
                        className="w-full rounded-none bg-obsidian border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-wealth-gold focus:ring-1 focus:ring-wealth-gold outline-none transition-all"
                        placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                        <p className="text-xs text-red-400">{form.formState.errors.name.message}</p>
                    )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-zinc-400 tracking-wider uppercase">
                        Work Email
                    </label>
                    <input
                        {...form.register("email")}
                        type="email"
                        className="w-full rounded-none bg-obsidian border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-wealth-gold focus:ring-1 focus:ring-wealth-gold outline-none transition-all"
                        placeholder="name@company.com"
                    />
                    {form.formState.errors.email && (
                        <p className="text-xs text-red-400">{form.formState.errors.email.message}</p>
                    )}
                </div>

                {/* Company Field */}
                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold text-zinc-400 tracking-wider uppercase">
                        Company / Entity
                    </label>
                    <input
                        {...form.register("company")}
                        className="w-full rounded-none bg-obsidian border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-wealth-gold focus:ring-1 focus:ring-wealth-gold outline-none transition-all"
                        placeholder="Acme Corp"
                    />
                    {form.formState.errors.company && (
                        <p className="text-xs text-red-400">{form.formState.errors.company.message}</p>
                    )}
                </div>

                {/* Interest Field (Hidden or Selector) - Let's make it a selector for clarity */}
                <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-bold text-zinc-400 tracking-wider uppercase">
                        Capital Requirement
                    </label>
                    <select
                        {...form.register("interest")}
                        className="w-full rounded-none bg-obsidian border border-white/10 px-4 py-3 text-white focus:border-wealth-gold focus:ring-1 focus:ring-wealth-gold outline-none transition-all appearance-none"
                    >
                        <option value="capital">Capital Deployment (Loans/Credit)</option>
                        <option value="consulting">Operational Optimization (Consulting)</option>
                        <option value="general">General Inquiry</option>
                    </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-zinc-400 tracking-wider uppercase">
                        Operational Context (Optional)
                    </label>
                    <textarea
                        {...form.register("message")}
                        className="w-full h-32 rounded-none bg-obsidian border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-wealth-gold focus:ring-1 focus:ring-wealth-gold outline-none transition-all resize-none"
                        placeholder="Briefly describe your capital needs or operational bottlenecks..."
                    />
                </div>

            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-wealth-gold hover:bg-wealth-gold-light text-obsidian font-black tracking-widest py-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            >
                {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>TRANSMITTING...</span>
                    </div>
                ) : (
                    <span className="relative z-10">INITIATE DEPLOYMENT</span>
                )}
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>

            <p className="text-[10px] text-center text-zinc-600 mt-4 font-mono uppercase tracking-widest">
                Encrypted Transmission // Level 4 Security
            </p>
        </form>
    )
}
