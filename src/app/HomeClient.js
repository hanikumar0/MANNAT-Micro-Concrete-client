"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const Reveal = dynamic(() => import('@/components/ui/Reveal'));
import Hero from '@/components/home/Hero';
const ProjectsGallery = dynamic(() => import('@/components/home/ProjectsGallery'));
const WhyMannat = dynamic(() => import('@/components/home/WhyMannat'));
const BeforeAfterSlider = dynamic(() => import('@/components/ui/BeforeAfterSlider'));
const FinishSeeker = dynamic(() => import('@/components/ui/FinishSeeker'));
const ColorPaletteTool = dynamic(() => import('@/components/ui/ColorPaletteTool'));
const FAQSection = dynamic(() => import('@/components/ui/FAQSection'));
const CTABand = dynamic(() => import('@/components/home/CTABand'));
const InstagramReels = dynamic(() => import('@/components/ui/InstagramReels'));
const ServiceContentBlock = dynamic(() => import('@/components/ui/ServiceContentBlock'));

const homeFAQs = [
    {
        question: "What exactly is Microcement?",
        answer: "Microcement is a composite architectural coating based on the mixture of cement, water-based resins, additives, and mineral pigments. It is applied in thin layers (~3mm) to create a seamless, joint-free surface on floors, walls, and even furniture."
    },
    {
        question: "Is Microcement durable enough for high-traffic areas?",
        answer: "Yes, our specialized industrial-grade microcement systems are exceptionally durable. They are impact-resistant, waterproof, and designed to withstand the heavy traffic of both luxury retail spaces and busy residential homes."
    },
    {
        question: "Can it be applied over existing tiles?",
        answer: "Absolutely. One of the greatest benefits of microcement is its exceptional adhesion. It can be applied directly over tiles, marble, or concrete without the need for demolition, saving time and visual noise."
    },
    {
        question: "Is it completely waterproof?",
        answer: "Our specialized systems for wetrooms and bathrooms include high-performance waterproof seals. This makes them 100% waterproof and grout-free, preventing mold growth and making maintenance effortless."
    },
    {
        question: "How long does a typical installation take?",
        answer: "A standard installation usually takes between 4 to 10 days, depending on the area size and the substrate preparation needed. This includes multiple layers of application, sanding, and final protective sealing."
    }
];
const EnquiryForm = dynamic(() => import('@/components/ui/EnquiryForm'));
const BeforeAfter = dynamic(() => import('@/components/ui/BeforeAfter'));

const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mannat Micro Concrete",
    "image": "https://lh3.googleusercontent.com/d/1rjha7IkwcHFlzTSeQdw5ojgRqCJouQCI",
    "url": "https://www.mannatmicroconcrete.site",
    "telephone": "+919540490459",
    "email": "mannatmicroconcrete6@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "B II -924 Madanpur khadar extn",
        "addressLocality": "New Delhi",
        "postalCode": "110076",
        "addressCountry": "IN"
    },
    "description": "Premium industrial-grade microcement and venetian plaster surface finishes for architectural projects across India.",
    "areaServed": ["New Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Ahmedabad"],
    "priceRange": "$$$",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
    }
};

const servicesRowOne = [
    { title: 'Microcement Flooring', desc: 'Monolithic seamless floors for high-traffic zones.', image: '/images/bright_floor.png', slug: 'microcement-flooring' },
    { title: 'Microcement Walls', desc: 'Sculptural, joint-free walls with artistic textures.', image: '/images/bright_walls.png', slug: 'microcement-walls' },
    { title: 'Venetian Lime Plaster', desc: 'Classic Italian marble-like depth and high sheen.', image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8', slug: 'venetian-plaster' },
    { title: 'Epoxy Coatings', desc: 'Industrial strength meets architectural aesthetics.', image: '/images/epoxy_metallic.png', slug: 'epoxy-coatings' },
];

const servicesRowTwo = [
    { title: 'Lime Wash', desc: 'Breathable, mineral-based matte finishes.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', slug: 'lime-wash' },
    { title: 'Luxury Wetrooms', desc: 'Joint-free waterproof bathroom solutions.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14', slug: 'luxury-wetrooms' },
    { title: 'Bespoke Furniture', desc: 'Seamlessly coated tables and counters.', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea', slug: 'bespoke-furniture' },
];

const processSteps = [
    { step: '01', title: 'Consultation', desc: 'Vision alignment & site analysis.' },
    { step: '02', title: 'Sampling', desc: 'Bespoke texture & color selection.' },
    { step: '03', title: 'Preparation', desc: 'Substrate treatment & reinforcement.' },
    { step: '04', title: 'Application', desc: 'Layered artisanal installation.' },
    { step: '05', title: 'Sealing', desc: 'Protective finishing & handover.' },
];

export default function HomeClient() {

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
            />
            <Hero />

            {/* Section 2: Services (7 cards) */}
            <section className="py-16 md:py-24 px-6 bg-zinc-50 overflow-hidden">
                <div className="max-w-[1600px] mx-auto">
                    <Reveal width="100%">
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12 md:mb-16 w-full text-center md:text-left">
                            <div>
                                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Our Expertise</span>
                                <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-black mt-4 uppercase leading-[0.9]">
                                    Architectural <br />
                                    <span className="text-black/25">Continuity.</span>
                                </h2>
                            </div>
                            <Link href="/services" className="text-black/40 hover:text-[#d4af37] transition-all text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 group border-b border-black/10 pb-2 mt-4 md:mt-0">
                                All Finishes <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicesRowOne.map((service, i) => (
                            <Link key={i} href={`/services/${service.slug}`} className="block group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 shadow-lg cursor-pointer"
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                        <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-2">{service.title}</h3>
                                        <div className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group/link">
                                            Explore <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {servicesRowTwo.map((service, i) => (
                            <Link key={i} href={`/services/${service.slug}`} className="block group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (i + 4) * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/5 shadow-lg cursor-pointer"
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                        <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-2">{service.title}</h3>
                                        <div className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group/link">
                                            Explore <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Highlight: What is Microconcrete */}
            <ServiceContentBlock 
                title="What is Micro Concrete"
                subtitle="MICROCONCRETE INDIA"
                image={["/images/flooring_bright.png", "/images/bright_floor.png", "/images/furniture_bright.png"]}
                content={[
                    "Micro concrete is made up of cement, water-based resin, additives, mineral pigments and polymers and can be applied on both horizontal and vertical surfaces to achieve a desired and decorative finish. It can be used to refurbish homes or even commercial properties like resorts, restaurants, hotels, factories, industrial buildings and wet areas as well.",
                    "Due to its wide range of applications, Micro concrete India becomes a versatile and ideal option for anyone looking to achieve a classic or contemporary look both indoors and outdoors. The micro concrete mixture when applied acts as a protective coating that ensures the durability of any surface it becomes a part of.",
                    "Micro concrete is a fantastic material due to its versatility, durability, and design flexibility. Whether you're looking to add a sleek, modern touch to your floors, walls or furniture, or create a unique and artistic design, micro concrete is a great choice. So if you're looking for a material that is both functional and stylish, consider micro concrete for your next design project!"
                ]}
            />

            <ServiceContentBlock 
                title="Seamless Continuity"
                subtitle="ARCHITECTURAL FINISHES"
                image={["/images/venetian_bright.png", "/images/bright_walls.png", "/images/limewash_bright.png"]}
                reverse={true}
                content={[
                    "Our Venetian Plaster and Lime Wash finishes offer a natural, breathable alternative to traditional paints. Made from aged Italian lime and crushed marble, these finishes develop a beautiful patina over time, adding soul and depth to any architectural space.",
                    "Ideal for luxury residential projects and high-end retail, our artisanal coatings are hand-applied to ensure that no two surfaces are ever the same. Each wall becomes a unique piece of art, reflecting light and shadow in a way that synthetic materials simply cannot replicate."
                ]}
            />

            <ServiceContentBlock 
                title="Industrial Resilience"
                subtitle="EPOXY & TERRAZZO"
                image={["/images/terrazzo_bright.png", "/images/epoxy_bright.png", "/images/wetroom_bright.png"]}
                content={[
                    "For high-traffic zones that require extreme durability without sacrificing beauty, our Epoxy and Terrazzo systems are the gold standard. These seamless solutions are impact-resistant, chemical-proof, and designed to last for decades.",
                    "Whether it's a luxury garage, a commercial gallery, or a modern kitchen, our industrial-grade coatings provide a monolithic canvas that is as tough as it is beautiful."
                ]}
            />

            {/* Section 3: Featured Real Projects */}
            <ProjectsGallery />

            {/* Section: Social Media Showcase */}
            <InstagramReels />

            {/* Section 4: Why Mannat */}
            <WhyMannat />

            {/* Section 5: Interactive Before/After Slider */}
            <BeforeAfterSlider />

            {/* Section 6: Finish Seeker (Visual Filter) */}
            <FinishSeeker />

            {/* Section 7: The Color Palette Interactive Tool */}
            <ColorPaletteTool />

            {/* Section 8: Process Preview (5 steps) */}
            <section className="py-16 md:py-24 px-6 bg-zinc-50 overflow-hidden">
                <div className="max-w-[1600px] mx-auto">
                    <Reveal width="100%">
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12 md:mb-16 w-full text-center md:text-left">
                            <div>
                                <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.4em]">Full Method</span>
                                <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-black mt-4 uppercase leading-[0.9]">
                                    Architectural <br />
                                    <span className="text-black/25">Precision.</span>
                                </h2>
                            </div>
                            <Link href="/process" className="text-black/40 hover:text-[#d4af37] transition-all text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 group border-b border-black/10 pb-2 mt-4 md:mt-0">
                                Full Methodology <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {processSteps.map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="group cursor-default p-6 bg-white rounded-2xl border border-black/5 shadow-md">
                                    <span className="text-5xl font-black text-black/5 transition-colors duration-700 group-hover:text-[#d4af37]/20">{item.step}</span>
                                    <h4 className="text-lg font-bold mt-6 mb-4 tracking-tight uppercase text-black">{item.title}</h4>
                                    <p className="text-black/40 text-[10px] uppercase font-bold tracking-widest leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 9: FAQs */}
            <FAQSection faqs={homeFAQs} />

            {/* Section 10: CTA Band */}
            <CTABand />
        </div>
    );
}
