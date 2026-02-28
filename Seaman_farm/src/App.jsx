import React, { useState } from 'react';
import './App.css';

// Using inline SVGs to avoid taking dependencies
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            <LeafIcon /> Seaman's Farm
          </a>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Story</a>
            <a href="#products" className="nav-link" onClick={() => setIsMenuOpen(false)}>Fresh Produce</a>
            <a href="#gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#visit" className="nav-link" onClick={() => setIsMenuOpen(false)}>Visit Us</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="/farm_photoes/212329984_4213790318678622_1345400779590369987_n.jpg"
          alt="Seaman's Farm stand"
          className="hero-bg animate-fade-in"
        />
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in delay-1">
          <h1 className="hero-title">Fresh, Local Produce Grown With Care</h1>
          <p className="hero-subtitle">Bringing the best of Maine's seasonal harvest and home-baked goodness right to your table. From our family to yours.</p>
          <div className="hero-actions">
            <a href="#visit" className="btn btn-primary">Visit the Farm Stand</a>
            <a href="#contact" className="btn btn-secondary">Call to Order</a>
          </div>
        </div>
      </section>

      {/* About / Our Story */}
      <section id="about" className="section about">
        <div className="container about-grid">
          <div className="about-image-wrapper">
            <img
              src="/Family_photoes/516642830_1146518487509084_8332182198269302911_n.jpg"
              alt="The family behind Seaman's Farm"
            />
            <div className="about-badge">
              <h3 style={{ color: 'var(--color-green)', margin: 0, whiteSpace: 'nowrap' }}>Family Owned</h3>
              <p style={{ margin: 0, color: 'var(--color-text-light)', whiteSpace: 'nowrap' }}>Grown with love</p>
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Our Roots Run Deep</h2>
            <p>Welcome to Seaman's Farm! We are a proud, family-run local farm located in the heart of Litchfield, Maine.</p>
            <p>For us, farming isn't just a business—it's a way of life. Every seed we plant, every harvest we gather, and every pie we bake is handled with the utmost care, ensuring you get the absolute best quality.</p>
            <p>We believe in the power of community and the importance of supporting local agriculture. When you shop at our farm stand, you're not just buying food; you're sharing in our harvest and supporting a tradition of wholesome, honest farming.</p>
            <a href="#contact" className="btn btn-accent" style={{ marginTop: '1rem' }}>Get in Touch</a>
          </div>
        </div>
      </section>

      {/* Products & Categories Section */}
      <section id="products" className="section products">
        <div className="container">
          <h2 className="section-title">Fresh from the Farm</h2>
          <p className="section-subtitle">What you'll find at our stand. From crisp veggies to warm, comforting baked goods.</p>

          <div className="products-grid">
            {/* Produce Card */}
            <div className="product-card">
              <img src="/veg_photoes/veg.jpg" alt="Fresh Produce" className="product-img" />
              <div className="product-info">
                <h3>Fresh Produce</h3>
                <ul className="product-list">
                  <li>Corn, potatoes, & tomatoes (all varieties)</li>
                  <li>Peppers, cucumbers, zucchini, squash</li>
                  <li>Beans, carrots, cabbage, broccoli, cauliflower</li>
                  <li>Lettuce, kale, Swiss chard, beet greens</li>
                  <li>Apples, peaches, watermelon & cantaloupe (seasonal)</li>
                </ul>
              </div>
            </div>

            {/* Bakery Card */}
            <div className="product-card">
              <img src="/514147481_1142572451237021_2858008922458384317_n.jpg" alt="Bakery Items" className="product-img" />
              <div className="product-info">
                <h3>Bakery Items</h3>
                <ul className="product-list">
                  <li>Artisan sourdough breads (multiple flavors)</li>
                  <li>Whoopie pies</li>
                  <li>Fresh baked cookies</li>
                  <li>Warm biscuits</li>
                  <li>Sandwich loaves</li>
                  <li>Cinnamon rolls (weekends / special days)</li>
                </ul>
              </div>
            </div>

            {/* Canned & Specialty Goods */}
            <div className="product-card">
              <img src="/481178188_1047004707460463_4298407912910364342_n.jpg" alt="Canned Goods" className="product-img" />
              <div className="product-info">
                <h3>Canned & Specialty Goods</h3>
                <ul className="product-list">
                  <li>Homemade jams & jellies</li>
                  <li>Crisp pickled items</li>
                  <li>Fresh salsa</li>
                  <li>Traditional sauerkraut</li>
                  <li>Pure maple syrup</li>
                  <li>Seasonal treats</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="seasonal-banner">
            <h3>Seasonal Updates & Availability</h3>
            <p>Our products change with the seasons! The farm stand is stocked based on harvest timing. For bulk items and special orders, please provide advance notice.</p>
            <a href="https://web.facebook.com/SeamansFarm" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-green)' }}>
              <FacebookIcon /> &nbsp; Get Daily Updates on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title">Farm Life Gallery</h2>
          <p className="section-subtitle">A glimpse into our daily life and the vibrant produce we grow.</p>

          <div className="gallery-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <img src="/farm_photoes/480849413_1044239461070321_6105029561170564438_n.jpg" alt="Farm Gallery 1" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/farm_photoes/481701694_1051234730370794_2293032835753448842_n.jpg" alt="Farm Gallery 2" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/farm_photoes/482235745_1051845456976388_8846107471516151287_n.jpg" alt="Farm Gallery 3" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/veg_photoes/482252024_1053389656821968_5031345028965475820_n.jpg" alt="Farm Gallery 4" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/farm_photoes/481788283_1052109436949990_8614249182022656444_n.jpg" alt="Farm Gallery 5" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/veg_photoes/482323778_1055424979951769_1602651898651441729_n.jpg" alt="Farm Gallery 6" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/Family_photoes/597474614_1280414914119440_7246117634701092584_n.jpg" alt="Farm Gallery 7" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="/veg_photoes/537093586_1187856330041966_23184694160315758_n.jpg" alt="Farm Gallery 8" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <h2 className="section-title">Why Our Customers Love Us</h2>
          <p className="section-subtitle">Real feedback from our amazing community.</p>

          <div className="test-grid">
            <div className="test-card">
              <div className="stars">★★★★★</div>
              <p className="test-text">"The owners are unbelievably friendly. You really feel the strong community connection the moment you pull up."</p>
              <p className="test-author">- Sarah M.</p>
            </div>
            <div className="test-card">
              <div className="stars">★★★★★</div>
              <p className="test-text">"Freshness you simply can't beat! The tomatoes tasted like summer. And the fair pricing makes it easy to support local."</p>
              <p className="test-author">- David L.</p>
            </div>
            <div className="test-card">
              <div className="stars">★★★★★</div>
              <p className="test-text">"Do NOT leave without trying their baked goods! We had the sourdough and it was gone before dinner. Amazing."</p>
              <p className="test-author">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit & Contact */}
      <section id="visit" className="section visit-contact">
        <div className="container visit-grid">

          <div className="info-card">
            <h3>Visit the Farm Stand</h3>

            <div className="info-item">
              <div className="info-icon"><ClockIcon /></div>
              <div className="info-text">
                <h4>Hours</h4>
                <p>Open 7 days a week (Seasonal)<br />*Hours may change after Labor Day. Check our Facebook for daily updates.</p>
              </div>
            </div>

            <div className="info-item" style={{ marginBottom: 0 }}>
              <div className="info-icon"><MapPinIcon /></div>
              <div className="info-text">
                <h4>Location</h4>
                <p>Seaman's Farm<br />1844 Hallowell Rd<br />Litchfield, ME 04350</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <img
                src="/farm_photoes/480501985_1043367791157488_8697157549249829770_n.jpg"
                alt="Our Farm"
                style={{ borderRadius: '12px', width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div id="contact" className="info-card">
            <h3>Get in Touch</h3>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>Have a question about what's in stock? Want to place a special bakery order? Reach out to us!</p>

            <div className="info-item">
              <div className="info-icon"><PhoneIcon /></div>
              <div className="info-text">
                <h4>Call to Order</h4>
                <p>Call us directly for availability and special orders.</p>
              </div>
            </div>

            <div className="contact-actions">
              <a href="tel:+12072684331" className="btn btn-primary btn-large">
                <PhoneIcon /> &nbsp; Call the Farm
              </a>
              <a href="https://web.facebook.com/SeamansFarm" target="_blank" rel="noreferrer" className="btn btn-secondary btn-large">
                <FacebookIcon /> &nbsp; Message Us on Facebook
              </a>
              <a href="https://maps.google.com/?q=1844+Hallowell+Rd,+Litchfield,+ME+04350" target="_blank" rel="noreferrer" className="btn btn-accent btn-large">
                <MapPinIcon /> &nbsp; Get Directions
              </a>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <p style={{ marginBottom: '1rem', fontWeight: 600 }}>Follow Us:</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <a href="https://web.facebook.com/SeamansFarm" target="_blank" rel="noreferrer" style={{ color: 'var(--color-green)' }}><FacebookIcon /></a>
                <a href="https://www.instagram.com/seamansfarmlitchfield/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-green)' }}><InstagramIcon /></a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <LeafIcon /> Seaman's Farm
          </div>
          <p style={{ maxWidth: '400px', margin: '0 auto', fontSize: '1.1rem' }}>
            Fresh, local produce grown with care at 1844 Hallowell Rd, Litchfield, ME 04350.
          </p>
          <div className="footer-socials">
            <a href="https://web.facebook.com/SeamansFarm" target="_blank" rel="noreferrer" className="social-icon">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/seamansfarmlitchfield/" target="_blank" rel="noreferrer" className="social-icon">
              <InstagramIcon />
            </a>
          </div>
          <p className="footer-bottom">
            &copy; {new Date().getFullYear()} Seaman's Farm. Thank you for supporting local farming.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
