import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <img
                src="/images/hero-bg.jpg"
                alt="Lumber mill background"
                className="hero-bg"
            />
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Crafting Quality From Our Forest to Yours.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Premium lumber, professional tree services, and trusted craftsmanship.
                        Rooted in Bowdoin, ME — dedicated to fair pricing and local trust.
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            <PhoneCall size={20} />
                            Call Now: (207) 754-8047
                        </a>
                        <a href="#services" className="btn btn-secondary">
                            Our Services
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
