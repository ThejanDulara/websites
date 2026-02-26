import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Trust />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
