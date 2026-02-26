import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, TreePine, Axe } from 'lucide-react';

const services = [
    {
        icon: <TreePine size={32} />,
        title: "Tree Services",
        desc: "Safe and efficient tree removal, pruning, and land clearing tailored to your property's needs.",
        image: "/images/service-tree.jpg"
    },
    {
        icon: <Ruler size={32} />,
        title: "Lumber Supply",
        desc: "High-quality, locally sourced rough sawn and finished lumber for all your building and woodworking products.",
        image: "/images/service-lumber.jpg"
    },
    {
        icon: <Axe size={32} />, // Note: Using a placeholder Axe icon from Lucide if available or similar logic
        title: "Custom Cuts",
        desc: "Precision milling and custom dimensions. Bring us your specifications, and we'll cut it perfectly to size.",
        image: "/images/service-custom.jpg" // woodshop
    }
];

const Services = () => {
    return (
        <section id="services" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-subtitle">What We Do</div>
                    <h2 className="section-title">Our Craft & Services</h2>
                    <p className="section-desc">
                        We operate with deep respect for the materials we work with,
                        providing unparalleled service from the forest floor to your workshop door.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <img src={service.image} alt={service.title} className="service-img" />
                            <div className="service-content">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div style={{ marginTop: 'auto' }}>
                                    <a href="#contact" className="btn btn-outline" style={{ width: '100%' }}>
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
