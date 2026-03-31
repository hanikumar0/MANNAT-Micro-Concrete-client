"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Diamond, Award } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const reasons = [
    {
        icon: Diamond,
        title: "Seamless Finish",
        desc: "End-to-end monolithic continuity that expands your sense of space."
    },
    {
        icon: ShieldCheck,
        title: "High Durability",
        desc: "Impact resistant and flexible surfaces designed for decades of use."
    },
    {
        icon: Zap,
        title: "Expert Preparation",
        desc: "Multi-stage substrate treatment ensuring perfect adhesion and zero cracks."
    },
    {
        icon: Award,
        title: "Premium Sealing",
        desc: "Multi-layer protective coatings for stain resistance and easy cleaning."
    }
];

const WhyMannat = () => {
    return (
        <section className="py-16 md:py-24 px-6 bg-zinc-50">
            <div className="max-w-[1600px] mx-auto">
                <Reveal width="100%">
                    <div className="text-center mb-10 w-full">
                        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">The Mannat Edge</span>
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-black mt-4 uppercase leading-[0.9]">
                            Luxury <span className="text-black/25">Value.</span>
                        </h2>
                    </div>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { label: 'Total Projects', value: '50+' },
                        { label: 'Technical Warranty', value: '2YR' },
                        { label: 'Client Satisfaction', value: '100%' },
                        { label: 'Service Network', value: 'Pan India' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-transparent text-center group"
                        >
                            <h3 className="text-4xl md:text-7xl font-black text-black group-hover:text-[#d4af37] transition-all duration-700 tracking-tighter mb-4">
                                {stat.value}
                            </h3>
                            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-black/40">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-black/5 shadow-md hover:border-[#d4af37]/30 transition-all duration-700 group hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-[#d4af37]/10 rounded-xl flex items-center justify-center text-[#d4af37] mb-6 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-700">
                                <reason.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-tighter uppercase text-black">{reason.title}</h3>
                            <p className="text-black/40 font-light leading-relaxed text-xs uppercase tracking-widest">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMannat;
