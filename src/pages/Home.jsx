import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import ServicesSection from '../components/ServicesSection';
import ImpactStoriesSection from '../components/ImpactStoriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ResourcesSection from '../components/ResourcesSection';
import NewsSection from '../components/NewsSection';
import FAQSection from '../components/FAQSection';
import PartnersSection from '../components/PatnersSection';


const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      
      
      <TestimonialsSection />
      <ResourcesSection />
      <NewsSection />
      <ImpactStoriesSection />
      <FAQSection />
      <ServicesSection />
      <PartnersSection />
      
    </div>
  );
};

export default Home;