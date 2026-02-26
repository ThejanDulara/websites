import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Mann's provided the most beautiful rough sawn oak I've seen in Maine. Their pricing is fair and their customer service is top notch. Highly recommend for any local builder.",
        author: "David M.",
        role: "Local Contractor",
        initial: "D"
    },
    {
        text: "We had a dangerous pine tree close to our house. The team at Mann's took it down safely and professionally. They even milled some of the wood for us!",
        author: "Sarah J.",
        role: "Homeowner",
        initial: "S"
    },
    {
        text: "Local, honest, and reliable. Bringing my custom cut list to them was seamless. The dimensions were spot on, and the wood was beautiful. Great local business.",
        author: "Michael T.",
        role: "Furniture Maker",
        initial: "M"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-subtitle">Testimonials</div>
                    <h2 className="section-title">What Our Customers Say</h2>
                    <p className="section-desc">
                        We let our work speak for itself, but it's always nice when our community speaks for us.
                        Here is what people are saying about their experience with Mann's Lumber & Tree.
                    </p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            className="testimonial-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            <Quote className="quote-icon" />
                            <div className="stars">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{t.initial}</div>
                                <div className="author-info">
                                    <h4>{t.author}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
