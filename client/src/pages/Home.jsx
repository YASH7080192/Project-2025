import React from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import Footer from '../components/Footer';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <FAQSection />
      <BenefitsSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default Home;
