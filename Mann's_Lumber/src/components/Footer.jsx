import React from 'react';
import { TreeDeciduous } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <h3><TreeDeciduous /> Mann's Lumber & Tree</h3>
                        <p style={{ marginTop: '1rem' }}>
                            Quality lumber, expert tree services, and trusted craftsmanship in Bowdoin, Maine.
                            We're dedicated to delivering the right cut for every project.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#trust">Why Trust Us</a></li>
                            <li><a href="#testimonials">Customer Reviews</a></li>
                            <li><a href="#contact">Get a Quote</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Rough Sawn Lumber</a></li>
                            <li><a href="#services">Tree Removal</a></li>
                            <li><a href="#services">Custom Milling</a></li>
                            <li><a href="#services">Land Clearing</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Mann's Lumber & Tree. All rights reserved. 20 Magee Rd, Bowdoin, ME 04287.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
