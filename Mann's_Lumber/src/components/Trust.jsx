import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ThumbsUp, Leaf, Award } from 'lucide-react';

const Trust = () => {
    return (
        <section id="trust" className="section trust-section">
            <div className="container">
                <div className="trust-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-subtitle" style={{ textAlign: 'left' }}>Why Customers Trust Us</div>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Rooted in Our Community</h2>
                        <p style={{ marginBottom: '2rem', fontSize: '1.125rem' }}>
                            At Mann's Lumber & Tree, we believe that a handshake still means something.
                            Our reputation is built on delivering high-quality materials and honest work.
                            We don't just supply lumber; we build lasting relationships with our neighbors,
                            contractors, and local makers.
                        </p>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <ShieldCheck color="var(--color-forest-green)" size={24} />
                                <span style={{ fontWeight: 500, color: 'var(--color-text-dark)' }}>Licensed & Insured Services</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <ThumbsUp color="var(--color-forest-green)" size={24} />
                                <span style={{ fontWeight: 500, color: 'var(--color-text-dark)' }}>Hundreds of Satisfied Customers</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Leaf color="var(--color-forest-green)" size={24} />
                                <span style={{ fontWeight: 500, color: 'var(--color-text-dark)' }}>Sustainable Forestry Practices</span>
                            </li>
                        </ul>

                        <a href="#contact" className="btn btn-primary">Work With Us</a>
                    </motion.div>

                    <motion.div
                        className="trust-stats-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src="/images/trust-craftsman.jpg"
                            alt="Woodworker craftsman"
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />

                        <div className="trust-stats">
                            <div className="stat-item">
                                <div className="stat-number">4.9</div>
                                <div className="stars" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>
                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                </div>
                                <div className="stat-label">Google Rating</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">20+</div>
                                <div className="stat-label">Years of Exp.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
