"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceContentBlock = ({ 
    title, 
    subtitle = "MICROCONCRETE INDIA", 
    content, 
    image, // Can be a string or array
    reverse = false 
}) => {
    const images = Array.isArray(image) ? image : [image];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 py-20 px-6 max-w-[1600px] mx-auto ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image Side: Automatic Slider */}
            <motion.div 
                initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 aspect-square md:aspect-[4/3] relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image 
                            src={images[currentIndex]} 
                            alt={`${title} - slide ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Dots (Matching User Screenshot) */}
                {images.length > 1 && (
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-500 border-2 ${
                                    i === currentIndex 
                                    ? 'bg-[#d4af37] border-[#d4af37] scale-125' 
                                    : 'bg-white/30 border-transparent hover:bg-white/60'
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Text Side */}
            <motion.div 
                initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 text-center lg:text-left"
            >
                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-black/30 dark:text-white/30 block mb-4">
                    {subtitle}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-black dark:text-white mb-8">
                    {title} <span className="hidden lg:inline text-[#d4af37] underline decoration-4 underline-offset-[12px] decoration-[#d4af37]/30">?</span>
                </h2>
                
                <div className="space-y-6 text-black/60 dark:text-white/50 text-sm md:text-base leading-relaxed font-light mx-auto lg:mx-0">
                    {content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceContentBlock;
