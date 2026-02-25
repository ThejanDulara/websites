import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Phone, Mail, MapPin,
  ChevronRight, ArrowRight, Shield,
  Clock, Award, Wrench, Mountain,
  Home, TreePine, Droplets, HardHat,
  Truck
} from 'lucide-react';
import './App.css';

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          L R NADEAU <span>EXCAVATION</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>
            Get a Quote
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="nav-links-mobile animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div style={{ padding: '1rem 2rem' }}>
            <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img
        src="/hero.jpg"
        alt="Excavator at work"
        className="hero-bg"
      />
      <div className="hero-overlay"></div>

      <div className="container" style={{ zIndex: 1 }}>
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle">
            <HardHat size={20} /> Professional Excavation & Sitework
          </span>
          <h1 className="hero-title">
            BUILDING THE <span>FOUNDATION</span> OF TOMORROW.
          </h1>
          <p className="hero-description stagger-1 animate-fade-in">
            L R Nadeau Excavation Inc provides top-tier excavation, land clearing, and sitework services. Backed by industry expertise and heavy-duty machinery.
          </p>
          <div className="hero-actions stagger-2 animate-fade-in">
            <a href="tel:+1234567890" className="btn btn-primary">
              Call Now <Phone size={20} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get a Quote <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Truck size={32} />,
      title: "Material Supply",
      desc: "High-quality pit materials including sand, gravel, and premium loam for all your construction and landscaping needs.",
      img: "/service-materials.jpg"
    },
    {
      icon: <Wrench size={32} />,
      title: "Excavation & Sitework",
      desc: "Complete sitework solutions from foundational digging to precision grading and structural excavation.",
      img: "/service-excavation.jpg"
    },
    {
      icon: <Droplets size={32} />,
      title: "Septic Systems",
      desc: "Professional installation, repair, and maintenance of residential and commercial septic systems.",
      img: "/service-septic.jpg"
    },
    {
      icon: <Home size={32} />,
      title: "Roads & Driveways",
      desc: "Durable construction and leveling for new private roads, driveways, and heavy-duty access paths.",
      img: "/service-roads.jpg"
    },
    {
      icon: <TreePine size={32} />,
      title: "Lot Clearing",
      desc: "Efficient land clearing, tree & stump removal, and level preparation for new developments.",
      img: "/service-clearing.jpg"
    },
    {
      icon: <Mountain size={32} />,
      title: "Lawn Installation",
      desc: "Comprehensive lawn prep and installation services, transforming rough terrain into pristine landscapes.",
      img: "/service-lawn.jpg"
    }
  ];

  return (
    <section id="services" className="section section-light">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-subtitle">Our Expertise</span>
          <h2 className="section-title">COMPREHENSIVE SITEWORK SERVICES</h2>
          <p style={{ color: 'var(--color-text-body)' }}>
            Equipped with state-of-the-art machinery and seasoned operators, we handle projects of any scale with precision and reliability.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card fade-in stagger-${(index % 3) + 1}`}>
              <div className="service-image-container">
                <img src={service.img} alt={service.title} className="service-card-img" />
              </div>
              <div className="service-card-content">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: "Licensed & Insured",
      desc: "Fully certified operators carrying complete liability coverage for your peace of mind."
    },
    {
      icon: <Award size={24} />,
      title: "Years of Experience",
      desc: "Decades of combined industry knowledge tackling complex excavation challenges."
    },
    {
      icon: <Clock size={24} />,
      title: "On-Time Completion",
      desc: "We pride ourselves on meeting strict deadlines without compromising safety or quality."
    }
  ];

  return (
    <section id="why-us" className="split-section">
      <div className="split-image-container">
        <img
          src="/why-us.jpg"
          alt="Construction team and equipment"
          className="split-image"
        />
      </div>
      <div className="split-content w-full h-full fade-in stagger-1">
        <div>
          <span className="section-subtitle fade-in stagger-2">Why Choose Us</span>
          <h2 className="section-title">RELIABILITY IN EVERY DIG</h2>
          <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            When you hire L R Nadeau Excavation Inc, you are partnering with an industrial leader committed to excellence. We don't just move dirt; we engineer the ground for your success.
          </p>
          <div className="features-list">
            {features.map((feature, idx) => (
              <div key={idx} className={`feature-item fade-in stagger-${(idx % 3) + 1}`}>
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="cta-banner fade-in">
      <div className="container">
        <h2 className="fade-in stagger-1">READY TO START YOUR PROJECT?</h2>
        <p>Contact us today for a free consultation and highly competitive quote on your upcoming sitework needs.</p>
        <div className="cta-buttons fade-in stagger-2">
          <a href="tel:+1234567890" className="btn btn-outline-dark" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', border: 'none' }}>
            <Phone size={20} /> Call (555) 123-4567
          </a>
          <a href="#contact" className="btn btn-outline-dark" style={{ backgroundColor: 'transparent' }}>
            Request a Quote <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>L R NADEAU <span style={{ color: 'var(--color-brand-yellow)' }}>EXCAVATION</span></h3>
            <p style={{ marginTop: '1rem', maxWidth: '300px' }}>
              Heavy civil engineering, commercial sitework, and residential excavation services you can trust.
            </p>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <div className="footer-info-item">
              <MapPin className="footer-info-icon" size={20} />
              <span>123 Industrial Parkway<br />Construction City, ST 12345</span>
            </div>
            <div className="footer-info-item">
              <Phone className="footer-info-icon" size={20} />
              <span>(555) 123-4567</span>
            </div>
            <div className="footer-info-item">
              <Mail className="footer-info-icon" size={20} />
              <span>info@lrnadeau.com</span>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#services" className="footer-link">Our Services</a>
              <a href="#why-us" className="footer-link">Why Choose Us</a>
              <a href="#contact" className="footer-link">Get a Quote</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} L R Nadeau Excavation Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
