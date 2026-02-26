import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-subtitle">Get In Touch</div>
                    <h2 className="section-title">Ready for Your Next Project?</h2>
                    <p className="section-desc">
                        Whether you need a custom milling order, tree removal, or just some high-quality building lumber,
                        reach out today for a free estimate. Let's make it happen.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="contact-item">
                            <div className="contact-icon">
                                <MapPin />
                            </div>
                            <div>
                                <h4>Visit the Mill</h4>
                                <p>20 Magee Rd<br />Bowdoin, ME 04287</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <Phone />
                            </div>
                            <div>
                                <h4>Call Us</h4>
                                <p>+1 207-754-8047</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <Mail />
                            </div>
                            <div>
                                <h4>Email Us</h4>
                                <p>info@mannslumber.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <Clock />
                            </div>
                            <div>
                                <h4>Business Hours</h4>
                                <p>Mon-Fri: 7:00 AM - 5:00 PM<br />Sat: 8:00 AM - 12:00 PM<br />Sun: Closed</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <p style={{ color: 'var(--color-beige)' }}>
                                * We recommend calling ahead for large orders or to schedule a custom cut consultation.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 style={{ color: 'var(--color-forest-green)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send a Message</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone or Email</label>
                                <input type="text" className="form-control" placeholder="(207) 555-0198" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Service Needed</label>
                                <select className="form-control" style={{ backgroundColor: 'white' }}>
                                    <option>Lumber Supply</option>
                                    <option>Tree Removal</option>
                                    <option>Custom Milling</option>
                                    <option>Other Enquiry</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Project Details</label>
                                <textarea className="form-control" placeholder="Tell us about your project or what you are looking for..."></textarea>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                Get a Quote
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
