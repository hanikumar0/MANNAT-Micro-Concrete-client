"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

const EnquiryModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const timerRef = useRef(null);

    // Initial check for submission status and timing logic
    useEffect(() => {
        const initializeModal = () => {
            if (typeof window === 'undefined') return;

            const consentStr = localStorage.getItem('cookieConsent');
            const consent = consentStr ? JSON.parse(consentStr) : null;
            const isAccepted = consent?.status === 'accepted';

            // Check submission
            let submitted = false;
            if (isAccepted) {
                submitted = localStorage.getItem('hasSubmittedEnquiry') === 'true';
            } else {
                // If rejected, only keep it in temporary memory/session so it doesn't 
                // re-pop immediately, but WILL re-pop after refresh.
                submitted = sessionStorage.getItem('hasSubmittedEnquirySession') === 'true';
            }

            setIsSubmitted(submitted);

            if (!submitted) {
                const waitTime = 15000;
                let initialWait = waitTime;

                if (isAccepted) {
                    const lastClosed = localStorage.getItem('lastEnquiryClosed');
                    if (lastClosed) {
                        const elapsed = Date.now() - parseInt(lastClosed);
                        initialWait = elapsed >= waitTime ? 2000 : waitTime - elapsed;
                    }
                }

                // Restart timer
                if (timerRef.current) clearTimeout(timerRef.current);
                timerRef.current = setTimeout(() => setIsOpen(true), initialWait);
            }
        };

        initializeModal();

        // Listen for cookie consent updates
        window.addEventListener('cookieConsentUpdated', initializeModal);
        
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            window.removeEventListener('cookieConsentUpdated', initializeModal);
        };
    }, []);

    const startTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            const consentStr = localStorage.getItem('cookieConsent');
            const isAccepted = consentStr ? JSON.parse(consentStr)?.status === 'accepted' : false;
            
            let alreadySubmitted = false;
            if (isAccepted) {
                alreadySubmitted = localStorage.getItem('hasSubmittedEnquiry') === 'true';
            } else {
                alreadySubmitted = sessionStorage.getItem('hasSubmittedEnquirySession') === 'true';
            }

            if (!alreadySubmitted) setIsOpen(true);
        }, 15000);
    };

    const handleClose = () => {
        setIsOpen(false);
        if (typeof window !== 'undefined') {
            const consentStr = localStorage.getItem('cookieConsent');
            const isAccepted = consentStr ? JSON.parse(consentStr)?.status === 'accepted' : false;
            
            if (isAccepted) {
                localStorage.setItem('lastEnquiryClosed', Date.now().toString());
            }
            // If rejected, we don't save lastEnquiryClosed, so it will reappear after 15s 
            // even if they refresh the page.
        }
        
        if (!isSubmitted) startTimer();
    };

    const handleSuccess = () => {
        if (typeof window !== 'undefined') {
            const consentStr = localStorage.getItem('cookieConsent');
            const isAccepted = consentStr ? JSON.parse(consentStr)?.status === 'accepted' : false;

            if (isAccepted) {
                localStorage.setItem('hasSubmittedEnquiry', 'true');
            }
            // Temporarily suppress even if rejected so they aren't nagged immediately
            sessionStorage.setItem('hasSubmittedEnquirySession', 'true');
        }
        
        setIsSubmitted(true);
        setIsOpen(false);
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    if (isSubmitted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0a] rounded-[2rem] shadow-2xl border border-black/5 dark:border-white/10 max-h-[92vh] overflow-y-auto"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] w-12 h-12 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-[#d4af37] hover:text-white dark:hover:text-white rounded-full flex items-center justify-center transition-all shadow-md group border border-gray-300 dark:border-gray-700"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        <div className="p-6 md:p-10">
                            <div className="mb-8 text-center">
                                <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-1 block">Consultation</span>
                                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter uppercase leading-[0.9] text-black dark:text-white">
                                    Architectural <br />
                                    <span className="text-black/30 dark:text-white/40">Inquiry.</span>
                                </h2>
                                <p className="text-black/40 dark:text-white/40 text-[9px] uppercase tracking-widest mt-3 font-black">
                                    Book a free site visit & physical sample review
                                </p>
                            </div>

                            <EnquiryForm onSuccess={handleSuccess} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnquiryModal;
