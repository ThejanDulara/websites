import React, { useState, useEffect } from 'react';
import { Menu, X, TreeDeciduous } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyles = {
        padding: isScrolled ? '0.5rem 0' : '1.5rem 0',
        boxShadow: isScrolled ? '0 4px 10px rgba(0,0,0,0.05)' : 'none'
    };

    return (
        <header className="header" style={navStyles}>
            <div className="container header-inner">
                <a href="#" className="logo">
                    <TreeDeciduous size={32} />
                    <span>Mann's Lumber & Tree</span>
                </a>

                <nav className="nav-links">
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#trust" className="nav-link">Why Us</a>
                    <a href="#testimonials" className="nav-link">Reviews</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        Get a Quote
                    </a>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown (basic inline style for simplicity) */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'var(--color-cream)',
                    padding: '1rem',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderBottom: '2px solid var(--color-warm-brown)'
                }}>
                    <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#trust" className="nav-link" onClick={() => setIsMenuOpen(false)}>Why Us</a>
                    <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                    <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
            )}
        </header>
    );
};

export default Header;
