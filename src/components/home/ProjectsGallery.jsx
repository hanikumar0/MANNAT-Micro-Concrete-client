"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Maximize2, X, MapPin } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

// Helper function to ensure high-performance loading without broken links
const getDirectDriveUrl = (id) => `https://lh3.googleusercontent.com/d/${id}`;

const existingProjects = [
    {
        id: 1,
        title: "The Minimalist Loft",
        location: "Gurgaon, Phase 5",
        category: "Residential",
        finish: "Microcement Floor - Light Grey",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
        id: 2,
        title: "Artisanal Kitchen",
        location: "South Delhi",
        category: "Residential",
        finish: "Microcement Countertops",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115"
    },
    {
        id: 3,
        title: "Luxury Showroom",
        location: "DLF Emporio",
        category: "Commercial",
        finish: "Venetian Plaster Walls",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
        id: 4,
        title: "Zen Bathroom",
        location: "Mumbai, Bandra",
        category: "Residential",
        finish: "Waterproof Microcement",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14"
    },
    {
        id: 5,
        title: "Modern Staircase",
        location: "Noida, Sector 150",
        category: "Architecture",
        finish: "Seamless Concrete Overlay",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea"
    },
    {
        id: 6,
        title: "Corporate Lobby",
        location: "Bangalore",
        category: "Commercial",
        finish: "High-Gloss Epoxy",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    }
];

const newProjectImages = [
    { id: 7, title: "Crimson High-Gloss Showroom", location: "Okhla, New Delhi", category: "Flooring", finish: "Metallic Red Epoxy", src: getDirectDriveUrl("1JearKLXrwn_0IwTnBkUpl-Y9ZM_juSl5") },
    { id: 8, title: "Luxe Residential Lobby", location: "Worli, Mumbai", category: "Flooring", finish: "Cream Gloss Microcement", src: getDirectDriveUrl("1-22ruUh-fVIt0Es7oSsQHiZhwuztjmpW") },
    { id: 9, title: "Artisanal Feature Wall", location: "Gurgaon", category: "Wall", finish: "Textured Slate Grey Plaster", src: getDirectDriveUrl("1voNGKWaMjg2Kl-_2Z7BeLbL7VKmJZIW_") },
    { id: 10, title: "Industrial Studio Floor", location: "Noida", category: "Flooring", finish: "Grey Industrial Microcement", src: getDirectDriveUrl("131zuXpqy7nLanFDJwgXYfl2QSjhXNKgw") },
    { id: 11, title: "Minimalist Wall Art", location: "South Delhi", category: "Wall", finish: "Smooth Ivory Plaster", src: getDirectDriveUrl("1zIg0gOncaZ1xnrHPO_v4iJhE9oTkCZoh") },
    { id: 12, title: "Monolithic Ceiling Design", location: "Bangalore", category: "Ceiling", finish: "Seamless Concrete Ceiling", src: getDirectDriveUrl("11OO8_pFDngbJm6IZGtmYRdiKvjJ8NEJC") },
    { id: 13, title: "Bespoke Office Desk", location: "Cyber Hub", category: "Reception", finish: "Coated Executive Desk", src: getDirectDriveUrl("1tOneG9mocNU90W6YDBiyaLpay-96zlme") },
    { id: 14, title: "Luxury Reception Counter", location: "Mumbai, BKC", category: "Reception", finish: "Glossy Microcement Counter", src: getDirectDriveUrl("1wkY7TrwMt6a0SOBm3kHVIRTF2TiSWmMd") },
    { id: 15, title: "Premium Surface Continuity", location: "Delhi", category: "Flooring", finish: "Total Surface Overlay", src: getDirectDriveUrl("1XnFZIwf_bPUth0wIvgXnHAWGK2iX_L8l") },
    { id: 16, title: "Decorative Wall Coating", location: "Pune", category: "Wall", finish: "Stucco Veneziano Wall", src: getDirectDriveUrl("1LyT9vyKY2QnQzuevdDY5oU0kqtKLMrSu") },
    { id: 17, title: "Modern Apartment Floor", location: "Hyderabad", category: "Flooring", finish: "Silver Grey Microcement", src: getDirectDriveUrl("1umWGSv0ae_lcVp2TxJnJefAA1JVxagsU") },
    { id: 18, title: "Polished Concrete Aesthetic", location: "Chennai", category: "Wall", finish: "High-Sheen Concrete Wall", src: getDirectDriveUrl("1B8mjkyIHDY4vlZQ9tb0gIzNcGRIKC91J") },
    { id: 19, title: "Commercial Continuity", location: "Ahmedabad", category: "Flooring", finish: "Monolithic Shop Floor", src: getDirectDriveUrl("1hx98kSBT8vItis_WWGCeCzF6mqoJm8O9") },
    { id: 20, title: "Minimalist Verticality", location: "Chandigarh", category: "Wall", finish: "Limewash Wall Finish", src: getDirectDriveUrl("1lACapXgpBVRHGVZCsBqLDDJRtzgICPYh") }
];

// Merge logic ensuring no duplicates and appending only
const projects = [...existingProjects, ...newProjectImages.map(img => ({
    id: img.id,
    title: img.title,
    location: img.location,
    category: img.category,
    finish: img.finish,
    image: img.src
}))];

const ProjectsGallery = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Wall", "Flooring", "Ceiling", "Reception", "Residential", "Commercial", "Architecture"];
    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const selectedProject = projects.find(p => p.id === selectedId);

    return (
        <section className="py-16 md:py-24 px-6 bg-white overflow-hidden" id="projects">
            <div className="max-w-[1600px] mx-auto">
                <Reveal width="100%">
                    <div className="text-center mb-8 w-full">
                        <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">Execution Excellence</span>
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85] mb-6">
                            Our Finished <br />
                            <span className="text-black/25">Masterpieces.</span>
                        </h2>
                    </div>
                </Reveal>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${activeCategory === cat
                                ? "bg-black text-white border-transparent"
                                : "bg-transparent text-black/40 border-black/10 hover:border-[#d4af37] hover:text-[#d4af37]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedId(project.id)}
                            >
                                <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl mb-10 transition-transform duration-700 group-hover:-translate-y-2">
                                    <Image
                                        src={`${project.image}${project.image.includes('unsplash') ? '?auto=format&fit=crop&q=70&w=1000' : ''}`}
                                        alt={`${project.title} - ${project.finish} by Mannat Micro Concrete`}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-all duration-700">
                                            <Maximize2 size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute top-10 left-10">
                                        <span className="px-5 py-2 glass rounded-full text-[8px] font-black uppercase tracking-[0.3em] text-[#d4af37] border-[#d4af37]/20">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="px-6">
                                    <div className="flex items-center gap-3 text-[#d4af37] text-[9px] font-black uppercase tracking-[.4em] mb-4">
                                        <div className="w-8 h-px bg-[#d4af37]/30" /> {project.location}
                                    </div>
                                    <h3 className="text-3xl font-bold uppercase tracking-tighter group-hover:text-[#d4af37] transition-colors duration-500 leading-tight">{project.title}</h3>
                                    <p className="text-[10px] text-black/30 dark:text-white/30 uppercase tracking-[.4em] mt-3 font-bold">{project.finish}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                            onClick={() => setSelectedId(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative w-full max-w-6xl h-[70vh] md:aspect-[16/10] bg-zinc-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10"
                        >
                            <Image
                                src={`${selectedProject.image}${selectedProject.image.includes('unsplash') ? '?auto=format&fit=crop&q=80&w=1600' : ''}`}
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8 md:p-20">
                                <div className="max-w-xl">
                                    <span className="text-[#d4af37] text-xs font-black uppercase tracking-[0.4em] mb-4 block">{selectedProject.category} Case Study</span>
                                    <h2 className="text-3xl md:text-7xl font-bold tracking-tighter uppercase text-white leading-none mb-6">
                                        {selectedProject.title}
                                    </h2>
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-widest border-t border-white/10 pt-6 md:pt-8">
                                        <span className="flex items-center gap-2"><MapPin size={14} className="text-[#d4af37]" /> {selectedProject.location}</span>
                                        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
                                        <span>{selectedProject.finish}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-10 right-10 w-12 h-12 bg-white/10 hover:bg-[#d4af37] hover:text-black text-white rounded-full flex items-center justify-center transition-all group"
                            >
                                <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsGallery;
