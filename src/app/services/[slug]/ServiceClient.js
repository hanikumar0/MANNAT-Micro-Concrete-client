"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Phone, CheckCircle2, Shield, Clock, Zap } from 'lucide-react';
import ServiceContentBlock from '@/components/ui/ServiceContentBlock';

const serviceData = {
    'microcement-flooring': {
        title: "Microcement Flooring",
        subtitle: "The Foundation of Luxury",
        desc: "Seamless, monolithic flooring solutions that combine industrial resilience with high-end architectural aesthetics.",
        image: "/images/flooring_bright.png",
        images: ["/images/flooring_bright.png", "/images/bright_floor.png"],
        features: ["Zero Joints", "Waterproof Options", "High Traffic Resistance", "Bespoke Colors"],
        benefits: "Our microcement floors are hand-applied in 3mm layers, creating a surface that is both flexible and incredibly durable. Ideal for modern living rooms, luxury retail, and high-end galleries.",
        detailedContent: [
           "Micro concrete is made up of cement, water-based resin, additives, mineral pigments and polymers and can be applied on both horizontal surfaces to achieve a desired and decorative finish. It is a fantastic material due to its versatility, durability, and design flexibility.",
           "Whether you're looking to add a sleek, modern touch to your floors or create a unique and artistic design, micro concrete is a great choice. It can be used to refurbish homes or even commercial properties like resorts, restaurants, hotels, factories, industrial buildings and wet areas as well.",
           "Due to its wide range of applications, Micro concrete India becomes a versatile and ideal option for anyone looking to achieve a classic or contemporary look both indoors and outdoors. The micro concrete mixture when applied acts as a protective coating that ensures the durability of any surface it becomes a part of."
        ],
        palette: [
            { name: "Arctic", hex: "#F3F4F6" },
            { name: "Pebble", hex: "#D1D5DB" },
            { name: "Shadow", hex: "#4B5563" }
        ],
        craftTools: [
            { name: "Stainless Trowel", image: "/images/tools_microcement.png", desc: "For applying thin, high-tension mineral layers with zero marks." },
            { name: "Sanding Machine", image: "/images/tools_microcement.png", desc: "Achieves an ultra-smooth, architectural finish." }
        ]
    },
    'microcement-walls': {
        title: "Microcement Walls",
        subtitle: "Sculptural Surfaces",
        desc: "Transform vertical surfaces into sculptural work of arts with joint-free, textured finishes.",
        image: "/images/bright_walls.png",
        images: ["/images/bright_walls.png", "/images/wetroom_bright.png"],
        features: ["Artisan Textures", "Crack Resistant", "Easy to Clean", "Vertical Continuity"],
        benefits: "Microcement walls eliminate the need for tiles in bathrooms and kitchens. They provide a continuous, mineral aesthetic that reflects light beautifully and is warm to the touch.",
        detailedContent: [
            "Our Microcement wall systems are designed for seamless vertical continuity. Unlike tiles, they offer a joint-free surface that eliminates grout lines, making them 100% mold-resistant and incredibly easy to maintain.",
            "Hand-applied by our master artisans, these walls carry a unique 'soul'—a texture that changes with the light throughout the day. From the soft matte of a bedroom to the high-gloss shine of a boutique retail space, we tailor the finish to your vision."
        ],
        palette: [
            { name: "Ivory", hex: "#FFFFF0" },
            { name: "Cloud", hex: "#F8F8F8" },
            { name: "Slate", hex: "#708090" }
        ],
        craftTools: [
            { name: "Artisanal Spatula", image: "/images/tools_microcement.png", desc: "Used for creating unique movement and artistic textures on walls." },
            { name: "Corner Trowel", image: "/images/tool_corner_trowel.png", desc: "Ensures seamless continuity in 90-degree internal angles." }
        ]
    },
    'venetian-plaster': {
        title: "Venetian Lime Plaster",
        subtitle: "The Masterpiece",
        desc: "The ultimate luxury finish. Natural Italian lime plasters with depth, sheen, and soul.",
        image: "/images/venetian_bright.png",
        images: ["/images/venetian_bright.png", "https://images.unsplash.com/photo-1621293954908-907159247fc8"],
        features: ["High Sheen", "Natural Minerals", "Breathable Walls", "Deep Luster"],
        benefits: "Venetian plaster—or Marmorino—is a timeless finish involving multiple layers of lime and marble dust. It is naturally antimicrobial and regulator of indoor humidity.",
        detailedContent: [
            "Mannat's Venetian Plaster is a sophisticated blend of aged slaked lime, marble dust, and natural pigments. This ancient Italian technique produces a wall finish that is cool to the touch and carries a mirror-like depth.",
            "Beyond its beauty, Venetian plaster is ecologically superior. It is highly breathable, preventing trapped moisture inside walls, and its high alkalinity makes it naturally resistant to mold and bacteria."
        ],
        palette: [
            { name: "Calacatta", hex: "#FFFFFF" },
            { name: "Carrara", hex: "#E5E4E2" },
            { name: "Nero", hex: "#1B1B1B" }
        ],
        craftTools: [
            { name: "Polishing Trowel", image: "/images/tools_microcement.png", desc: "Highly polished stainless steel used to burnish the plaster to a marble sheen." },
            { name: "Natural Sponge", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", desc: "For creating organic stone textures before polishing." }
        ]
    },
    'epoxy-coatings': {
        title: "Epoxy",
        subtitle: "Technical Performance",
        desc: "Industrial-grade strength meets high-end retail and residential aesthetics.",
        image: "/images/epoxy_metallic.png",
        images: ["/images/epoxy_metallic.png", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"],
        features: ["Chemical Proof", "Ultra Durable", "Gloss/Matte Options", "Seamless Canvas"],
        benefits: "Our technical epoxy systems are designed for high-traffic commercial zones and modern industrial-style homes, offering a level of durability that traditional floors can't match.",
        detailedContent: [
            "Our Epoxy coatings provide a heavy-duty, monolithic surface that is impervious to liquids and chemicals. It is the perfect choice for high-end garages, retail galleries, and modern lofts.",
            "Available in infinite colors, our epoxy systems can be tailored from a crystal-clear gloss to a sophisticated matte silk finish."
        ],
        palette: [
            { name: "Sterling", hex: "#8E9091" },
            { name: "Charcoal", hex: "#36454F" },
            { name: "Pure White", hex: "#FFFFFF" }
        ],
        craftTools: [
            { name: "Notched Squeegee", image: "/images/tools_epoxy.png", desc: "Distributes the resin at a consistent self-leveling thickness." },
            { name: "Spiked Roller", image: "/images/tools_epoxy.png", desc: "Eliminates air bubbles to ensure a glass-like finish." }
        ]
    },
    'epoxy': {
        title: "Epoxy Technical Coating",
        desc: "Industrial-grade strength meets high-end retail and residential aesthetics.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        features: ["Chemical Proof", "Ultra Durable", "Gloss/Matte Options", "Seamless Canvas"],
        benefits: "Our technical epoxy systems are designed for high-traffic commercial zones and modern industrial-style homes, offering a level of durability that traditional floors can't match."
    },
    'lime-wash': {
        title: "Lime Wash",
        subtitle: "Mineral Elegance",
        desc: "Organic, mineral-based matte finishes that add soft, cloud-like movement to your walls.",
        image: "/images/limewash_bright.png",
        images: ["/images/limewash_bright.png", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"],
        features: ["Eco-Friendly", "Matte Finish", "Soft Movement", "Low VOC"],
        benefits: "Lime wash is a sustainable choice that creates a unique, weathered patina. It's breathable, prevents mold, and offers a quiet, sophisticated backdrop for minimalist interiors.",
        detailedContent: [
            "Our Lime Wash is a traditional mineral paint that breathes with your home. It creates a soft, matte, and 'mottled' look that is reminiscent of historic European villas.",
            "Because it is naturally high in pH, it is resistant to mold and bacteria, making it as functional as it is beautiful."
        ],
        palette: [
            { name: "Bone", hex: "#E3DAC9" },
            { name: "Sage", hex: "#BCBCA4" },
            { name: "Clay", hex: "#D2B48C" }
        ],
        craftTools: [
            { name: "Block Brush", image: "/images/limewash_bright.png", desc: "Large bristle brush used to apply the wash in signature 'X' patterns." },
            { name: "Linen Cloth", image: "/images/limewash_bright.png", desc: "For softening edges and creating the 'cloud' effect." }
        ]
    },
    'luxury-wetrooms': {
        title: "Wetrooms & Bathrooms",
        subtitle: "The Sanctuary",
        desc: "Completely seamless, 100% waterproof bathroom transformations without grout lines.",
        image: "/images/wetroom_bright.png",
        images: ["/images/wetroom_bright.png", "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14"],
        features: ["Grout-Free", "Anti-Fungal", "Fast Draining", "Minimalist Design"],
        benefits: "Our wetroom systems use high-performance waterproof membranes and microcement to create a monolithic sanctuary. No grout means no mold and effortless maintenance.",
        detailedContent: [
            "Imagine a bathroom without grout lines. Our Microcement systems for wetrooms are 100% waterproof and create a continuous, hygienic surface that is incredibly easy to clean.",
            "We use specialized seals and non-slip finishes to ensure that your bathroom is not just beautiful, but also safe and durable for decades of use."
        ]
    },
    'bathrooms': {
        title: "Luxury Wetrooms",
        desc: "Completely seamless, 100% waterproof bathroom transformations without grout lines.",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14",
        features: ["Grout-Free", "Anti-Fungal", "Fast Draining", "Minimalist Design"],
        benefits: "Our wetroom systems use high-performance waterproof membranes and microcement to create a monolithic sanctuary. No grout means no mold and effortless maintenance."
    },
    'bespoke-furniture': {
        title: "Bespoke Furniture",
        desc: "Coating custom furniture pieces in seamless minerals for a sculptural, heavy-stone look.",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
        features: ["Custom Shapes", "Durable Tops", "Stone Aesthetic", "Unique Pieces"],
        benefits: "We can coat dining tables, reception desks, and kitchen islands in microcement. This allows you to have 'stone' furniture that is lighter, seamless, and tailored to your color palette."
    },
    'countertops-stairs': {
        title: "Countertops & Stairs",
        subtitle: "Structural Art",
        desc: "Coating custom furniture pieces and structural elements in seamless minerals for a stone-like look.",
        image: "/images/countertop_bright.png",
        images: ["/images/countertop_bright.png", "https://images.unsplash.com/photo-1600566752355-35792bedcfea"],
        features: ["Heat Resistant", "Custom Shapes", "Stain Proof", "Unique Aesthetic"],
        benefits: "We can coat dining tables, reception desks, and kitchen islands in microcement. This allows you to have 'stone' furniture that is lighter, seamless, and tailored to your color palette.",
        detailedContent: [
            "Our microcement systems for furniture and stairs provide a monolithic stone appearance. They are exceptionally durable, being resistant to scratches, heat, and daily wear.",
            "Whether you are coating a concrete staircase or a custom-built kitchen island, our artisanal application ensures a seamless transition between vertical and horizontal surfaces."
        ]
    },
    'terrazzo': {
        title: "Terrazzo",
        subtitle: "Monolithic Aggregate",
        desc: "High-end composite flooring combining marble aggregates with a seamless binder.",
        image: "/images/terrazzo_bright.png",
        images: ["/images/terrazzo_bright.png", "https://plus.unsplash.com/premium_photo-1678447323507-aeae3b4ee525"],
        features: ["Marble Aggregates", "Highly Polished", "Timeless Aesthetic", "Monolithic"],
        benefits: "Our Terrazzo offers the charm of traditional Italian flooring with modern performance. It is ground and polished on-site to reveal a beautiful mineral exposure.",
        detailedContent: [
            "Terrazzo is a timeless material that has been used for centuries in luxury architectural projects. Our modern, seamless Terrazzo systems use high-performance binders and premium marble chips to create a floor that is a true work of art.",
            "Highly durable and incredibly easy to maintain, Terrazzo is a sustainable choice for high-traffic environments like hotel lobbies, luxury retail boutiques, and contemporary homes."
        ],
        palette: [
            { name: "Salted Marble", hex: "#FDF5E6" },
            { name: "Granite Grey", hex: "#808080" },
            { name: "Basalt", hex: "#2F4F4F" }
        ],
        craftTools: [
            { name: "Planetary Grinder", image: "/images/tools_terrazzo.png", desc: "Heavy industrial machine used to grind the floor to reveal the stone aggregate." },
            { name: "Diamond Pads", image: "/images/tools_terrazzo.png", desc: "Progression of grit pads to achieve the mirror-like polish." }
        ],
        faqs: [
            { question: "Is Terrazzo slippery?", answer: "We apply specialized anti-slip sealants to ensure safety while maintaining the high-gloss aesthetic." },
            { question: "What is the thickness of a Terrazzo floor?", answer: "A typical cementitious terrazzo floor is between 10mm to 15mm thick." }
        ]
    },
};

// Add generic FAQs to all services for better SEO coverage
Object.keys(serviceData).forEach(key => {
    if (!serviceData[key].faqs) serviceData[key].faqs = [];
    serviceData[key].faqs.push(
        { question: "How do I maintain my seamless surface?", answer: "Maintenance is simple: use pH-neutral cleaners and avoid abrasive scrubbing pads. Regular damp mopping is sufficient." },
        { question: "Can the color be customized?", answer: "Yes, we offer a wide range of mineral pigments to match your architectural vision perfectly." }
    );
});

import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';

const ServiceClient = ({ slug }) => {
    const service = serviceData[slug] || serviceData['microcement-flooring'];

    // JSON-LD Service Schema for Search
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Mannat Micro Concrete",
            "image": "https://lh3.googleusercontent.com/d/1rjha7IkwcHFlzTSeQdw5ojgRqCJouQCI",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "B II -924 Madanpur khadar extn",
                "addressLocality": "New Delhi",
                "postalCode": "110076",
                "addressCountry": "IN"
            }
        },
        "areaServed": [
            { "@type": "City", "name": "New Delhi" },
            { "@type": "City", "name": "Gurgaon" },
            { "@type": "City", "name": "Noida" },
            { "@type": "City", "name": "Mumbai" },
            { "@type": "City", "name": "Bangalore" }
        ],
        "description": service.desc,
        "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "100",
            "description": "Premium industrial-grade surface finishes starting price."
        }
    };

    return (
        <div className="bg-white dark:bg-black min-h-screen transition-colors duration-500">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            {/* SEO Breadcrumbs */}
            <div className="max-w-[1600px] mx-auto px-6 pt-32">
                <Breadcrumbs />
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center overflow-hidden">
                <Image
                    src={service.image}
                    alt={`Luxury ${service.title} - Hand-applied Architectural Finish by Mannat Micro Concrete`}
                    fill
                    sizes="100vw"
                    className="object-cover grayscale-0 opacity-40 dark:opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent" />
                <div className="relative z-10 max-w-[1600px] mx-auto px-6 w-full pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-[#d4af37] text-xs font-black uppercase tracking-[0.4em] mb-6 block">Surface Excellence</span>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-black dark:text-white uppercase leading-[0.9] mb-8">
                            {service.title.split(' ')[0]} <br />
                            <span className="text-black/30 dark:text-white/30">{service.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="text-black/60 dark:text-white/50 text-xl font-light leading-relaxed">
                            {service.desc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content & Sidebar */}
            <section className="py-24 px-6 relative">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left: Main Content */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Main detailed content block */}
                        {service.detailedContent && (
                            <div className="-mx-6">
                                <ServiceContentBlock 
                                    title={service.title}
                                    subtitle={service.subtitle || "Surface Excellence"}
                                    image={service.images || service.image}
                                    content={service.detailedContent}
                                />
                            </div>
                        )}

                        <div className="pt-10">
                            <h2 className="text-3xl font-bold uppercase tracking-tighter text-black dark:text-white mb-8">Performance Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-black/5 dark:border-white/5 transition-colors">
                                        <div className="w-10 h-10 bg-[#d4af37]/10 rounded-full flex items-center justify-center text-[#d4af37]">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-black/60 dark:text-white/60">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Signature Palette */}
                        {service.palette && (
                            <div className="py-20 border-t border-black/5 dark:border-white/5">
                                <h2 className="text-3xl font-bold uppercase tracking-tighter text-black dark:text-white mb-12">Signature Palette</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    {service.palette.map((color, i) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="group"
                                        >
                                            <div 
                                                className="aspect-square rounded-full border border-black/5 dark:border-white/10 mb-4 shadow-inner group-hover:scale-105 transition-transform duration-500"
                                                style={{ backgroundColor: color.hex }}
                                            />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-center text-black/60 dark:text-white/40">{color.name}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Artisanal Toolkit */}
                        {service.craftTools && (
                            <div className="py-20 border-t border-black/5 dark:border-white/5">
                                <h2 className="text-3xl font-bold uppercase tracking-tighter text-black dark:text-white mb-12">Artisanal Toolkit</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {service.craftTools.map((tool, i) => (
                                        <div key={i} className="group space-y-6">
                                            <div className="aspect-[16/10] relative rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-xl">
                                                <Image 
                                                    src={tool.image}
                                                    alt={tool.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">{tool.name}</h4>
                                                <p className="text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest leading-loose">{tool.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Specs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-20 border-y border-black/5 dark:border-white/5">
                            <div className="space-y-4">
                                <Shield className="text-[#d4af37]" size={32} />
                                <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">Longevity</h4>
                                <p className="text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest leading-loose">10 Year warranty on <br /> structural adhesion.</p>
                            </div>
                            <div className="space-y-4">
                                <Clock className="text-[#d4af37]" size={32} />
                                <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">Execution</h4>
                                <p className="text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest leading-loose">Rapid application <br /> typically 4-6 days.</p>
                            </div>
                            <div className="space-y-4">
                                <Zap className="text-[#d4af37]" size={32} />
                                <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">Technical</h4>
                                <p className="text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest leading-loose">High impact resistance <br /> & UV stability.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold uppercase tracking-tighter text-black dark:text-white">Texture & Sheen</h2>
                            <p className="text-black/60 dark:text-white/50 text-lg leading-relaxed font-light">
                                Available in Matte, Satin, and High-Sheen finishes. Each surface is unique, carrying the subtle hand-movements of our artisans.
                            </p>
                            <div className="aspect-video relative rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                                    alt={`Detailed Hand-Applied Texture and Surface Finish of ${service.title}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Internal Linking: Related Services */}
                        <div className="pt-20 border-t border-black/5 dark:border-white/5">
                            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#d4af37] mb-12">Related Finishes</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {Object.entries(serviceData)
                                    .filter(([key]) => key !== slug && !['epoxy', 'bathrooms', 'countertops-stairs'].includes(key))
                                    .slice(0, 4)
                                    .map(([key, item]) => (
                                        <Link key={key} href={`/services/${key}`} className="group block">
                                            <div className="relative aspect-[16/6] rounded-2xl overflow-hidden mb-4">
                                                <Image
                                                    src={item.image}
                                                    alt={`Related Architectural Finish: ${item.title} by Mannat Micro Concrete`}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100"
                                                />
                                            </div>
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40 group-hover:text-[#d4af37] transition-colors">{item.title}</h4>
                                        </Link>
                                    ))}
                            </div>
                        </div>

                        {/* FAQs */}
                        <FAQSection faqs={service.faqs} />
                    </div>

                    {/* Right: Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-xl p-10 rounded-[3.5rem] border border-black/5 dark:border-white/5 shadow-2xl space-y-8">
                            <div className="text-center">
                                <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Get Detailed Quote</span>
                                <h3 className="text-2xl font-bold text-black dark:text-white uppercase tracking-tighter">Surface Estimate</h3>
                            </div>

                            <div className="space-y-4">
                                <input type="text" placeholder="NAME" className="w-full bg-zinc-100 dark:bg-black/50 border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:ring-1 focus:ring-[#d4af37] outline-none transition-all" />
                                <input type="tel" placeholder="PHONE" className="w-full bg-zinc-100 dark:bg-black/50 border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:ring-1 focus:ring-[#d4af37] outline-none transition-all" />
                                <input type="text" placeholder="CITY" className="w-full bg-zinc-100 dark:bg-black/50 border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:ring-1 focus:ring-[#d4af37] outline-none transition-all" />
                            </div>

                            <button className="w-full bg-[#d4af37] text-black py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black hover:text-white transition-all">
                                Request Callback
                            </button>

                            <div className="grid grid-cols-2 gap-4">
                                <a href="https://wa.me/919540490459" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 border border-black/5 dark:border-white/5 rounded-2xl text-[#25D366] hover:bg-[#25D366]/5 transition-all text-[10px] font-black tracking-widest uppercase">
                                    <MessageSquare size={16} /> WhatsApp
                                </a>
                                <a href="tel:+919540490459" className="flex items-center justify-center gap-2 py-4 border border-black/5 dark:border-white/5 rounded-2xl text-[#d4af37] hover:bg-[#d4af37]/5 transition-all text-[10px] font-black tracking-widest uppercase">
                                    <Phone size={16} /> Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Bottom Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-black/5 dark:border-white/10 p-4 flex gap-4">
                <a href="https://wa.me/919540490459" target="_blank" rel="noopener noreferrer" className="flex-1 bg-black text-white rounded-full py-4 flex items-center justify-center gap-3 font-bold text-[10px] uppercase tracking-widest">
                    <MessageSquare size={16} /> WhatsApp
                </a>
                <Link href="/enquiry" className="flex-1 bg-[#d4af37] text-black rounded-full py-4 flex items-center justify-center gap-3 font-bold text-[10px] uppercase tracking-widest">
                    Enquire Now
                </Link>
            </div>
        </div>
    );
};

export default ServiceClient;
