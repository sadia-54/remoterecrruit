import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import CTABanner from './components/CTABanner';
import CommonQuestions from './components/CommonQuestions';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <CTABanner />
      <CommonQuestions />
      <Pricing />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
