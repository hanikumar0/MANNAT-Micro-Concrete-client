"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check, ShieldCheck } from 'lucide-react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }

        const handleOpen = () => setIsVisible(true);
        window.addEventListener('openCookieBanner', handleOpen);
        return () => window.removeEventListener('openCookieBanner', handleOpen);
    }, []);

    const handleAccept = () => {
        const consentData = {
            status: 'accepted',
            timestamp: Date.now(),
            categories: ['essential', 'analytics', 'marketing']
        };
        localStorage.setItem('cookieConsent', JSON.stringify(consentData));
        setIsVisible(false);
        // Trigger a custom event for other components to react
        window.dispatchEvent(new Event('cookieConsentUpdated'));
    };

    const handleReject = () => {
        const consentData = {
            status: 'rejected',
            timestamp: Date.now(),
            categories: ['essential']
        };
        localStorage.setItem('cookieConsent', JSON.stringify(consentData));
        setIsVisible(false);
        window.dispatchEvent(new Event('cookieConsentUpdated'));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-[450px] z-[10000]"
                >
                    <div className="bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl backdrop-blur-xl">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                                <Cookie size={24} />
                            </div>
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-black dark:text-white mb-2">Cookie Privacy</h3>
                                <p className="text-[11px] text-black/50 dark:text-white/40 leading-relaxed font-medium">
                                    We use cookies to enhance your architectural journey, analyze site traffic, and personalize your experience with our luxury finishes.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-widest py-4 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 shadow-xl shadow-[#d4af37]/20"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handleReject}
                                className="flex-1 bg-black/5 dark:bg-white/5 text-black dark:text-white text-[10px] font-black uppercase tracking-widest py-4 rounded-full border border-black/5 dark:border-white/5 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
                            >
                                Essential Only
                            </button>
                        </div>

                        <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1.5 grayscale opacity-50">
                                    <ShieldCheck size={12} className="text-[#d4af37]" />
                                    <span className="text-[8px] font-black uppercase tracking-tighter">Secure</span>
                                </div>
                                <div className="flex items-center gap-1.5 grayscale opacity-50">
                                    <Check size={12} className="text-[#d4af37]" />
                                    <span className="text-[8px] font-black uppercase tracking-tighter">GDPR Ready</span>
                                </div>
                            </div>
                            <button className="text-[8px] font-black uppercase tracking-widest text-[#d4af37] hover:underline">
                                Privacy Policy
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
