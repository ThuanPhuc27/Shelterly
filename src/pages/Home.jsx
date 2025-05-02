// src/pages/Home.jsx

import React from 'react';
import {
  HeroSection,
  Navbar,
  Companies,
  Achievement,
  FeedBack,
  Footer,
  Backpacks,
  Contact,
  FAQ,
} from '../components';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <Companies />
      <Backpacks />
      <Achievement />
      <FeedBack />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
