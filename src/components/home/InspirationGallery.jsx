"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { galleryImages } from '@/data/galleryData';

const categories = ["All", "Wall", "Flooring", "Ceiling", "Desk", "Reception"];

const InspirationGallery = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const selectedImage = galleryImages.find(img => img.id === selectedId);

    return (
        <section className="py-16 md:py-24 px-6 bg-zinc-50 overflow-hidden" id="inspiration">
            <div className="max-w-[1600px] mx-auto">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12 md:mb-16 w-full text-center md:text-left">
                        <div>
                            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Visual Inspiration</span>
                            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-black mt-4 uppercase leading-[0.9]">
                                Surface <br />
                                <span className="text-black/25">Design Gallery.</span>
                            </h2>
                        </div>
                        
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap justify-center md:justify-end gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                                        activeCategory === cat
                                        ? "bg-black text-white border-transparent shadow-lg"
                                        : "bg-white text-black/40 border-black/5 hover:border-[#d4af37] hover:text-[#d4af37]"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((image, i) => (
                            <motion.div
                                layout
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                                className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden border border-black/5 shadow-md cursor-pointer"
                                onClick={() => setSelectedId(image.id)}
                            >
                                <Image
                                    src={image.imageUrl}
                                    alt={image.alt}
                                    fill
                                    loading="lazy"
                                    className="object-cover group-hover:scale-110 transition-all duration-1000"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-3 scale-75 group-hover:scale-100 transition-all duration-500">
                                        <Maximize2 size={18} />
                                    </div>
                                    <span className="text-white text-[8px] font-black uppercase tracking-[0.3em] bg-[#d4af37] px-3 py-1 rounded-full">
                                        {image.category}
                                    </span>
                                </div>

                                {/* Category Label (Static) */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 glass rounded-full text-[7px] font-black uppercase tracking-[0.2em] text-white/70 border-white/10 group-hover:text-white transition-colors">
                                        {image.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {filteredImages.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-black/10 rounded-3xl mt-8">
                        <p className="text-black/30 text-[10px] font-black uppercase tracking-[0.3em]">No images found in this category</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedId && selectedImage && (
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-12">
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
                            className="relative w-full max-w-4xl aspect-[4/5] md:aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/10"
                        >
                            <Image
                                src={selectedImage.imageUrl}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-8 pt-20">
                                <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">{selectedImage.category}</span>
                                <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight">{selectedImage.alt}</h3>
                            </div>
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-[#d4af37] hover:text-black text-white rounded-full flex items-center justify-center transition-all group"
                            >
                                <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InspirationGallery;
