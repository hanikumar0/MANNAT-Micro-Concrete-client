"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
    { title: 'Crimson High-Gloss Showroom', category: 'Flooring', image: 'https://lh3.googleusercontent.com/d/1JearKLXrwn_0IwTnBkUpl-Y9ZM_juSl5', slug: 'crimson-showroom' },
    { title: 'Artisanal Feature Wall', category: 'Walls', image: 'https://lh3.googleusercontent.com/d/1voNGKWaMjg2Kl-_2Z7BeLbL7VKmJZIW_', slug: 'artisanal-wall' },
    { title: 'Luxe Residential Lobby', category: 'Flooring', image: 'https://lh3.googleusercontent.com/d/1-22ruUh-fVIt0Es7oSsQHiZhwuztjmpW', slug: 'luxe-lobby' },
    { title: 'Industrial Studio Floor', category: 'Flooring', image: 'https://lh3.googleusercontent.com/d/131zuXpqy7nLanFDJwgXYfl2QSjhXNKgw', slug: 'industrial-studio' },
    { title: 'Minimalist Wall Art', category: 'Walls', image: 'https://lh3.googleusercontent.com/d/1zIg0gOncaZ1xnrHPO_v4iJhE9oTkCZoh', slug: 'minimalist-wall' },
    { title: 'Monolithic Ceiling Design', category: 'Architecture', image: 'https://lh3.googleusercontent.com/d/11OO8_pFDngbJm6IZGtmYRdiKvjJ8NEJC', slug: 'monolithic-ceiling' },
];

const categories = ['Flooring', 'Walls', 'Architecture'];

const PortfolioPreview = () => {
    const [activeFilter, setActiveFilter] = React.useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section className="py-32 px-6 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <div>
                        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Selected Works</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mt-6 uppercase leading-[0.9]">
                            Featured <br />
                            <span className="text-black/30 dark:text-white/30">Masterpieces.</span>
                        </h2>
                    </div>
                    <Link href="/projects" className="text-black/40 dark:text-white/40 hover:text-[#d4af37] transition-all text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 group border-b border-black/5 dark:border-white/10 pb-2">
                        View All Projects <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap gap-3 mb-16">
                    {['All', ...categories].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={cn(
                                "px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500",
                                activeFilter === cat
                                    ? "bg-[#d4af37] text-black shadow-xl"
                                    : "bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 hover:bg-black/10 dark:hover:bg-white/10"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-black/5 dark:border-white/5"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                                    <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest mb-2">{project.category}</span>
                                    <h3 className="text-white text-2xl font-bold uppercase tracking-tight mb-6">{project.title}</h3>
                                    <Link href={`/projects/${project.slug}`} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-100 translate-y-4 group-hover:translate-y-0">
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="py-40 border border-dashed border-black/10 dark:border-white/10 rounded-[3rem] text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37] mb-6">
                            <ArrowRight size={24} className="rotate-45" />
                        </div>
                        <p className="text-black/20 dark:text-white/20 text-xs uppercase tracking-[0.5em] font-black max-w-xs leading-relaxed">
                            No projects found for <br /> this category yet.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioPreview;
