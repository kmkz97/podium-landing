import React, { useRef } from 'react';
import Intro from './components/Intro';
import VideoTestimonials from './components/VideoTestimonials';
import Features from './components/Features';
import FeaturedOn from './components/FeaturedOn';
import CTA from './components/CTA';
import Testimonials1 from './components/Testimonials1';
import Testimonials2 from './components/Testimonials2';
import Faqs from './components/Faqs';
import ApiSection from './components/ApiSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const featuresRef = useRef(null); // Create a ref for the Features section

  // Function to scroll to Features section
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header className='absolute sticky top-0 z-50'>
        <Header scrollToFeatures={scrollToFeatures} /> {/* Pass the scroll function */}
      </header>
      <main>
        <Intro />
        <VideoTestimonials />
        <div ref={featuresRef}> {/* Attach ref to Features section */}
          <Features />
        </div>
        <FeaturedOn />
        <CTA />
        <Testimonials1 />
        <Faqs />
        <Testimonials2 />
        <CTA />
        <ApiSection />
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
