import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/who-we-are/AboutUs';
import OurTeam from './pages/who-we-are/OurTeam';
import BoardOfTrustees from './pages/who-we-are/BoardOfTrustees';
import WhereWeWork from './pages/who-we-are/WhereWeWork';
import OurAchievements from './pages/who-we-are/OurAchievements';
import EmergencySection from './pages/EmergencySection';
import GBVFacts from './pages/GBVFacts';
import CommunityOutreach from './pages/news/CommunityOutreach';
import Outreach from './pages/news/Outreach';
import Empowerment from './pages/news/Empowerment';
import GetSupport from './pages/GetSupport';
import ScrollToTop from './components/ScrollToTop';
import LawEnforcement from './pages/blogs/LawEnforcement';
import CommunityMobilization from './pages/blogs/CommunityMobilization';
import HealthcareIntegration from './pages/blogs/HealthcareIntegration';
import CulturalEngagement from './pages/blogs/CulturalEngagement';
import NetworkPage from './pages/news/NetworkPage';
import Contact from './pages/Contact';
import CrisisResponse from './pages/services/CrisisResponse';
import Counselling from './pages/services/Counselling';
import SupportGroup from './pages/services/SupportGroup';
import Donate from './pages/Donate';
import Report from './pages/Report';
import Resources from './pages/Resources';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are/about" element={<AboutUs />} />
            <Route path="/who-we-are/team" element={<OurTeam />} />
            <Route path="/who-we-are/OurTeam" element={<OurTeam />} />
            <Route path="/who-we-are/board" element={<BoardOfTrustees />} />
            <Route path="/who-we-are/locations" element={<WhereWeWork />} />
            <Route path="/who-we-are/achievements" element={<OurAchievements />} />
            <Route path="/emergency" element={<EmergencySection />} />
            <Route path="/gbv-facts" element={<GBVFacts />} />
            <Route path="/news/community-outreach" element={<CommunityOutreach />} />
            <Route path="/news/outreach" element={<Outreach />} />
            <Route path="/news/empowerment" element={<Empowerment />} />
            <Route path="/news/network" element={<NetworkPage />} />
            <Route path="/get-support" element={<GetSupport />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            
            <Route path="/blogs">
              <Route path="law-enforcement" element={<LawEnforcement />} />
              <Route path="community-mobilization" element={<CommunityMobilization />} />
              <Route path="healthcare-integration" element={<HealthcareIntegration />} />
              <Route path="cultural-engagement" element={<CulturalEngagement />} />
            </Route>
             {/* Service Routes */}
             <Route path="/services/crisis-response" element={<CrisisResponse />} />
            <Route path="/services/counseling-support" element={<Counselling />} />
            <Route path="/services/support-groups" element={<SupportGroup />} />
            
            <Route path="/donate" element={<Donate />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;